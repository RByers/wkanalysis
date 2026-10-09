/**
 * WebKit Entitlements & BrowserEngineKit Asymmetry Analyzer — Frontend Logic (entitlements.js)
 *
 * Uses strict DOM node creation (createElement / createElementNS / textContent / replaceChildren)
 * and loads dataset exclusively via script tag.
 */
(function () {
  "use strict";

  const DATA = window.__WKANALYZE_ENTITLEMENTS_DATA__ || {
    webkit_head: "",
    github_repo_url: "https://github.com/WebKit/WebKit",
    total_entitlements: 0,
    category_counts: {},
    ios_parity_counts: {},
    domain_breakdown: [],
    process_comparison: [],
    entitlements: [],
  };

  const GITHUB_BASE = DATA.github_repo_url || "https://github.com/WebKit/WebKit";
  const ENTITLEMENTS = DATA.entitlements || [];

  const CATEGORY_META = {
    "apple-private": {
      label: "Private to Apple",
      shortLabel: "Apple-Private",
      pillClass: "ent-pill-private",
      color: "#dc2626",
      order: 1,
      desc: "com.apple.private.* and internal OS entitlements granted only to Apple-signed platform binaries.",
    },
    "browserenginekit": {
      label: "BrowserEngineKit (3P Engines)",
      shortLabel: "BrowserEngineKit",
      pillClass: "ent-pill-bek",
      color: "#0284c7",
      order: 2,
      desc: "Entitlements available to approved 3P alternative browser engines on iOS via BrowserEngineKit.",
    },
    "restricted-other": {
      label: "Restricted Some Other Way",
      shortLabel: "Restricted (Other)",
      pillClass: "ent-pill-restricted",
      color: "#d97706",
      order: 3,
      desc: "Managed capabilities requiring separate Apple approval outside BrowserEngineKit, or App Sandbox exceptions.",
    },
    "generally-available": {
      label: "Generally Available (Public)",
      shortLabel: "Generally Available",
      pillClass: "ent-pill-public",
      color: "#059669",
      order: 4,
      desc: "Public entitlements available to any developer in Xcode.",
    },
  };

  const PARITY_META = {
    "ios-webkit-exclusive": {
      label: "iOS WebKit-Exclusive Asymmetry",
      shortLabel: "iOS WebKit-Exclusive",
      pillClass: "ent-pill-private",
      color: "#dc2626",
      order: 1,
    },
    "browserenginekit-granted": {
      label: "Granted via BrowserEngineKit",
      shortLabel: "BrowserEngineKit Granted",
      pillClass: "ent-pill-bek",
      color: "#0284c7",
      order: 2,
    },
    "ios-managed-approval": {
      label: "iOS Managed Approval (Non-BEK)",
      shortLabel: "iOS Managed Approval",
      pillClass: "ent-pill-restricted",
      color: "#d97706",
      order: 3,
    },
    "ios-public-parity": {
      label: "iOS Public Developer Parity",
      shortLabel: "iOS Public Parity",
      pillClass: "ent-pill-public",
      color: "#059669",
      order: 4,
    },
    "macos-or-harness-only": {
      label: "macOS-Only or Test Harness",
      shortLabel: "macOS / Test Harness",
      pillClass: "ent-pill-slate",
      color: "#64748b",
      order: 5,
    },
  };

  const THEMATIC_ASYMMETRIES = [
    { slug: "media-capture",

      title: "1. GPU Media Capture, TCC Delegation & Sensor Indicators",
      badge: "31 vs 2 Entitlements in GPU Process",
      badgeClass: "ent-pill-private",
      filterDomain: "TCC, Privacy & Permissions",
      body: "WebKit's iOS GPU process holds com.apple.tcc.delegated-services (Camera & Microphone), com.apple.systemstatus.activityattribution, com.apple.private.attribution.explicitly-assumed-identities, and com.apple.springboard.statusbarstyleoverrides. This allows WebKit to capture camera/microphone audio and video inside the sandboxed GPU process on behalf of the host app and drive iOS status-bar recording indicators. A 3P BERenderingProcess extension receives none of these entitlements.",
      entitlements: [
        "com.apple.tcc.delegated-services",
        "com.apple.systemstatus.activityattribution",
        "com.apple.private.attribution.explicitly-assumed-identities",
        "com.apple.springboard.statusbarstyleoverrides",
        "com.apple.private.mediaexperience.startrecordinginthebackground.allow",
        "com.apple.private.coremedia.pidinheritance.allow",
      ],
    },
    { slug: "jit-hardening",

      title: "2. JIT Hardening, PAC Shared Regions & Memory Integrity (MIE)",
      badge: "JIT & Hardware Mitigations",
      badgeClass: "ent-pill-private",
      filterDomain: "JIT & Memory Hardening",
      body: "While BrowserEngineKit explicitly grants standard JIT (com.apple.developer.cs.allow-jit) to 3P engines, WebKit's iOS WebContent process is signed with com.apple.pac.shared_region_id ('WebKit'), com.apple.private.verified-jit, com.apple.security.fatal-exceptions ('jit'), and on EnhancedSecurity helpers com.apple.security.hardened-process.checked-allocations. Third-party engines cannot configure custom PAC shared-region keys or Apple-internal verified-JIT kernel flags, reflecting a structural defence-in-depth security gap rather than a functional JIT capability gap.",
      entitlements: [
        "com.apple.pac.shared_region_id",
        "com.apple.private.verified-jit",
        "com.apple.security.fatal-exceptions",
        "com.apple.security.hardened-process.checked-allocations.no-tagged-receive",
        "com.apple.private.pac.exception",
        "com.apple.developer.cs.allow-jit",
      ],
    },
    { slug: "graphics-ane",

      title: "3. WindowServer Compositing & IOSurface Accounting",
      badge: "Graphics & Compositing Acceleration",
      badgeClass: "ent-pill-private",
      filterDomain: "GPU, Graphics & Display",
      body: "WebKit's GPU process holds com.apple.QuartzCore.webkit-end-points, com.apple.QuartzCore.webkit-limited-types, and com.apple.QuartzCore.secure-mode for direct remote layer tree endpoints, com.apple.private.memory.ownership_transfer to reassign IOSurface Jetsam memory footprint to WebContent processes. Note that the QuartzCore endpoints largely reflect WebKit's specific RemoteLayerTree compositing architecture rather than a functionality an alternative pipeline necessarily requires.",
      entitlements: [
        "com.apple.QuartzCore.webkit-end-points",
        "com.apple.QuartzCore.webkit-limited-types",
        "com.apple.QuartzCore.secure-mode",
        "com.apple.private.memory.ownership_transfer",
        "com.apple.private.allow-explicit-graphics-priority",
      ],
    },
    { slug: "apple-pay-identity",

      title: "4. Apple Pay All-Access",
      badge: "Apple Pay Integration",
      badgeClass: "ent-pill-private",
      filterDomain: "Apple Pay, PassKit & Identity",
      body: "WebKit's Networking process holds com.apple.payment.all-access and com.apple.private.accounts.bundleidspoofing so it can coordinate PassKit Apple Pay sessions on behalf of arbitrary host applications. ",
      entitlements: [
        "com.apple.payment.all-access",
        "com.apple.private.accounts.bundleidspoofing",
      ],
    },
    { slug: "networking-ohttp",

      title: "5. Oblivious HTTP (CipherML), Socket Delegation & Parental Controls",
      badge: "Networking & Screen Time",
      badgeClass: "ent-pill-private",
      filterDomain: "Networking & Privacy Proxies",
      body: "WebKit's Networking process is signed with com.apple.private.ciphermld.allow (Apple's Oblivious HTTP / Private Relay proxy daemon), com.apple.private.network.socket-delegate, com.apple.symptom_analytics.configure, com.apple.private.dmd.policy, and com.apple.private.assets.accessible-asset-types (Screen Time / Parental Controls content filtering). A 3P BENetworkingProcess only receives com.apple.developer.web-browser-engine.networking.",
      entitlements: [
        "com.apple.private.ciphermld.allow",
        "com.apple.private.network.socket-delegate",
        "com.apple.symptom_analytics.configure",
        "com.apple.private.dmd.policy",
        "com.apple.private.assets.accessible-asset-types",
        "com.apple.private.appstored",
      ],
    },
    { slug: "web-push",

      title: "6. Web Push Daemon (webpushd) & Home Screen Web App Launching",
      badge: "12 Private Daemon Entitlements",
      badgeClass: "ent-pill-private",
      filterDomain: "System UI, SpringBoard & Status Bar",
      body: "WebKit's webpushd daemon holds 12 Apple-private entitlements including aps-connection-initiate, com.apple.private.webkit.webpush, com.apple.frontboard.launchapplications, com.apple.springboard.opensensitiveurl, and com.apple.usernotification.notificationschedulerproxy. BrowserEngineKit does not provide a background push daemon extension point for 3P browser engines.",
      entitlements: [
        "aps-connection-initiate",
        "com.apple.private.webkit.webpush",
        "com.apple.frontboard.launchapplications",
        "com.apple.springboard.opensensitiveurl",
        "com.apple.usernotification.notificationschedulerproxy",
        "com.apple.private.usernotifications.app-management-domain.proxy",
      ],
    },
    { slug: "process-lifecycle",

      title: "7. RunningBoard Assertions, MemoryStatus & Background Downloads",
      badge: "Process Lifecycle & Jetsam",
      badgeClass: "ent-pill-private",
      filterDomain: "RunningBoard & Process Lifecycle",
      body: "WebKit's UIProcess and Networking process check com.apple.runningboard.assertions.webkit and com.apple.multitasking.systemappassertions to acquire privileged RunningBoard assertions and finish downloads in the background, while helper processes hold com.apple.private.memorystatus and com.apple.private.kernel.override-cpumon.",
      entitlements: [
        "com.apple.runningboard.assertions.webkit",
        "com.apple.multitasking.systemappassertions",
        "com.apple.private.memorystatus",
        "com.apple.private.kernel.override-cpumon",
      ],
    },
    { slug: "extensions",

      title: "8. System Extension Host Exemption & Universal Links Management",
      badge: "Host App & ExtensionKit Gates",
      badgeClass: "ent-pill-private",
      filterDomain: "Process Launching & BrowserEngineKit",
      body: "In ProcessLauncherCocoa.mm, system WKWebView extensions reside in /System/Library/ExtensionKit/Extensions/ and hold com.apple.private.extensionkit.host-requirement-exemption so any app can spawn them without com.apple.developer.web-browser-engine.host. Meanwhile, WKActionSheetAssistant gates Universal Link permission management behind com.apple.private.canGetAppLinkInfo and com.apple.private.canModifyAppLinkPermissions.",
      entitlements: [
        "com.apple.private.extensionkit.host-requirement-exemption",
        "com.apple.private.canGetAppLinkInfo",
        "com.apple.private.canModifyAppLinkPermissions",
        "com.apple.private.allow-ldm-exempt-webview",
      ],
    },
  ];

  // Application State
  const state = {
    activeView: "insights",
    selectedProcessIdx: 1, // Default to GPU process (31 vs 2) or WebContent (0)
    category: "all",
    parity: "all",
    process: "all",
    domain: "all",
    enforcement: "all",
    search: "",
    chartGroup: "domain",
    chartStack: "category",
    rightBreakdownTab: "process",
    sortBy: "parity-asc",
    expandedKeys: new Set(),
  };

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = String(text);
    return node;
  }

  function svgEl(tag, attrs) {
    const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, String(v)));
    }
    return node;
  }

  function buildGitHubFileUrl(filePath, line) {
    const clean = String(filePath || "").replace(/^\/+/, "");
    const lineFrag = line ? `#L${line}` : "";
    return `${GITHUB_BASE}/blob/main/${clean}${lineFrag}`;
  }

  function buildGitHubCommitUrl(hash) {
    return `${GITHUB_BASE}/commit/${hash}`;
  }

  function createCategoryBadge(catKey) {
    const m = CATEGORY_META[catKey] || {
      shortLabel: catKey,
      pillClass: "ent-pill-slate",
    };
    return el("span", `ent-pill ${m.pillClass}`, m.shortLabel);
  }

  function createParityBadge(parityKey) {
    const m = PARITY_META[parityKey] || {
      shortLabel: parityKey,
      pillClass: "ent-pill-slate",
    };
    return el("span", `ent-pill ${m.pillClass}`, m.shortLabel);
  }

  function setViewTab(viewName, skipUrlSync) {
    state.activeView = viewName === "explorer" ? "explorer" : "insights";
    const btnInsights = document.getElementById("viewTabInsights");
    const btnExplorer = document.getElementById("viewTabExplorer");
    const panelInsights = document.getElementById("insightsViewPanel");
    const panelExplorer = document.getElementById("explorerViewPanel");

    const isExplorer = state.activeView === "explorer";
    if (btnInsights && btnExplorer && panelInsights && panelExplorer) {
      btnInsights.classList.toggle("active", !isExplorer);
      btnInsights.setAttribute("aria-selected", String(!isExplorer));
      btnExplorer.classList.toggle("active", isExplorer);
      btnExplorer.setAttribute("aria-selected", String(isExplorer));
      panelInsights.classList.toggle("hidden", isExplorer);
      panelExplorer.classList.toggle("hidden", !isExplorer);
    }

    if (isExplorer) {
      renderChart(getFilteredEntitlements());
    }
    if (!skipUrlSync) syncStateToUrl();
  }

  function jumpToExplorerWithFilters(opts) {
    state.category = opts.category || "all";
    state.parity = opts.parity || "all";
    state.process = opts.process || "all";
    state.domain = opts.domain || "all";
    state.enforcement = opts.enforcement || "all";
    state.search = opts.search || "";
    if (opts.expandKey) {
      state.expandedKeys.add(opts.expandKey);
    }
    syncControlsFromState();
    renderAll();
    setViewTab("explorer");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function populateFilterDropdowns() {
    const procSelect = document.getElementById("filterProcess");
    const domSelect = document.getElementById("filterDomain");
    const enfSelect = document.getElementById("filterEnforcement");

    const procCounts = {};
    const domCounts = {};
    const enfCounts = {};

    ENTITLEMENTS.forEach((e) => {
      (e.canonical_processes || []).forEach((p) => {
        procCounts[p] = (procCounts[p] || 0) + 1;
      });
      domCounts[e.functional_domain] = (domCounts[e.functional_domain] || 0) + 1;
      (e.enforcement_mechanisms || []).forEach((m) => {
        enfCounts[m] = (enfCounts[m] || 0) + 1;
      });
    });

    Object.entries(procCounts)
      .sort((a, b) => b[1] - a[1])
      .forEach(([p, c]) => {
        const opt = el("option", null, `${p} (${c})`);
        opt.value = p;
        procSelect.appendChild(opt);
      });

    Object.entries(domCounts)
      .sort((a, b) => b[1] - a[1])
      .forEach(([d, c]) => {
        const opt = el("option", null, `${d} (${c})`);
        opt.value = d;
        domSelect.appendChild(opt);
      });

    Object.entries(enfCounts)
      .sort((a, b) => b[1] - a[1])
      .forEach(([m, c]) => {
        const opt = el("option", null, `${m} (${c})`);
        opt.value = m;
        enfSelect.appendChild(opt);
      });
  }

  function syncControlsFromState() {
    document.getElementById("filterCategory").value = state.category;
    document.getElementById("filterParity").value = state.parity;
    document.getElementById("filterProcess").value = state.process;
    document.getElementById("filterDomain").value = state.domain;
    document.getElementById("filterEnforcement").value = state.enforcement;
    document.getElementById("filterSearch").value = state.search;
    document.getElementById("chartGroupSelect").value = state.chartGroup;
    document.getElementById("chartStackSelect").value = state.chartStack;
    document.getElementById("tableSortSelect").value = state.sortBy;
  }

  function getFilteredEntitlements() {
    const q = state.search.trim().toLowerCase();
    return ENTITLEMENTS.filter((e) => {
      if (state.category !== "all" && e.category !== state.category) return false;
      if (state.parity !== "all" && e.ios_parity_status !== state.parity) return false;
      if (state.process !== "all" && !(e.canonical_processes || []).includes(state.process)) return false;
      if (state.domain !== "all" && e.functional_domain !== state.domain) return false;
      if (state.enforcement !== "all" && !(e.enforcement_mechanisms || []).includes(state.enforcement)) return false;
      if (q) {
        const hay = [
          e.entitlement,
          e.short_purpose,
          e.webkit_usage_summary,
          e.browserenginekit_implications,
          e.functional_domain,
          ...(e.canonical_processes || []),
          ...(e.key_code_pointers || []).map((p) => `${p.file} ${p.role}`),
          ...(e.related_spis || []).map((s) => s.name),
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function renderInsightsTab() {
    const container = document.getElementById("insightsContent");
    if (!container) return;
    container.replaceChildren();

    // 1. Executive Summary Hero Card
    const heroCard = el("section", "ent-hero-card");
    heroCard.id = "executive-summary";
    const heroGrid = el("div", "ent-hero-grid");

    const leftCol = el("div");
    leftCol.appendChild(
      el(
        "h2",
        "ent-hero-title",
        "How WebKit's System Entitlements Compare to Third-Party BrowserEngineKit Browsers on iOS"
      )
    );
    leftCol.appendChild(
      el(
        "p",
        "ent-hero-lead",
        "Across the WebKit repository, 159 distinct entitlements govern sandbox capabilities, JIT compilation, hardware acceleration, TCC privacy attribution, Apple Pay, Oblivious HTTP, and background execution. While Apple's BrowserEngineKit grants 6 entitlements to third-party iOS browser engines, WebKit's own iOS processes are signed via Source/WebKit/Scripts/process-entitlements.sh with 84 iOS WebKit-exclusive entitlements (82 Apple-private, 2 restricted) that third-party browsers cannot obtain."
      )
    );

    leftCol.appendChild(
      el(
        "p",
        "ent-arch-callout-title",
        "Caveat: Architecture vs. Capability"
      )
    );
    leftCol.appendChild(
      el(
        "p",
        null,
        "Not every WebKit-exclusive entitlement represents a 1:1 capability deficit for third-party browsers. Some reflect WebKit's specific software architecture (e.g., com.apple.QuartzCore.webkit-end-points for RemoteLayerTree compositing) rather than a feature an alternative engine necessarily requires. The per-entitlement BrowserEngineKit classifications should be considered with this architectural context in mind."
      )
    );

    const callout = el("div", "ent-arch-callout");
    callout.appendChild(
      el(
        "h3",
        "ent-arch-callout-title",
        "Key Architectural Mechanism: ProcessLauncherCocoa.mm & process-entitlements.sh"
      )
    );
    const calloutList = el("ul", "ent-arch-callout-list");

    const li1 = el("li");
    li1.appendChild(el("strong", null, "Shared BrowserEngineKit Launch Path: "));
    li1.appendChild(
      document.createTextNode(
        "On iOS, WebKit itself launches its WebContent, GPU, and Networking helpers using BrowserEngineKit (BEWebContentProcess, BERenderingProcess, BENetworkingProcess) in "
      )
    );
    const linkLauncher = el("a", "ent-pointer-link", "Source/WebKit/UIProcess/Launcher/cocoa/ProcessLauncherCocoa.mm#L74");
    linkLauncher.href = buildGitHubFileUrl("Source/WebKit/UIProcess/Launcher/cocoa/ProcessLauncherCocoa.mm", 74);
    linkLauncher.target = "_blank";
    linkLauncher.rel = "noopener noreferrer";
    li1.appendChild(linkLauncher);
    li1.appendChild(document.createTextNode("."));
    calloutList.appendChild(li1);

    const li2 = el("li");
    li2.appendChild(el("strong", null, "System Extension Exemption vs. Bundled 3P Extensions: "));
    li2.appendChild(
      document.createTextNode(
        "When an app uses system WKWebView (hasExtensionsInAppBundle() == false), WebKit spawns Apple's system-wide extensions in /System/Library/ExtensionKit/Extensions/, which carry com.apple.private.extensionkit.host-requirement-exemption. A 3P BrowserEngineKit browser bundles its own extensions inside its app bundle and requires com.apple.developer.web-browser-engine.host."
      )
    );
    calloutList.appendChild(li2);

    const li3 = el("li");
    li3.appendChild(el("strong", null, "Conditional Restricted Signing on iphoneos: "));
    li3.appendChild(
      document.createTextNode(
        "The static .entitlements files in Source/WebKit/UIProcess/AuxiliaryProcessExtensions/ only list BrowserEngineKit and public entitlements. However, when Apple builds WebKit for real iOS devices (WK_USE_RESTRICTED_ENTITLEMENTS == YES), "
      )
    );
    const linkScript = el("a", "ent-pointer-link", "Source/WebKit/Scripts/process-entitlements.sh#L469");
    linkScript.href = buildGitHubFileUrl("Source/WebKit/Scripts/process-entitlements.sh", 469);
    linkScript.target = "_blank";
    linkScript.rel = "noopener noreferrer";
    li3.appendChild(linkScript);
    li3.appendChild(
      document.createTextNode(
        " dynamically signs ~60 Apple-private entitlements into WebKit's iOS WebContent, GPU, Networking, webpushd, adattributiond, and Model processes."
      )
    );
    calloutList.appendChild(li3);

    callout.appendChild(calloutList);
    leftCol.appendChild(callout);
    heroGrid.appendChild(leftCol);

    // Right column: Interactive 4-tier + iOS exclusive cards
    const rightCol = el("div", "ent-tier-summary-stack");
    const tierCardsData = [
      {
        title: "Private to Apple",
        pill: "apple-private",
        count: DATA.category_counts["apple-private"] || 114,
        desc: "84 active on iOS production processes + 30 macOS/test-only private entitlements. Click to explore all 114.",
        onClick: () => jumpToExplorerWithFilters({ category: "apple-private" }),
      },
      {
        title: "Available to BrowserEngineKit",
        pill: "browserenginekit",
        count: DATA.category_counts["browserenginekit"] || 6,
        desc: "host, webcontent, rendering, networking, restrict.notifyd, and cs.allow-jit. Click to inspect all 6.",
        onClick: () => jumpToExplorerWithFilters({ category: "browserenginekit" }),
      },
      {
        title: "Restricted Some Other Way",
        pill: "restricted-other",
        count: DATA.category_counts["restricted-other"] || 20,
        desc: "5 iOS managed entitlements (default browser, ServiceWorkers, SharePlay, Digital ID, video decoder) + 15 sandbox exceptions.",
        onClick: () => jumpToExplorerWithFilters({ category: "restricted-other" }),
      },
      {
        title: "Generally Available (Public)",
        pill: "generally-available",
        count: DATA.category_counts["generally-available"] || 19,
        desc: "7 used on iOS (extended virtual addressing, hardened-process, keychain, app-groups) + 12 macOS App Sandbox entitlements.",
        onClick: () => jumpToExplorerWithFilters({ category: "generally-available" }),
      },
    ];

    tierCardsData.forEach((tc) => {
      const card = el("div", "ent-tier-card");
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      const textWrap = el("div");
      const titleRow = el("h3", "ent-tier-card-title");
      titleRow.appendChild(createCategoryBadge(tc.pill));
      titleRow.appendChild(el("span", null, tc.title));
      textWrap.appendChild(titleRow);
      textWrap.appendChild(el("p", "ent-tier-card-desc", tc.desc));
      card.appendChild(textWrap);
      card.appendChild(el("div", "ent-tier-card-count", tc.count));
      card.addEventListener("click", tc.onClick);
      card.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          tc.onClick();
        }
      });
      rightCol.appendChild(card);
    });

    heroGrid.appendChild(rightCol);
    heroCard.appendChild(heroGrid);
    container.appendChild(heroCard);

    // 2. Process-by-Process Signing Comparison Inspector
    const procSection = el("section", "ent-process-inspector");
    const procTabsBar = el("div", "ent-process-tabs");
    const procBody = el("div", "ent-process-body");

    function renderSelectedProcess() {
      procTabsBar.replaceChildren();
      procBody.replaceChildren();

      (DATA.process_comparison || []).forEach((procObj, idx) => {
        const btn = el(
          "button",
          `ent-process-tab-btn${idx === state.selectedProcessIdx ? " active" : ""}`
        );
        btn.type = "button";
        btn.appendChild(el("span", null, procObj.process));
        const countBadge = el(
          "span",
          "ent-pill ent-pill-slate",
          `${procObj.webkit_ios_entitlements.length} vs ${procObj.bek_entitlements.length}`
        );
        btn.appendChild(countBadge);
        btn.addEventListener("click", () => {
          state.selectedProcessIdx = idx;
          renderSelectedProcess();
        });
        procTabsBar.appendChild(btn);
      });

      const current = (DATA.process_comparison || [])[state.selectedProcessIdx];
      if (!current) return;

      const compareGrid = el("div", "ent-process-compare-grid");

      // WebKit System Process Column
      const wkCol = el("div", "ent-process-col ent-process-col-webkit");
      const wkTitle = el("h3", "ent-process-col-title");
      wkTitle.appendChild(el("span", null, `Apple System WebKit: ${current.webkit_binary}`));
      wkTitle.appendChild(
        el("span", "ent-pill ent-pill-private", `${current.webkit_ios_entitlements.length} Entitlements`)
      );
      wkCol.appendChild(wkTitle);
      wkCol.appendChild(el("p", "ent-process-col-sub", `Source: ${current.webkit_signing_source}`));

      const wkCloud = el("div", "ent-chip-cloud");
      current.webkit_ios_entitlements.forEach((item) => {
        const chip = el("button", "ent-code-chip");
        chip.type = "button";
        chip.title = `${item.short_purpose} (Click to inspect in Data Explorer)`;
        chip.appendChild(createCategoryBadge(item.category));
        chip.appendChild(el("span", null, item.entitlement));
        chip.addEventListener("click", () => {
          jumpToExplorerWithFilters({
            search: item.entitlement,
            expandKey: item.entitlement,
          });
        });
        wkCloud.appendChild(chip);
      });
      wkCol.appendChild(wkCloud);
      compareGrid.appendChild(wkCol);

      // 3P BrowserEngineKit Process Column
      const bekCol = el("div", "ent-process-col ent-process-col-bek");
      const bekTitle = el("h3", "ent-process-col-title");
      bekTitle.appendChild(el("span", null, `3P BrowserEngineKit: ${current.bek_binary}`));
      bekTitle.appendChild(
        el("span", "ent-pill ent-pill-bek", `${current.bek_entitlements.length} Entitlements`)
      );
      bekCol.appendChild(bekTitle);
      bekCol.appendChild(el("p", "ent-process-col-sub", `Source: ${current.bek_signing_source}`));

      const bekCloud = el("div", "ent-chip-cloud");
      if (current.bek_entitlements.length === 0) {
        bekCloud.appendChild(
          el(
            "p",
            "ent-dossier-text",
            "No BrowserEngineKit extension point exists for this auxiliary daemon. Third-party browser engines must either implement custom logic inside their host app / Networking extension or rely on OS-level APIs where available."
          )
        );
      } else {
        current.bek_entitlements.forEach((entKey) => {
          const match = ENTITLEMENTS.find((e) => e.entitlement === entKey);
          const chip = el("button", "ent-code-chip");
          chip.type = "button";
          chip.appendChild(createCategoryBadge(match ? match.category : "browserenginekit"));
          chip.appendChild(el("span", null, entKey));
          chip.addEventListener("click", () => {
            jumpToExplorerWithFilters({
              search: entKey,
              expandKey: entKey,
            });
          });
          bekCloud.appendChild(chip);
        });
      }
      bekCol.appendChild(bekCloud);
      compareGrid.appendChild(bekCol);

      procBody.appendChild(compareGrid);

      // Asymmetry highlights box
      const hiBox = el("div", "ent-highlights-box");
      hiBox.appendChild(
        el("h4", "ent-highlights-title", `Key Competitive & Architectural Implications for ${current.process}`)
      );
      const hiList = el("ul", "ent-highlights-list");
      (current.asymmetry_highlights || []).forEach((h) => {
        hiList.appendChild(el("li", null, h));
      });
      hiBox.appendChild(hiList);
      procBody.appendChild(hiBox);
    }

    renderSelectedProcess();
    procSection.appendChild(procTabsBar);
    procSection.appendChild(procBody);
    container.appendChild(procSection);

    // 3. Thematic Asymmetry Deep-Dive Cards (8 cards)
    const asymSection = el("section");
    asymSection.id = "thematic-gaps";
    const asymHeader = el("div", "card-header");
    const asymTitleWrap = el("div");
    asymTitleWrap.appendChild(
      el("h2", "card-title", "8 Major Entitlement Gaps Between WebKit and 3P BrowserEngineKit Browsers on iOS")
    );
    asymTitleWrap.appendChild(
      el(
        "p",
        "card-subtitle",
        "Click any entitlement pill to open its full code-pointer dossier, or click a domain button to filter the Data Explorer"
      )
    );
    asymHeader.appendChild(asymTitleWrap);
    asymSection.appendChild(asymHeader);

    const asymGrid = el("div", "ent-asymmetry-grid");
    THEMATIC_ASYMMETRIES.forEach((cardData) => {
      const card = el("article", "ent-asymmetry-card");
      card.id = "gap-" + cardData.slug;
      const hdr = el("div", "ent-asymmetry-header");
      hdr.appendChild(el("h3", "ent-asymmetry-title", cardData.title));
      hdr.appendChild(el("span", `ent-pill ${cardData.badgeClass}`, cardData.badge));
      card.appendChild(hdr);
      card.appendChild(el("p", "ent-asymmetry-body", cardData.body));

      const chipWrap = el("div", "ent-proc-list");
      cardData.entitlements.forEach((entKey) => {
        const chip = el("button", "ent-code-chip", entKey);
        chip.type = "button";
        chip.addEventListener("click", () => {
          jumpToExplorerWithFilters({
            search: entKey,
            expandKey: entKey,
          });
        });
        chipWrap.appendChild(chip);
      });
      card.appendChild(chipWrap);

      const actionRow = el("div");
      const filterBtn = el("button", "btn-secondary", `Explore ${cardData.filterDomain} in Data View →`);
      filterBtn.type = "button";
      filterBtn.addEventListener("click", () => {
        jumpToExplorerWithFilters({ domain: cardData.filterDomain });
      });
      actionRow.appendChild(filterBtn);
      card.appendChild(actionRow);

      asymGrid.appendChild(card);
    });
    asymSection.appendChild(asymGrid);
    container.appendChild(asymSection);
  }

  function renderKpis(filtered) {
    const grid = document.getElementById("kpiGrid");
    if (!grid) return;
    grid.replaceChildren();

    const privCount = filtered.filter((e) => e.category === "apple-private").length;
    const bekCount = filtered.filter((e) => e.category === "browserenginekit").length;
    const restCount = filtered.filter((e) => e.category === "restricted-other").length;
    const pubCount = filtered.filter((e) => e.category === "generally-available").length;
    const iosExclCount = filtered.filter((e) => e.ios_parity_status === "ios-webkit-exclusive").length;

    const kpis = [
      {
        label: "Matching Entitlements",
        value: `${filtered.length} / ${ENTITLEMENTS.length}`,
        sub: `${iosExclCount} iOS WebKit-Exclusive asymmetries`,
        accent: "teal",
      },
      {
        label: "Private to Apple",
        value: String(privCount),
        sub: `${filtered.length ? ((privCount / filtered.length) * 100).toFixed(1) : 0}% of matching entitlements`,
        accent: "red",
      },
      {
        label: "BrowserEngineKit (3P iOS)",
        value: String(bekCount),
        sub: "Available to 3P browser engines on iOS",
        accent: "blue",
      },
      {
        label: "Restricted (Other) / Public",
        value: `${restCount} / ${pubCount}`,
        sub: `${restCount} restricted-other · ${pubCount} generally-available`,
        accent: "amber",
      },
    ];

    kpis.forEach((k) => {
      const card = el("article", `kpi-card kpi-${k.accent}`);
      card.appendChild(el("div", "kpi-label", k.label));
      card.appendChild(el("div", "kpi-value", k.value));
      card.appendChild(el("div", "kpi-sub", k.sub));
      grid.appendChild(card);
    });
  }

  function renderQuickPills(filtered) {
    const bar = document.getElementById("categoryPillBar");
    if (!bar) return;
    bar.replaceChildren();

    const pills = [
      { key: "all", label: `All (${ENTITLEMENTS.length})` },
      { key: "apple-private", label: `Private to Apple (${DATA.category_counts["apple-private"] || 0})` },
      { key: "browserenginekit", label: `BrowserEngineKit (${DATA.category_counts["browserenginekit"] || 0})` },
      { key: "restricted-other", label: `Restricted Other (${DATA.category_counts["restricted-other"] || 0})` },
      { key: "generally-available", label: `Generally Available (${DATA.category_counts["generally-available"] || 0})` },
    ];

    pills.forEach((p) => {
      const btn = el("button", `pill-btn${state.category === p.key ? " active" : ""}`, p.label);
      btn.type = "button";
      btn.addEventListener("click", () => {
        state.category = p.key;
        syncControlsFromState();
        renderAll();
      });
      bar.appendChild(btn);
    });
  }

  function renderChart(filtered) {
    const svg = document.getElementById("mainChartSvg");
    const legend = document.getElementById("chartLegend");
    if (!svg || !legend) return;
    svg.replaceChildren();
    legend.replaceChildren();

    const stackMetaMap = state.chartStack === "parity" ? PARITY_META : CATEGORY_META;
    const stackKeys = Object.keys(stackMetaMap).sort(
      (a, b) => stackMetaMap[a].order - stackMetaMap[b].order
    );

    // Legend
    stackKeys.forEach((sk) => {
      const m = stackMetaMap[sk];
      const item = el("button", "legend-item");
      item.type = "button";
      const swatch = el("span", "legend-swatch");
      swatch.style.backgroundColor = m.color;
      item.appendChild(swatch);
      item.appendChild(el("span", null, m.label));
      item.addEventListener("click", () => {
        if (state.chartStack === "parity") {
          state.parity = state.parity === sk ? "all" : sk;
        } else {
          state.category = state.category === sk ? "all" : sk;
        }
        syncControlsFromState();
        renderAll();
      });
      legend.appendChild(item);
    });

    // Group items
    const groups = new Map();
    filtered.forEach((e) => {
      let gKeys = [];
      if (state.chartGroup === "domain") gKeys = [e.functional_domain];
      else if (state.chartGroup === "process") gKeys = e.canonical_processes || ["Other"];
      else if (state.chartGroup === "category") gKeys = [CATEGORY_META[e.category]?.shortLabel || e.category];
      else if (state.chartGroup === "parity") gKeys = [PARITY_META[e.ios_parity_status]?.shortLabel || e.ios_parity_status];

      const sKey = state.chartStack === "parity" ? e.ios_parity_status : e.category;
      gKeys.forEach((gk) => {
        if (!groups.has(gk)) {
          const init = { total: 0 };
          stackKeys.forEach((k) => (init[k] = 0));
          groups.set(gk, init);
        }
        const entry = groups.get(gk);
        entry[sKey] = (entry[sKey] || 0) + 1;
        entry.total += 1;
      });
    });

    const sortedGroups = Array.from(groups.entries()).sort((a, b) => b[1].total - a[1].total);
    if (sortedGroups.length === 0) {
      svg.setAttribute("viewBox", "0 0 800 120");
      svg.appendChild(
        svgEl("text", { x: 400, y: 65, "text-anchor": "middle", fill: "#64748b", "font-size": 14 })
      ).textContent = "No entitlements match the current filters.";
      return;
    }

    const rowHeight = 32;
    const topPad = 20;
    const bottomPad = 24;
    const leftPad = 235;
    const rightPad = 60;
    const width = 920;
    const height = topPad + sortedGroups.length * rowHeight + bottomPad;
    const plotWidth = width - leftPad - rightPad;
    const maxTotal = Math.max(...sortedGroups.map(([, d]) => d.total), 1);

    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    sortedGroups.forEach(([gLabel, counts], idx) => {
      const y = topPad + idx * rowHeight;
      const labelNode = svgEl("text", {
        x: leftPad - 10,
        y: y + 19,
        "text-anchor": "end",
        fill: "#1e293b",
        "font-size": 12,
        "font-weight": 500,
      });
      labelNode.textContent = gLabel.length > 32 ? gLabel.slice(0, 30) + "…" : gLabel;
      svg.appendChild(labelNode);

      let curX = leftPad;
      stackKeys.forEach((sk) => {
        const val = counts[sk] || 0;
        if (val <= 0) return;
        const w = Math.max((val / maxTotal) * plotWidth, 3);
        const rect = svgEl("rect", {
          x: curX,
          y: y + 5,
          width: w,
          height: 20,
          rx: 3,
          fill: stackMetaMap[sk].color,
          cursor: "pointer",
        });
        const title = svgEl("title");
        title.textContent = `${gLabel} — ${stackMetaMap[sk].label}: ${val}`;
        rect.appendChild(title);
        rect.addEventListener("click", () => {
          if (state.chartGroup === "domain") state.domain = gLabel;
          else if (state.chartGroup === "process") state.process = gLabel;
          if (state.chartStack === "parity") state.parity = sk;
          else state.category = sk;
          syncControlsFromState();
          renderAll();
        });
        svg.appendChild(rect);
        curX += w + 1;
      });

      const totalNode = svgEl("text", {
        x: curX + 6,
        y: y + 19,
        fill: "#475569",
        "font-size": 11.5,
        "font-weight": 600,
      });
      totalNode.textContent = String(counts.total);
      svg.appendChild(totalNode);
    });
  }

  function renderBreakdowns(filtered) {
    const catList = document.getElementById("categoryBreakdownList");
    const domList = document.getElementById("domainBreakdownList");
    const procParityList = document.getElementById("processParityBreakdownList");
    if (!catList || !domList || !procParityList) return;

    catList.replaceChildren();
    domList.replaceChildren();
    procParityList.replaceChildren();

    function buildBreakdownRows(container, entries, activeKey, onClickKey) {
      const total = Math.max(filtered.length, 1);
      entries.forEach(({ key, label, count, color }) => {
        const row = el("div", `breakdown-row${activeKey === key ? " active" : ""}`);
        const top = el("div", "breakdown-row-top");
        const nameSpan = el("span", "breakdown-name", label);
        const countSpan = el("span", "breakdown-count", `${count} (${((count / total) * 100).toFixed(0)}%)`);
        top.appendChild(nameSpan);
        top.appendChild(countSpan);
        row.appendChild(top);

        const barTrack = el("div", "breakdown-bar-track");
        const barFill = el("div", "breakdown-bar-fill");
        barFill.style.width = `${Math.max((count / total) * 100, 2)}%`;
        if (color) barFill.style.backgroundColor = color;
        barTrack.appendChild(barFill);
        row.appendChild(barTrack);

        row.addEventListener("click", () => onClickKey(key));
        container.appendChild(row);
      });
    }

    // 1. Category breakdown
    const catCounts = {};
    filtered.forEach((e) => (catCounts[e.category] = (catCounts[e.category] || 0) + 1));
    const catEntries = Object.keys(CATEGORY_META)
      .sort((a, b) => CATEGORY_META[a].order - CATEGORY_META[b].order)
      .map((k) => ({
        key: k,
        label: CATEGORY_META[k].label,
        count: catCounts[k] || 0,
        color: CATEGORY_META[k].color,
      }));
    buildBreakdownRows(catList, catEntries, state.category, (k) => {
      state.category = state.category === k ? "all" : k;
      syncControlsFromState();
      renderAll();
    });

    // 2. Domain breakdown
    const domCounts = {};
    filtered.forEach((e) => (domCounts[e.functional_domain] = (domCounts[e.functional_domain] || 0) + 1));
    const domEntries = Object.entries(domCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([d, c]) => ({
        key: d,
        label: d,
        count: c,
        color: "#0f766e",
      }));
    buildBreakdownRows(domList, domEntries, state.domain, (d) => {
      state.domain = state.domain === d ? "all" : d;
      syncControlsFromState();
      renderAll();
    });

    // 3. Process or iOS Parity breakdown
    if (state.rightBreakdownTab === "parity") {
      const pCounts = {};
      filtered.forEach((e) => (pCounts[e.ios_parity_status] = (pCounts[e.ios_parity_status] || 0) + 1));
      const pEntries = Object.keys(PARITY_META)
        .sort((a, b) => PARITY_META[a].order - PARITY_META[b].order)
        .map((k) => ({
          key: k,
          label: PARITY_META[k].label,
          count: pCounts[k] || 0,
          color: PARITY_META[k].color,
        }));
      buildBreakdownRows(procParityList, pEntries, state.parity, (k) => {
        state.parity = state.parity === k ? "all" : k;
        syncControlsFromState();
        renderAll();
      });
    } else {
      const prCounts = {};
      filtered.forEach((e) => {
        (e.canonical_processes || []).forEach((p) => {
          prCounts[p] = (prCounts[p] || 0) + 1;
        });
      });
      const prEntries = Object.entries(prCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([p, c]) => ({
          key: p,
          label: p,
          count: c,
          color: "#0284c7",
        }));
      buildBreakdownRows(procParityList, prEntries, state.process, (p) => {
        state.process = state.process === p ? "all" : p;
        syncControlsFromState();
        renderAll();
      });
    }
  }

  function sortEntitlements(list) {
    const arr = [...list];
    arr.sort((a, b) => {
      if (state.sortBy === "key-asc") {
        return a.entitlement.localeCompare(b.entitlement);
      }
      if (state.sortBy === "category-asc") {
        const ca = CATEGORY_META[a.category]?.order || 9;
        const cb = CATEGORY_META[b.category]?.order || 9;
        if (ca !== cb) return ca - cb;
        return a.entitlement.localeCompare(b.entitlement);
      }
      if (state.sortBy === "domain-asc") {
        const cmp = a.functional_domain.localeCompare(b.functional_domain);
        if (cmp !== 0) return cmp;
        return a.entitlement.localeCompare(b.entitlement);
      }
      if (state.sortBy === "refs-desc") {
        const ra = (a.key_code_pointers?.length || 0) + (a.related_spis_count || 0);
        const rb = (b.key_code_pointers?.length || 0) + (b.related_spis_count || 0);
        if (rb !== ra) return rb - ra;
        return a.entitlement.localeCompare(b.entitlement);
      }
      // Default: parity-asc
      const pa = PARITY_META[a.ios_parity_status]?.order || 9;
      const pb = PARITY_META[b.ios_parity_status]?.order || 9;
      if (pa !== pb) return pa - pb;
      return a.entitlement.localeCompare(b.entitlement);
    });
    return arr;
  }

  function buildExpandedDossierRow(e) {
    const tr = el("tr", "detail-row");
    const td = el("td");
    td.colSpan = 8;

    const panel = el("div", "ent-dossier-panel");

    // Top 2-column summary: WebKit Usage Summary vs 3P BrowserEngineKit Implications
    const summaryGrid = el("div", "ent-dossier-grid");

    const wkBox = el("div", "ent-dossier-box ent-dossier-box-wk");
    wkBox.appendChild(el("h4", "ent-dossier-heading", "What WebKit Uses This Entitlement To Do"));
    wkBox.appendChild(el("p", "ent-dossier-text", e.webkit_usage_summary || e.short_purpose));
    summaryGrid.appendChild(wkBox);

    const bekBox = el("div", "ent-dossier-box ent-dossier-box-bek");
    bekBox.appendChild(
      el("h4", "ent-dossier-heading", "Implications for 3P iOS Browsers Using BrowserEngineKit")
    );
    bekBox.appendChild(el("p", "ent-dossier-text", e.browserenginekit_implications));
    summaryGrid.appendChild(bekBox);

    panel.appendChild(summaryGrid);

    // Second 2-column grid: Key Code Pointers & Key Git Commits
    const codeGrid = el("div", "ent-dossier-grid");

    const pointersBox = el("div", "ent-dossier-box");
    pointersBox.appendChild(
      el("h4", "ent-dossier-heading", `Key WebKit Source Code Pointers (${(e.key_code_pointers || []).length})`)
    );
    const pList = el("ul", "ent-pointers-list");
    (e.key_code_pointers || []).forEach((pt) => {
      const li = el("li", "ent-pointer-item");
      const a = el("a", "ent-pointer-link", `${pt.file}${pt.line ? ":" + pt.line : ""}`);
      a.href = buildGitHubFileUrl(pt.file, pt.line);
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
      if (pt.role) {
        li.appendChild(el("span", "ent-pointer-role", pt.role));
      }
      pList.appendChild(li);
    });
    pointersBox.appendChild(pList);
    codeGrid.appendChild(pointersBox);

    const commitsBox = el("div", "ent-dossier-box");
    commitsBox.appendChild(
      el(
        "h4",
        "ent-dossier-heading",
        `Relevant WebKit Git Commits & Enforcement Metadata (${(e.key_commits || []).length} Commits)`
      )
    );
    const cList = el("ul", "ent-pointers-list");
    (e.key_commits || []).forEach((c) => {
      const li = el("li", "ent-pointer-item");
      const a = el("a", "ent-commit-badge", c.hash.slice(0, 10));
      a.href = buildGitHubCommitUrl(c.hash);
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
      li.appendChild(el("strong", null, c.date ? `(${c.date}) ` : ""));
      li.appendChild(el("span", null, c.subject || ""));
      if (c.significance) {
        li.appendChild(el("span", "ent-pointer-role", c.significance));
      }
      cList.appendChild(li);
    });

    // Also show related iOS SPIs if present
    if ((e.related_spis || []).length > 0) {
      const spiLi = el("li", "ent-pointer-item");
      spiLi.appendChild(
        el(
          "strong",
          null,
          `Gated iOS Private APIs (SPIs) (${e.related_spis_count} total): `
        )
      );
      spiLi.appendChild(
        el(
          "span",
          null,
          e.related_spis.map((s) => `${s.name} (${s.framework})`).join(", ")
        )
      );
      cList.appendChild(spiLi);
    }

    commitsBox.appendChild(cList);
    codeGrid.appendChild(commitsBox);

    panel.appendChild(codeGrid);
    td.appendChild(panel);
    tr.appendChild(td);
    return tr;
  }

  function renderTable(filtered) {
    const tbody = document.getElementById("entitlementsTableBody");
    const summaryText = document.getElementById("tableSummaryText");
    if (!tbody) return;
    tbody.replaceChildren();

    const sorted = sortEntitlements(filtered);
    if (summaryText) {
      summaryText.textContent = `Showing ${sorted.length} of ${ENTITLEMENTS.length} entitlements — click any row to inspect WebKit usage summary, 3P BrowserEngineKit implications, source code pointers, and GitHub commits`;
    }

    sorted.forEach((e) => {
      const isExpanded = state.expandedKeys.has(e.entitlement);
      const tr = el("tr", `change-row${isExpanded ? " expanded" : ""}`);

      const tdExpand = el("td", "col-expand", isExpanded ? "▾" : "▸");
      tr.appendChild(tdExpand);

      const tdKey = el("td", "ent-key-cell", e.entitlement);
      tr.appendChild(tdKey);

      const tdCat = el("td");
      tdCat.appendChild(createCategoryBadge(e.category));
      tr.appendChild(tdCat);

      const tdParity = el("td");
      tdParity.appendChild(createParityBadge(e.ios_parity_status));
      tr.appendChild(tdParity);

      const tdProcs = el("td");
      const procWrap = el("div", "ent-proc-list");
      (e.canonical_processes || []).forEach((p) => {
        procWrap.appendChild(el("span", "ent-pill ent-pill-slate", p));
      });
      tdProcs.appendChild(procWrap);
      tr.appendChild(tdProcs);

      const tdDom = el("td", null, e.functional_domain);
      tr.appendChild(tdDom);

      const tdPurpose = el("td", null, e.short_purpose);
      tr.appendChild(tdPurpose);

      const tdRefs = el("td");
      const firstPtr = (e.key_code_pointers || [])[0];
      if (firstPtr) {
        const a = el(
          "a",
          "ent-pointer-link",
          `${firstPtr.file.split("/").slice(-2).join("/")}${firstPtr.line ? ":" + firstPtr.line : ""}`
        );
        a.href = buildGitHubFileUrl(firstPtr.file, firstPtr.line);
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.addEventListener("click", (ev) => ev.stopPropagation());
        tdRefs.appendChild(a);
      }
      const extraCount = (e.key_code_pointers || []).length + (e.key_commits || []).length;
      const metaSpan = el(
        "div",
        "card-hint",
        `${(e.key_code_pointers || []).length} code ptrs · ${(e.key_commits || []).length} commits${
          e.related_spis_count ? ` · ${e.related_spis_count} SPIs` : ""
        }`
      );
      tdRefs.appendChild(metaSpan);
      tr.appendChild(tdRefs);

      tr.addEventListener("click", () => {
        if (state.expandedKeys.has(e.entitlement)) {
          state.expandedKeys.delete(e.entitlement);
        } else {
          state.expandedKeys.add(e.entitlement);
        }
        renderTable(filtered);
      });

      tbody.appendChild(tr);
      if (isExpanded) {
        tbody.appendChild(buildExpandedDossierRow(e));
      }
    });
  }

  function exportCsv(filtered) {
    const headers = [
      "Entitlement",
      "Availability Category",
      "iOS Parity Status",
      "Functional Domain",
      "Canonical Processes",
      "Platforms",
      "Short Purpose",
      "WebKit Usage Summary",
      "3P BrowserEngineKit Implications",
      "Key Code Pointers",
      "Key Commits",
    ];
    const rows = [headers];
    filtered.forEach((e) => {
      rows.push([
        e.entitlement,
        e.category,
        e.ios_parity_status,
        e.functional_domain,
        (e.canonical_processes || []).join("; "),
        (e.platforms || []).join("; "),
        e.short_purpose,
        e.webkit_usage_summary,
        e.browserenginekit_implications,
        (e.key_code_pointers || []).map((p) => `${p.file}:${p.line || 1}`).join("; "),
        (e.key_commits || []).map((c) => c.hash.slice(0, 12)).join("; "),
      ]);
    });
    const csvContent = rows
      .map((r) =>
        r
          .map((cell) => {
            const s = String(cell ?? "");
            return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
          })
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = el("a");
    a.href = url;
    a.download = "webkit_entitlements_analysis.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function syncStateToUrl() {
    const params = new URLSearchParams();
    if (state.activeView !== "insights") params.set("view", state.activeView);
    if (state.category !== "all") params.set("cat", state.category);
    if (state.parity !== "all") params.set("parity", state.parity);
    if (state.process !== "all") params.set("proc", state.process);
    if (state.domain !== "all") params.set("dom", state.domain);
    if (state.enforcement !== "all") params.set("enf", state.enforcement);
    if (state.search) params.set("q", state.search);
    const qs = params.toString();
    // Preserve in-page deep-link anchors (e.g. #gap-jit-hardening from index.html) while on the
    // Insights view; previously this replaceState() wiped the fragment before it could be used.
    const keepHash = state.activeView === "insights" ? window.location.hash : "";
    const newUrl = `${window.location.pathname}${qs ? "?" + qs : ""}${keepHash}`;
    window.history.replaceState(null, "", newUrl);
  }

  function loadStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("view")) state.activeView = params.get("view");
    if (params.get("cat")) state.category = params.get("cat");
    if (params.get("parity")) state.parity = params.get("parity");
    if (params.get("proc")) state.process = params.get("proc");
    if (params.get("dom")) state.domain = params.get("dom");
    if (params.get("enf")) state.enforcement = params.get("enf");
    if (params.get("q")) state.search = params.get("q");
  }

  function renderAll() {
    const filtered = getFilteredEntitlements();
    const badge = document.getElementById("explorerTabCountBadge");
    if (badge) badge.textContent = String(filtered.length);

    renderKpis(filtered);
    renderQuickPills(filtered);
    renderChart(filtered);
    renderBreakdowns(filtered);
    renderTable(filtered);
    syncStateToUrl();
  }

  function init() {
    const metaBadge = document.getElementById("datasetMetaBadge");
    if (metaBadge) {
      const shortSha = (DATA.webkit_head || "").slice(0, 10);
      metaBadge.textContent = `159 Entitlements · WebKit @ ${shortSha || "HEAD"}`;
    }

    populateFilterDropdowns();
    loadStateFromUrl();
    syncControlsFromState();
    renderInsightsTab();
    renderAll();
    setViewTab(state.activeView, true);

    // Deep links (e.g. entitlements.html#gap-jit-hardening from index.html). The target cards are
    // rendered dynamically, so the browser's native fragment scroll can't find them on load.
    const scrollToHashAnchor = (smooth) => {
      let anchorId = window.location.hash.slice(1);
      if (!anchorId) return;
      try {
        anchorId = decodeURIComponent(anchorId);
      } catch (_e) {
        // Use the raw fragment
      }
      const target = document.getElementById(anchorId);
      if (!target) return;
      const insPanel = document.getElementById("insightsViewPanel");
      const expPanel = document.getElementById("explorerViewPanel");
      if (insPanel && insPanel.contains(target) && state.activeView !== "insights") {
        setViewTab("insights");
      } else if (expPanel && expPanel.contains(target) && state.activeView !== "explorer") {
        setViewTab("explorer");
      }
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
      });
    };
    setTimeout(() => scrollToHashAnchor(false), 0);
    window.addEventListener("hashchange", () => scrollToHashAnchor(true));


    // Event Listeners
    document.getElementById("viewTabInsights")?.addEventListener("click", () => setViewTab("insights"));
    document.getElementById("viewTabExplorer")?.addEventListener("click", () => setViewTab("explorer"));

    const toggleMethBtn = document.getElementById("toggleMethodologyBtn");
    const methPanel = document.getElementById("methodologyPanel");
    if (toggleMethBtn && methPanel) {
      toggleMethBtn.addEventListener("click", () => {
        const isHidden = methPanel.classList.toggle("hidden");
        toggleMethBtn.setAttribute("aria-expanded", String(!isHidden));
      });
    }

    document.getElementById("filterCategory")?.addEventListener("change", (e) => {
      state.category = e.target.value;
      renderAll();
    });
    document.getElementById("filterParity")?.addEventListener("change", (e) => {
      state.parity = e.target.value;
      renderAll();
    });
    document.getElementById("filterProcess")?.addEventListener("change", (e) => {
      state.process = e.target.value;
      renderAll();
    });
    document.getElementById("filterDomain")?.addEventListener("change", (e) => {
      state.domain = e.target.value;
      renderAll();
    });
    document.getElementById("filterEnforcement")?.addEventListener("change", (e) => {
      state.enforcement = e.target.value;
      renderAll();
    });
    document.getElementById("filterSearch")?.addEventListener("input", (e) => {
      state.search = e.target.value;
      renderAll();
    });
    document.getElementById("chartGroupSelect")?.addEventListener("change", (e) => {
      state.chartGroup = e.target.value;
      renderAll();
    });
    document.getElementById("chartStackSelect")?.addEventListener("change", (e) => {
      state.chartStack = e.target.value;
      renderAll();
    });
    document.getElementById("tableSortSelect")?.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderAll();
    });

    const tabProcessBtn = document.getElementById("tabProcessBtn");
    const tabParityBtn = document.getElementById("tabParityBtn");
    tabProcessBtn?.addEventListener("click", () => {
      state.rightBreakdownTab = "process";
      tabProcessBtn.classList.add("active");
      tabParityBtn?.classList.remove("active");
      renderBreakdowns(getFilteredEntitlements());
    });
    tabParityBtn?.addEventListener("click", () => {
      state.rightBreakdownTab = "parity";
      tabParityBtn.classList.add("active");
      tabProcessBtn?.classList.remove("active");
      renderBreakdowns(getFilteredEntitlements());
    });

    document.getElementById("resetFiltersBtn")?.addEventListener("click", () => {
      state.category = "all";
      state.parity = "all";
      state.process = "all";
      state.domain = "all";
      state.enforcement = "all";
      state.search = "";
      state.expandedKeys.clear();
      syncControlsFromState();
      renderAll();
    });

    document.getElementById("exportCsvBtn")?.addEventListener("click", () => {
      exportCsv(getFilteredEntitlements());
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
