/* ==========================================================================
   WebKit Auxiliary Sandboxed Services & Daemons — Interactive UI (services.js)
   Strictly uses DOM creation APIs (createElement / createElementNS / textContent /
   replaceChildren) with zero innerHTML / outerHTML assignments.
   ========================================================================== */

(function () {
  'use strict';

  const RAW_DATA = window.__WKANALYZE_SERVICES_DATA__ || null;
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const GITHUB_COMMIT_BASE = 'https://github.com/WebKit/WebKit/commit/';
  const GITHUB_BLOB_BASE = 'https://github.com/WebKit/WebKit/blob/';

  const state = {
    activeView: 'insights', // 'insights' | 'explorer'
    selectedServiceId: 'webauthn',
    selectedSubTab: 'capabilities', // 'capabilities' | 'markdown' | 'seatbelt' | 'commits'
    breakdownTab: 'uniqueness', // 'uniqueness' | 'availability'
    filterService: 'all',
    filterStatus: 'all',
    filterCapType: 'all',
    filterUniqueness: 'all',
    filterAvailability: 'all',
    filterSearch: '',
    chartGroup: 'service',
    chartStack: 'capType',
    tableSort: 'service-asc',
    expandedRowIds: new Set()
  };

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = String(text);
    return node;
  }

  function svgEl(tag, attrs) {
    const node = document.createElementNS(SVG_NS, tag);
    if (attrs) {
      Object.keys(attrs).forEach((k) => {
        node.setAttribute(k, String(attrs[k]));
      });
    }
    return node;
  }

  function isSafeExternalUrl(url) {
    if (!url || typeof url !== 'string') return false;
    return (
      url.startsWith('https://github.com/WebKit/WebKit/') ||
      url.startsWith('https://bugs.webkit.org/') ||
      url.startsWith('https://www.w3.org/') ||
      url.startsWith('https://notifications.spec.whatwg.org/') ||
      url.startsWith('services.html') ||
      url.startsWith('index.html') ||
      url.startsWith('#')
    );
  }

  function buildSourceFileUrl(service, filePath) {
    const clean = String(filePath || '').trim().replace(/^\/+/, '');
    const rev = service && service.last_active_commit && service.last_active_commit !== 'HEAD'
      ? service.last_active_commit
      : 'main';
    return GITHUB_BLOB_BASE + encodeURIComponent(rev) + '/' + clean;
  }

  function getServiceById(id) {
    if (!RAW_DATA || !Array.isArray(RAW_DATA.services)) return null;
    return RAW_DATA.services.find((s) => s.id === id) || RAW_DATA.services[0] || null;
  }

  function getCapTypeMeta(id) {
    const list = (RAW_DATA && RAW_DATA.taxonomies && RAW_DATA.taxonomies.capability_types) || [];
    return list.find((t) => t.id === id) || { id: id, label: id, short_label: id, color: '#64748B' };
  }

  function getUniquenessMeta(id) {
    const list = (RAW_DATA && RAW_DATA.taxonomies && RAW_DATA.taxonomies.uniqueness_tiers) || [];
    return list.find((t) => t.id === id) || { id: id, label: id, short_label: id, color: '#64748B' };
  }

  function getAvailabilityMeta(id) {
    const list = (RAW_DATA && RAW_DATA.taxonomies && RAW_DATA.taxonomies.availability_tiers) || [];
    return list.find((t) => t.id === id) || { id: id, label: id, short_label: id, color: '#64748B' };
  }

  function getCapTypePillClass(id) {
    switch (id) {
      case 'mach-service': return 'svc-pill svc-pill-blue';
      case 'entitlement': return 'svc-pill svc-pill-purple';
      case 'filesystem': return 'svc-pill svc-pill-green';
      case 'iokit': return 'svc-pill svc-pill-amber';
      case 'network': return 'svc-pill svc-pill-teal';
      case 'syscall': return 'svc-pill svc-pill-red';
      case 'process-launch': return 'svc-pill svc-pill-pink';
      case 'ipc-interface': return 'svc-pill svc-pill-teal';
      default: return 'svc-pill svc-pill-slate';
    }
  }

  function getUniquenessPillClass(id) {
    switch (id) {
      case 'unique-to-service': return 'svc-pill svc-pill-purple';
      case 'unique-vs-webcontent': return 'svc-pill svc-pill-blue';
      case 'explicit-hardening-deny': return 'svc-pill svc-pill-red';
      default: return 'svc-pill svc-pill-slate';
    }
  }

  function getAvailabilityPillClass(id) {
    switch (id) {
      case 'apple-only-private-daemon-or-entitlement': return 'svc-pill svc-pill-red';
      case 'not-in-browserenginekit': return 'svc-pill svc-pill-amber';
      case 'os-brokered-public-api': return 'svc-pill svc-pill-green';
      case 'engine-internal': return 'svc-pill svc-pill-blue';
      default: return 'svc-pill svc-pill-slate';
    }
  }

  /* --------------------------------------------------------------------------
     Safe Inline & Block Markdown Renderer (DOM-only, zero innerHTML)
     -------------------------------------------------------------------------- */
  function appendInlineMarkdown(parent, text) {
    const str = String(text || '');
    const tokenRe = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
    let lastIdx = 0;
    let match;
    while ((match = tokenRe.exec(str)) !== null) {
      if (match.index > lastIdx) {
        parent.appendChild(document.createTextNode(str.slice(lastIdx, match.index)));
      }
      const tok = match[0];
      if (tok.startsWith('**') && tok.endsWith('**')) {
        const strong = el('strong', '', tok.slice(2, -2));
        parent.appendChild(strong);
      } else if (tok.startsWith('`') && tok.endsWith('`')) {
        const code = el('code', '', tok.slice(1, -1));
        parent.appendChild(code);
      } else if (tok.startsWith('[')) {
        const closeBracket = tok.indexOf('](');
        if (closeBracket !== -1) {
          const label = tok.slice(1, closeBracket);
          const url = tok.slice(closeBracket + 2, -1).trim();
          if (isSafeExternalUrl(url)) {
            const a = el('a', '', '');
            a.setAttribute('href', url);
            if (url.startsWith('https://')) {
              a.setAttribute('target', '_blank');
              a.setAttribute('rel', 'noopener noreferrer');
            }
            appendInlineMarkdown(a, label);
            parent.appendChild(a);
          } else {
            const span = el('span', '', '');
            appendInlineMarkdown(span, label);
            parent.appendChild(span);
          }
        } else {
          parent.appendChild(document.createTextNode(tok));
        }
      }
      lastIdx = tokenRe.lastIndex;
    }
    if (lastIdx < str.length) {
      parent.appendChild(document.createTextNode(str.slice(lastIdx)));
    }
  }

  function renderMarkdownSafe(container, mdText) {
    container.replaceChildren();
    const lines = String(mdText || '').split(/\r?\n/);
    let i = 0;
    const n = lines.length;

    while (i < n) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        i++;
        continue;
      }

      // Horizontal rule
      if (/^---+$/.test(trimmed)) {
        container.appendChild(el('hr'));
        i++;
        continue;
      }

      // Fenced code block
      if (trimmed.startsWith('```')) {
        const codeLines = [];
        i++;
        while (i < n && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        if (i < n) i++; // skip closing ```
        const pre = el('pre');
        const code = el('code', '', codeLines.join('\n'));
        pre.appendChild(code);
        container.appendChild(pre);
        continue;
      }

      // Headings
      const headingMatch = /^(#{1,4})\s+(.+)$/.exec(trimmed);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const h = el('h' + level);
        appendInlineMarkdown(h, headingMatch[2]);
        container.appendChild(h);
        i++;
        continue;
      }

      // Markdown table
      if (trimmed.startsWith('|') && i + 1 < n && /^\|\s*[:\-| ]+\|\s*$/.test(lines[i + 1].trim())) {
        const headerCells = trimmed
          .replace(/^\||\|$/g, '')
          .split('|')
          .map((c) => c.trim());
        i += 2; // skip header + separator
        const tableWrap = el('div', 'md-table-wrap');
        const table = el('table');
        const thead = el('thead');
        const trHead = el('tr');
        headerCells.forEach((hText) => {
          const th = el('th');
          appendInlineMarkdown(th, hText);
          trHead.appendChild(th);
        });
        thead.appendChild(trHead);
        table.appendChild(thead);

        const tbody = el('tbody');
        while (i < n && lines[i].trim().startsWith('|')) {
          const rowCells = lines[i]
            .trim()
            .replace(/^\||\|$/g, '')
            .split('|')
            .map((c) => c.trim());
          const tr = el('tr');
          rowCells.forEach((cText) => {
            const td = el('td');
            appendInlineMarkdown(td, cText);
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
          i++;
        }
        table.appendChild(tbody);
        tableWrap.appendChild(table);
        container.appendChild(tableWrap);
        continue;
      }

      // Unordered or ordered list
      if (/^([-*+]|\d+\.)\s+/.test(trimmed)) {
        const isOrdered = /^\d+\.\s+/.test(trimmed);
        const listNode = el(isOrdered ? 'ol' : 'ul');
        while (i < n && /^(\s*[-*+]|\s*\d+\.)\s+/.test(lines[i])) {
          const itemText = lines[i].replace(/^(\s*[-*+]|\s*\d+\.)\s+/, '').trim();
          const li = el('li');
          appendInlineMarkdown(li, itemText);
          listNode.appendChild(li);
          i++;
        }
        container.appendChild(listNode);
        continue;
      }

      // Paragraph
      const paraLines = [trimmed];
      i++;
      while (
        i < n &&
        lines[i].trim() &&
        !lines[i].trim().startsWith('#') &&
        !lines[i].trim().startsWith('```') &&
        !lines[i].trim().startsWith('|') &&
        !/^---+$/.test(lines[i].trim()) &&
        !/^([-*+]|\d+\.)\s+/.test(lines[i].trim())
      ) {
        paraLines.push(lines[i].trim());
        i++;
      }
      const p = el('p');
      appendInlineMarkdown(p, paraLines.join(' '));
      container.appendChild(p);
    }
  }

  /* --------------------------------------------------------------------------
     Filtering & Sorting Logic
     -------------------------------------------------------------------------- */
  function getMatchingCapabilities() {
    if (!RAW_DATA || !Array.isArray(RAW_DATA.capabilities)) return [];
    const q = state.filterSearch.trim().toLowerCase();

    const filtered = RAW_DATA.capabilities.filter((cap) => {
      if (state.filterService !== 'all' && cap.service_id !== state.filterService) return false;
      if (state.filterStatus !== 'all' && cap.status_at_head !== state.filterStatus) return false;
      if (state.filterCapType !== 'all' && cap.capability_type !== state.filterCapType) return false;
      if (state.filterUniqueness !== 'all' && cap.unique_vs_core_triad !== state.filterUniqueness) return false;
      if (state.filterAvailability !== 'all' && cap['3p_browser_availability'] !== state.filterAvailability) return false;

      if (q) {
        const haystack = [
          cap.service_id,
          cap.service_name,
          cap.identifier,
          cap.capability_type,
          cap.direction_or_access,
          cap.unique_vs_core_triad,
          cap.source_files,
          cap.source_symbols,
          cap.purpose_summary,
          cap['3p_browser_availability']
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    const uniqOrder = {
      'unique-to-service': 1,
      'unique-vs-webcontent': 2,
      'explicit-hardening-deny': 3,
      'shared-baseline': 4
    };

    filtered.sort((a, b) => {
      if (state.tableSort === 'uniqueness-asc') {
        const ua = uniqOrder[a.unique_vs_core_triad] || 9;
        const ub = uniqOrder[b.unique_vs_core_triad] || 9;
        if (ua !== ub) return ua - ub;
        return a.identifier.localeCompare(b.identifier);
      }
      if (state.tableSort === 'type-asc') {
        if (a.capability_type !== b.capability_type) {
          return a.capability_type.localeCompare(b.capability_type);
        }
        return a.identifier.localeCompare(b.identifier);
      }
      if (state.tableSort === 'availability-asc') {
        if (a['3p_browser_availability'] !== b['3p_browser_availability']) {
          return a['3p_browser_availability'].localeCompare(b['3p_browser_availability']);
        }
        return a.identifier.localeCompare(b.identifier);
      }
      if (state.tableSort === 'id-asc') {
        return a.identifier.localeCompare(b.identifier);
      }
      // Default: service-asc
      if (a.service_id !== b.service_id) {
        return a.service_id.localeCompare(b.service_id);
      }
      const ua = uniqOrder[a.unique_vs_core_triad] || 9;
      const ub = uniqOrder[b.unique_vs_core_triad] || 9;
      if (ua !== ub) return ua - ub;
      return a.identifier.localeCompare(b.identifier);
    });

    return filtered;
  }

  function jumpToExplorerWithFilters(filters) {
    state.filterService = filters.service || 'all';
    state.filterStatus = filters.status || 'all';
    state.filterCapType = filters.capType || 'all';
    state.filterUniqueness = filters.uniqueness || 'all';
    state.filterAvailability = filters.availability || 'all';
    state.filterSearch = filters.search || '';
    syncControlsFromState();
    switchView('explorer');
    renderExplorerView();
  }

  /* --------------------------------------------------------------------------
     View 1: Insights, Cross-Service Matrix & Service Deep-Dives
     -------------------------------------------------------------------------- */
  function renderInsightsView() {
    const container = document.getElementById('insightsContent');
    if (!container || !RAW_DATA) return;
    container.replaceChildren();

    const meta = RAW_DATA.metadata;

    // 1. Hero Overview Banner
    const heroCard = el('section', 'card insights-hero-card');
    heroCard.id = 'insightsArchHero';
    const heroHeader = el('div', 'insights-hero-header');
    const eyebrow = el('div', 'insights-eyebrow', 'SEATBELT-TO-CODE CAPABILITY & ENTITLEMENT ANALYSIS');
    const title = el(
      'h2',
      'insights-hero-title',
      'Why WebKit Uses 5 Auxiliary Sandboxed Services Beyond WebContent, GPU & Networking'
    );
    const lead = el(
      'p',
      'insights-hero-lead',
      'While HTML rendering, graphics/media, and HTTP loads run in the core WebContent, GPU, and Networking processes, WebKit’s iOS Seatbelt repository includes five additional sandbox profiles: three active processes/daemons at HEAD (adattributiond, webpushd, and Model) and two historical XPC services (WebAuthn and Databases/Storage) that were later consolidated into OS frameworks or NetworkProcess.'
    );
    heroHeader.appendChild(eyebrow);
    heroHeader.appendChild(title);
    heroHeader.appendChild(lead);
    heroCard.appendChild(heroHeader);

    // 3 Architectural Pillars
    const pillarsGrid = el('div', 'pillars-grid');
    pillarsGrid.id = 'insightsPillars';

    const p1 = el('div', 'pillar-card');
    p1.appendChild(el('div', 'pillar-num', 'Pattern 1 • Per-UIProcess Privilege Isolation'));
    p1.appendChild(el('h3', 'pillar-title', 'Hardware, 3D & Storage Broker Processes (WebAuthn, Model, Storage)'));
    p1.appendChild(
      el(
        'p',
        'pillar-desc',
        'Spawned as XPC child services of UIProcess to isolate high-risk parsers or hardware drivers out of WebContent: WebAuthn brokered USB HID security keys (IOHIDLibUserClient), NFC (nfcd), and Secure Enclave tokens (ctkd) before moving to OS AuthenticationServices in 2022; Storage brokered SQLite IndexedDB via read-write sandbox extensions before merging into NetworkProcess in 2019–2020; and Model isolates RealityKit/CoreRE 3D <model> rendering with direct CARenderServer access on visionOS/iOS.'
      )
    );
    const p1Btn = el('button', 'btn-secondary', 'Filter Unique Service Capabilities (' + meta.unique_to_service_count + ') →');
    p1Btn.type = 'button';
    p1Btn.addEventListener('click', () => jumpToExplorerWithFilters({ uniqueness: 'unique-to-service' }));
    p1.appendChild(p1Btn);
    pillarsGrid.appendChild(p1);

    const p2 = el('div', 'pillar-card');
    p2.appendChild(el('div', 'pillar-num', 'Pattern 2 • Persistent Cross-Session System Daemons'));
    p2.appendChild(el('h3', 'pillar-title', 'Background launchd Daemons Outliving Browser Sessions (adattributiond, webpushd)'));
    p2.appendChild(
      el(
        'p',
        'pillar-desc',
        'Unlike child XPC services that terminate when the browser closes, adattributiond and webpushd are standalone system launchd daemons with their own persistent SQLite directories (/private/var/mobile/Library/com.apple.webkit.adattributiond and ~/Library/WebKit/WebPush). adattributiond dispatches 24–48h delayed Private Click Measurement reports over cookie-less HTTPS, while webpushd maintains persistent Apple Push Notification service (com.apple.apsd) connections and wakes/launches browsers via lsopen and com.apple.frontboard.launchapplications.'
      )
    );
    const p2Btn = el('button', 'btn-secondary', 'Filter Active Daemon Capabilities →');
    p2Btn.type = 'button';
    p2Btn.addEventListener('click', () => jumpToExplorerWithFilters({ status: 'active' }));
    p2.appendChild(p2Btn);
    pillarsGrid.appendChild(p2);

    const p3 = el('div', 'pillar-card');
    p3.appendChild(el('div', 'pillar-num', 'Pattern 3 • BrowserEngineKit & EU DMA Asymmetry'));
    p3.appendChild(el('h3', 'pillar-title', 'Why 3P Browser Engines Cannot Access Active WebKit Auxiliary Services'));
    p3.appendChild(
      el(
        'p',
        'pillar-desc',
        'Apple’s BrowserEngineKit (iOS 17.4+) exposes only three extension types: WebContent, Rendering (GPU), and Networking. Third-party engines cannot spawn a ModelProcess equivalent (no BEModelProcess), and cannot connect to webpushd or adattributiond because XPC connections require Apple-private caller entitlements (com.apple.private.webkit.webpush and com.apple.private.webkit.adattributiond) granted only to Apple’s com.apple.WebKit.Networking.'
      )
    );
    const p3Btn = el('button', 'btn-secondary', 'Inspect ' + meta.apple_only_capabilities_count + ' Apple-Only Capabilities →');
    p3Btn.type = 'button';
    p3Btn.addEventListener('click', () =>
      jumpToExplorerWithFilters({ availability: 'apple-only-private-daemon-or-entitlement' })
    );
    p3.appendChild(p3Btn);
    pillarsGrid.appendChild(p3);

    heroCard.appendChild(pillarsGrid);
    container.appendChild(heroCard);

    // 2. Cross-Service Comparison Matrix Table
    const matrixCard = el('section', 'card');
    matrixCard.id = 'insightsComparisonMatrix';
    const matrixHeader = el('div', 'card-header');
    const matrixTitleWrap = el('div');
    matrixTitleWrap.appendChild(
      el('h2', 'card-title', 'Cross-Service Architecture, Seatbelt Privilege & Entitlement Comparison Matrix')
    );
    matrixTitleWrap.appendChild(
      el(
        'p',
        'card-subtitle',
        'Click any service row to open its full Seatbelt-to-Code deep dive below, or click capability counts to filter the Data Explorer'
      )
    );
    matrixHeader.appendChild(matrixTitleWrap);
    matrixCard.appendChild(matrixHeader);

    const tableWrap = el('div', 'table-scroll-container');
    const table = el('table', 'changes-table');
    const thead = el('thead');
    const headRow = el('tr');
    [
      'Service / Binary',
      'Status at HEAD',
      'Process Model & Inheritance',
      'Cataloged Capabilities',
      'Unique vs. Core Triad',
      'Signature Seatbelt & Entitlement Grants',
      '3P BrowserEngineKit / DMA Status',
      'Report / CSV'
    ].forEach((col) => headRow.appendChild(el('th', '', col)));
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = el('tbody');
    RAW_DATA.services.forEach((svc) => {
      const tr = el('tr', 'commit-row');
      tr.id = 'service-' + svc.id;
      tr.addEventListener('click', () => {
        state.selectedServiceId = svc.id;
        history.replaceState(null, '', '#service-' + svc.id);
        renderServiceInspector();
        const insp = document.getElementById('serviceInspectorSection');
        if (insp) insp.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      // Col 1: Name
      const tdName = el('td');
      const strongName = el('strong', '', svc.name);
      const codeBin = el('div', '', '');
      codeBin.appendChild(el('code', '', svc.binary_or_bundle_id));
      tdName.appendChild(strongName);
      tdName.appendChild(codeBin);
      tr.appendChild(tdName);

      // Col 2: Status
      const tdStatus = el('td');
      const statusBadge = el(
        'span',
        svc.status_at_head === 'active'
          ? 'svc-status-badge svc-status-active'
          : 'svc-status-badge svc-status-retired',
        svc.status_at_head === 'active' ? 'Active at HEAD' : 'Retired (' + (svc.retired_date || '').slice(0, 4) + ')'
      );
      tdStatus.appendChild(statusBadge);
      const commitsSub = el('div', 'card-subtitle', svc.sandbox_commit_count + ' .sb commits (' + svc.introduced_date + ')');
      tdStatus.appendChild(commitsSub);
      tr.appendChild(tdStatus);

      // Col 3: Model & Inheritance
      const tdModel = el('td');
      tdModel.appendChild(el('div', '', svc.process_kind));
      tdModel.appendChild(el('div', 'card-subtitle', svc.inheritance_model));
      tr.appendChild(tdModel);

      // Col 4: Capability counts
      const tdCount = el('td');
      const btnAll = el('button', 'btn-secondary', svc.capability_count + ' capabilities');
      btnAll.type = 'button';
      btnAll.addEventListener('click', (e) => {
        e.stopPropagation();
        jumpToExplorerWithFilters({ service: svc.id });
      });
      tdCount.appendChild(btnAll);
      tr.appendChild(tdCount);

      // Col 5: Unique vs Core Triad
      const tdUniq = el('td');
      const uniqCount = (svc.uniqueness_counts && svc.uniqueness_counts['unique-to-service']) || 0;
      const elevCount = (svc.uniqueness_counts && svc.uniqueness_counts['unique-vs-webcontent']) || 0;
      tdUniq.appendChild(el('span', 'svc-pill svc-pill-purple', uniqCount + ' unique to service'));
      tdUniq.appendChild(document.createTextNode(' '));
      tdUniq.appendChild(el('span', 'svc-pill svc-pill-blue', elevCount + ' vs. WebContent'));
      tr.appendChild(tdUniq);

      // Col 6: Signature grants
      const tdGrants = el('td');
      const topUnique = svc.capabilities
        .filter((c) => c.unique_vs_core_triad === 'unique-to-service')
        .slice(0, 4);
      const chipWrap = el('div', 'source-link-list');
      topUnique.forEach((c) => {
        chipWrap.appendChild(el('span', 'symbol-chip', c.identifier));
      });
      tdGrants.appendChild(chipWrap);
      tr.appendChild(tdGrants);

      // Col 7: 3P DMA summary
      const tdDma = el('td', '', svc.dma_3p_summary.slice(0, 140) + '…');
      tr.appendChild(tdDma);

      // Col 8: Actions
      const tdActions = el('td');
      const dlCsvBtn = el('button', 'btn-secondary', 'CSV');
      dlCsvBtn.type = 'button';
      dlCsvBtn.title = 'Download ' + svc.csv_file;
      dlCsvBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        downloadServiceCsv(svc);
      });
      const dlMdBtn = el('button', 'btn-secondary', 'MD');
      dlMdBtn.type = 'button';
      dlMdBtn.title = 'Download ' + svc.markdown_file;
      dlMdBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        downloadServiceMarkdown(svc);
      });
      tdActions.appendChild(dlCsvBtn);
      tdActions.appendChild(document.createTextNode(' '));
      tdActions.appendChild(dlMdBtn);
      tr.appendChild(tdActions);

      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    tableWrap.appendChild(table);
    matrixCard.appendChild(tableWrap);
    container.appendChild(matrixCard);

    // 3. Interactive Deep-Dive Service Inspector Section
    const inspectorSection = el('section', 'service-inspector-card');
    inspectorSection.id = 'serviceInspectorSection';
    container.appendChild(inspectorSection);
    renderServiceInspector();
  }

  function renderServiceInspector() {
    const inspectorSection = document.getElementById('serviceInspectorSection');
    if (!inspectorSection || !RAW_DATA) return;
    inspectorSection.replaceChildren();

    const activeSvc = getServiceById(state.selectedServiceId);
    if (!activeSvc) return;

    // Top service selector tabs
    const tabsBar = el('div', 'service-tabs-bar');
    RAW_DATA.services.forEach((svc) => {
      const btn = el(
        'button',
        'service-tab-btn' + (svc.id === activeSvc.id ? ' active' : '')
      );
      btn.type = 'button';
      const dot = el('span', 'service-tab-dot');
      dot.style.backgroundColor = svc.color || '#2563eb';
      btn.appendChild(dot);
      btn.appendChild(el('span', '', svc.name));
      btn.appendChild(
        el(
          'span',
          svc.status_at_head === 'active' ? 'svc-pill svc-pill-green' : 'svc-pill svc-pill-slate',
          svc.status_at_head === 'active' ? 'Active' : 'Retired'
        )
      );
      btn.addEventListener('click', () => {
        state.selectedServiceId = svc.id;
        history.replaceState(null, '', '#service-' + svc.id);
        renderServiceInspector();
      });
      tabsBar.appendChild(btn);
    });
    inspectorSection.appendChild(tabsBar);

    const body = el('div', 'service-inspector-body');

    // Hero Banner for selected service
    const hero = el('div', 'service-hero-banner');
    const heroLeft = el('div');
    const hTitle = el('h3', 'service-hero-title');
    hTitle.appendChild(document.createTextNode(activeSvc.name + ' '));
    hTitle.appendChild(
      el(
        'span',
        activeSvc.status_at_head === 'active'
          ? 'svc-status-badge svc-status-active'
          : 'svc-status-badge svc-status-retired',
        activeSvc.status_label
      )
    );
    heroLeft.appendChild(hTitle);
    heroLeft.appendChild(el('p', 'service-hero-lead', activeSvc.headline_purpose));

    const actionRow = el('div', 'source-link-list');
    const filterAllBtn = el(
      'button',
      'btn-secondary',
      'Explore All ' + activeSvc.capability_count + ' Capabilities in Data View →'
    );
    filterAllBtn.type = 'button';
    filterAllBtn.addEventListener('click', () => jumpToExplorerWithFilters({ service: activeSvc.id }));
    actionRow.appendChild(filterAllBtn);

    const sbUrl = buildSourceFileUrl(activeSvc, activeSvc.seatbelt_file);
    if (isSafeExternalUrl(sbUrl)) {
      const sbLink = el('a', 'btn-secondary', 'View ' + activeSvc.seatbelt_file.split('/').pop() + ' on GitHub ↗');
      sbLink.setAttribute('href', sbUrl);
      sbLink.setAttribute('target', '_blank');
      sbLink.setAttribute('rel', 'noopener noreferrer');
      actionRow.appendChild(sbLink);
    }

    const dlMd = el('button', 'btn-secondary', 'Download ' + activeSvc.id + '.md');
    dlMd.type = 'button';
    dlMd.addEventListener('click', () => downloadServiceMarkdown(activeSvc));
    actionRow.appendChild(dlMd);

    const dlCsv = el('button', 'btn-secondary', 'Download ' + activeSvc.id + '.csv');
    dlCsv.type = 'button';
    dlCsv.addEventListener('click', () => downloadServiceCsv(activeSvc));
    actionRow.appendChild(dlCsv);

    heroLeft.appendChild(actionRow);
    hero.appendChild(heroLeft);

    const metaGrid = el('div', 'service-meta-grid');
    const boxes = [
      { label: 'Seatbelt Profile', val: activeSvc.seatbelt_file },
      { label: 'Process / Bundle ID', val: activeSvc.binary_or_bundle_id },
      {
        label: 'Lifespan & .sb Commits',
        val:
          activeSvc.introduced_date +
          ' → ' +
          (activeSvc.retired_date || 'HEAD') +
          ' (' +
          activeSvc.sandbox_commit_count +
          ' commits, ' +
          activeSvc.sb_line_count +
          ' .sb lines)'
      },
      { label: 'Primary Source Directories', val: (activeSvc.PrimarySourceDirs || []).join(', ') }
    ];
    boxes.forEach((b) => {
      const box = el('div', 'service-meta-box');
      box.appendChild(el('div', 'service-meta-label', b.label));
      box.appendChild(el('div', 'service-meta-val', b.val));
      metaGrid.appendChild(box);
    });
    hero.appendChild(metaGrid);
    body.appendChild(hero);

    // 3 Architectural Rationale Cards
    const reasonGrid = el('div', 'service-reason-grid');
    const r1 = el('div', 'service-reason-card');
    r1.appendChild(el('h4', '', '1. Why Isolated from WebContent / UIProcess?'));
    r1.appendChild(el('p', '', activeSvc.why_isolated));
    reasonGrid.appendChild(r1);

    const r2 = el('div', 'service-reason-card');
    r2.appendChild(el('h4', '', '2. Current Lifecycle & Consolidation State'));
    r2.appendChild(el('p', '', activeSvc.why_retired_or_current_state));
    reasonGrid.appendChild(r2);

    const r3 = el('div', 'service-reason-card');
    r3.appendChild(el('h4', '', '3. 3P BrowserEngineKit & EU DMA Implications'));
    r3.appendChild(el('p', '', activeSvc.dma_3p_summary));
    reasonGrid.appendChild(r3);
    body.appendChild(reasonGrid);

    // Sub-tabs bar inside Inspector
    const subTabsBar = el('div', 'service-subtabs-bar');
    const subTabs = [
      {
        id: 'capabilities',
        label: 'Capabilities, Entitlements & Code Mapping (' + activeSvc.capability_count + ')'
      },
      {
        id: 'markdown',
        label: 'Full Deep-Dive Report (' + activeSvc.markdown_file + ')'
      },
      {
        id: 'seatbelt',
        label: 'Raw Seatbelt Profile (' + activeSvc.sb_line_count + ' lines)'
      },
      {
        id: 'commits',
        label: 'Historical Sandbox Commits (' + activeSvc.sandbox_commit_count + ')'
      }
    ];
    subTabs.forEach((st) => {
      const btn = el(
        'button',
        'service-subtab-btn' + (state.selectedSubTab === st.id ? ' active' : ''),
        st.label
      );
      btn.type = 'button';
      btn.addEventListener('click', () => {
        state.selectedSubTab = st.id;
        renderServiceInspector();
      });
      subTabsBar.appendChild(btn);
    });
    body.appendChild(subTabsBar);

    // Sub-tab content panel
    const subContent = el('div');
    if (state.selectedSubTab === 'capabilities') {
      renderServiceCapabilitiesSubTab(subContent, activeSvc);
    } else if (state.selectedSubTab === 'markdown') {
      const mdViewer = el('div', 'md-report-viewer');
      renderMarkdownSafe(mdViewer, activeSvc.markdown_report);
      subContent.appendChild(mdViewer);
    } else if (state.selectedSubTab === 'seatbelt') {
      const sbViewer = el('pre', 'sb-raw-viewer');
      const lines = String(activeSvc.sb_raw_content || '').split(/\r?\n/);
      const numbered = lines
        .map((ln, idx) => String(idx + 1).padStart(4, ' ') + ' | ' + ln)
        .join('\n');
      sbViewer.textContent = numbered;
      subContent.appendChild(sbViewer);
    } else if (state.selectedSubTab === 'commits') {
      renderServiceCommitsSubTab(subContent, activeSvc);
    }
    body.appendChild(subContent);

    inspectorSection.appendChild(body);
  }

  function renderServiceCapabilitiesSubTab(container, svc) {
    const wrap = el('div', 'table-scroll-container');
    const table = el('table', 'changes-table');
    const thead = el('thead');
    const trH = el('tr');
    [
      'Capability Type',
      'Identifier (Rule / Entitlement / IPC)',
      'Access / Direction',
      'Uniqueness vs. Core Triad',
      'Purpose & Code Role',
      'Source Files & Symbols',
      '3P Availability'
    ].forEach((h) => trH.appendChild(el('th', '', h)));
    thead.appendChild(trH);
    table.appendChild(thead);

    const tbody = el('tbody');
    svc.capabilities.forEach((cap) => {
      const tr = el('tr');
      const ctMeta = getCapTypeMeta(cap.capability_type);
      const uMeta = getUniquenessMeta(cap.unique_vs_core_triad);
      const aMeta = getAvailabilityMeta(cap['3p_browser_availability']);

      const tdType = el('td');
      tdType.appendChild(el('span', getCapTypePillClass(cap.capability_type), ctMeta.short_label));
      tr.appendChild(tdType);

      const tdId = el('td');
      tdId.appendChild(el('code', '', cap.identifier));
      tr.appendChild(tdId);

      const tdDir = el('td');
      tdDir.appendChild(el('code', '', cap.direction_or_access));
      tr.appendChild(tdDir);

      const tdUniq = el('td');
      tdUniq.appendChild(el('span', getUniquenessPillClass(cap.unique_vs_core_triad), uMeta.short_label));
      tr.appendChild(tdUniq);

      const tdPurpose = el('td', '', cap.purpose_summary);
      tr.appendChild(tdPurpose);

      const tdSource = el('td');
      const fileList = el('div', 'source-link-list');
      (cap.source_files_list || []).forEach((sf) => {
        const url = buildSourceFileUrl(svc, sf);
        const shortName = sf.split('/').slice(-2).join('/');
        if (isSafeExternalUrl(url)) {
          const a = el('a', 'source-file-chip', shortName + ' ↗');
          a.setAttribute('href', url);
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.title = sf;
          fileList.appendChild(a);
        } else {
          fileList.appendChild(el('span', 'symbol-chip', shortName));
        }
      });
      (cap.source_symbols_list || []).slice(0, 3).forEach((sym) => {
        fileList.appendChild(el('span', 'symbol-chip', sym));
      });
      tdSource.appendChild(fileList);
      tr.appendChild(tdSource);

      const tdAvail = el('td');
      tdAvail.appendChild(
        el('span', getAvailabilityPillClass(cap['3p_browser_availability']), aMeta.short_label)
      );
      tr.appendChild(tdAvail);

      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    container.appendChild(wrap);
  }

  function renderServiceCommitsSubTab(container, svc) {
    const wrap = el('div', 'table-scroll-container');
    const table = el('table', 'changes-table');
    const thead = el('thead');
    const trH = el('tr');
    ['Commit', 'Date', 'Category', 'Sandbox Effect', 'Summary & Touched Rules'].forEach((h) =>
      trH.appendChild(el('th', '', h))
    );
    thead.appendChild(trH);
    table.appendChild(thead);

    const tbody = el('tbody');
    (svc.sandbox_commits || []).forEach((c) => {
      const tr = el('tr');
      const tdHash = el('td');
      const ghUrl = GITHUB_COMMIT_BASE + encodeURIComponent(c.hash);
      const a = el('a', 'source-file-chip', c.short_hash + ' ↗');
      a.setAttribute('href', ghUrl);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      tdHash.appendChild(a);
      tr.appendChild(tdHash);

      tr.appendChild(el('td', '', c.date));
      tr.appendChild(el('td', '', c.category));
      tr.appendChild(el('td', '', c.effect));

      const tdSum = el('td');
      tdSum.appendChild(el('div', '', c.summary));
      if (Array.isArray(c.rules) && c.rules.length > 0) {
        const rWrap = el('div', 'source-link-list');
        c.rules.slice(0, 6).forEach((r) => rWrap.appendChild(el('span', 'symbol-chip', r)));
        tdSum.appendChild(rWrap);
      }
      tr.appendChild(tdSum);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    container.appendChild(wrap);
  }

  /* --------------------------------------------------------------------------
     View 2: Data View (Capability, Entitlement & IPC Explorer)
     -------------------------------------------------------------------------- */
  function renderExplorerView() {
    if (!RAW_DATA) return;
    const matching = getMatchingCapabilities();
    renderKpiCards(matching);
    renderPillBar();
    renderMainChart(matching);
    renderBreakdowns(matching);
    renderCapabilitiesTable(matching);
  }

  function renderKpiCards(matching) {
    const grid = document.getElementById('kpiGrid');
    if (!grid || !RAW_DATA) return;
    grid.replaceChildren();

    const uniqToSvc = matching.filter((c) => c.unique_vs_core_triad === 'unique-to-service').length;
    const elevVsWc = matching.filter((c) => c.unique_vs_core_triad === 'unique-vs-webcontent').length;
    const appleOnly = matching.filter(
      (c) => c['3p_browser_availability'] === 'apple-only-private-daemon-or-entitlement'
    ).length;
    const entitlements = matching.filter((c) => c.capability_type === 'entitlement').length;

    const cards = [
      {
        title: 'Matching Capabilities',
        value: matching.length + ' / ' + RAW_DATA.metadata.total_capabilities,
        sub: 'Across 5 auxiliary sandboxed services (.sb + entitlements + IPC)',
        onClick: () => jumpToExplorerWithFilters({})
      },
      {
        title: 'Unique to Auxiliary Service',
        value: String(uniqToSvc),
        sub: 'Absent from WebContent, GPU & Networking core triad',
        onClick: () => jumpToExplorerWithFilters({ uniqueness: 'unique-to-service' })
      },
      {
        title: 'Elevated vs. WebContent',
        value: String(elevVsWc),
        sub: 'Blocked in untrusted WebContent; brokered via service',
        onClick: () => jumpToExplorerWithFilters({ uniqueness: 'unique-vs-webcontent' })
      },
      {
        title: 'Code-Signing Entitlements',
        value: String(entitlements),
        sub: 'Restricted iOS/macOS entitlements in process-entitlements.sh',
        onClick: () => jumpToExplorerWithFilters({ capType: 'entitlement' })
      },
      {
        title: 'Apple-Only Capabilities',
        value: String(appleOnly),
        sub: 'Gated by private entitlements or first-party daemons',
        onClick: () =>
          jumpToExplorerWithFilters({ availability: 'apple-only-private-daemon-or-entitlement' })
      }
    ];

    cards.forEach((c) => {
      const card = el('article', 'card kpi-card');
      card.style.cursor = 'pointer';
      card.appendChild(el('div', 'kpi-label', c.title));
      card.appendChild(el('div', 'kpi-value', c.value));
      card.appendChild(el('div', 'kpi-subtext', c.sub));
      card.addEventListener('click', c.onClick);
      grid.appendChild(card);
    });
  }

  function renderPillBar() {
    const bar = document.getElementById('servicePillBar');
    if (!bar || !RAW_DATA) return;
    bar.replaceChildren();

    const allBtn = el(
      'button',
      'category-pill' + (state.filterService === 'all' ? ' active' : ''),
      'All Services (' + RAW_DATA.metadata.total_capabilities + ')'
    );
    allBtn.type = 'button';
    allBtn.addEventListener('click', () => {
      state.filterService = 'all';
      syncControlsFromState();
      renderExplorerView();
    });
    bar.appendChild(allBtn);

    RAW_DATA.services.forEach((svc) => {
      const btn = el(
        'button',
        'category-pill' + (state.filterService === svc.id ? ' active' : ''),
        svc.name + ' (' + svc.capability_count + ')'
      );
      btn.type = 'button';
      btn.addEventListener('click', () => {
        state.filterService = state.filterService === svc.id ? 'all' : svc.id;
        syncControlsFromState();
        renderExplorerView();
      });
      bar.appendChild(btn);
    });
  }

  function renderMainChart(matching) {
    const svg = document.getElementById('mainChartSvg');
    const legend = document.getElementById('chartLegend');
    if (!svg || !legend || !RAW_DATA) return;
    svg.replaceChildren();
    legend.replaceChildren();

    const groupMode = state.chartGroup;
    const stackMode = state.chartStack;

    const groups = [];
    if (groupMode === 'service') {
      RAW_DATA.services.forEach((s) => groups.push({ id: s.id, label: s.name }));
    } else if (groupMode === 'capType') {
      RAW_DATA.taxonomies.capability_types.forEach((t) =>
        groups.push({ id: t.id, label: t.short_label })
      );
    } else if (groupMode === 'uniqueness') {
      RAW_DATA.taxonomies.uniqueness_tiers.forEach((t) =>
        groups.push({ id: t.id, label: t.short_label })
      );
    } else {
      RAW_DATA.taxonomies.availability_tiers.forEach((t) =>
        groups.push({ id: t.id, label: t.short_label })
      );
    }

    const stacks = [];
    if (stackMode === 'capType') {
      RAW_DATA.taxonomies.capability_types.forEach((t) =>
        stacks.push({ id: t.id, label: t.short_label, color: t.color })
      );
    } else if (stackMode === 'uniqueness') {
      RAW_DATA.taxonomies.uniqueness_tiers.forEach((t) =>
        stacks.push({ id: t.id, label: t.short_label, color: t.color })
      );
    } else if (stackMode === 'availability') {
      RAW_DATA.taxonomies.availability_tiers.forEach((t) =>
        stacks.push({ id: t.id, label: t.short_label, color: t.color })
      );
    } else {
      RAW_DATA.services.forEach((s) =>
        stacks.push({ id: s.id, label: s.name, color: s.color })
      );
    }

    // Legend
    stacks.forEach((st) => {
      const item = el('button', 'legend-item');
      item.type = 'button';
      const swatch = el('span', 'legend-swatch');
      swatch.style.backgroundColor = st.color;
      item.appendChild(swatch);
      item.appendChild(el('span', '', st.label));
      item.addEventListener('click', () => {
        if (stackMode === 'capType') state.filterCapType = state.filterCapType === st.id ? 'all' : st.id;
        else if (stackMode === 'uniqueness') state.filterUniqueness = state.filterUniqueness === st.id ? 'all' : st.id;
        else if (stackMode === 'availability') state.filterAvailability = state.filterAvailability === st.id ? 'all' : st.id;
        else state.filterService = state.filterService === st.id ? 'all' : st.id;
        syncControlsFromState();
        renderExplorerView();
      });
      legend.appendChild(item);
    });

    const getGroupKey = (cap) => {
      if (groupMode === 'service') return cap.service_id;
      if (groupMode === 'capType') return cap.capability_type;
      if (groupMode === 'uniqueness') return cap.unique_vs_core_triad;
      return cap['3p_browser_availability'];
    };

    const getStackKey = (cap) => {
      if (stackMode === 'capType') return cap.capability_type;
      if (stackMode === 'uniqueness') return cap.unique_vs_core_triad;
      if (stackMode === 'availability') return cap['3p_browser_availability'];
      return cap.service_id;
    };

    const counts = {};
    groups.forEach((g) => {
      counts[g.id] = { total: 0, byStack: {} };
      stacks.forEach((s) => {
        counts[g.id].byStack[s.id] = 0;
      });
    });

    matching.forEach((cap) => {
      const gk = getGroupKey(cap);
      const sk = getStackKey(cap);
      if (counts[gk]) {
        counts[gk].total += 1;
        counts[gk].byStack[sk] = (counts[gk].byStack[sk] || 0) + 1;
      }
    });

    const width = 960;
    const height = 270;
    const padLeft = 48;
    const padRight = 24;
    const padTop = 20;
    const padBottom = 54;
    const plotW = width - padLeft - padRight;
    const plotH = height - padTop - padBottom;

    svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);

    const maxTotal = Math.max(1, ...groups.map((g) => counts[g.id].total));
    const stepW = plotW / Math.max(1, groups.length);
    const barW = Math.min(72, stepW * 0.58);

    // Y gridlines
    for (let tick = 0; tick <= 4; tick++) {
      const val = Math.round((maxTotal * tick) / 4);
      const y = padTop + plotH - (val / maxTotal) * plotH;
      svg.appendChild(
        svgEl('line', {
          x1: padLeft,
          y1: y,
          x2: width - padRight,
          y2: y,
          stroke: '#e2e8f0',
          'stroke-dasharray': tick === 0 ? '' : '3,3'
        })
      );
      const lbl = svgEl('text', {
        x: padLeft - 8,
        y: y + 4,
        'text-anchor': 'end',
        fill: '#64748b',
        'font-size': '11'
      });
      lbl.textContent = String(val);
      svg.appendChild(lbl);
    }

    groups.forEach((g, idx) => {
      const xCenter = padLeft + idx * stepW + stepW / 2;
      const x = xCenter - barW / 2;
      let yCursor = padTop + plotH;

      stacks.forEach((st) => {
        const val = counts[g.id].byStack[st.id] || 0;
        if (val <= 0) return;
        const h = (val / maxTotal) * plotH;
        yCursor -= h;
        const rect = svgEl('rect', {
          x: x,
          y: yCursor,
          width: barW,
          height: Math.max(1, h),
          fill: st.color,
          rx: 2
        });
        rect.style.cursor = 'pointer';
        const titleNode = svgEl('title');
        titleNode.textContent = g.label + ' — ' + st.label + ': ' + val;
        rect.appendChild(titleNode);
        rect.addEventListener('click', () => {
          if (groupMode === 'service') state.filterService = g.id;
          else if (groupMode === 'capType') state.filterCapType = g.id;
          else if (groupMode === 'uniqueness') state.filterUniqueness = g.id;
          else state.filterAvailability = g.id;
          syncControlsFromState();
          renderExplorerView();
        });
        svg.appendChild(rect);
      });

      // Total label on top of bar
      const tot = counts[g.id].total;
      if (tot > 0) {
        const topText = svgEl('text', {
          x: xCenter,
          y: Math.max(12, yCursor - 5),
          'text-anchor': 'middle',
          fill: '#0f172a',
          'font-size': '11',
          'font-weight': '600'
        });
        topText.textContent = String(tot);
        svg.appendChild(topText);
      }

      // X axis label
      const xLbl = svgEl('text', {
        x: xCenter,
        y: padTop + plotH + 20,
        'text-anchor': 'middle',
        fill: '#334155',
        'font-size': '11.5',
        'font-weight': '600'
      });
      xLbl.textContent = g.label.length > 24 ? g.label.slice(0, 22) + '…' : g.label;
      svg.appendChild(xLbl);
    });
  }

  function renderBreakdowns(matching) {
    const svcList = document.getElementById('serviceBreakdownList');
    const typeList = document.getElementById('capTypeBreakdownList');
    const thirdList = document.getElementById('uniquenessAvailabilityBreakdownList');
    if (!svcList || !typeList || !thirdList || !RAW_DATA) return;

    svcList.replaceChildren();
    typeList.replaceChildren();
    thirdList.replaceChildren();

    const total = Math.max(1, matching.length);

    RAW_DATA.services.forEach((svc) => {
      const count = matching.filter((c) => c.service_id === svc.id).length;
      const pct = Math.round((count / total) * 100);
      const row = el('div', 'breakdown-row' + (state.filterService === svc.id ? ' active' : ''));
      row.style.cursor = 'pointer';
      row.appendChild(el('span', 'breakdown-label', svc.name));
      row.appendChild(el('span', 'breakdown-count', count + ' (' + pct + '%)'));
      row.addEventListener('click', () => {
        state.filterService = state.filterService === svc.id ? 'all' : svc.id;
        syncControlsFromState();
        renderExplorerView();
      });
      svcList.appendChild(row);
    });

    RAW_DATA.taxonomies.capability_types.forEach((ct) => {
      const count = matching.filter((c) => c.capability_type === ct.id).length;
      const pct = Math.round((count / total) * 100);
      const row = el('div', 'breakdown-row' + (state.filterCapType === ct.id ? ' active' : ''));
      row.style.cursor = 'pointer';
      row.appendChild(el('span', 'breakdown-label', ct.label));
      row.appendChild(el('span', 'breakdown-count', count + ' (' + pct + '%)'));
      row.addEventListener('click', () => {
        state.filterCapType = state.filterCapType === ct.id ? 'all' : ct.id;
        syncControlsFromState();
        renderExplorerView();
      });
      typeList.appendChild(row);
    });

    const items =
      state.breakdownTab === 'uniqueness'
        ? RAW_DATA.taxonomies.uniqueness_tiers
        : RAW_DATA.taxonomies.availability_tiers;

    items.forEach((item) => {
      const count = matching.filter((c) =>
        state.breakdownTab === 'uniqueness'
          ? c.unique_vs_core_triad === item.id
          : c['3p_browser_availability'] === item.id
      ).length;
      const pct = Math.round((count / total) * 100);
      const isActive =
        state.breakdownTab === 'uniqueness'
          ? state.filterUniqueness === item.id
          : state.filterAvailability === item.id;
      const row = el('div', 'breakdown-row' + (isActive ? ' active' : ''));
      row.style.cursor = 'pointer';
      row.appendChild(el('span', 'breakdown-label', item.short_label));
      row.appendChild(el('span', 'breakdown-count', count + ' (' + pct + '%)'));
      row.addEventListener('click', () => {
        if (state.breakdownTab === 'uniqueness') {
          state.filterUniqueness = state.filterUniqueness === item.id ? 'all' : item.id;
        } else {
          state.filterAvailability = state.filterAvailability === item.id ? 'all' : item.id;
        }
        syncControlsFromState();
        renderExplorerView();
      });
      thirdList.appendChild(row);
    });
  }

  function renderCapabilitiesTable(matching) {
    const tbody = document.getElementById('capabilitiesTableBody');
    const summary = document.getElementById('tableSummaryText');
    if (!tbody || !RAW_DATA) return;
    tbody.replaceChildren();

    if (summary) {
      summary.textContent =
        'Showing ' +
        matching.length +
        ' of ' +
        RAW_DATA.metadata.total_capabilities +
        ' cataloged Seatbelt capabilities, entitlements, and IPC interfaces';
    }

    matching.forEach((cap) => {
      const svc = getServiceById(cap.service_id);
      const isExpanded = state.expandedRowIds.has(cap.row_id);
      const tr = el('tr', 'commit-row' + (isExpanded ? ' expanded' : ''));

      const tdExp = el('td', 'col-expand', isExpanded ? '▼' : '▶');
      tr.appendChild(tdExp);

      const tdSvc = el('td');
      tdSvc.appendChild(el('strong', '', svc ? svc.name : cap.service_id));
      tdSvc.appendChild(
        el(
          'div',
          '',
          cap.status_at_head === 'active' ? 'Active at HEAD' : 'Retired'
        )
      );
      tr.appendChild(tdSvc);

      const ctMeta = getCapTypeMeta(cap.capability_type);
      const tdType = el('td');
      tdType.appendChild(el('span', getCapTypePillClass(cap.capability_type), ctMeta.short_label));
      tr.appendChild(tdType);

      const tdId = el('td');
      tdId.appendChild(el('code', '', cap.identifier));
      tdId.appendChild(el('div', 'card-subtitle', cap.direction_or_access));
      tr.appendChild(tdId);

      const uMeta = getUniquenessMeta(cap.unique_vs_core_triad);
      const tdUniq = el('td');
      tdUniq.appendChild(el('span', getUniquenessPillClass(cap.unique_vs_core_triad), uMeta.short_label));
      tr.appendChild(tdUniq);

      tr.appendChild(el('td', '', cap.purpose_summary));

      const tdSrc = el('td');
      const srcWrap = el('div', 'source-link-list');
      (cap.source_files_list || []).forEach((sf) => {
        const url = buildSourceFileUrl(svc, sf);
        const shortName = sf.split('/').slice(-2).join('/');
        if (isSafeExternalUrl(url)) {
          const a = el('a', 'source-file-chip', shortName + ' ↗');
          a.setAttribute('href', url);
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.title = sf;
          a.addEventListener('click', (e) => e.stopPropagation());
          srcWrap.appendChild(a);
        } else {
          srcWrap.appendChild(el('span', 'symbol-chip', shortName));
        }
      });
      (cap.source_symbols_list || []).slice(0, 3).forEach((sym) => {
        srcWrap.appendChild(el('span', 'symbol-chip', sym));
      });
      tdSrc.appendChild(srcWrap);
      tr.appendChild(tdSrc);

      const aMeta = getAvailabilityMeta(cap['3p_browser_availability']);
      const tdAvail = el('td');
      tdAvail.appendChild(
        el('span', getAvailabilityPillClass(cap['3p_browser_availability']), aMeta.short_label)
      );
      tr.appendChild(tdAvail);

      tr.addEventListener('click', () => {
        if (state.expandedRowIds.has(cap.row_id)) {
          state.expandedRowIds.delete(cap.row_id);
        } else {
          state.expandedRowIds.add(cap.row_id);
        }
        renderCapabilitiesTable(matching);
      });

      tbody.appendChild(tr);

      if (isExpanded) {
        const detailTr = el('tr', 'commit-detail-row');
        const detailTd = el('td');
        detailTd.colSpan = 8;
        const box = el('div', 'service-meta-box');
        box.appendChild(
          el(
            'div',
            'service-meta-val',
            'Seatbelt File: ' +
              cap.seatbelt_file +
              '  |  Access Mode: ' +
              cap.direction_or_access +
              '  |  Uniqueness: ' +
              uMeta.label +
              '  |  3P Browser Availability: ' +
              aMeta.label
          )
        );
        box.appendChild(el('p', 'service-hero-lead', cap.purpose_summary));
        const openDeepDiveBtn = el(
          'button',
          'btn-secondary',
          'Open ' + (svc ? svc.name : cap.service_id) + ' Full Deep-Dive Report →'
        );
        openDeepDiveBtn.type = 'button';
        openDeepDiveBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          state.selectedServiceId = cap.service_id;
          state.selectedSubTab = 'markdown';
          switchView('insights');
          renderInsightsView();
        });
        box.appendChild(openDeepDiveBtn);
        detailTd.appendChild(box);
        detailTr.appendChild(detailTd);
        tbody.appendChild(detailTr);
      }
    });
  }

  /* --------------------------------------------------------------------------
     CSV & Markdown Downloads
     -------------------------------------------------------------------------- */
  function triggerBlobDownload(filename, mimeType, content) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function formatCsvCell(val) {
    const s = String(val === undefined || val === null ? '' : val);
    if (s.includes('"') || s.includes(',') || s.includes('\n')) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  }

  function buildCsvFromCapabilities(rows) {
    const cols = [
      'service_id',
      'seatbelt_file',
      'status_at_head',
      'capability_type',
      'identifier',
      'direction_or_access',
      'unique_vs_core_triad',
      'source_files',
      'source_symbols',
      'purpose_summary',
      '3p_browser_availability'
    ];
    const out = [cols.join(',')];
    rows.forEach((r) => {
      out.push(cols.map((c) => formatCsvCell(r[c])).join(','));
    });
    return out.join('\n') + '\n';
  }

  function downloadServiceCsv(svc) {
    if (!svc) return;
    triggerBlobDownload(
      svc.id + '.csv',
      'text/csv;charset=utf-8',
      buildCsvFromCapabilities(svc.capabilities || [])
    );
  }

  function downloadServiceMarkdown(svc) {
    if (!svc) return;
    triggerBlobDownload(
      svc.id + '.md',
      'text/markdown;charset=utf-8',
      svc.markdown_report || ''
    );
  }

  /* --------------------------------------------------------------------------
     View Switching & Controls Initialization
     -------------------------------------------------------------------------- */
  function switchView(view) {
    state.activeView = view === 'explorer' ? 'explorer' : 'insights';
    const tabInsights = document.getElementById('viewTabInsights');
    const tabExplorer = document.getElementById('viewTabExplorer');
    const panelInsights = document.getElementById('insightsViewPanel');
    const panelExplorer = document.getElementById('explorerViewPanel');

    if (tabInsights && tabExplorer && panelInsights && panelExplorer) {
      const isInsights = state.activeView === 'insights';
      tabInsights.classList.toggle('active', isInsights);
      tabInsights.setAttribute('aria-selected', String(isInsights));
      tabExplorer.classList.toggle('active', !isInsights);
      tabExplorer.setAttribute('aria-selected', String(!isInsights));
      panelInsights.classList.toggle('hidden', !isInsights);
      panelExplorer.classList.toggle('hidden', isInsights);
    }
  }

  function syncControlsFromState() {
    const setVal = (id, val) => {
      const node = document.getElementById(id);
      if (node) node.value = val;
    };
    setVal('filterService', state.filterService);
    setVal('filterStatus', state.filterStatus);
    setVal('filterCapType', state.filterCapType);
    setVal('filterUniqueness', state.filterUniqueness);
    setVal('filterAvailability', state.filterAvailability);
    setVal('filterSearch', state.filterSearch);
    setVal('chartGroupSelect', state.chartGroup);
    setVal('chartStackSelect', state.chartStack);
    setVal('tableSortSelect', state.tableSort);
  }

  function populateSelectOptions() {
    if (!RAW_DATA) return;
    const svcSelect = document.getElementById('filterService');
    if (svcSelect) {
      RAW_DATA.services.forEach((s) => {
        const opt = el(
          'option',
          '',
          s.name + ' (' + s.capability_count + ')'
        );
        opt.value = s.id;
        svcSelect.appendChild(opt);
      });
    }

    const capSelect = document.getElementById('filterCapType');
    if (capSelect) {
      RAW_DATA.taxonomies.capability_types.forEach((t) => {
        const opt = el('option', '', t.label);
        opt.value = t.id;
        capSelect.appendChild(opt);
      });
    }

    const uniqSelect = document.getElementById('filterUniqueness');
    if (uniqSelect) {
      RAW_DATA.taxonomies.uniqueness_tiers.forEach((t) => {
        const opt = el('option', '', t.label);
        opt.value = t.id;
        uniqSelect.appendChild(opt);
      });
    }

    const availSelect = document.getElementById('filterAvailability');
    if (availSelect) {
      RAW_DATA.taxonomies.availability_tiers.forEach((t) => {
        const opt = el('option', '', t.label);
        opt.value = t.id;
        availSelect.appendChild(opt);
      });
    }
  }

  function init() {
    const badge = document.getElementById('datasetMetaBadge');
    const expBadge = document.getElementById('explorerTabCountBadge');
    if (!RAW_DATA) {
      if (badge) badge.textContent = 'Dataset failed to load';
      return;
    }

    if (badge) {
      badge.textContent =
        RAW_DATA.metadata.total_services +
        ' Services • ' +
        RAW_DATA.metadata.total_capabilities +
        ' Capabilities • ' +
        RAW_DATA.metadata.unique_service_sandbox_commits +
        ' Commits';
    }
    if (expBadge) {
      expBadge.textContent = String(RAW_DATA.metadata.total_capabilities);
    }

    populateSelectOptions();

    const toggleMeth = document.getElementById('toggleMethodologyBtn');
    const methPanel = document.getElementById('methodologyPanel');
    if (toggleMeth && methPanel) {
      toggleMeth.addEventListener('click', () => {
        const hidden = methPanel.classList.toggle('hidden');
        toggleMeth.setAttribute('aria-expanded', String(!hidden));
      });
    }

    const tabInsights = document.getElementById('viewTabInsights');
    const tabExplorer = document.getElementById('viewTabExplorer');
    if (tabInsights) {
      tabInsights.addEventListener('click', () => {
        switchView('insights');
        renderInsightsView();
      });
    }
    if (tabExplorer) {
      tabExplorer.addEventListener('click', () => {
        switchView('explorer');
        renderExplorerView();
      });
    }

    const bindSelect = (id, key) => {
      const node = document.getElementById(id);
      if (node) {
        node.addEventListener('change', () => {
          state[key] = node.value;
          renderExplorerView();
        });
      }
    };
    bindSelect('filterService', 'filterService');
    bindSelect('filterStatus', 'filterStatus');
    bindSelect('filterCapType', 'filterCapType');
    bindSelect('filterUniqueness', 'filterUniqueness');
    bindSelect('filterAvailability', 'filterAvailability');
    bindSelect('chartGroupSelect', 'chartGroup');
    bindSelect('chartStackSelect', 'chartStack');
    bindSelect('tableSortSelect', 'tableSort');

    const searchInput = document.getElementById('filterSearch');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        state.filterSearch = searchInput.value;
        renderExplorerView();
      });
    }

    const resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.filterService = 'all';
        state.filterStatus = 'all';
        state.filterCapType = 'all';
        state.filterUniqueness = 'all';
        state.filterAvailability = 'all';
        state.filterSearch = '';
        syncControlsFromState();
        renderExplorerView();
      });
    }

    const exportBtn = document.getElementById('exportCsvBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const rows = getMatchingCapabilities();
        triggerBlobDownload(
          'webkit_sandbox_services_capabilities.csv',
          'text/csv;charset=utf-8',
          buildCsvFromCapabilities(rows)
        );
      });
    }

    const tabUniqBtn = document.getElementById('tabUniquenessBtn');
    const tabAvailBtn = document.getElementById('tabAvailabilityBtn');
    if (tabUniqBtn && tabAvailBtn) {
      tabUniqBtn.addEventListener('click', () => {
        state.breakdownTab = 'uniqueness';
        tabUniqBtn.classList.add('active');
        tabAvailBtn.classList.remove('active');
        renderExplorerView();
      });
      tabAvailBtn.addEventListener('click', () => {
        state.breakdownTab = 'availability';
        tabAvailBtn.classList.add('active');
        tabUniqBtn.classList.remove('active');
        renderExplorerView();
      });
    }

    if (window.location.hash) {
      const hash = window.location.hash;
      if (hash.startsWith('#service-')) {
        const sid = hash.substring(9);
        if (RAW_DATA.services.some((s) => s.id === sid)) {
          state.activeView = 'insights';
          state.selectedServiceId = sid;
          setTimeout(() => {
            const insp = document.getElementById('serviceInspectorSection');
            if (insp) insp.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    }

    renderInsightsView();
    renderExplorerView();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
