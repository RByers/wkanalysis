window.__WKANALYZE_ENTITLEMENTS_DATA__ = {
  "webkit_head": "a018777818d96e2c5afc5e1967f001f5bd621a98",
  "github_repo_url": "https://github.com/WebKit/WebKit",
  "total_entitlements": 159,
  "category_counts": {
    "apple-private": 114,
    "restricted-other": 20,
    "generally-available": 19,
    "browserenginekit": 6
  },
  "ios_parity_counts": {
    "ios-webkit-exclusive": 84,
    "browserenginekit-granted": 6,
    "ios-managed-approval": 5,
    "ios-public-parity": 7,
    "macos-or-harness-only": 57
  },
  "domain_breakdown": [
    {
      "domain": "macOS App Sandbox & Exceptions",
      "total": 23,
      "apple-private": 3,
      "restricted-other": 14,
      "generally-available": 6,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 4
    },
    {
      "domain": "Media, Audio & AirPlay",
      "total": 19,
      "apple-private": 14,
      "restricted-other": 3,
      "generally-available": 2,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 11
    },
    {
      "domain": "Process Launching & BrowserEngineKit",
      "total": 17,
      "apple-private": 10,
      "restricted-other": 1,
      "generally-available": 1,
      "browserenginekit": 5,
      "ios_webkit_exclusive": 6
    },
    {
      "domain": "JIT & Memory Hardening",
      "total": 14,
      "apple-private": 9,
      "restricted-other": 0,
      "generally-available": 4,
      "browserenginekit": 1,
      "ios_webkit_exclusive": 8
    },
    {
      "domain": "System UI, SpringBoard & Status Bar",
      "total": 14,
      "apple-private": 14,
      "restricted-other": 0,
      "generally-available": 0,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 13
    },
    {
      "domain": "Developer Tools & Testing",
      "total": 13,
      "apple-private": 11,
      "restricted-other": 0,
      "generally-available": 2,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 5
    },
    {
      "domain": "Networking & Privacy Proxies",
      "total": 12,
      "apple-private": 10,
      "restricted-other": 0,
      "generally-available": 2,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 6
    },
    {
      "domain": "Storage, Assets & System Databases",
      "total": 11,
      "apple-private": 10,
      "restricted-other": 0,
      "generally-available": 1,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 5
    },
    {
      "domain": "GPU, Graphics & Display",
      "total": 9,
      "apple-private": 9,
      "restricted-other": 0,
      "generally-available": 0,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 8
    },
    {
      "domain": "Lockdown Mode & Parental Controls",
      "total": 6,
      "apple-private": 6,
      "restricted-other": 0,
      "generally-available": 0,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 4
    },
    {
      "domain": "RunningBoard & Process Lifecycle",
      "total": 6,
      "apple-private": 6,
      "restricted-other": 0,
      "generally-available": 0,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 4
    },
    {
      "domain": "WebKit Internal IPC & Features",
      "total": 6,
      "apple-private": 5,
      "restricted-other": 1,
      "generally-available": 0,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 5
    },
    {
      "domain": "TCC, Privacy & Permissions",
      "total": 4,
      "apple-private": 4,
      "restricted-other": 0,
      "generally-available": 0,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 3
    },
    {
      "domain": "Apple Pay, PassKit & Identity",
      "total": 3,
      "apple-private": 2,
      "restricted-other": 1,
      "generally-available": 0,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 2
    },
    {
      "domain": "Accessibility & Text Input",
      "total": 1,
      "apple-private": 1,
      "restricted-other": 0,
      "generally-available": 0,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 0
    },
    {
      "domain": "Keychain, Crypto & Security",
      "total": 1,
      "apple-private": 0,
      "restricted-other": 0,
      "generally-available": 1,
      "browserenginekit": 0,
      "ios_webkit_exclusive": 0
    }
  ],
  "process_comparison": [
    {
      "process": "WebContent Process",
      "webkit_binary": "com.apple.WebKit.WebContent (LaunchServices XPC / System Extension)",
      "bek_binary": "3P WebContentExtension (BEWebContentProcess)",
      "webkit_signing_source": "Source/WebKit/Scripts/process-entitlements.sh (ios_family_process_webcontent_shared_entitlements + ios_family_process_webcontent_entitlements)",
      "bek_signing_source": "Source/WebKit/UIProcess/AuxiliaryProcessExtensions/WebContentExtension-iOS.entitlements",
      "bek_entitlements": [
        "com.apple.developer.web-browser-engine.webcontent",
        "com.apple.developer.cs.allow-jit",
        "com.apple.developer.kernel.extended-virtual-addressing",
        "com.apple.developer.web-browser-engine.restrict.notifyd"
      ],
      "webkit_ios_entitlements": [
        {
          "entitlement": "com.apple.QuartzCore.secure-mode",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Enforces CoreAnimation RenderServer secure mode restrictions and validation when hosting or rendering layer trees across process boundaries."
        },
        {
          "entitlement": "com.apple.QuartzCore.webkit-end-points",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Permits sandboxed processes to communicate with restricted QuartzCore / CoreAnimation Mach endpoints for remote layer hosting and rendering."
        },
        {
          "entitlement": "com.apple.QuartzCore.webkit-limited-types",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Restricts QuartzCore (CoreAnimation) object serialization and deserialization to an allowlisted, hardened subset of types for inter-process layer hosting."
        },
        {
          "entitlement": "com.apple.coreaudio.LoadDecodersInProcess",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Permits CoreAudio and AudioToolbox to load audio decoder plugins and components directly into the calling process rather than delegating decoding to an external system daemon."
        },
        {
          "entitlement": "com.apple.coreaudio.allow-vorbis-decode",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Grants permission to instantiate and use Apple's system CoreAudio / AudioToolbox Vorbis audio decoder."
        },
        {
          "entitlement": "com.apple.developer.coremedia.allow-alternate-video-decoder-selection",
          "category": "restricted-other",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Allows an application or process to query and select alternate or non-standard video decoders (such as VP9 decoding pipelines) within CoreMedia and VideoToolbox."
        },
        {
          "entitlement": "com.apple.developer.cs.allow-jit",
          "category": "browserenginekit",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Allows an iOS application or extension process to allocate writable and executable memory regions for just-in-time (JIT) compilation."
        },
        {
          "entitlement": "com.apple.developer.hardened-process",
          "category": "generally-available",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Opts the process into system-enforced runtime hardening and enhanced security mitigations against memory corruption and tampering."
        },
        {
          "entitlement": "com.apple.developer.kernel.extended-virtual-addressing",
          "category": "generally-available",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Enables 64-bit processes on iOS, iPadOS, and macOS to access an extended virtual address space beyond standard kernel virtual memory constraints."
        },
        {
          "entitlement": "com.apple.developer.web-browser-engine.restrict.notifyd",
          "category": "browserenginekit",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Restricts direct access to the Darwin notification center daemon (notifyd) from sandboxed WebContent processes while enabling the UIProcess to broker and forward allowlisted system notifications over IPC."
        },
        {
          "entitlement": "com.apple.imageio.allowabletypes",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Restricts the system ImageIO framework to decoding only an explicitly allowlisted set of image UTIs, reducing parser attack surface."
        },
        {
          "entitlement": "com.apple.mediaremote.set-playback-state",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Permits a process to update the system-wide media playback state directly via the private MediaRemote daemon."
        },
        {
          "entitlement": "com.apple.pac.shared_region_id",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Assigns a process to an isolated Pointer Authentication Code (PAC) shared region domain in the dyld shared cache to prevent cross-process PAC signature forgery."
        },
        {
          "entitlement": "com.apple.private.allow-explicit-graphics-priority",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Grants permission to explicitly specify scheduling and execution priorities for graphics rendering workloads and interact with low-level display/framebuffer subsystems."
        },
        {
          "entitlement": "com.apple.private.coremedia.extensions.audiorecording.allow",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Allows an XPC service or extension process to perform audio recording and access audio capture sessions through CoreMedia."
        },
        {
          "entitlement": "com.apple.private.coremedia.pidinheritance.allow",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Allows CoreMedia client processes to pass and inherit client process identifiers (PIDs) across media services for proper session attribution, power accounting, and playback state management."
        },
        {
          "entitlement": "com.apple.private.darwin-notification.introspect",
          "category": "apple-private",
          "functional_domain": "WebKit Internal IPC & Features",
          "short_purpose": "Grants a sandboxed process permission to introspect or observe specific Darwin notifications from an explicit allowlist when notifyd access is restricted."
        },
        {
          "entitlement": "com.apple.private.disable-log-mach-ports",
          "category": "apple-private",
          "functional_domain": "WebKit Internal IPC & Features",
          "short_purpose": "Instructs system logging libraries (os_log/libtrace) to avoid opening Mach ports to system logging daemons (such as logd and diagnosticd)."
        },
        {
          "entitlement": "com.apple.private.gpu-restricted",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Restricts the process's graphics driver and IOKit user client interface to a hardened, filtered subset of GPU commands to limit kernel attack surface."
        },
        {
          "entitlement": "com.apple.private.memorystatus",
          "category": "apple-private",
          "functional_domain": "RunningBoard & Process Lifecycle",
          "short_purpose": "Grants permission to call privileged Darwin kernel memorystatus control APIs to configure and query Jetsam memory limits and process memory status properties."
        },
        {
          "entitlement": "com.apple.private.network.socket-delegate",
          "category": "apple-private",
          "functional_domain": "Networking & Privacy Proxies",
          "short_purpose": "Grants Darwin kernel privilege PRIV_NET_PRIVILEGED_SOCKET_DELEGATE to delegate socket ownership and attribute network traffic, cellular data, and power usage to client applications."
        },
        {
          "entitlement": "com.apple.private.pac.exception",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Configures the XNU kernel to treat Pointer Authentication Code (PAC) validation failures as immediately fatal, terminating the process upon a PAC authentication fault."
        },
        {
          "entitlement": "com.apple.private.sandbox.profile",
          "category": "apple-private",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Specifies the name of a system-defined Seatbelt sandbox profile that the OS kernel automatically applies to the process upon launch."
        },
        {
          "entitlement": "com.apple.private.security.enable-state-flags",
          "category": "apple-private",
          "functional_domain": "macOS App Sandbox & Exceptions",
          "short_purpose": "Authorizes a process to dynamically toggle specified Seatbelt sandbox state flags at runtime via sandbox_enable_state_flag."
        },
        {
          "entitlement": "com.apple.private.security.mutable-state-flags",
          "category": "apple-private",
          "functional_domain": "macOS App Sandbox & Exceptions",
          "short_purpose": "Permits a process to dynamically toggle or mutate specific Seatbelt sandbox state flags at runtime."
        },
        {
          "entitlement": "com.apple.private.verified-jit",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Enables Apple kernel-level verified JIT code execution and JIT Cage memory hardening mechanisms."
        },
        {
          "entitlement": "com.apple.private.webinspector.allow-remote-inspection",
          "category": "apple-private",
          "functional_domain": "Developer Tools & Testing",
          "short_purpose": "Allows remote Web Inspector debugging and inspection of web and JavaScript contexts without requiring developer provisioning profiles (get-task-allow)."
        },
        {
          "entitlement": "com.apple.private.webinspector.proxy-application",
          "category": "apple-private",
          "functional_domain": "Developer Tools & Testing",
          "short_purpose": "Allows an out-of-process service to register with webinspectord as a proxy application for remote Web Inspector debugging sessions."
        },
        {
          "entitlement": "com.apple.private.webkit.enhanced-security",
          "category": "apple-private",
          "functional_domain": "Lockdown Mode & Parental Controls",
          "short_purpose": "Identifies a WebContent auxiliary process as running in Enhanced Security mode, enabling UIProcess verification of the hardened process variant."
        },
        {
          "entitlement": "com.apple.private.webkit.lockdown-mode",
          "category": "apple-private",
          "functional_domain": "Lockdown Mode & Parental Controls",
          "short_purpose": "Identifies a WebContent auxiliary process running under Lockdown Mode with disabled JIT and restricted capabilities."
        },
        {
          "entitlement": "com.apple.private.webkit.use-xpc-endpoint",
          "category": "apple-private",
          "functional_domain": "WebKit Internal IPC & Features",
          "short_purpose": "Authorizes WebKit auxiliary processes to establish and communicate over internal anonymous XPC endpoints."
        },
        {
          "entitlement": "com.apple.runningboard.assertions.webkit",
          "category": "apple-private",
          "functional_domain": "RunningBoard & Process Lifecycle",
          "short_purpose": "Authorizes a process to acquire RunningBoard process lifecycle and power management assertions within the private 'com.apple.webkit' assertion domain."
        },
        {
          "entitlement": "com.apple.security.fatal-exceptions",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Configures the Darwin kernel and OS runtime hardening to treat specified exceptions (such as JIT faults) as non-recoverable and immediately terminate the process."
        },
        {
          "entitlement": "com.apple.security.hardened-process.checked-allocations.no-tagged-receive",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Disables receiving tagged memory allocations across Mach IPC boundaries under OS checked allocations and hardware Memory Tagging Extension (MTE) hardening."
        },
        {
          "entitlement": "dynamic-codesigning",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Allows a process to generate and execute unsigned machine code dynamically in memory without kernel code signature verification on iOS-family platforms."
        }
      ],
      "asymmetry_highlights": [
        "PAC Key Sharing & Verified JIT: WebKit's WebContent process is signed with com.apple.pac.shared_region_id ('WebKit') and com.apple.private.verified-jit, plus com.apple.security.fatal-exceptions ('jit'). Third-party BrowserEngineKit engines receive standard MAP_JIT (com.apple.developer.cs.allow-jit) without custom PAC shared region isolation or Apple-internal verified-JIT CS flags.",
        "Lockdown Mode & Enhanced Security Profiles: WebKit ships dedicated WebContent.CaptivePortal and WebContent.EnhancedSecurity helper variants signed with checked-allocations (MIE/Exclaves), PAC exceptions, and Lockdown Mode sandbox profiles.",
        "Direct Darwin Notification Introspection & Process Memory Status: WebKit holds com.apple.private.darwin-notification.introspect, com.apple.private.memorystatus, and com.apple.private.allow-explicit-graphics-priority.",
        "System Extension Host Exemption: WebKit's system WebContent extension holds com.apple.private.extensionkit.host-requirement-exemption so any WKWebView app can launch it without com.apple.developer.web-browser-engine.host."
      ]
    },
    {
      "process": "GPU / Rendering Process",
      "webkit_binary": "com.apple.WebKit.GPU (LaunchServices XPC / System Extension)",
      "bek_binary": "3P GPUExtension (BERenderingProcess)",
      "webkit_signing_source": "Source/WebKit/Scripts/process-entitlements.sh (ios_family_process_gpu_entitlements)",
      "bek_signing_source": "Source/WebKit/UIProcess/AuxiliaryProcessExtensions/GPUExtension-iOS.entitlements",
      "bek_entitlements": [
        "com.apple.developer.web-browser-engine.rendering",
        "com.apple.developer.kernel.extended-virtual-addressing"
      ],
      "webkit_ios_entitlements": [
        {
          "entitlement": "application-identifier",
          "category": "generally-available",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Uniquely identifies an application or extension binary to the OS kernel and system daemons, establishing the process's formal code-signing identity."
        },
        {
          "entitlement": "com.apple.QuartzCore.secure-mode",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Enforces CoreAnimation RenderServer secure mode restrictions and validation when hosting or rendering layer trees across process boundaries."
        },
        {
          "entitlement": "com.apple.QuartzCore.webkit-end-points",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Permits sandboxed processes to communicate with restricted QuartzCore / CoreAnimation Mach endpoints for remote layer hosting and rendering."
        },
        {
          "entitlement": "com.apple.QuartzCore.webkit-limited-types",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Restricts QuartzCore (CoreAnimation) object serialization and deserialization to an allowlisted, hardened subset of types for inter-process layer hosting."
        },
        {
          "entitlement": "com.apple.coreaudio.allow-vorbis-decode",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Grants permission to instantiate and use Apple's system CoreAudio / AudioToolbox Vorbis audio decoder."
        },
        {
          "entitlement": "com.apple.developer.coremedia.allow-alternate-video-decoder-selection",
          "category": "restricted-other",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Allows an application or process to query and select alternate or non-standard video decoders (such as VP9 decoding pipelines) within CoreMedia and VideoToolbox."
        },
        {
          "entitlement": "com.apple.developer.hardened-process",
          "category": "generally-available",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Opts the process into system-enforced runtime hardening and enhanced security mitigations against memory corruption and tampering."
        },
        {
          "entitlement": "com.apple.developer.kernel.extended-virtual-addressing",
          "category": "generally-available",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Enables 64-bit processes on iOS, iPadOS, and macOS to access an extended virtual address space beyond standard kernel virtual memory constraints."
        },
        {
          "entitlement": "com.apple.mediaremote.external-artwork-validation",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Permits passing external artwork image data to MediaRemote for display in system Now Playing interfaces."
        },
        {
          "entitlement": "com.apple.mediaremote.set-playback-state",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Permits a process to update the system-wide media playback state directly via the private MediaRemote daemon."
        },
        {
          "entitlement": "com.apple.mediaremote.ui-control",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Grants permission to control MediaRemote presentation UI, such as suppressing or managing system Now Playing Live Activities, lock screen widgets, and status presentation."
        },
        {
          "entitlement": "com.apple.private.allow-explicit-graphics-priority",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Grants permission to explicitly specify scheduling and execution priorities for graphics rendering workloads and interact with low-level display/framebuffer subsystems."
        },
        {
          "entitlement": "com.apple.private.attribution.explicitly-assumed-identities",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Allows a process to explicitly assume arbitrary client process identities (via wildcard) when reporting activity attribution to the system status bar and Control Center for resource usage such as microphone and camera capture."
        },
        {
          "entitlement": "com.apple.private.coremedia.allow-fps-attachment",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Allows CoreMedia / AVFoundation to attach FairPlay Streaming (FPS) content decryption keys directly to media sample buffers."
        },
        {
          "entitlement": "com.apple.private.coremedia.extensions.audiorecording.allow",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Allows an XPC service or extension process to perform audio recording and access audio capture sessions through CoreMedia."
        },
        {
          "entitlement": "com.apple.private.coremedia.pidinheritance.allow",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Allows CoreMedia client processes to pass and inherit client process identifiers (PIDs) across media services for proper session attribution, power accounting, and playback state management."
        },
        {
          "entitlement": "com.apple.private.gpu-restricted",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Restricts the process's graphics driver and IOKit user client interface to a hardened, filtered subset of GPU commands to limit kernel attack surface."
        },
        {
          "entitlement": "com.apple.private.mediaexperience.processassertionaudittokens.allow",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Allows a process to supply presenting client application audit tokens to AVAudioSession and MediaExperience so the system can hold background process assertions for those client processes during audio playback."
        },
        {
          "entitlement": "com.apple.private.mediaexperience.recordingWebsite.allow",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Permits a process to attribute active audio or video recording sessions to a specific website domain or URL in system privacy indicators via the MediaExperience framework."
        },
        {
          "entitlement": "com.apple.private.mediaexperience.startrecordinginthebackground.allow",
          "category": "apple-private",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Permits a process to initiate audio/microphone recording while running in the background via system MediaExperience and mediaserverd services."
        },
        {
          "entitlement": "com.apple.private.memory.ownership_transfer",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Allows a process to transfer memory allocation accounting and ownership (such as IOSurface buffers) to another task's Jetsam ledger using task identity tokens."
        },
        {
          "entitlement": "com.apple.private.memorystatus",
          "category": "apple-private",
          "functional_domain": "RunningBoard & Process Lifecycle",
          "short_purpose": "Grants permission to call privileged Darwin kernel memorystatus control APIs to configure and query Jetsam memory limits and process memory status properties."
        },
        {
          "entitlement": "com.apple.private.network.socket-delegate",
          "category": "apple-private",
          "functional_domain": "Networking & Privacy Proxies",
          "short_purpose": "Grants Darwin kernel privilege PRIV_NET_PRIVILEGED_SOCKET_DELEGATE to delegate socket ownership and attribute network traffic, cellular data, and power usage to client applications."
        },
        {
          "entitlement": "com.apple.private.pac.exception",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Configures the XNU kernel to treat Pointer Authentication Code (PAC) validation failures as immediately fatal, terminating the process upon a PAC authentication fault."
        },
        {
          "entitlement": "com.apple.private.sandbox.profile",
          "category": "apple-private",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Specifies the name of a system-defined Seatbelt sandbox profile that the OS kernel automatically applies to the process upon launch."
        },
        {
          "entitlement": "com.apple.private.webkit.use-xpc-endpoint",
          "category": "apple-private",
          "functional_domain": "WebKit Internal IPC & Features",
          "short_purpose": "Authorizes WebKit auxiliary processes to establish and communicate over internal anonymous XPC endpoints."
        },
        {
          "entitlement": "com.apple.runningboard.assertions.webkit",
          "category": "apple-private",
          "functional_domain": "RunningBoard & Process Lifecycle",
          "short_purpose": "Authorizes a process to acquire RunningBoard process lifecycle and power management assertions within the private 'com.apple.webkit' assertion domain."
        },
        {
          "entitlement": "com.apple.security.exception.mach-lookup.global-name",
          "category": "restricted-other",
          "functional_domain": "macOS App Sandbox & Exceptions",
          "short_purpose": "Grants a sandboxed process an explicit sandbox exception to look up specific Mach service global names registered with launchd."
        },
        {
          "entitlement": "com.apple.security.fatal-exceptions",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Configures the Darwin kernel and OS runtime hardening to treat specified exceptions (such as JIT faults) as non-recoverable and immediately terminate the process."
        },
        {
          "entitlement": "com.apple.security.hardened-process.checked-allocations.no-tagged-receive",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Disables receiving tagged memory allocations across Mach IPC boundaries under OS checked allocations and hardware Memory Tagging Extension (MTE) hardening."
        },
        {
          "entitlement": "com.apple.springboard.statusbarstyleoverrides",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Allows a process to acquire SpringBoard status bar style overrides and receive status bar tap events for active system indicators."
        },
        {
          "entitlement": "com.apple.springboard.statusbarstyleoverrides.coordinator",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Allows a process to act as an override coordinator for specific system status bar indicator styles (specifically WebRTC audio and video capture indicators) via SpringBoardServices."
        },
        {
          "entitlement": "com.apple.surfboard.application-service-client",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Allows a process to act as an application service client connecting to visionOS Surfboard (the system shell and UI manager)."
        },
        {
          "entitlement": "com.apple.surfboard.shared-simulation-connection-request",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Allows a process to request and establish a connection to the Surfboard shared spatial simulation service on visionOS."
        },
        {
          "entitlement": "com.apple.surfboard.shared-simulation-memory-attribution",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Allows a process to attribute memory consumed by shared spatial simulations to specific client processes when communicating with visionOS's Surfboard service."
        },
        {
          "entitlement": "com.apple.systemstatus.activityattribution",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Allows a process to communicate with systemstatusd to publish dynamic activity attributions for hardware resource usage such as camera and microphone capture indicators in the status bar."
        },
        {
          "entitlement": "com.apple.tcc.delegated-services",
          "category": "apple-private",
          "functional_domain": "TCC, Privacy & Permissions",
          "short_purpose": "Allows a helper process to access protected TCC services like camera and microphone with permission attribution delegated to its client or host application."
        }
      ],
      "asymmetry_highlights": [
        "Largest Entitlement Gap on iOS (31 Apple-Private Entitlements vs 2 Public/BEK Entitlements): WebKit's GPU process holds 31 entitlements on iOS, whereas a 3P BERenderingProcess extension has only com.apple.developer.web-browser-engine.rendering and extended-virtual-addressing.",
        "TCC & Sensor Indicator Attribution: WebKit's GPU process holds com.apple.tcc.delegated-services (kTCCServiceMicrophone, kTCCServiceCamera), com.apple.systemstatus.activityattribution, com.apple.private.attribution.explicitly-assumed-identities, and com.apple.springboard.statusbarstyleoverrides to capture camera/microphone media in the GPU process on behalf of the host app and manage iOS orange/green sensor indicators and red recording pills.",
        "Media, FairPlay DRM & Now Playing Control: WebKit's GPU process holds com.apple.mediaremote.{set-playback-state,ui-control,external-artwork-validation}, com.apple.private.mediaexperience.{startrecordinginthebackground.allow,processassertionaudittokens.allow,recordingWebsite.allow}, com.apple.private.coremedia.{allow-fps-attachment,pidinheritance.allow,extensions.audiorecording.allow}, and com.apple.avfoundation.allow-system-wide-context.",
        "WindowServer, Neural Engine & IOSurface Ownership Transfer: WebKit's GPU process holds com.apple.QuartzCore.{webkit-end-points,webkit-limited-types,secure-mode}, com.apple.private.memory.ownership_transfer (transferring IOSurface memory accounting to WebContent), and com.apple.aneuserd.private.allow (direct Apple Neural Engine daemon access)."
      ]
    },
    {
      "process": "Networking Process",
      "webkit_binary": "com.apple.WebKit.Networking (LaunchServices XPC / System Extension)",
      "bek_binary": "3P NetworkingExtension (BENetworkingProcess)",
      "webkit_signing_source": "Source/WebKit/Scripts/process-entitlements.sh (ios_family_process_network_entitlements)",
      "bek_signing_source": "Source/WebKit/UIProcess/AuxiliaryProcessExtensions/NetworkingExtension-iOS.entitlements",
      "bek_entitlements": [
        "com.apple.developer.web-browser-engine.networking"
      ],
      "webkit_ios_entitlements": [
        {
          "entitlement": "application-identifier",
          "category": "generally-available",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Uniquely identifies an application or extension binary to the OS kernel and system daemons, establishing the process's formal code-signing identity."
        },
        {
          "entitlement": "com.apple.developer.hardened-process",
          "category": "generally-available",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Opts the process into system-enforced runtime hardening and enhanced security mitigations against memory corruption and tampering."
        },
        {
          "entitlement": "com.apple.multitasking.systemappassertions",
          "category": "apple-private",
          "functional_domain": "RunningBoard & Process Lifecycle",
          "short_purpose": "Grants privileged access to acquire system application background execution assertions (such as UnboundedNetworking) via AssertionServices / RunningBoard to prevent process suspension during background activity."
        },
        {
          "entitlement": "com.apple.payment.all-access",
          "category": "apple-private",
          "functional_domain": "Apple Pay, PassKit & Identity",
          "short_purpose": "Grants unrestricted internal access to Apple Pay and PassKit daemons (passd), enabling remote authorization and presentation of payment UI."
        },
        {
          "entitlement": "com.apple.private.accounts.bundleidspoofing",
          "category": "apple-private",
          "functional_domain": "Apple Pay, PassKit & Identity",
          "short_purpose": "Allows a privileged process to specify or spoof a client application's bundle identifier when interacting with the Accounts framework daemon (accountsd)."
        },
        {
          "entitlement": "com.apple.private.appstored",
          "category": "apple-private",
          "functional_domain": "Storage, Assets & System Databases",
          "short_purpose": "Grants permission to communicate with the App Store daemon (appstored) to register web-to-app install attribution parameters."
        },
        {
          "entitlement": "com.apple.private.assets.accessible-asset-types",
          "category": "apple-private",
          "functional_domain": "Storage, Assets & System Databases",
          "short_purpose": "Specifies an allowlist of MobileAsset catalog asset types that a sandboxed process is authorized to query and download from mobileassetd."
        },
        {
          "entitlement": "com.apple.private.assets.bypass-asset-types-check",
          "category": "apple-private",
          "functional_domain": "Storage, Assets & System Databases",
          "short_purpose": "Allows a process to bypass mobileassetd asset type validation checks when querying or downloading MobileAsset assets."
        },
        {
          "entitlement": "com.apple.private.ciphermld.allow",
          "category": "apple-private",
          "functional_domain": "Networking & Privacy Proxies",
          "short_purpose": "Authorizes a process to communicate with the system ciphermld daemon to perform privacy-preserving Private Information Retrieval (PIR) and Private Encrypted Compute (PEC) cryptographic queries."
        },
        {
          "entitlement": "com.apple.private.coreservices.canmaplsdatabase",
          "category": "apple-private",
          "functional_domain": "Storage, Assets & System Databases",
          "short_purpose": "Grants permission to directly memory-map the system Launch Services database, enabling fast in-process queries for registered applications, URL schemes, and UTI associations without XPC IPC roundtrips."
        },
        {
          "entitlement": "com.apple.private.dmd.policy",
          "category": "apple-private",
          "functional_domain": "Lockdown Mode & Parental Controls",
          "short_purpose": "Allows communication with the DeviceManagement daemon (dmd) to query and monitor Screen Time and MDM website restriction policies."
        },
        {
          "entitlement": "com.apple.private.memorystatus",
          "category": "apple-private",
          "functional_domain": "RunningBoard & Process Lifecycle",
          "short_purpose": "Grants permission to call privileged Darwin kernel memorystatus control APIs to configure and query Jetsam memory limits and process memory status properties."
        },
        {
          "entitlement": "com.apple.private.network.socket-delegate",
          "category": "apple-private",
          "functional_domain": "Networking & Privacy Proxies",
          "short_purpose": "Grants Darwin kernel privilege PRIV_NET_PRIVILEGED_SOCKET_DELEGATE to delegate socket ownership and attribute network traffic, cellular data, and power usage to client applications."
        },
        {
          "entitlement": "com.apple.private.pac.exception",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Configures the XNU kernel to treat Pointer Authentication Code (PAC) validation failures as immediately fatal, terminating the process upon a PAC authentication fault."
        },
        {
          "entitlement": "com.apple.private.sandbox.profile",
          "category": "apple-private",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Specifies the name of a system-defined Seatbelt sandbox profile that the OS kernel automatically applies to the process upon launch."
        },
        {
          "entitlement": "com.apple.private.security.enable-state-flags",
          "category": "apple-private",
          "functional_domain": "macOS App Sandbox & Exceptions",
          "short_purpose": "Authorizes a process to dynamically toggle specified Seatbelt sandbox state flags at runtime via sandbox_enable_state_flag."
        },
        {
          "entitlement": "com.apple.private.security.mutable-state-flags",
          "category": "apple-private",
          "functional_domain": "macOS App Sandbox & Exceptions",
          "short_purpose": "Permits a process to dynamically toggle or mutate specific Seatbelt sandbox state flags at runtime."
        },
        {
          "entitlement": "com.apple.private.tcc.manager.check-by-audit-token",
          "category": "apple-private",
          "functional_domain": "TCC, Privacy & Permissions",
          "short_purpose": "Grants permission to query the TCC daemon for privacy permission states (specifically Intelligent Tracking Prevention and User Tracking) of another process using its Mach audit token."
        },
        {
          "entitlement": "com.apple.private.webkit.adattributiond",
          "category": "apple-private",
          "functional_domain": "WebKit Internal IPC & Features",
          "short_purpose": "Authorizes WebKit network processes to connect over Mach IPC to the Private Click Measurement daemon (adattributiond)."
        },
        {
          "entitlement": "com.apple.private.webkit.use-xpc-endpoint",
          "category": "apple-private",
          "functional_domain": "WebKit Internal IPC & Features",
          "short_purpose": "Authorizes WebKit auxiliary processes to establish and communicate over internal anonymous XPC endpoints."
        },
        {
          "entitlement": "com.apple.private.webkit.webpush",
          "category": "apple-private",
          "functional_domain": "WebKit Internal IPC & Features",
          "short_purpose": "Authorizes processes and host applications to connect to WebKit's web push daemon (webpushd) over Mach/XPC."
        },
        {
          "entitlement": "com.apple.runningboard.assertions.webkit",
          "category": "apple-private",
          "functional_domain": "RunningBoard & Process Lifecycle",
          "short_purpose": "Authorizes a process to acquire RunningBoard process lifecycle and power management assertions within the private 'com.apple.webkit' assertion domain."
        },
        {
          "entitlement": "com.apple.security.fatal-exceptions",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Configures the Darwin kernel and OS runtime hardening to treat specified exceptions (such as JIT faults) as non-recoverable and immediately terminate the process."
        },
        {
          "entitlement": "com.apple.security.hardened-process.checked-allocations.no-tagged-receive",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Disables receiving tagged memory allocations across Mach IPC boundaries under OS checked allocations and hardware Memory Tagging Extension (MTE) hardening."
        },
        {
          "entitlement": "com.apple.symptom_analytics.configure",
          "category": "apple-private",
          "functional_domain": "Networking & Privacy Proxies",
          "short_purpose": "Allows modifying and configuring network telemetry and domain tracking records in the system SymptomAnalytics service (symptomsd)."
        }
      ],
      "asymmetry_highlights": [
        "Apple Pay & PassKit All-Access: WebKit's Networking process holds com.apple.payment.all-access and com.apple.private.accounts.bundleidspoofing to broker Apple Pay sessions on behalf of arbitrary host apps.",
        "Apple Oblivious HTTP / Private Relay & Socket Delegation: WebKit holds com.apple.private.ciphermld.allow (CipherML / Oblivious HTTP proxy for privacy protections), com.apple.private.network.socket-delegate (delegated network attribution), and com.apple.symptom_analytics.configure.",
        "Screen Time / Parental Controls (DMD) & MobileAsset Content Filters: WebKit's Networking process holds com.apple.private.dmd.policy, com.apple.private.assets.accessible-asset-types, and com.apple.private.device-configuration.effective-configuration-ids.read to run system Parental Controls and WebContentRestrictions filters.",
        "Background Downloads & App Store Attribution: WebKit holds com.apple.multitasking.systemappassertions, com.apple.private.appstored, and com.apple.private.coreservices.canmaplsdatabase."
      ]
    },
    {
      "process": "UIProcess / Browser Host App",
      "webkit_binary": "MobileSafari / WKWebView Host App (UIProcess)",
      "bek_binary": "3P Browser Host App",
      "webkit_signing_source": "Runtime checks in Source/WebKit/UIProcess/ & Source/WebKit/Shared/Cocoa/DefaultWebBrowserChecks.mm",
      "bek_signing_source": "Host App Entitlements (com.apple.developer.web-browser-engine.host + com.apple.developer.web-browser)",
      "bek_entitlements": [
        "com.apple.developer.web-browser-engine.host",
        "com.apple.developer.web-browser",
        "com.apple.developer.WebKit.ServiceWorkers"
      ],
      "webkit_ios_entitlements": [
        {
          "entitlement": "com.apple.CommCenter.fine-grained",
          "category": "apple-private",
          "functional_domain": "TCC, Privacy & Permissions",
          "short_purpose": "Authorizes an application to perform restricted fine-grained telephony operations via CommCenter, specifically accessing public cellular plan and eSIM details."
        },
        {
          "entitlement": "com.apple.UIKit.vends-view-services",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Allows an iOS application or service to vend remote view services (_UIViewService), hosting out-of-process user interface views inside another application's window hierarchy."
        },
        {
          "entitlement": "com.apple.developer.WebKit.ServiceWorkers",
          "category": "restricted-other",
          "functional_domain": "WebKit Internal IPC & Features",
          "short_purpose": "Allows an iOS application hosting WKWebView to enable and execute Service Workers without restricting navigations to App-Bound Domains."
        },
        {
          "entitlement": "com.apple.developer.group-session.urlactivity",
          "category": "restricted-other",
          "functional_domain": "Media, Audio & AirPlay",
          "short_purpose": "Grants permission to initiate and participate in GroupActivities (SharePlay) URL-based synchronized media sessions, enabling the Media Session Coordinator API."
        },
        {
          "entitlement": "com.apple.developer.identity-document-services.web-presentment-controller",
          "category": "restricted-other",
          "functional_domain": "Apple Pay, PassKit & Identity",
          "short_purpose": "Authorizes an application to act as an identity document web presentment controller to request and display digital identity documents via web presentment UI."
        },
        {
          "entitlement": "com.apple.developer.web-browser",
          "category": "restricted-other",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Allows an iOS application to register and be selected by users as the system default web browser, and confers full web browser status within WebKit."
        },
        {
          "entitlement": "com.apple.developer.web-browser-engine.host",
          "category": "browserenginekit",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Grants an iOS host application permission to instantiate, connect to, and manage BrowserEngineKit out-of-process browser extensions."
        },
        {
          "entitlement": "com.apple.multitasking.systemappassertions",
          "category": "apple-private",
          "functional_domain": "RunningBoard & Process Lifecycle",
          "short_purpose": "Grants privileged access to acquire system application background execution assertions (such as UnboundedNetworking) via AssertionServices / RunningBoard to prevent process suspension during background activity."
        },
        {
          "entitlement": "com.apple.private.allow-ldm-exempt-webview",
          "category": "apple-private",
          "functional_domain": "Lockdown Mode & Parental Controls",
          "short_purpose": "Allows an iOS/visionOS host application to exempt a WKWebView from Lockdown Mode or captive portal mode."
        },
        {
          "entitlement": "com.apple.private.canGetAppLinkInfo",
          "category": "apple-private",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Allows a process to query LaunchServices for App Link (Universal Link) target application metadata and status for a given URL."
        },
        {
          "entitlement": "com.apple.private.canModifyAppLinkPermissions",
          "category": "apple-private",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Grants permission to modify LaunchServices App Link (Universal Link) user routing preferences and enablement state."
        },
        {
          "entitlement": "com.apple.private.webinspector.allow-remote-inspection",
          "category": "apple-private",
          "functional_domain": "Developer Tools & Testing",
          "short_purpose": "Allows remote Web Inspector debugging and inspection of web and JavaScript contexts without requiring developer provisioning profiles (get-task-allow)."
        },
        {
          "entitlement": "com.apple.runningboard.assertions.webkit",
          "category": "apple-private",
          "functional_domain": "RunningBoard & Process Lifecycle",
          "short_purpose": "Authorizes a process to acquire RunningBoard process lifecycle and power management assertions within the private 'com.apple.webkit' assertion domain."
        }
      ],
      "asymmetry_highlights": [
        "WebKit-Specific RunningBoard Assertions: WebKit checks com.apple.runningboard.assertions.webkit and com.apple.multitasking.systemappassertions to acquire privileged background process assertions.",
        "Universal Links (App Links) Management: WKActionSheetAssistant checks com.apple.private.canGetAppLinkInfo and com.apple.private.canModifyAppLinkPermissions before allowing users to view or toggle 'Open in <App>' Universal Link permissions.",
        "Per-Site Lockdown Mode Exemption: WKWebpagePreferences checks com.apple.developer.web-browser or com.apple.private.allow-ldm-exempt-webview before allowing per-site Lockdown Mode opt-outs.",
        "Cellular Plan & Identity Presentment: CoreTelephonyUtilities checks com.apple.CommCenter.fine-grained, and Digital Credentials web presentment checks com.apple.developer.identity-document-services.web-presentment-controller."
      ]
    },
    {
      "process": "Auxiliary System Daemons (webpushd, adattributiond, Model)",
      "webkit_binary": "com.apple.webkit.webpushd / com.apple.webkit.adattributiond / com.apple.WebKit.Model",
      "bek_binary": "No 3P BrowserEngineKit equivalent extension type",
      "webkit_signing_source": "ios_family_process_{webpushd,adattributiond,model}_entitlements",
      "bek_signing_source": "Not exposed in BrowserEngineKit (only WebContent, Rendering, and Networking extensions exist)",
      "bek_entitlements": [],
      "webkit_ios_entitlements": [
        {
          "entitlement": "aps-connection-initiate",
          "category": "apple-private",
          "functional_domain": "Networking & Privacy Proxies",
          "short_purpose": "Allows a daemon to initiate and establish a direct connection to the Apple Push Service daemon (apsd) using private ApplePushService APIs."
        },
        {
          "entitlement": "com.apple.QuartzCore.secure-mode",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Enforces CoreAnimation RenderServer secure mode restrictions and validation when hosting or rendering layer trees across process boundaries."
        },
        {
          "entitlement": "com.apple.QuartzCore.webkit-end-points",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Permits sandboxed processes to communicate with restricted QuartzCore / CoreAnimation Mach endpoints for remote layer hosting and rendering."
        },
        {
          "entitlement": "com.apple.QuartzCore.webkit-limited-types",
          "category": "apple-private",
          "functional_domain": "GPU, Graphics & Display",
          "short_purpose": "Restricts QuartzCore (CoreAnimation) object serialization and deserialization to an allowlisted, hardened subset of types for inter-process layer hosting."
        },
        {
          "entitlement": "com.apple.developer.hardened-process",
          "category": "generally-available",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Opts the process into system-enforced runtime hardening and enhanced security mitigations against memory corruption and tampering."
        },
        {
          "entitlement": "com.apple.frontboard.launchapplications",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Allows a process to launch or activate applications in the background or foreground via FrontBoard/SpringBoard application-opening services."
        },
        {
          "entitlement": "com.apple.pac.shared_region_id",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Assigns a process to an isolated Pointer Authentication Code (PAC) shared region domain in the dyld shared cache to prevent cross-process PAC signature forgery."
        },
        {
          "entitlement": "com.apple.private.launchservices.allowopenwithanyhandler",
          "category": "apple-private",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Allows a process to launch target applications via LaunchServices URL opening without standard iOS scheme restrictions or handler limitations."
        },
        {
          "entitlement": "com.apple.private.launchservices.canspecifysourceapplication",
          "category": "apple-private",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Allows a process to explicitly specify or override the source application identifier when opening URLs or activating applications via LaunchServices and FrontBoard."
        },
        {
          "entitlement": "com.apple.private.memorystatus",
          "category": "apple-private",
          "functional_domain": "RunningBoard & Process Lifecycle",
          "short_purpose": "Grants permission to call privileged Darwin kernel memorystatus control APIs to configure and query Jetsam memory limits and process memory status properties."
        },
        {
          "entitlement": "com.apple.private.network.socket-delegate",
          "category": "apple-private",
          "functional_domain": "Networking & Privacy Proxies",
          "short_purpose": "Grants Darwin kernel privilege PRIV_NET_PRIVILEGED_SOCKET_DELEGATE to delegate socket ownership and attribute network traffic, cellular data, and power usage to client applications."
        },
        {
          "entitlement": "com.apple.private.networkserviceproxy",
          "category": "apple-private",
          "functional_domain": "Networking & Privacy Proxies",
          "short_purpose": "Allows a process to interact with Apple's Network Service Proxy daemon to route network traffic through Apple's privacy proxies."
        },
        {
          "entitlement": "com.apple.private.pac.exception",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Configures the XNU kernel to treat Pointer Authentication Code (PAC) validation failures as immediately fatal, terminating the process upon a PAC authentication fault."
        },
        {
          "entitlement": "com.apple.private.sandbox.profile",
          "category": "apple-private",
          "functional_domain": "Process Launching & BrowserEngineKit",
          "short_purpose": "Specifies the name of a system-defined Seatbelt sandbox profile that the OS kernel automatically applies to the process upon launch."
        },
        {
          "entitlement": "com.apple.private.security.storage.os_eligibility.readonly",
          "category": "apple-private",
          "functional_domain": "Storage, Assets & System Databases",
          "short_purpose": "Grants read-only access to the protected OS Eligibility system database and storage path (/private/var/db/os_eligibility/)."
        },
        {
          "entitlement": "com.apple.private.usernotifications.app-management-domain.proxy",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Authorizes a daemon to act as a proxy within UserNotifications for managing, posting, and querying notifications under a designated app-management domain."
        },
        {
          "entitlement": "com.apple.runningboard.assertions.webkit",
          "category": "apple-private",
          "functional_domain": "RunningBoard & Process Lifecycle",
          "short_purpose": "Authorizes a process to acquire RunningBoard process lifecycle and power management assertions within the private 'com.apple.webkit' assertion domain."
        },
        {
          "entitlement": "com.apple.security.exception.files.absolute-path.read-only",
          "category": "restricted-other",
          "functional_domain": "macOS App Sandbox & Exceptions",
          "short_purpose": "Grants sandboxed processes read-only filesystem access to specified absolute file paths outside the standard sandbox container."
        },
        {
          "entitlement": "com.apple.security.exception.mach-lookup.global-name",
          "category": "restricted-other",
          "functional_domain": "macOS App Sandbox & Exceptions",
          "short_purpose": "Grants a sandboxed process an explicit sandbox exception to look up specific Mach service global names registered with launchd."
        },
        {
          "entitlement": "com.apple.security.hardened-process.checked-allocations.no-tagged-receive",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Disables receiving tagged memory allocations across Mach IPC boundaries under OS checked allocations and hardware Memory Tagging Extension (MTE) hardening."
        },
        {
          "entitlement": "com.apple.security.hardened-process.checked-allocations.soft-mode",
          "category": "apple-private",
          "functional_domain": "JIT & Memory Hardening",
          "short_purpose": "Configures hardware memory tagging (ARM MTE / checked allocations) in soft mode, causing memory tag violations to be handled non-fatally rather than triggering immediate process termination."
        },
        {
          "entitlement": "com.apple.security.network.client",
          "category": "generally-available",
          "functional_domain": "Networking & Privacy Proxies",
          "short_purpose": "Enables sandboxed applications and auxiliary processes to initiate outgoing network connections and resolve domain names."
        },
        {
          "entitlement": "com.apple.springboard.opensensitiveurl",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Allows a process to open sensitive or restricted URLs and launch system targets via SpringBoard without standard URL restrictions or user confirmation dialogs."
        },
        {
          "entitlement": "com.apple.uikitservices.app.value-access",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Allows a system daemon to access and manipulate UIKit application-level state and properties (such as badge values and application support attributes) across bundle identifier boundaries via UIKitServices."
        },
        {
          "entitlement": "com.apple.usernotification.notificationschedulerproxy",
          "category": "apple-private",
          "functional_domain": "System UI, SpringBoard & Status Bar",
          "short_purpose": "Allows a process to act as a proxy notification scheduler, enabling it to schedule, display, and manage notifications on behalf of other bundle identifiers."
        }
      ],
      "asymmetry_highlights": [
        "Web Push Daemon (webpushd): Signed with 12 Apple-private entitlements including aps-connection-initiate, com.apple.private.webkit.webpush, com.apple.frontboard.launchapplications, com.apple.springboard.opensensitiveurl, com.apple.usernotification.notificationschedulerproxy, and com.apple.private.usernotifications.app-management-domain.proxy to receive APNs Web Push payloads and wake/launch Home Screen Web Apps.",
        "Private Click Measurement Daemon (adattributiond): Signed with com.apple.private.webkit.adattributiond and com.apple.private.networkserviceproxy to send unlinkable attribution reports over Apple's Oblivious HTTP / Network Service Proxy.",
        "visionOS 3D <model> Process (Model): Signed with com.apple.surfboard.{application-service-client,shared-simulation-connection-request,shared-simulation-memory-attribution} to render spatial 3D models in visionOS shared simulation space."
      ]
    }
  ],
  "entitlements": [
    {
      "id": 1,
      "entitlement": "application-identifier",
      "category": "generally-available",
      "ios_parity_status": "ios-public-parity",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Uniquely identifies an application or extension binary to the OS kernel and system daemons, establishing the process's formal code-signing identity.",
      "webkit_usage_summary": "WebKit injects application-identifier set to ${PRODUCT_BUNDLE_IDENTIFIER} into the iOS and visionOS auxiliary GPU and Networking processes via process-entitlements.sh. This entitlement allows system frameworks and daemons to recognize and attribute the process identity, specifically enabling MediaRemote Now Playing presentation suppression in the GPU process and network attribution in the Network process. WebKit does not check this entitlement directly in code; it is enforced and checked externally by Apple OS daemons.",
      "browserenginekit_implications": "Third-party browsers and their BrowserEngineKit extension processes (such as rendering and networking extensions) automatically receive this standard entitlement through their Apple provisioning profiles. Consequently, third-party engine extensions have parity with WebKit's auxiliary processes regarding application identity recognition across system frameworks.",
      "canonical_processes": [
        "GPU",
        "Networking"
      ],
      "raw_processes": [
        "GPU",
        "Networking"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "\"${PRODUCT_BUNDLE_IDENTIFIER}\""
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 514,
          "description": "Injects application-identifier with PRODUCT_BUNDLE_IDENTIFIER into the GPU process for iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 629,
          "description": "Injects application-identifier with PRODUCT_BUNDLE_IDENTIFIER into the Networking process for iOS and visionOS"
        }
      ],
      "key_commits": [
        {
          "hash": "6743c7dd1c63",
          "date": "2024-09-23",
          "subject": "[iOS] Add application-identifier entitlement to Networking process"
        },
        {
          "hash": "87860a904550",
          "date": "2024-09-06",
          "subject": "[Cocoa] Support Now Playing presentation suppression"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 514,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "string",
          "value": "\"${PRODUCT_BUNDLE_IDENTIFIER}\"",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 629,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "string",
          "value": "\"${PRODUCT_BUNDLE_IDENTIFIER}\"",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 2,
      "entitlement": "aps-connection-initiate",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Allows a daemon to initiate and establish a direct connection to the Apple Push Service daemon (apsd) using private ApplePushService APIs.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the background web push daemon (`webpushd`) on iOS and visionOS via `process-entitlements.sh`. This enables `webpushd` to connect directly to `apsd` through private `APSConnection` SPI to manage push topics, obtain public tokens, and receive incoming Web Push notifications for web applications. The entitlement check is enforced by `apsd` at the system level rather than within WebKit's own runtime.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this Apple-private entitlement and cannot establish direct low-level connections to `apsd`. Instead, 3P browser apps must rely on standard public UserNotifications and APNs framework push delivery, or defer Home Screen Web Push functionality to Apple's system-managed `webpushd` daemon. This restricts 3P engines from operating an independent background daemon that directly manages push topics with Apple's push infrastructure.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 611,
          "description": "Signs `webpushd` with `aps-connection-initiate` on iOS and visionOS."
        },
        {
          "file": "Source/WebKit/webpushd/ApplePushServiceConnection.mm",
          "line": 43,
          "description": "Implements `APSConnectionDelegate` in `webpushd` to receive push tokens and incoming Web Push messages via `APSConnection`."
        }
      ],
      "key_commits": [
        {
          "hash": "2beff75a4205",
          "date": "2021-12-07",
          "subject": "webpushd should run with regular user permissions"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 611,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 18,
      "related_spis": [
        {
          "name": "APSConnection",
          "kind": "classes",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "APSURLTokenInfo",
          "kind": "classes",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "_setEnabledTopics:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "_setIgnoredTopics:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "_setNonWakingTopics:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "_setOpportunisticTopics:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "enabledTopics",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "ignoredTopics",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "initWithEnvironmentName:namedDelegatePort:queue:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "initWithTopic:vapidPublicKey:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "invalidateURLTokenForInfo:completion:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "nonWakingTopics",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        }
      ]
    },
    {
      "id": 3,
      "entitlement": "com.apple.CommCenter.fine-grained",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "TCC, Privacy & Permissions",
      "short_purpose": "Authorizes an application to perform restricted fine-grained telephony operations via CommCenter, specifically accessing public cellular plan and eSIM details.",
      "webkit_usage_summary": "Checked at runtime in the UIProcess on iOS (in CoreTelephonyUtilities.mm) to determine if cellular identifier AutoFill (e.g., eSIM EID and IMEI) is permitted for web forms. If the host app possesses this entitlement with the 'public-cellular-plan' value, WebKit queries CoreTelephonyClient to check domain authorization; it is also provisioned to TestWebKitAPI via process-entitlements.sh for test coverage.",
      "browserenginekit_implications": "Third-party browsers and BrowserEngineKit extensions cannot obtain this private CommCenter entitlement. Additionally, WebKit's implementation explicitly bypasses cellular identifier AutoFill if the application is detected as a full web browser, making this feature strictly intended for carrier/telecom apps hosting WKWebView rather than standalone browser engines.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "TestWebKitAPI",
        "UIProcess / Host App"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "public-cellular-plan"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/UIProcess/Cocoa/CoreTelephonyUtilities.mm",
          "line": 60,
          "description": "Checks SecTaskCopyValueForEntitlement for 'com.apple.CommCenter.fine-grained' containing 'public-cellular-plan' before allowing cellular identifier AutoFill queries"
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 77,
          "description": "Injects com.apple.CommCenter.fine-grained with value public-cellular-plan into TestWebKitAPI for testing"
        }
      ],
      "key_commits": [
        {
          "hash": "64d46bbaf793",
          "date": "2023-10-30",
          "subject": "[iOS] Add experimental support for EID/IMEI AutoFill in WKWebView"
        },
        {
          "hash": "2177a497f6ef",
          "date": "2025-04-24",
          "subject": "Introduce a script to generate TestWebKitAPI entitlements"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 77,
          "function": "process_ios_family_testwebkitapi_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 78,
          "function": "process_ios_family_testwebkitapi_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "public-cellular-plan",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/Cocoa/CoreTelephonyUtilities.mm",
          "line": 60,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 4,
      "entitlement": "com.apple.Pasteboard.paste-unchecked",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Accessibility & Text Input",
      "short_purpose": "Allows an application to read from the system pasteboard without triggering OS privacy verification prompts, rate-limiting, or permission checks from the pasteboard daemon (pasted).",
      "webkit_usage_summary": "WebKit declares this entitlement exclusively in test harnesses (WebKitTestRunnerApp and TestWebKitAPI) on iOS and visionOS. It is not used in production WebKit or Safari builds, but ensures automated headless layout tests and API tests interacting with the clipboard can execute without hanging, crashing, or presenting modal user-consent alerts.",
      "browserenginekit_implications": "Third-party browsers and BrowserEngineKit extensions cannot obtain this private entitlement. 3P browsers on iOS must use standard UIKit pasteboard interfaces, which require explicit user interaction (such as UIPasteControl) or will trigger system paste-confirmation banners when reading clipboard contents across apps.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "Test Runner / Harness (Host App)",
        "TestWebKitAPI"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS.entitlements",
          "line": 11,
          "description": "Enables unchecked pasteboard access for the iOS WebKitTestRunner host app."
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS-simulator.entitlements",
          "line": 11,
          "description": "Enables unchecked pasteboard access for the iOS Simulator WebKitTestRunner host app."
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 75,
          "description": "Injects the entitlement into TestWebKitAPI on iOS family platforms during the entitlement processing build step."
        }
      ],
      "key_commits": [
        {
          "hash": "a292f1eebfa1",
          "date": "2020-05-20",
          "subject": "[iOS] Layout tests in editing/pasteboard sporadically crash"
        },
        {
          "hash": "8d65dc712846",
          "date": "2024-07-03",
          "subject": "WKTR installation on iOS devices is not working"
        },
        {
          "hash": "2177a497f6ef",
          "date": "2025-04-24",
          "subject": "Introduce a script to generate TestWebKitAPI entitlements"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS-simulator.entitlements",
          "line": 11,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS.entitlements",
          "line": 11,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 75,
          "function": "process_ios_family_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 5,
      "entitlement": "com.apple.QuartzCore.secure-mode",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "GPU, Graphics & Display",
      "short_purpose": "Enforces CoreAnimation RenderServer secure mode restrictions and validation when hosting or rendering layer trees across process boundaries.",
      "webkit_usage_summary": "WebKit injects this entitlement via `process-entitlements.sh` into WebContent, GPU, and Model auxiliary processes on iOS and visionOS. It signals to CoreAnimation / RenderServer that the process participates in restricted layer hosting with hardened security constraints. The entitlement is enforced directly by QuartzCore and the window server rather than checked in WebKit userland code.",
      "browserenginekit_implications": "Third-party browser engines using BrowserEngineKit do not have access to private `com.apple.QuartzCore.*` entitlements. Instead, BrowserEngineKit provides high-level abstractions like `BEHostingHandle` for cross-process layer rendering between the web/rendering extension and host app, though 3P engines cannot configure low-level QuartzCore secure-mode policies directly.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Model"
      ],
      "raw_processes": [
        "GPU",
        "Model",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 429,
          "description": "Adds com.apple.QuartzCore.secure-mode to shared WebContent process entitlements on iOS family platforms"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 516,
          "description": "Adds com.apple.QuartzCore.secure-mode to GPU process entitlements on iOS family platforms"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 583,
          "description": "Adds com.apple.QuartzCore.secure-mode to Model process entitlements on iOS and visionOS"
        }
      ],
      "key_commits": [
        {
          "hash": "11061972c748",
          "date": "2024-02-28",
          "subject": "Model Process CA layer hosting"
        },
        {
          "hash": "13771f185bf4",
          "date": "2020-02-07",
          "subject": "Build entitlements into GPU Process"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 429,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 516,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 583,
          "function": "ios_family_process_model_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Model",
          "platforms": [
            "visionOS",
            "iOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 74,
      "related_spis": [
        {
          "name": "CABackdropLayer",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "CAContext",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "CAFilter",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "CALayerHost",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "addCommitHandler:forPhase:",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "contentsDirtyRect",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "contextId",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "createFencePort",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "currentPhase",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "currentState",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "filterWithType:",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "maximumRefreshRate",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        }
      ]
    },
    {
      "id": 6,
      "entitlement": "com.apple.QuartzCore.webkit-end-points",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "GPU, Graphics & Display",
      "short_purpose": "Permits sandboxed processes to communicate with restricted QuartzCore / CoreAnimation Mach endpoints for remote layer hosting and rendering.",
      "webkit_usage_summary": "Injected by `process-entitlements.sh` into WebContent (Shared), GPU, and Model processes across macOS, macCatalyst, iOS, and visionOS. It authorizes these sandboxed helper processes to interact with private QuartzCore rendering endpoints (such as `CAContext` and remote layer tree hosting) while enforcing reduced WindowServer/QuartzCore service exposure. The entitlement is enforced directly by QuartzCore / the system compositor rather than WebKit runtime code.",
      "browserenginekit_implications": "This is a private Apple QuartzCore entitlement that third-party browsers using BrowserEngineKit on iOS cannot obtain. Third-party browser engines must instead use BrowserEngineKit's supported extension architecture (`com.apple.developer.web-browser-engine.rendering` and `com.apple.developer.web-browser-engine.webcontent`) and public layer hosting mechanisms provided by `BrowserEngineKit.framework`.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Model"
      ],
      "raw_processes": [
        "GPU",
        "Model",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 82,
          "description": "Grants the entitlement to the macOS GPU process"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 430,
          "description": "Grants the entitlement to iOS and visionOS WebContent processes"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 517,
          "description": "Grants the entitlement to iOS and visionOS GPU processes"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 584,
          "description": "Grants the entitlement to visionOS and iOS Model processes for CA layer hosting"
        }
      ],
      "key_commits": [
        {
          "hash": "a7595be0ea04",
          "date": "2020-11-03",
          "subject": "[macOS] Adopt additional QuartzCore entitlement to reduce accessible endpoints"
        },
        {
          "hash": "11061972c748",
          "date": "2024-02-28",
          "subject": "Model Process CA layer hosting rdar://123273873"
        },
        {
          "hash": "eb466700acaf",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 82,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 242,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 303,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 370,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 430,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 517,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 584,
          "function": "ios_family_process_model_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Model",
          "platforms": [
            "visionOS",
            "iOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 81,
      "related_spis": [
        {
          "name": "CABackdropLayer",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "CAContext",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "CAFilter",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "CALayerHost",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "addCommitHandler:forPhase:",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "contentsDirtyRect",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "contextId",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "createFencePort",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "currentPhase",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "currentState",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "filterWithType:",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "maximumRefreshRate",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        }
      ]
    },
    {
      "id": 7,
      "entitlement": "com.apple.QuartzCore.webkit-limited-types",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "GPU, Graphics & Display",
      "short_purpose": "Restricts QuartzCore (CoreAnimation) object serialization and deserialization to an allowlisted, hardened subset of types for inter-process layer hosting.",
      "webkit_usage_summary": "WebKit applies this entitlement to the WebContent, GPU, and Model processes across iOS, macOS, macCatalyst, and visionOS via process-entitlements.sh. It instructs QuartzCore / CoreAnimation to enforce strict type filtering during out-of-process layer rendering and CAContext IPC, mitigating serialization attack vectors against the compositor and render server.",
      "browserenginekit_implications": "Because com.apple.QuartzCore.webkit-limited-types is a private Apple entitlement, it is unavailable to third-party browsers and BrowserEngineKit extension processes (such as rendering or webcontent extensions). Third-party engines must rely on standard BrowserEngineKit layer hosting and public CoreAnimation/IOSurface primitives without this internal QuartzCore hardening flag.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Model"
      ],
      "raw_processes": [
        "GPU",
        "Model",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 62,
          "description": "Applies com.apple.QuartzCore.webkit-limited-types to the macOS GPU process"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 431,
          "description": "Applies com.apple.QuartzCore.webkit-limited-types to shared iOS and visionOS WebContent processes"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 518,
          "description": "Applies com.apple.QuartzCore.webkit-limited-types to iOS and visionOS GPU processes"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 585,
          "description": "Applies com.apple.QuartzCore.webkit-limited-types to iOS and visionOS Model processes for layer hosting"
        }
      ],
      "key_commits": [
        {
          "hash": "11061972c748",
          "date": "2024-02-28",
          "subject": "Model Process CA layer hosting rdar://123273873 https://bugs.webkit.org/show_bug.cgi?id=269762"
        },
        {
          "hash": "eb466700acaf",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function https://bugs.webkit.org/show_bug.cgi?id=311624 rdar://174220367"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 62,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 249,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 318,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 373,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 431,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 518,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 585,
          "function": "ios_family_process_model_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Model",
          "platforms": [
            "visionOS",
            "iOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 74,
      "related_spis": [
        {
          "name": "CABackdropLayer",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "CAContext",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "CAFilter",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "CALayerHost",
          "kind": "classes",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "addCommitHandler:forPhase:",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "contentsDirtyRect",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "contextId",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "createFencePort",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "currentPhase",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "currentState",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "filterWithType:",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        },
        {
          "name": "maximumRefreshRate",
          "kind": "selectors",
          "framework": "QuartzCore",
          "feature_category": "Graphics, CoreAnimation, Color, HDR & IOSurface"
        }
      ]
    },
    {
      "id": 8,
      "entitlement": "com.apple.UIKit.vends-view-services",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows an iOS application or service to vend remote view services (_UIViewService), hosting out-of-process user interface views inside another application's window hierarchy.",
      "webkit_usage_summary": "WebKit does not request this entitlement itself, but runtime checks it in the UIProcess on iOS and visionOS within `ApplicationStateTracker::applicationType`. If the host process has this entitlement and the window is marked as hosted in another process, WebKit classifies the container as `ApplicationType::ViewService`. This directs WebKit to observe the remote host view controller's lifecycle rather than relying on standard `UIScene` foreground and background notifications.",
      "browserenginekit_implications": "This is a private Apple UIKit entitlement unavailable to third-party developers and BrowserEngineKit extensions. Third-party iOS browser host apps and BrowserEngineKit processes operate as standard applications and app extensions rather than UIKit view services, meaning third-party browser engines do not need this entitlement.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "UIProcess / Host App (ViewService)"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/UIProcess/ApplicationStateTracker.mm",
          "line": 155,
          "description": "Checks WTF::processHasEntitlement(\"com.apple.UIKit.vends-view-services\"_s) to classify the container as ApplicationType::ViewService"
        },
        {
          "file": "Source/WebKit/UIProcess/ApplicationStateTracker.mm",
          "line": 253,
          "description": "Configures state tracking to observe the service UIViewController with _hostProcessIdentifier instead of UIScene when running inside a ViewService"
        }
      ],
      "key_commits": [
        {
          "hash": "dd956d5e7424",
          "date": "2022-06-05",
          "subject": "Drop operator==() overload for comparing a String to a const char* https://bugs.webkit.org/show_bug.cgi?id=241285"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/ApplicationStateTracker.mm",
          "line": 155,
          "process": "UIProcess / Host App (ViewService)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 9,
      "entitlement": "com.apple.UIKit.view-service-wants-custom-idiom-and-scale",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows an out-of-process UIKit view service to negotiate and adopt custom user interface idioms and display scaling factors under Mac Catalyst.",
      "webkit_usage_summary": "WebKit assigns this entitlement to macCatalyst WebContent processes via maccatalyst_process_webcontent_shared_entitlements in process-entitlements.sh. UIKit queries this entitlement when rendering out-of-process view content in Mac Catalyst, preventing mismatched display scaling and resolving formatting bugs such as text copying and pasting at an inflated scale.",
      "browserenginekit_implications": "This is an Apple-private UIKit entitlement specific to Mac Catalyst and is unavailable to third-party developers. It has no bearing on BrowserEngineKit on iOS, which targets native iOS where out-of-process browser rendering uses native iOS scale factors and BrowserEngineKit is not supported on Mac Catalyst.",
      "canonical_processes": [
        "WebContent"
      ],
      "raw_processes": [
        "WebContent (Shared)"
      ],
      "platforms": [
        "macCatalyst"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 317,
          "description": "Adds com.apple.UIKit.view-service-wants-custom-idiom-and-scale to all macCatalyst WebContent process variants."
        }
      ],
      "key_commits": [
        {
          "hash": "ac8d000f597a",
          "date": "2020-09-09",
          "subject": "Text copied and pasted from Mac Catalyst apps appears larger than expected"
        },
        {
          "hash": "184bfa73c8e9",
          "date": "2026-04-07",
          "subject": "Consolidate shared entitlements for the macCatalyst WebContent process variants"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 317,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 281,
      "related_spis": [
        {
          "name": "PUActivityProgressController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "PXActivityProgressController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "UIDocumentPasswordView",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIKeyboard",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIKeyboardImpl",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIKeyboardInputModeController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIPeripheralHost",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIPickerContentView",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIPreviewItemController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UITextAutofillSuggestion",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UITextInputTraits",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UITextSelectionRectCustomHandleInfo",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        }
      ]
    },
    {
      "id": 10,
      "entitlement": "com.apple.aneuserd.private.allow",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "GPU, Graphics & Display",
      "short_purpose": "Grants access to communicate with aneuserd (Apple Neural Engine User Daemon) for hardware-accelerated neural network inference on Apple Silicon.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the macOS GPU process in mac_process_gpu_entitlements within process-entitlements.sh. It permits the GPU process to access the Apple Neural Engine daemon (aneuserd) for machine learning, vision, and media processing acceleration tasks. Runtime enforcement is handled by the macOS daemon and Seatbelt sandbox rather than internal WebKit C++ checks.",
      "browserenginekit_implications": "This is an Apple-internal private entitlement restricted to macOS system components and not granted to third-party browsers or BrowserEngineKit extensions on iOS. Third-party browser extensions using BrowserEngineKit cannot obtain direct access to aneuserd or underlying private Apple Neural Engine daemons, constraining hardware-accelerated ML workloads to standard public frameworks supported in the sandbox.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 77,
          "description": "Adds com.apple.aneuserd.private.allow to the GPU process entitlements on macOS."
        }
      ],
      "key_commits": [
        {
          "hash": "1e054343a3ef",
          "date": "2026-04-08",
          "subject": "Remove obsolete OS version checks in process-entitlements.sh"
        },
        {
          "hash": "a782040e52f0",
          "date": "2023-04-27",
          "subject": "Dynamically extend GPU Process to Apple Camera Client when appropriate"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 77,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 11,
      "entitlement": "com.apple.avfoundation.allow-system-wide-context",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Grants permission for a sandboxed process to access and interact with system-wide AVFoundation output contexts (such as AVOutputContext for audio presentation routing and spatial audio).",
      "webkit_usage_summary": "WebKit assigns this entitlement on macOS to both the GPU process and WebContent processes within process-entitlements.sh when restricted entitlements are enabled. It allows WebKit media playback components (via PAL::OutputContext) to interact with system-wide AVOutputContext instances for audio output device management and head-tracked spatial audio. The restriction is enforced by macOS AVFoundation framework internals rather than in WebKit code.",
      "browserenginekit_implications": "This is an Apple-private macOS entitlement that is not available to third-party browsers using BrowserEngineKit on iOS. Third-party iOS browser engines cannot obtain this private privilege and must rely on standard public AVAudioSession / AVFoundation routing mechanisms handled through the host app and OS audio system. This primarily limits private, low-level system-wide AVOutputContext manipulation to Apple's first-party macOS binaries.",
      "canonical_processes": [
        "WebContent",
        "GPU"
      ],
      "raw_processes": [
        "GPU",
        "WebContent (Shared)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 61,
          "description": "Adds com.apple.avfoundation.allow-system-wide-context to the macOS GPU process entitlement list when WK_USE_RESTRICTED_ENTITLEMENTS is YES"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 248,
          "description": "Adds com.apple.avfoundation.allow-system-wide-context to macOS WebContent processes in mac_process_webcontent_shared_entitlements()"
        },
        {
          "file": "Source/WebCore/PAL/pal/avfoundation/OutputContext.h",
          "line": 42,
          "description": "Declares PAL::OutputContext::sharedAudioPresentationOutputContext() wrapping AVFoundation's AVOutputContext for audio device routing"
        }
      ],
      "key_commits": [
        {
          "hash": "200008b652ba",
          "date": "2020-12-04",
          "subject": "[Cocoa] Adopt AVOutputDevice.allowsHeadTrackedSpatialAudio"
        },
        {
          "hash": "eb466700acaf",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function"
        },
        {
          "hash": "1e054343a3ef",
          "date": "2026-04-08",
          "subject": "Remove obsolete OS version checks in process-entitlements.sh"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 61,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 248,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 82,
      "related_spis": [
        {
          "name": "AVAssetCollection",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVContentKeyReportGroup",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVOutputContext",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVStreamDataParser",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVSystemController",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "URLSession",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "URLSessionDataDelegate",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "URLSessionDataDelegateQueue",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "_setPreventsSleepDuringVideoPlayback:",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "_setSuppressesAudioRendering:",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "appendStreamData:",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "appendStreamData:withFlags:",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 12,
      "entitlement": "com.apple.coreaudio.LoadDecodersInProcess",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Permits CoreAudio and AudioToolbox to load audio decoder plugins and components directly into the calling process rather than delegating decoding to an external system daemon.",
      "webkit_usage_summary": "WebKit assigns this entitlement to iOS and visionOS WebContent processes via `process-entitlements.sh`. It enables WebContent to load system audio decoders directly in-process for low-latency Web Audio and media stream processing without incurring cross-process IPC hops to external audio services. The entitlement is enforced internally by CoreAudio/AudioToolbox system frameworks during codec component registration and instantiation.",
      "browserenginekit_implications": "Third-party browsers utilizing BrowserEngineKit cannot obtain this Apple-private entitlement because `com.apple.coreaudio.*` entitlements are reserved for Apple internal and first-party system binaries. Consequently, 3P WebContent processes cannot load privileged system CoreAudio decoders in-process, requiring them to either use standard out-of-process system audio pipelines or bundle their own software audio decoders. This grants first-party WebKit an efficiency and latency advantage in audio decoding on iOS.",
      "canonical_processes": [
        "WebContent"
      ],
      "raw_processes": [
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 456,
          "description": "Adds com.apple.coreaudio.LoadDecodersInProcess to WebContent shared entitlements for iOS and visionOS"
        }
      ],
      "key_commits": [
        {
          "hash": "40b5c0b0cc26",
          "date": "2024-02-29",
          "subject": "The WebContent process should decode audio in-process"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 456,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 4,
      "related_spis": [
        {
          "name": "AudioComponentApplyServerRegistrations",
          "kind": "symbols",
          "framework": "AudioToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AudioComponentFetchServerRegistrations",
          "kind": "symbols",
          "framework": "AudioToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AudioDeviceDuck",
          "kind": "symbols",
          "framework": "AudioToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AudioGetDeviceSpatialPreferencesForContentType",
          "kind": "symbols",
          "framework": "AudioToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 13,
      "entitlement": "com.apple.coreaudio.allow-vorbis-decode",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Grants permission to instantiate and use Apple's system CoreAudio / AudioToolbox Vorbis audio decoder.",
      "webkit_usage_summary": "WebKit assigns this entitlement to both WebContent and GPU processes across macOS, iOS, and visionOS via process-entitlements.sh. It allows WebKit's audio and media pipelines to decode Ogg/WebM Vorbis audio tracks using Apple's platform CoreAudio framework without being blocked by system codec restrictions.",
      "browserenginekit_implications": "Because this is an Apple-private CoreAudio entitlement, third-party browser engines using BrowserEngineKit on iOS cannot obtain it. Consequently, 3P engines cannot decode Vorbis audio via system AudioToolbox / CoreAudio components and must bundle their own userspace Vorbis decoder (such as libvorbis or FFmpeg) inside their sandboxed processes.",
      "canonical_processes": [
        "WebContent",
        "GPU"
      ],
      "raw_processes": [
        "GPU",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 457,
          "description": "Adds com.apple.coreaudio.allow-vorbis-decode to shared WebContent entitlements for iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 567,
          "description": "Adds com.apple.coreaudio.allow-vorbis-decode to GPU process entitlements for iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 67,
          "description": "Adds com.apple.coreaudio.allow-vorbis-decode to GPU process entitlements on macOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 224,
          "description": "Adds com.apple.coreaudio.allow-vorbis-decode to shared WebContent entitlements on macOS"
        }
      ],
      "key_commits": [
        {
          "hash": "853523182260",
          "date": "2023-10-13",
          "subject": "Enable Vorbis support on iOS"
        },
        {
          "hash": "dcbecf457750",
          "date": "2021-10-04",
          "subject": "Vorbis decoder can't be instantiated - follow up on Bug 230742"
        },
        {
          "hash": "3bbe3921665b",
          "date": "2021-09-28",
          "subject": "Vorbis decoder can't be instantiated - Remove workaround added in bug 228139"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 67,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 224,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 457,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 567,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 4,
      "related_spis": [
        {
          "name": "AudioComponentApplyServerRegistrations",
          "kind": "symbols",
          "framework": "AudioToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AudioComponentFetchServerRegistrations",
          "kind": "symbols",
          "framework": "AudioToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AudioDeviceDuck",
          "kind": "symbols",
          "framework": "AudioToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AudioGetDeviceSpatialPreferencesForContentType",
          "kind": "symbols",
          "framework": "AudioToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 14,
      "entitlement": "com.apple.developer.WebKit.ServiceWorkers",
      "category": "restricted-other",
      "ios_parity_status": "ios-managed-approval",
      "functional_domain": "WebKit Internal IPC & Features",
      "short_purpose": "Allows an iOS application hosting WKWebView to enable and execute Service Workers without restricting navigations to App-Bound Domains.",
      "webkit_usage_summary": "Checked at runtime in WKWebView initialization, NetworkProcess, and WebPage on iOS to determine whether Service Workers should be permitted. If neither this entitlement nor 'com.apple.developer.web-browser' is present and the configuration does not restrict navigations to App-Bound Domains, WebKit disables Service Workers to prevent tracking and background execution in arbitrary host applications.",
      "browserenginekit_implications": "3P browser engines running via BrowserEngineKit implement their own service worker engine and network stack independently of WebKit, making WebKit's check irrelevant. For apps using WKWebView, designated default browsers typically possess 'com.apple.developer.web-browser', which WebKit accepts as an alternative to this entitlement to enable Service Workers.",
      "canonical_processes": [
        "WebContent",
        "Networking",
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "MobileMiniBrowser (Host App)",
        "Networking (checking UIProcess)",
        "Test Runner / Harness (Host App)",
        "TestWebKitAPI",
        "UIProcess / Host App",
        "WebContent (checking UIProcess)"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "visionOS",
        "watchOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebView.mm",
          "line": 873,
          "description": "Checks for this entitlement or com.apple.developer.web-browser, disabling Service Workers if neither is present and App-Bound Domains are not enforced"
        },
        {
          "file": "Source/WebKit/NetworkProcess/ios/NetworkProcessIOS.mm",
          "line": 82,
          "description": "Checks whether the host UIProcess has the ServiceWorkers or web-browser entitlement via XPC connection"
        },
        {
          "file": "Source/WebKit/WebProcess/WebPage/ios/WebPageIOS.mm",
          "line": 724,
          "description": "Verifies that the parent UIProcess possesses either ServiceWorkers or web-browser entitlement before enabling service worker functionality"
        }
      ],
      "key_commits": [
        {
          "hash": "3a49d90a61b1",
          "date": "2020-06-25",
          "subject": "Allow service workers for web browsers"
        },
        {
          "hash": "ee4aadf8519c",
          "date": "2026-02-06",
          "subject": "[SaferCPP] Fixed [iOS] UnretainedCallArgsChecker issues in Source/WebKit"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MobileMiniBrowser/MobileMiniBrowser/MobileMiniBrowser.entitlements",
          "line": 13,
          "value": true,
          "process": "MobileMiniBrowser (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS-simulator.entitlements",
          "line": 9,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS.entitlements",
          "line": 9,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-watchOS.entitlements",
          "line": 7,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 74,
          "function": "process_ios_family_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebView.mm",
          "line": 873,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/NetworkProcess/ios/NetworkProcessIOS.mm",
          "line": 82,
          "process": "Networking (checking UIProcess)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/WebProcess/WebPage/ios/WebPageIOS.mm",
          "line": 724,
          "process": "WebContent (checking UIProcess)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 15,
      "entitlement": "com.apple.developer.coremedia.allow-alternate-video-decoder-selection",
      "category": "restricted-other",
      "ios_parity_status": "ios-managed-approval",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Allows an application or process to query and select alternate or non-standard video decoders (such as VP9 decoding pipelines) within CoreMedia and VideoToolbox.",
      "webkit_usage_summary": "WebKit assigns this entitlement to both the WebContent and GPU processes on iOS and visionOS via `process-entitlements.sh`. It enables CoreMedia and VideoToolbox to instantiate alternate video decoders for web media playback across WebContent and the GPU process. Enforcement occurs directly inside Apple's CoreMedia and VideoToolbox frameworks rather than via WebKit runtime checks.",
      "browserenginekit_implications": "This entitlement is a restricted managed Apple developer entitlement and is not part of the standard BrowserEngineKit entitlement set granted to third-party browser processes. Third-party browser engines on iOS cannot utilize alternate VideoToolbox decoder selection pathways unless explicitly provisioned by Apple, restricting access to certain platform video decoding configurations available to WebKit.",
      "canonical_processes": [
        "WebContent",
        "GPU"
      ],
      "raw_processes": [
        "GPU",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 432,
          "description": "Adds com.apple.developer.coremedia.allow-alternate-video-decoder-selection to iOS and visionOS WebContent shared process entitlements"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 519,
          "description": "Adds com.apple.developer.coremedia.allow-alternate-video-decoder-selection to iOS and visionOS GPU process entitlements"
        }
      ],
      "key_commits": [
        {
          "hash": "48c0bbe484cd",
          "date": "2021-01-17",
          "subject": "Add CoreMedia aavds entitlement to WebContent and GPU processes https://bugs.webkit.org/show_bug.cgi?id=220238"
        },
        {
          "hash": "586ce1b3e48b",
          "date": "2021-11-29",
          "subject": "Create a new XPC service with specific entitlements to support Captive Portal use cases https://bugs.webkit.org/show_bug.cgi?id=233388"
        },
        {
          "hash": "2ec4b744e3ae",
          "date": "2022-05-25",
          "subject": "[iOS] WebContent captive portal XPC service needs entitlement to set sandbox state variables https://bugs.webkit.org/show_bug.cgi?id=240921"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 432,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 519,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 10,
      "related_spis": [
        {
          "name": "FigPhotoDecompressionSetHardwareCutoff",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigThreadRegisterAbortAction",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigThreadUnregisterAbortAction",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigVideoTargetCreateWithVideoReceiverEndpointID",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MTEnableCaption2015Behavior",
          "kind": "symbols",
          "framework": "MediaToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MTOverrideShouldPlayHDRVideo",
          "kind": "symbols",
          "framework": "MediaToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MTShouldPlayHDRVideo",
          "kind": "symbols",
          "framework": "MediaToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MT_GetShouldPlayHDRVideoNotificationSingleton",
          "kind": "symbols",
          "framework": "MediaToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "kCMTextMarkupAttribute_PreventLineWrapping",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "kMTSupportNotification_ShouldPlayHDRVideoChanged",
          "kind": "symbols",
          "framework": "MediaToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 16,
      "entitlement": "com.apple.developer.cs.allow-jit",
      "category": "browserenginekit",
      "ios_parity_status": "browserenginekit-granted",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Allows an iOS application or extension process to allocate writable and executable memory regions for just-in-time (JIT) compilation.",
      "webkit_usage_summary": "WebKit provisions this entitlement to WebContent process extensions (`WebContentProcessExtension`, `WebContentXPCService`) and JavaScriptCore command-line tools on iOS and visionOS via `process-entitlements.sh`. At runtime, JavaScriptCore's `ExecutableAllocator.cpp` inspects this entitlement (alongside `dynamic-codesigning`) under `HAVE(IOS_JIT_RESTRICTIONS)` to determine whether JIT compilation may be safely initialized.",
      "browserenginekit_implications": "This is an official entitlement granted to authorized third-party browser engines using BrowserEngineKit on iOS for their WebContent extension processes. It provides 3P browser engines (such as Chromium/V8 or Gecko/SpiderMonkey) parity with WebKit by permitting JIT compilation for JavaScript and WebAssembly within WebContent processes.",
      "canonical_processes": [
        "WebContent",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "WebContent",
        "WebContent / JSC",
        "jsc / JSC Tools"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 5,
          "description": "Entitlement plist definition granting JIT compilation privilege to WebContent process extensions"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 476,
          "description": "Signs WebContent processes with com.apple.developer.cs.allow-jit on iOS family platforms"
        },
        {
          "file": "Source/JavaScriptCore/jit/ExecutableAllocator.cpp",
          "line": 137,
          "description": "Runtime check in isJITEnabled() verifying either dynamic-codesigning or com.apple.developer.cs.allow-jit"
        }
      ],
      "key_commits": [
        {
          "hash": "ce585987e8f9",
          "date": "2024-04-05",
          "subject": "(3) Adopt com.apple.developer.cs.allow-jit entitlement for iOS."
        },
        {
          "hash": "b1d861f1f579",
          "date": "2024-04-01",
          "subject": "(2) Adopt com.apple.developer.cs.allow-jit entitlement for iOS."
        },
        {
          "hash": "dd74d7957b6d",
          "date": "2024-03-09",
          "subject": "Adopt com.apple.developer.cs.allow-jit entitlement for iOS."
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 5,
          "value": true,
          "process": "WebContent"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentXPCService.entitlements",
          "line": 5,
          "value": true,
          "process": "WebContent"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 476,
          "function": "ios_family_process_webcontent_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 189,
          "function": "ios_family_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/jit/ExecutableAllocator.cpp",
          "line": 137,
          "process": "WebContent / JSC",
          "platforms": [
            "iOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 45,
      "related_spis": [
        {
          "name": "OSLaunchdJob",
          "kind": "classes",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "initWithPlist:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "proxyRebuildCache",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setServiceName:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "IOHIDDeviceClose",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceOpen",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceRegisterInputReportCallback",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceScheduleWithRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceSetReport",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceUnscheduleFromRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDEventAppendEvent",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDEventCreateDigitizerEvent",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        }
      ]
    },
    {
      "id": 17,
      "entitlement": "com.apple.developer.group-session.urlactivity",
      "category": "restricted-other",
      "ios_parity_status": "ios-managed-approval",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Grants permission to initiate and participate in GroupActivities (SharePlay) URL-based synchronized media sessions, enabling the Media Session Coordinator API.",
      "webkit_usage_summary": "WebKit checks this entitlement at runtime in `defaultMediaSessionCoordinatorEnabled()` within `WebPreferencesDefaultValues.cpp` to determine whether the Media Session Coordinator API is enabled by default. If running in a WebContent process, it queries whether the parent UIProcess has the entitlement; otherwise, it checks the calling process directly. This gates the exposure of synchronized media session coordination and underlying GroupActivities framework calls to authorized clients like Safari.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS do not have access to this restricted entitlement, as Apple does not grant it to third-party developers or BrowserEngineKit extensions. As a result, third-party browser engines cannot rely on WebKit's built-in MediaSessionCoordinator integration with system SharePlay, though host apps can still use standard GroupActivities via the public `com.apple.developer.group-session` entitlement for custom coordination.",
      "canonical_processes": [
        "WebContent",
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "UIProcess / Host App / WebContent"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/WebPreferencesDefaultValues.cpp",
          "line": 189,
          "description": "Gates `defaultMediaSessionCoordinatorEnabled()` based on whether the process (or WebProcess's parent UIProcess) possesses `com.apple.developer.group-session.urlactivity`."
        }
      ],
      "key_commits": [
        {
          "hash": "0c05aaec18f6",
          "date": "2021-07-27",
          "subject": "[Cocoa] WebKit is making GroupActivities API calls for all WebKit clients"
        },
        {
          "hash": "a5e0723e6f70",
          "date": "2021-11-03",
          "subject": "[macOS] MediaSession coordinator enabled in UIProcess, disabled in WebContent"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/WebKit/Shared/WebPreferencesDefaultValues.cpp",
          "line": 189,
          "process": "UIProcess / Host App / WebContent",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 18,
      "entitlement": "com.apple.developer.hardened-process",
      "category": "generally-available",
      "ios_parity_status": "ios-public-parity",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Opts the process into system-enforced runtime hardening and enhanced security mitigations against memory corruption and tampering.",
      "webkit_usage_summary": "WebKit signs this entitlement into all auxiliary child processes (WebContent, GPU, Networking, Model, webpushd) as well as JavaScriptCore tools (jsc, testapi, mya) across iOS, macOS, macCatalyst, and visionOS. It ensures child processes operate under stricter OS runtime protections alongside hardening mitigations such as checked allocations and memory tagging. Enforced at launch by the kernel and dyld rather than checked in WebKit C++ code.",
      "browserenginekit_implications": "Third-party browsers and their BrowserEngineKit extension processes (WebContent, Networking, Rendering) can adopt Apple process hardening and enhanced security capabilities supported by the OS and Xcode. Because this is a security hardening restriction rather than a privileged OS capability, third-party engines are not disadvantaged and can opt into equivalent OS runtime protections to defend child processes against exploitation.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "webpushd",
        "Model",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "GPU",
        "Model",
        "Networking",
        "WebContent (Shared)",
        "jsc / JSC Tools",
        "mya (JSC)",
        "testapi (JSC)",
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 458,
          "description": "Adds com.apple.developer.hardened-process to shared WebContent process variants on iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 84,
          "description": "Adds com.apple.developer.hardened-process to the GPU process on macOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 138,
          "description": "Adds com.apple.developer.hardened-process to the Networking process on macOS"
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 38,
          "description": "Adds com.apple.developer.hardened-process to the JavaScriptCore CLI shell (jsc) on macOS"
        }
      ],
      "key_commits": [
        {
          "hash": "a8f1028c8858",
          "date": "2025-02-06",
          "subject": "[iOS] Add `com.apple.developer.hardened-process` entitlement to WebKit child processes"
        },
        {
          "hash": "13dae7def0db",
          "date": "2025-02-26",
          "subject": "[JSC] Add com.apple.developer.hardened-process entitlement to JSC shell and testapi on all platforms"
        },
        {
          "hash": "bb4d3ee9eae2",
          "date": "2025-10-02",
          "subject": "New WebContent process variant for Enhanced Security"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 84,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 138,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 234,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 288,
          "function": "mac_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 304,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 375,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 400,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 458,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 575,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 590,
          "function": "ios_family_process_model_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Model",
          "platforms": [
            "visionOS",
            "iOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 622,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 670,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 38,
          "function": "mac_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 68,
          "function": "mac_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 85,
          "function": "mac_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 112,
          "function": "maccatalyst_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 140,
          "function": "maccatalyst_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 166,
          "function": "maccatalyst_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 199,
          "function": "ios_family_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 215,
          "function": "ios_family_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 19,
      "entitlement": "com.apple.developer.identity-document-services.web-presentment-controller",
      "category": "restricted-other",
      "ios_parity_status": "ios-managed-approval",
      "functional_domain": "Apple Pay, PassKit & Identity",
      "short_purpose": "Authorizes an application to act as an identity document web presentment controller to request and display digital identity documents via web presentment UI.",
      "webkit_usage_summary": "WebKit checks this entitlement in `Source/WebKit/Shared/WebPreferencesDefaultValues.cpp` via `defaultDigitalCredentialsEnabled()` on iOS and macOS. If the host process holds either `com.apple.developer.web-browser` or this entitlement, the W3C Digital Credentials API is enabled by default in WebKit. The check is performed directly in the UIProcess or forwarded from the WebContent process to its parent.",
      "browserenginekit_implications": "This is a restricted Apple developer entitlement outside standard BrowserEngineKit entitlements, requiring specialized entitlement provisioning. Third-party browsers possessing the managed `com.apple.developer.web-browser` entitlement satisfy WebKit's alternative entitlement check, enabling Digital Credentials without this specific key. However, standalone WebKit-embedding apps or 3P engines seeking to interface directly with IdentityDocumentServices presentment controllers must obtain this managed entitlement from Apple.",
      "canonical_processes": [
        "WebContent",
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "UIProcess / Host App / WebContent"
      ],
      "platforms": [
        "iOS",
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/WebPreferencesDefaultValues.cpp",
          "line": 266,
          "description": "defaultDigitalCredentialsEnabled() checks for either com.apple.developer.web-browser or com.apple.developer.identity-document-services.web-presentment-controller to enable digital credentials"
        }
      ],
      "key_commits": [
        {
          "hash": "bad163661a0f",
          "date": "2025-06-25",
          "subject": "Digital Credentials: conditionally enable the API based on entitlement"
        },
        {
          "hash": "2d4ca326601e",
          "date": "2025-11-23",
          "subject": "Turn on thread-safe statics everywhere except bmalloc and JSC"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/WebKit/Shared/WebPreferencesDefaultValues.cpp",
          "line": 266,
          "process": "UIProcess / Host App / WebContent",
          "platforms": [
            "iOS",
            "macOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 20,
      "entitlement": "com.apple.developer.kernel.extended-virtual-addressing",
      "category": "generally-available",
      "ios_parity_status": "ios-public-parity",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Enables 64-bit processes on iOS, iPadOS, and macOS to access an extended virtual address space beyond standard kernel virtual memory constraints.",
      "webkit_usage_summary": "WebKit provisions this entitlement to WebContent and GPU processes (both in standalone XPC services and auxiliary process extensions across iOS, macOS, and visionOS) as well as JSC command-line and test binaries. In JavaScriptCore's StructureAlignedMemoryAllocator, WebKit checks this entitlement at runtime on iOS-family platforms: if absent, the process is treated as VA-constrained and scales down its structure-heap virtual memory reservation relative to physical RAM to avoid exhausting address space.",
      "browserenginekit_implications": "This entitlement is a public capability generally available to third-party iOS developers and can be included in third-party browser host apps and BrowserEngineKit extension profiles without special Apple approval. It allows alternative browser engines (e.g., Chromium/V8 or Gecko/SpiderMonkey) to allocate large contiguous virtual address ranges for JS heaps, Wasm memory cages, and partition allocators without encountering default iOS virtual memory space limits, placing 3P engines on equal footing with WebKit.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "GPU",
        "WebContent",
        "WebContent (Shared)",
        "WebContent / JSC",
        "WebContent.CaptivePortal",
        "WebContent.EnhancedSecurity",
        "jsc / JSC Tools",
        "mya (JSC)",
        "testapi (JSC)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/JavaScriptCore/heap/StructureAlignedMemoryAllocator.cpp",
          "line": 285,
          "description": "Runtime check verifying if the process has extended virtual addressing before scaling structure heap reservation size"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 484,
          "description": "Adds extended-virtual-addressing entitlement to WebContent process on iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 7,
          "description": "Declares extended-virtual-addressing for the WebContent process extension plist"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/GPUProcessExtension.entitlements",
          "line": 5,
          "description": "Declares extended-virtual-addressing for the GPU process extension plist"
        }
      ],
      "key_commits": [
        {
          "hash": "cffeaa6ccbf42e8d5ff626cc9806f7eac3c66e6b",
          "date": "2026-05-29",
          "subject": "Scale down structure-heap reservation size with physical memory"
        },
        {
          "hash": "eb466700acafb0a4e0823b232fb9d7e8b54c4771",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/GPUProcessExtension.entitlements",
          "line": 5,
          "value": true,
          "process": "GPU"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/GPUXPCService.entitlements",
          "line": 5,
          "value": true,
          "process": "GPU"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 7,
          "value": true,
          "process": "WebContent"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentXPCService.entitlements",
          "line": 7,
          "value": true,
          "process": "WebContent"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 244,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 314,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 484,
          "function": "ios_family_process_webcontent_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 493,
          "function": "ios_family_process_webcontent_captiveportal_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 507,
          "function": "ios_family_process_webcontent_enhancedsecurity_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent.EnhancedSecurity",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 578,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 30,
          "function": "mac_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 60,
          "function": "mac_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 83,
          "function": "mac_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 110,
          "function": "maccatalyst_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 144,
          "function": "maccatalyst_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 164,
          "function": "maccatalyst_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 198,
          "function": "ios_family_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 214,
          "function": "ios_family_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/heap/StructureAlignedMemoryAllocator.cpp",
          "line": 285,
          "process": "WebContent / JSC",
          "platforms": [
            "iOS",
            "visionOS",
            "macOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 45,
      "related_spis": [
        {
          "name": "OSLaunchdJob",
          "kind": "classes",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "initWithPlist:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "proxyRebuildCache",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setServiceName:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "IOHIDDeviceClose",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceOpen",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceRegisterInputReportCallback",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceScheduleWithRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceSetReport",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceUnscheduleFromRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDEventAppendEvent",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDEventCreateDigitizerEvent",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        }
      ]
    },
    {
      "id": 21,
      "entitlement": "com.apple.developer.videotoolbox.client-sandboxed-decoder",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Allows a sandboxed process to connect to VideoToolbox out-of-process decompression services (such as VTDecoderXPCService) for video decoding.",
      "webkit_usage_summary": "WebKit assigns this entitlement in process-entitlements.sh on macOS to both the GPU process and WebContent processes when WK_USE_RESTRICTED_ENTITLEMENTS is enabled. It enables these sandboxed helper processes to delegate video decoding to VideoToolbox's XPC decoder services without requiring broader sandbox permissions.",
      "browserenginekit_implications": "This entitlement is specific to macOS and is neither available to nor required by third-party browser engines using BrowserEngineKit on iOS. Third-party iOS browsers cannot obtain this restricted Apple developer entitlement, but iOS BrowserEngineKit processes rely on standard iOS media frameworks and sandbox rules rather than macOS VTDecoderXPCService.",
      "canonical_processes": [
        "WebContent",
        "GPU"
      ],
      "raw_processes": [
        "GPU",
        "WebContent (Shared)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 60,
          "description": "Adds com.apple.developer.videotoolbox.client-sandboxed-decoder to macOS GPU process entitlements"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 245,
          "description": "Adds com.apple.developer.videotoolbox.client-sandboxed-decoder to shared macOS WebContent process entitlements"
        }
      ],
      "key_commits": [
        {
          "hash": "5b058b050962",
          "date": "2020-09-23",
          "subject": "[macOS] Change name of client decoder entitlement"
        },
        {
          "hash": "bac9ef065224",
          "date": "2021-01-11",
          "subject": "[macOS] Enable the client decoder entitlement for the GPU Process"
        },
        {
          "hash": "de906ef1749b",
          "date": "2025-05-01",
          "subject": "[macOS] Allow VTDecompressionSession to use VTDecoderXPCService"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 60,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 245,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 33,
      "related_spis": [
        {
          "name": "VTCopyAV1DecoderCapabilitiesDictionary",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "VTCopyHEVCDecoderCapabilitiesDictionary",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "VTGetDefaultColorAttributesWithHints",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "VTGetGVADecoderAvailability",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "VTImageRotationSessionCreate",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "VTImageRotationSessionSetProperty",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "VTImageRotationSessionTransferImage",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "VTPixelBufferConformerCopyConformedPixelBuffer",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "VTPixelBufferConformerCreateWithAttributes",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "VTPixelBufferConformerIsConformantPixelBuffer",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "VTRestrictVideoDecoders",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "VTSelectAndCreateVideoDecoderInstance",
          "kind": "symbols",
          "framework": "VideoToolbox",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 22,
      "entitlement": "com.apple.developer.web-browser",
      "category": "restricted-other",
      "ios_parity_status": "ios-managed-approval",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Allows an iOS application to register and be selected by users as the system default web browser, and confers full web browser status within WebKit.",
      "webkit_usage_summary": "WebKit checks this entitlement on the host application's audit token (from UIProcess, NetworkProcess, and WebContent processes) to distinguish full web browsers from in-app WebViews. Holding this entitlement exempts the app from App-Bound Domains restrictions, permits Service Workers in WKWebView without App-Bound Domains limitations, enables Digital Credentials APIs, and allows the host app to selectively disable Lockdown Mode via WKWebpagePreferences.",
      "browserenginekit_implications": "This is Apple's managed entitlement granted to third-party web browsers on iOS to become the default browser app. Third-party browsers using WKWebView rely on it to enable critical browser capabilities (such as unrestricted Service Workers and Lockdown Mode management) that standard in-app WebViews cannot access. For 3P browsers adopting BrowserEngineKit, this entitlement is held by the host application alongside 'com.apple.developer.web-browser-engine.host'.",
      "canonical_processes": [
        "WebContent",
        "Networking",
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "MobileMiniBrowser (Host App)",
        "Networking (checking UIProcess)",
        "Test Runner / Harness (Host App)",
        "TestWebKitAPI",
        "UIProcess / Host App",
        "UIProcess / Host App / WebContent",
        "WebContent (checking UIProcess)"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/Cocoa/DefaultWebBrowserChecks.mm",
          "line": 261,
          "description": "Checks parent process audit token for com.apple.developer.web-browser to determine full web browser status for App-Bound Domains exemption"
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebView.mm",
          "line": 873,
          "description": "Enables Service Workers in WKWebView if the host process has either com.apple.developer.web-browser or com.apple.developer.WebKit.ServiceWorkers"
        },
        {
          "file": "Source/WebKit/NetworkProcess/ios/NetworkProcessIOS.mm",
          "line": 82,
          "description": "Verifies that the parent UIProcess connection has com.apple.developer.web-browser or com.apple.developer.WebKit.ServiceWorkers before permitting Service Worker operations"
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebpagePreferences.mm",
          "line": 643,
          "description": "Requires com.apple.developer.web-browser or com.apple.private.allow-ldm-exempt-webview before allowing Lockdown Mode to be disabled on a webpage"
        },
        {
          "file": "Source/WebKit/Shared/WebPreferencesDefaultValues.cpp",
          "line": 266,
          "description": "Checks com.apple.developer.web-browser on the parent process to conditionally enable the Digital Credentials API"
        }
      ],
      "key_commits": [
        {
          "hash": "bad163661a0f",
          "date": "2025-06-25",
          "subject": "Digital Credentials: conditionally enable the API based on entitlement"
        },
        {
          "hash": "c53d2fe1ee79",
          "date": "2025-09-23",
          "subject": "Mobile Mini Browser failing to launch through Xcode"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MobileMiniBrowser/MobileMiniBrowser/MobileMiniBrowser.entitlements",
          "line": 5,
          "value": true,
          "process": "MobileMiniBrowser (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS-simulator.entitlements",
          "line": 15,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS.entitlements",
          "line": 17,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 82,
          "function": "process_ios_family_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/Shared/Cocoa/DefaultWebBrowserChecks.mm",
          "line": 261,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Shared/Cocoa/DefaultWebBrowserChecks.mm",
          "line": 277,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Shared/WebPreferencesDefaultValues.cpp",
          "line": 266,
          "process": "UIProcess / Host App / WebContent",
          "platforms": [
            "iOS",
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebView.mm",
          "line": 873,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/NetworkProcess/ios/NetworkProcessIOS.mm",
          "line": 82,
          "process": "Networking (checking UIProcess)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/WebProcess/WebPage/ios/WebPageIOS.mm",
          "line": 724,
          "process": "WebContent (checking UIProcess)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebpagePreferences.mm",
          "line": 536,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebpagePreferences.mm",
          "line": 643,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 23,
      "entitlement": "com.apple.developer.web-browser-engine.host",
      "category": "browserenginekit",
      "ios_parity_status": "browserenginekit-granted",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Grants an iOS host application permission to instantiate, connect to, and manage BrowserEngineKit out-of-process browser extensions.",
      "webkit_usage_summary": "Assigned to WebKit's iOS test and developer host applications (MobileMiniBrowser, WebKitTestRunnerApp, and TestWebKitAPI) across iOS and visionOS. It enables these host test apps to spawn and manage WebKit's out-of-process extensions (such as locally-built process extensions) using BrowserEngineKit APIs. The entitlement is enforced by OS system daemons and the BrowserEngineKit framework during extension launch rather than checked directly in WebKit C++ code.",
      "browserenginekit_implications": "This is one of the foundational BrowserEngineKit entitlements granted by Apple to approved third-party browser apps on iOS in the EU. A third-party browser host app must possess this entitlement in its provisioning profile to initialize BEWebContentProcess, BENetworkingProcess, or BERenderingProcess extension instances.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "MobileMiniBrowser (Host App)",
        "Test Runner / Harness (Host App)",
        "TestWebKitAPI"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MobileMiniBrowser/MobileMiniBrowser/MobileMiniBrowser.entitlements",
          "line": 7,
          "description": "Entitlement declared for MobileMiniBrowser host app on iOS"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS.entitlements",
          "line": 19,
          "description": "Entitlement declared for WebKitTestRunnerApp host harness on iOS devices"
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 83,
          "description": "Signs TestWebKitAPI with host entitlement for iOS and visionOS testing"
        }
      ],
      "key_commits": [
        {
          "hash": "2bc6c250ae10",
          "date": "2024-06-26",
          "subject": "Local WebKit builds don't use locally-built WebKit process extensions"
        },
        {
          "hash": "59868a40fe51",
          "date": "2024-10-18",
          "subject": "[WebKitTestRunnerApp] Missing entitlements blocking iOS device install."
        },
        {
          "hash": "b84ab3c3dcf1",
          "date": "2025-04-24",
          "subject": "TestWebKitAPI.app fails to launch in iOS Simulator"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MobileMiniBrowser/MobileMiniBrowser/MobileMiniBrowser.entitlements",
          "line": 7,
          "value": true,
          "process": "MobileMiniBrowser (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS-simulator.entitlements",
          "line": 17,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS.entitlements",
          "line": 19,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 83,
          "function": "process_ios_family_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 24,
      "entitlement": "com.apple.developer.web-browser-engine.networking",
      "category": "browserenginekit",
      "ios_parity_status": "browserenginekit-granted",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Allows an ExtensionKit extension to run as a browser engine's dedicated out-of-process networking service (BENetworkingProcess) on iOS.",
      "webkit_usage_summary": "WebKit declares this entitlement in `NetworkingProcessExtension.entitlements` for its ExtensionKit-based network extension target on iOS. At runtime, WebKit checks for this entitlement via `WTF::processHasEntitlement()` in `isInWebKitChildProcess()` within `DefaultWebBrowserChecks.mm` to identify whether the executing process is an auxiliary browser child process.",
      "browserenginekit_implications": "This entitlement is part of Apple's official BrowserEngineKit API granted to authorized third-party browser developers on iOS (e.g., under EU DMA provisions). It allows third-party browsers to launch and manage an isolated `BENetworkingProcess` extension, providing parity with WebKit's out-of-process networking architecture while running in a restricted sandbox separate from web content and UI processes.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/NetworkingProcessExtension.entitlements",
          "line": 5,
          "description": "Entitlement declaration for the WebKit Networking ExtensionKit auxiliary process"
        },
        {
          "file": "Source/WebKit/Shared/Cocoa/DefaultWebBrowserChecks.mm",
          "line": 75,
          "description": "Runtime check verifying if the current process is an auxiliary child process possessing the networking extension entitlement"
        }
      ],
      "key_commits": [
        {
          "hash": "638c7e3dc408",
          "date": "2024-02-20",
          "subject": "Fix layout tests in simulator after https://commits.webkit.org/274822@main"
        },
        {
          "hash": "2bc6c250ae10",
          "date": "2024-06-26",
          "subject": "Local WebKit builds don't use locally-built WebKit process extensions"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/NetworkingProcessExtension.entitlements",
          "line": 5,
          "value": true,
          "process": "Networking"
        }
      ],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/WebKit/Shared/Cocoa/DefaultWebBrowserChecks.mm",
          "line": 75,
          "process": "Networking",
          "platforms": [
            "iOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 253,
      "related_spis": [
        {
          "name": "NSTextAlternatives",
          "kind": "classes",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "NSURLDownload",
          "kind": "classes",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "UITextSuggestion",
          "kind": "classes",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIWKDocumentContext",
          "kind": "classes",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "_NSHSTSStorage",
          "kind": "classes",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_NSHTTPAlternativeServicesFilter",
          "kind": "classes",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_NSHTTPAlternativeServicesStorage",
          "kind": "classes",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "HTTPServiceEntriesWithFilter:",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_CFCachedURLResponse",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_CFURLCache",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_CFURLRequest",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_CFURLResponse",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        }
      ]
    },
    {
      "id": 25,
      "entitlement": "com.apple.developer.web-browser-engine.rendering",
      "category": "browserenginekit",
      "ios_parity_status": "browserenginekit-granted",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Authorizes an auxiliary extension process to act as an out-of-process browser rendering and GPU worker process via BrowserEngineKit on iOS.",
      "webkit_usage_summary": "Applied to WebKit's ExtensionKit-based GPU process extension (GPUProcessExtension.entitlements) on iOS. WebKit queries this entitlement at runtime via processHasEntitlement to identify the process as an auxiliary browser subprocess (DefaultWebBrowserChecks.mm) and enforces media environment capability preconditions during camera and user media capture (UserMediaCaptureManagerProxy.cpp, MockRealtimeVideoSource.cpp).",
      "browserenginekit_implications": "Third-party browser engines with Apple's BrowserEngineKit entitlement grant can obtain this entitlement for their dedicated rendering extensions, launching them via the BERenderingProcess API. Third-party engines must adhere to the same ExtensionKit capability and media environment constraints when capturing media or managing out-of-process GPU workloads on iOS.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/GPUProcessExtension.entitlements",
          "line": 7,
          "description": "Entitlement declared for the WebKit GPU process ExtensionKit extension on iOS"
        },
        {
          "file": "Source/WebKit/GPUProcess/webrtc/UserMediaCaptureManagerProxy.cpp",
          "line": 671,
          "description": "Runtime check validating media environment setup before starting camera capture in a rendering extension process"
        },
        {
          "file": "Source/WebKit/Shared/Cocoa/DefaultWebBrowserChecks.mm",
          "line": 76,
          "description": "Subprocess detection checking for rendering, networking, or webcontent BrowserEngineKit entitlements"
        }
      ],
      "key_commits": [
        {
          "hash": "c46feb491756",
          "date": "2025-07-10",
          "subject": "Move UserMediaCaptureManagerProxy to WebKit/GPUProcess rdar://155411315 https://bugs.webkit.org/show_bug.cgi?id=295627"
        },
        {
          "hash": "2bc6c250ae10",
          "date": "2024-06-26",
          "subject": "Local WebKit builds don't use locally-built WebKit process extensions https://bugs.webkit.org/show_bug.cgi?id=273550 rdar://125726458"
        },
        {
          "hash": "2736644fa8bb",
          "date": "2024-04-11",
          "subject": "[iOS] REGRESSION (277078@main): 61 mediastream layout tests are constantly failing. https://bugs.webkit.org/show_bug.cgi?id=272551 <rdar://126162943>"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/GPUProcessExtension.entitlements",
          "line": 7,
          "value": true,
          "process": "GPU"
        }
      ],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/WebCore/platform/mock/MockRealtimeVideoSource.cpp",
          "line": 488,
          "process": "GPU",
          "platforms": [
            "iOS"
          ]
        },
        {
          "file": "Source/WebKit/GPUProcess/webrtc/UserMediaCaptureManagerProxy.cpp",
          "line": 671,
          "process": "GPU",
          "platforms": [
            "iOS"
          ]
        },
        {
          "file": "Source/WebKit/Shared/Cocoa/DefaultWebBrowserChecks.mm",
          "line": 76,
          "process": "GPU",
          "platforms": [
            "iOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 96,
      "related_spis": [
        {
          "name": "AVAssetCollection",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVContentKeyReportGroup",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVOutputContext",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVStreamDataParser",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVSystemController",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "NSTextAlternatives",
          "kind": "classes",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UITextSuggestion",
          "kind": "classes",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIWKDocumentContext",
          "kind": "classes",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "URLSession",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "URLSessionDataDelegate",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "URLSessionDataDelegateQueue",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "_documentRect",
          "kind": "selectors",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        }
      ]
    },
    {
      "id": 26,
      "entitlement": "com.apple.developer.web-browser-engine.restrict.notifyd",
      "category": "browserenginekit",
      "ios_parity_status": "browserenginekit-granted",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Restricts direct access to the Darwin notification center daemon (notifyd) from sandboxed WebContent processes while enabling the UIProcess to broker and forward allowlisted system notifications over IPC.",
      "webkit_usage_summary": "WebKit assigns this entitlement to WebContent processes and auxiliary process extensions on iOS, macOS, and visionOS via process-entitlements.sh and WebContentProcessExtension.entitlements. The Seatbelt sandbox profile in common.sb defines notify-blocking based on this entitlement to restrict Mach access to notifyd. At runtime, WebProcessPoolCocoa.mm checks the WebContent audit token for this entitlement before forwarding system notifications via WebKit IPC.",
      "browserenginekit_implications": "Third-party browser engines implementing WebContent processes using BrowserEngineKit on iOS are granted this entitlement. It enforces sandbox hardening by cutting off direct access to notifyd from untrusted web rendering processes, requiring notification events to be brokered from the host browser. This provides full security parity between 3P BrowserEngineKit WebContent extensions and Apple's own WebContent extensions.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "All Processes",
        "UIProcess (inspecting WebContent)",
        "WebContent",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check",
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 9,
          "description": "Declares entitlement for the BrowserEngineKit WebContent process extension plist."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 188,
          "description": "notify_entitlements() adds entitlement to shared WebContent processes on macOS, iOS, and visionOS."
        },
        {
          "file": "Source/WebKit/UIProcess/Cocoa/WebProcessPoolCocoa.mm",
          "line": 829,
          "description": "UIProcess verifies WebContent audit token has this entitlement before forwarding Darwin notifications via PostNotification."
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/common.sb",
          "line": 81,
          "description": "Defines notify-blocking sandbox filter requiring this entitlement to block notifyd Mach access."
        }
      ],
      "key_commits": [
        {
          "hash": "c28465076e27",
          "date": "2024-03-19",
          "subject": "Restrict access to notifyd only when process has entitlement"
        },
        {
          "hash": "1c34b5da48ce",
          "date": "2024-04-11",
          "subject": "Block notification service in sandbox"
        },
        {
          "hash": "b72eb4d87c98",
          "date": "2024-06-17",
          "subject": "Fix notifyd notification forwarding in the simulator"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 9,
          "value": true,
          "process": "WebContent"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 188,
          "function": "notify_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/Cocoa/WebProcessPoolCocoa.mm",
          "line": 829,
          "process": "UIProcess (inspecting WebContent)",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Shared/Sandbox/common.sb",
          "line": 81,
          "process": "All Processes",
          "platform": "iOS",
          "snippet": "(define (notify-blocking) (require-entitlement \"com.apple.developer.web-browser-engine.restrict.notifyd\"))"
        }
      ],
      "related_spis_count": 11,
      "related_spis": [
        {
          "name": "NSTextAlternatives",
          "kind": "classes",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UITextSuggestion",
          "kind": "classes",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIWKDocumentContext",
          "kind": "classes",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "_documentRect",
          "kind": "selectors",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "_initWithNSTextAlternatives:",
          "kind": "selectors",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "_initWithUIKitTextSuggestion:",
          "kind": "selectors",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "_nsTextAlternative",
          "kind": "selectors",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "_uikitTextSuggestion",
          "kind": "selectors",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "invalidateWithReason:",
          "kind": "selectors",
          "framework": "BrowserEngineKit",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "isLowConfidence",
          "kind": "selectors",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "setAnnotatedText:",
          "kind": "selectors",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        }
      ]
    },
    {
      "id": 27,
      "entitlement": "com.apple.developer.web-browser-engine.webcontent",
      "category": "browserenginekit",
      "ios_parity_status": "browserenginekit-granted",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Identifies an extension process as a dedicated WebContent process under BrowserEngineKit, permitting out-of-process web content execution and JIT capabilities.",
      "webkit_usage_summary": "WebKit assigns this entitlement to WebContentProcessExtension on iOS, the simulator ModelService, and to the jsc testing CLI tool for iOS 17.4+ SDK builds. WebKit also queries this entitlement at runtime in DefaultWebBrowserChecks.mm via processHasEntitlement to verify whether the executing process is an authorized WebKit auxiliary child process.",
      "browserenginekit_implications": "This entitlement is officially available to authorized third-party browser engine developers via Apple's BrowserEngineKit framework on iOS. It enables third-party browsers to deploy out-of-process web content worker/renderer extensions (_BEWebContentProcess) that can execute untrusted web script and utilize JIT code generation with parity to WebKit's WebContent extension.",
      "canonical_processes": [
        "WebContent",
        "Model",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "Model",
        "WebContent",
        "jsc / JSC Tools"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 11,
          "description": "Entitlement declaration for WebKit's WebContent process ExtensionKit extension."
        },
        {
          "file": "Source/WebKit/Shared/Cocoa/DefaultWebBrowserChecks.mm",
          "line": 77,
          "description": "Runtime check in isInWebKitChildProcess() verifying whether the process holds the webcontent child process entitlement."
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 190,
          "description": "Signs the entitlement into jsc CLI tools on iOS 17.4+ to test BrowserEngineKit WebContent behavior."
        }
      ],
      "key_commits": [
        {
          "hash": "ce585987e8f9",
          "date": "2024-04-05",
          "subject": "(3) Adopt com.apple.developer.cs.allow-jit entitlement for iOS."
        },
        {
          "hash": "65e695d98b94",
          "date": "2026-03-26",
          "subject": "Add webcontent entitlement to ModelService for simulator https://bugs.webkit.org/show_bug.cgi?id=310838 rdar://169643489"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Resources/ios/ModelService-embedded-simulator.entitlements",
          "line": 9,
          "value": true,
          "process": "Model"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 11,
          "value": true,
          "process": "WebContent"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 190,
          "function": "ios_family_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/Shared/Cocoa/DefaultWebBrowserChecks.mm",
          "line": 77,
          "process": "WebContent",
          "platforms": [
            "iOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 292,
      "related_spis": [
        {
          "name": "NSTextAlternatives",
          "kind": "classes",
          "framework": "BrowserEngineKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "PUActivityProgressController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "PXActivityProgressController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "UIDocumentPasswordView",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIKeyboard",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIKeyboardImpl",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIKeyboardInputModeController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIPeripheralHost",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIPickerContentView",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIPreviewItemController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UITextAutofillSuggestion",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UITextInputTraits",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        }
      ]
    },
    {
      "id": 28,
      "entitlement": "com.apple.frontboard.launchapplications",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows a process to launch or activate applications in the background or foreground via FrontBoard/SpringBoard application-opening services.",
      "webkit_usage_summary": "Assigned to the webpush daemon (`webpushd`) on iOS and visionOS via `process-entitlements.sh`. In `WebPushDaemon.mm`, the daemon uses FrontBoardServices and SpringBoardServices SPI (`FBSOpenApplicationOptions`, `SBSCreateOpenApplicationService`) to launch or awaken target client applications (such as `SafariViewService` or web clip host apps) and deliver web push actions when background push events arrive.",
      "browserenginekit_implications": "This is a private Apple system entitlement that is not accessible to third-party browsers or BrowserEngineKit extensions. Third-party browsers cannot directly trigger FrontBoard application launches or dispatch `BSAction` payloads to wake arbitrary bundle targets, relying instead on system-provided background notification delivery and standard user-facing launch flows.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 618,
          "description": "Signs webpushd with com.apple.frontboard.launchapplications on iOS and visionOS"
        },
        {
          "file": "Source/WebKit/webpushd/WebPushDaemon.mm",
          "line": 672,
          "description": "Initializes SBSOpenApplicationService and launches the target application with FBSOpenApplicationOptions to deliver web push actions"
        }
      ],
      "key_commits": [
        {
          "hash": "a984be0fb37d",
          "date": "2024-08-23",
          "subject": "webpushd app launch improvements rdar://131365223 https://bugs.webkit.org/show_bug.cgi?id=278443"
        },
        {
          "hash": "5f64555f4058",
          "date": "2024-08-21",
          "subject": "webpushd app launch improvements rdar://131365223 https://bugs.webkit.org/show_bug.cgi?id=278443"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 618,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 33,
      "related_spis": [
        {
          "name": "BSAction",
          "kind": "classes",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "BSActionResponder",
          "kind": "classes",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "BSActionResponse",
          "kind": "classes",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "BSMutableSettings",
          "kind": "classes",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "FBSOpenApplicationOptions",
          "kind": "classes",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "UISApplicationState",
          "kind": "classes",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "UIWebClip",
          "kind": "classes",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "UNMutableNotificationSettings",
          "kind": "classes",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "UNNotificationIcon",
          "kind": "classes",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "_registerBSActionHandler:",
          "kind": "selectors",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "emptySettings",
          "kind": "selectors",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "hostProcess",
          "kind": "selectors",
          "framework": "FrontBoardServices",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        }
      ]
    },
    {
      "id": 29,
      "entitlement": "com.apple.hid.manager.user-access-device",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Authorizes a process to create and register virtual Human Interface Devices (HID) in user space via IOHIDUserDevice.",
      "webkit_usage_summary": "WebKit declares this private entitlement exclusively for the TestWebKitAPI test runner binary on macOS and macCatalyst when built with internal restricted entitlements (WK_USE_RESTRICTED_ENTITLEMENTS). It is used alongside private HID event-filtering and internal dispatch entitlements to instantiate simulated HID hardware devices and inject synthetic input events during automated API tests.",
      "browserenginekit_implications": "This private Apple entitlement is not available to third-party browsers or BrowserEngineKit extensions on iOS. Because it is strictly an internal test-harness entitlement for TestWebKitAPI and is not used in production WebKit or Safari processes, its absence has no practical impact on 3P browser engines.",
      "canonical_processes": [
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "TestWebKitAPI"
      ],
      "platforms": [
        "macCatalyst",
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 59,
          "description": "Appends com.apple.hid.manager.user-access-device to TestWebKitAPI entitlements on macOS and macCatalyst under internal restricted entitlements."
        }
      ],
      "key_commits": [
        {
          "hash": "2177a497f6ef",
          "date": "2025-04-24",
          "subject": "Introduce a script to generate TestWebKitAPI entitlements"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 59,
          "function": "process_mac_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "macOS",
            "macCatalyst"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 30,
      "entitlement": "com.apple.imageio.allowabletypes",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "GPU, Graphics & Display",
      "short_purpose": "Restricts the system ImageIO framework to decoding only an explicitly allowlisted set of image UTIs, reducing parser attack surface.",
      "webkit_usage_summary": "WebKit provisions this entitlement for the specialized WebContent.CaptivePortal auxiliary process across macOS, macCatalyst, iOS, and visionOS. It populates the array with 'org.webmproject.webp', 'public.jpeg', 'public.png', and 'com.compuserve.gif'. This ensures ImageIO rejects parsing complex, less secure, or legacy image formats when rendering untrusted captive portal login web pages.",
      "browserenginekit_implications": "This is a private Apple entitlement under the com.apple.imageio namespace and is not granted to third-party apps or BrowserEngineKit extensions. Third-party browser engines cannot use OS-level ImageIO allowlisting via this entitlement, but they typically bundle their own image decoding libraries (e.g., in Chromium or Gecko) and captive portal web flows on iOS are handled exclusively by system services and WebKit.",
      "canonical_processes": [
        "WebContent"
      ],
      "raw_processes": [
        "WebContent.CaptivePortal"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "com.compuserve.gif",
        "org.webmproject.webp",
        "public.jpeg",
        "public.png"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 495,
          "description": "Adds the com.apple.imageio.allowabletypes array restricting image formats for WebContent.CaptivePortal on iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 31,
          "description": "Configures allowable ImageIO UTIs for WebContent.CaptivePortal on macOS"
        }
      ],
      "key_commits": [
        {
          "hash": "586ce1b3e48b",
          "date": "2021-11-29",
          "subject": "Create a new XPC service with specific entitlements to support Captive Portal use cases https://bugs.webkit.org/show_bug.cgi?id=233388 <rdar://problem/84481565>"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 31,
          "function": "mac_process_webcontent_captiveportal_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 32,
          "function": "mac_process_webcontent_captiveportal_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "org.webmproject.webp",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 33,
          "function": "mac_process_webcontent_captiveportal_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "public.jpeg",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 34,
          "function": "mac_process_webcontent_captiveportal_entitlements",
          "subkey": "2",
          "type": "string",
          "value": "public.png",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 35,
          "function": "mac_process_webcontent_captiveportal_entitlements",
          "subkey": "3",
          "type": "string",
          "value": "com.compuserve.gif",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 352,
          "function": "maccatalyst_process_webcontent_captiveportal_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 353,
          "function": "maccatalyst_process_webcontent_captiveportal_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "org.webmproject.webp",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 354,
          "function": "maccatalyst_process_webcontent_captiveportal_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "public.jpeg",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 355,
          "function": "maccatalyst_process_webcontent_captiveportal_entitlements",
          "subkey": "2",
          "type": "string",
          "value": "public.png",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 356,
          "function": "maccatalyst_process_webcontent_captiveportal_entitlements",
          "subkey": "3",
          "type": "string",
          "value": "com.compuserve.gif",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 495,
          "function": "ios_family_process_webcontent_captiveportal_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 496,
          "function": "ios_family_process_webcontent_captiveportal_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "org.webmproject.webp",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 497,
          "function": "ios_family_process_webcontent_captiveportal_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "public.jpeg",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 498,
          "function": "ios_family_process_webcontent_captiveportal_entitlements",
          "subkey": "2",
          "type": "string",
          "value": "public.png",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 499,
          "function": "ios_family_process_webcontent_captiveportal_entitlements",
          "subkey": "3",
          "type": "string",
          "value": "com.compuserve.gif",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 31,
      "entitlement": "com.apple.mediaremote.external-artwork-validation",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Permits passing external artwork image data to MediaRemote for display in system Now Playing interfaces.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the GPU process on macOS, iOS, and visionOS via `process-entitlements.sh`. It allows WebKit's media pipeline to register external artwork from web content (via the W3C Media Session API) with the MediaRemote framework so that album art appears properly in Lock Screen and Control Center Now Playing controls.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this Apple-private entitlement because it is not part of the granted BrowserEngineKit entitlement family. As a result, 3P browser helper extensions cannot directly provide external artwork data through private MediaRemote APIs and must instead rely on public Now Playing APIs in the host application or accept system limitations on Now Playing artwork.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 74,
          "description": "Adds com.apple.mediaremote.external-artwork-validation to the GPU process entitlements on macOS."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 521,
          "description": "Adds com.apple.mediaremote.external-artwork-validation to the GPU process entitlements on iOS and visionOS."
        }
      ],
      "key_commits": [
        {
          "hash": "8f70e6bf626c",
          "date": "2022-11-13",
          "subject": "mediaSession API not showing artwork"
        },
        {
          "hash": "faa11d115c78",
          "date": "2023-02-07",
          "subject": "REGRESSION (Safari 16.1): mediaSession API not showing artwork: part 2"
        },
        {
          "hash": "1e054343a3ef",
          "date": "2026-04-08",
          "subject": "Remove obsolete OS version checks in process-entitlements.sh"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 74,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 521,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 29,
      "related_spis": [
        {
          "name": "MRMediaRemoteAddAsyncCommandHandlerBlock",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoCreate",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoSetCommand",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoSetEnabled",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoSetOptions",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCopyPickableRoutes",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteGetLocalOrigin",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteRemoveCommandHandlerBlock",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetCanBeNowPlayingApplication",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetNowPlayingApplicationPlaybackStateForOrigin",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetNowPlayingInfo",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetNowPlayingInfoWithMergePolicy",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 32,
      "entitlement": "com.apple.mediaremote.set-playback-state",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Permits a process to update the system-wide media playback state directly via the private MediaRemote daemon.",
      "webkit_usage_summary": "In WebKit, this entitlement is provisioned to both the WebContent and GPU processes on iOS and visionOS via process-entitlements.sh. It allows WebKit's media playback subsystems to call private MediaRemote SPIs (such as MRMediaRemoteSetNowPlayingApplicationPlaybackStateForOrigin) to notify mediaremoted of active or paused media playback states.",
      "browserenginekit_implications": "Because this is an Apple-private entitlement, third-party browsers and BrowserEngineKit extension processes on iOS cannot obtain it. Third-party engines must manage media playback state through public AVFoundation and MediaPlayer APIs (such as MPNowPlayingInfoCenter and MPRemoteCommandCenter) within the host application process rather than directly setting playback state from isolated auxiliary processes.",
      "canonical_processes": [
        "WebContent",
        "GPU"
      ],
      "raw_processes": [
        "GPU",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 433,
          "description": "Adds com.apple.mediaremote.set-playback-state entitlement to WebContent process on iOS family platforms"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 520,
          "description": "Adds com.apple.mediaremote.set-playback-state entitlement to GPU process on iOS family platforms"
        },
        {
          "file": "Source/WebCore/PAL/pal/spi/mac/MediaRemoteSPI.h",
          "line": 137,
          "description": "Declares private SPI MRMediaRemoteSetNowPlayingApplicationPlaybackStateForOrigin used to set playback state"
        }
      ],
      "key_commits": [
        {
          "hash": "13771f185bf4ee131478ea0c5e728024c8e294d1",
          "date": "2020-02-07",
          "subject": "Build entitlements into GPU Process"
        },
        {
          "hash": "586ce1b3e48bed4740672a2a00b745a8e7080c06",
          "date": "2021-11-29",
          "subject": "Create a new XPC service with specific entitlements to support Captive Portal use cases"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 433,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 520,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 29,
      "related_spis": [
        {
          "name": "MRMediaRemoteAddAsyncCommandHandlerBlock",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoCreate",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoSetCommand",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoSetEnabled",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoSetOptions",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCopyPickableRoutes",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteGetLocalOrigin",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteRemoveCommandHandlerBlock",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetCanBeNowPlayingApplication",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetNowPlayingApplicationPlaybackStateForOrigin",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetNowPlayingInfo",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetNowPlayingInfoWithMergePolicy",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 33,
      "entitlement": "com.apple.mediaremote.ui-control",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Grants permission to control MediaRemote presentation UI, such as suppressing or managing system Now Playing Live Activities, lock screen widgets, and status presentation.",
      "webkit_usage_summary": "WebKit provisions this entitlement to the GPU process on iOS and visionOS via `process-entitlements.sh`. It allows WebKit's media session management subsystem to interact with private MediaRemote SPIs (such as `MRUIControllerProvider`) to control Now Playing presentation behavior and support Now Playing presentation suppression for web media.",
      "browserenginekit_implications": "This is an Apple-internal entitlement that is not granted to third-party apps or BrowserEngineKit extensions. Third-party browser engines must rely on public MediaPlayer framework APIs (e.g., MPNowPlayingInfoCenter) and cannot directly access MediaRemote UI controller SPIs to programmatically suppress or control system Now Playing activity presentation.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 522,
          "description": "Signs the GPU process on iOS-family platforms with com.apple.mediaremote.ui-control"
        },
        {
          "file": "Source/WebCore/PAL/pal/spi/mac/MediaRemoteSPI.h",
          "line": 153,
          "description": "Declares private MediaRemote interfaces MRUIControllerProvider and MRNowPlayingActivityUIControllable"
        }
      ],
      "key_commits": [
        {
          "hash": "87860a904550",
          "date": "2024-09-06",
          "subject": "[Cocoa] Support Now Playing presentation suppression https://bugs.webkit.org/show_bug.cgi?id=279288 rdar://132115578"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 522,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 29,
      "related_spis": [
        {
          "name": "MRMediaRemoteAddAsyncCommandHandlerBlock",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoCreate",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoSetCommand",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoSetEnabled",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCommandInfoSetOptions",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteCopyPickableRoutes",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteGetLocalOrigin",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteRemoveCommandHandlerBlock",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetCanBeNowPlayingApplication",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetNowPlayingApplicationPlaybackStateForOrigin",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetNowPlayingInfo",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "MRMediaRemoteSetNowPlayingInfoWithMergePolicy",
          "kind": "symbols",
          "framework": "MediaRemote",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 34,
      "entitlement": "com.apple.multitasking.systemappassertions",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "RunningBoard & Process Lifecycle",
      "short_purpose": "Grants privileged access to acquire system application background execution assertions (such as UnboundedNetworking) via AssertionServices / RunningBoard to prevent process suspension during background activity.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the iOS and visionOS NetworkProcess in process-entitlements.sh. Additionally, DownloadProxyMap in the UIProcess checks whether the host process has this entitlement; when present on platforms without modern download progress APIs, the UIProcess takes an UnboundedNetworking assertion on itself to avoid suspension while downloads are in flight.",
      "browserenginekit_implications": "This is an Apple-private entitlement that is not granted to third-party iOS apps or BrowserEngineKit extension processes. Consequently, third-party browsers cannot acquire system-level UnboundedNetworking background execution assertions directly, and must instead rely on public background execution primitives (such as BGTaskScheduler or background NSURLSession) to handle long-running downloads.",
      "canonical_processes": [
        "Networking",
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "Networking",
        "UIProcess / Host App"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 634,
          "description": "Signs the NetworkProcess with com.apple.multitasking.systemappassertions on iOS family platforms."
        },
        {
          "file": "Source/WebKit/UIProcess/Downloads/DownloadProxyMap.cpp",
          "line": 53,
          "description": "Checks WTF::processHasEntitlement for com.apple.multitasking.systemappassertions to initialize m_shouldTakeAssertion."
        },
        {
          "file": "Source/WebKit/UIProcess/Downloads/DownloadProxyMap.cpp",
          "line": 94,
          "description": "Acquires an UnboundedNetworking ProcessAssertion on the UIProcess when downloads are active if entitled."
        }
      ],
      "key_commits": [
        {
          "hash": "27d6db6681de",
          "date": "2019-03-08",
          "subject": "Have the UIProcess take the UnboundedNetworking assertion when downloads are in progress."
        },
        {
          "hash": "f38acd8fe12e",
          "date": "2019-08-02",
          "subject": "macCatalyst build fails the first attempt, requires a second build"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 634,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/Downloads/DownloadProxyMap.cpp",
          "line": 53,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 35,
      "entitlement": "com.apple.networkd.persistent_interface",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Grants permission to interact with networkd to register and manage persistent network interfaces and resolver agent configurations.",
      "webkit_usage_summary": "WebKit declares this entitlement in WebKitTestRunner-internal.entitlements for the macOS test runner harness. Along with private NetworkExtension entitlements, it allows WebKitTestRunner to configure local DNS resolver agents via SPI (nw_resolver_config_publish) and apply NEPolicySession routing rules for Web Platform Tests (WPT) without weakening the Network Process sandbox. It is never granted to production WebKit processes.",
      "browserenginekit_implications": "This private Apple entitlement is test-harness-specific on macOS and is completely unavailable to third-party browsers using BrowserEngineKit on iOS. Third-party browser engines must route traffic through standard Network.framework APIs within their networking extensions (com.apple.developer.web-browser-engine.networking) and cannot publish custom networkd resolver agents or configure low-level persistent interfaces.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "Test Runner / Harness (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner-internal.entitlements",
          "line": 15,
          "description": "Entitlement declaration for the WebKitTestRunner internal test harness on macOS"
        },
        {
          "file": "Tools/WebKitTestRunner/cocoa/TestControllerCocoa.mm",
          "line": 663,
          "description": "TestController::cocoaDNSInitialize configures custom DNS resolver agents and NEPolicySession policies for WPT execution"
        }
      ],
      "key_commits": [
        {
          "hash": "ae5d4ebf2175",
          "date": "2025-09-16",
          "subject": "[Cocoa] Add support for overriding DNS resolution for WPT"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner-internal.entitlements",
          "line": 15,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 36,
      "entitlement": "com.apple.pac.shared_region_id",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Assigns a process to an isolated Pointer Authentication Code (PAC) shared region domain in the dyld shared cache to prevent cross-process PAC signature forgery.",
      "webkit_usage_summary": "WebKit assigns this entitlement with value 'WebContent' to WebContent processes across macOS, macCatalyst, iOS, and visionOS, and with value 'WebKitModel' to Model processes on iOS-family platforms in process-entitlements.sh. The dyld dynamic linker and Darwin kernel use this entitlement on ARM64e architectures to isolate the process's PAC-authenticated shared cache region from standard system processes. It is enforced during OS dynamic loading/kernel initialization and contains no WebKit C++ runtime checks.",
      "browserenginekit_implications": "This is a private Apple entitlement ('com.apple.pac.*') unavailable to third-party browsers and BrowserEngineKit extensions on iOS. Third-party WebContent processes cannot configure an isolated PAC shared region ID and instead execute with standard shared cache mappings. As a result, 3P browser engines lack this hardware-assisted PAC domain partitioning between their web processes and the default system shared cache.",
      "canonical_processes": [
        "WebContent",
        "Model"
      ],
      "raw_processes": [
        "Model",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "WebContent",
        "WebKitModel"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 434,
          "description": "Adds com.apple.pac.shared_region_id set to 'WebContent' for iOS-family WebContent processes"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 589,
          "description": "Adds com.apple.pac.shared_region_id set to 'WebKitModel' for iOS-family Model processes"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 246,
          "description": "Adds com.apple.pac.shared_region_id set to 'WebContent' for macOS WebContent processes"
        }
      ],
      "key_commits": [
        {
          "hash": "6c1e67f56f01",
          "date": "2020-07-09",
          "subject": "[macOS] Adopt the WebKit-specific PAC key and entitlements"
        },
        {
          "hash": "f9d50c1cd187",
          "date": "2025-01-09",
          "subject": "Adopt PAC entitlement to assign shared region ID for the model process"
        },
        {
          "hash": "eb466700acaf",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 246,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "string",
          "value": "WebContent",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 315,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "string",
          "value": "WebContent",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 434,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "string",
          "value": "WebContent",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 589,
          "function": "ios_family_process_model_entitlements",
          "subkey": null,
          "type": "string",
          "value": "WebKitModel",
          "process": "Model",
          "platforms": [
            "visionOS",
            "iOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 37,
      "entitlement": "com.apple.payment.all-access",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Apple Pay, PassKit & Identity",
      "short_purpose": "Grants unrestricted internal access to Apple Pay and PassKit daemons (passd), enabling remote authorization and presentation of payment UI.",
      "webkit_usage_summary": "WebKit signs this entitlement into the iOS and visionOS NetworkProcess via ios_family_process_network_entitlements() in process-entitlements.sh. It enables the NetworkProcess to interact directly with PassKit system services and remotely present Apple Pay authorization UI using PKPaymentAuthorizationController on behalf of web sessions. The privilege is enforced by Apple's payment daemon rather than checked within WebKit C++ runtime code.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this Apple-private entitlement for either host apps or extension processes (networking, webcontent, rendering). 3P browsers cannot delegate remote PassKit payment authorization to auxiliary background network extensions, and must instead coordinate Apple Pay transactions from the main application process using standard public PassKit APIs and developer merchant entitlements.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 635,
          "description": "Adds com.apple.payment.all-access to the iOS and visionOS NetworkProcess entitlements"
        }
      ],
      "key_commits": [
        {
          "hash": "8f2025ff8a65",
          "date": "2019-03-11",
          "subject": "[Apple Pay] Use PKPaymentAuthorizationController to present the Apple Pay UI remotely from the Networking service on iOS"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 635,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 73,
      "related_spis": [
        {
          "name": "NFHardwareManager",
          "kind": "classes",
          "framework": "NearField",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        },
        {
          "name": "NFReaderSession",
          "kind": "classes",
          "framework": "NearField",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        },
        {
          "name": "PKDisbursementPaymentRequest",
          "kind": "classes",
          "framework": "PassKit",
          "feature_category": "Apple Pay, PassKit & Wallet Installments"
        },
        {
          "name": "PKPaymentInstallmentConfiguration",
          "kind": "classes",
          "framework": "PassKit",
          "feature_category": "Apple Pay, PassKit & Wallet Installments"
        },
        {
          "name": "PKPaymentInstallmentItem",
          "kind": "classes",
          "framework": "PassKit",
          "feature_category": "Apple Pay, PassKit & Wallet Installments"
        },
        {
          "name": "PKPaymentSetupConfiguration",
          "kind": "classes",
          "framework": "PassKit",
          "feature_category": "Apple Pay, PassKit & Wallet Installments"
        },
        {
          "name": "PKPaymentSetupController",
          "kind": "classes",
          "framework": "PassKit",
          "feature_category": "Apple Pay, PassKit & Wallet Installments"
        },
        {
          "name": "PKPaymentSetupFeature",
          "kind": "classes",
          "framework": "PassKit",
          "feature_category": "Apple Pay, PassKit & Wallet Installments"
        },
        {
          "name": "PKPaymentSetupRequest",
          "kind": "classes",
          "framework": "PassKit",
          "feature_category": "Apple Pay, PassKit & Wallet Installments"
        },
        {
          "name": "PKPaymentSetupViewController",
          "kind": "classes",
          "framework": "PassKit",
          "feature_category": "Apple Pay, PassKit & Wallet Installments"
        },
        {
          "name": "PKShippingMethods",
          "kind": "classes",
          "framework": "PassKit",
          "feature_category": "Apple Pay, PassKit & Wallet Installments"
        },
        {
          "name": "APIType",
          "kind": "selectors",
          "framework": "PassKit",
          "feature_category": "Apple Pay, PassKit & Wallet Installments"
        }
      ]
    },
    {
      "id": 38,
      "entitlement": "com.apple.private.accounts.bundleidspoofing",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Apple Pay, PassKit & Identity",
      "short_purpose": "Allows a privileged process to specify or spoof a client application's bundle identifier when interacting with the Accounts framework daemon (accountsd).",
      "webkit_usage_summary": "WebKit assigns this entitlement to the NetworkProcess on iOS and visionOS within `Source/WebKit/Scripts/process-entitlements.sh`. It allows the network process to perform account-related queries and credential authentication operations via `accountsd` on behalf of client applications hosting WebKit using the client's bundle identifier rather than WebKit's own bundle identity.",
      "browserenginekit_implications": "This is a private Apple entitlement not available to third-party developers or BrowserEngineKit extension processes (`com.apple.developer.web-browser-engine.networking`). Third-party browser engines run under their own defined app bundle identity and cannot spoof other application bundle IDs when communicating with system account services.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 636,
          "description": "Adds com.apple.private.accounts.bundleidspoofing to the NetworkProcess entitlements on iOS and visionOS"
        }
      ],
      "key_commits": [
        {
          "hash": "f38acd8fe12e",
          "date": "2019-08-02",
          "subject": "macCatalyst build fails the first attempt, requires a second build https://bugs.webkit.org/show_bug.cgi?id=200242 <rdar://problem/53678481>"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 636,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 68,
      "related_spis": [
        {
          "name": "AMSEngagementRequest",
          "kind": "classes",
          "framework": "AppleMediaServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "AMSUIEngagementTask",
          "kind": "classes",
          "framework": "AppleMediaServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "ASCAgentProxy",
          "kind": "classes",
          "framework": "AuthenticationServicesCore",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        },
        {
          "name": "ASCAppleIDCredential",
          "kind": "classes",
          "framework": "AuthenticationServicesCore",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        },
        {
          "name": "ASCAuthorizationPresentationContext",
          "kind": "classes",
          "framework": "AuthenticationServicesCore",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        },
        {
          "name": "ASCAuthorizationPresenter",
          "kind": "classes",
          "framework": "AuthenticationServicesCore",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        },
        {
          "name": "ASCCredentialRequestContext",
          "kind": "classes",
          "framework": "AuthenticationServicesCore",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        },
        {
          "name": "ASCPlatformPublicKeyCredentialAssertion",
          "kind": "classes",
          "framework": "AuthenticationServicesCore",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        },
        {
          "name": "ASCPlatformPublicKeyCredentialLoginChoice",
          "kind": "classes",
          "framework": "AuthenticationServicesCore",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        },
        {
          "name": "ASCPlatformPublicKeyCredentialRegistration",
          "kind": "classes",
          "framework": "AuthenticationServicesCore",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        },
        {
          "name": "ASCPublicKeyCredentialAssertionOptions",
          "kind": "classes",
          "framework": "AuthenticationServicesCore",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        },
        {
          "name": "ASCPublicKeyCredentialCreationOptions",
          "kind": "classes",
          "framework": "AuthenticationServicesCore",
          "feature_category": "Authentication, Passkeys, Enterprise SSO & Security"
        }
      ]
    },
    {
      "id": 39,
      "entitlement": "com.apple.private.allow-explicit-graphics-priority",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "GPU, Graphics & Display",
      "short_purpose": "Grants permission to explicitly specify scheduling and execution priorities for graphics rendering workloads and interact with low-level display/framebuffer subsystems.",
      "webkit_usage_summary": "WebKit assigns this entitlement to both WebContent and GPU processes on iOS and visionOS within `process-entitlements.sh`. It allows WebKit's graphics and rendering infrastructure to configure explicit GPU scheduling priorities and interface with display rendering layers without being restricted by default OS graphics scheduling constraints.",
      "browserenginekit_implications": "Because this is a private Apple entitlement (`com.apple.private.*`), it is not granted to third-party browsers using BrowserEngineKit. Third-party browser rendering extensions (`com.apple.developer.web-browser-engine.rendering`) must execute Metal rendering commands using default standard queue priorities and cannot request explicit elevated graphics scheduling.",
      "canonical_processes": [
        "WebContent",
        "GPU"
      ],
      "raw_processes": [
        "GPU",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 435,
          "description": "Adds com.apple.private.allow-explicit-graphics-priority to WebContent shared process entitlements for iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 523,
          "description": "Adds com.apple.private.allow-explicit-graphics-priority to GPU process entitlements for iOS and visionOS"
        }
      ],
      "key_commits": [
        {
          "hash": "13771f185bf4",
          "date": "2020-02-07",
          "subject": "Build entitlements into GPU Process https://bugs.webkit.org/show_bug.cgi?id=207367 <rdar://problem/59208411>"
        },
        {
          "hash": "586ce1b3e48b",
          "date": "2021-11-29",
          "subject": "Create a new XPC service with specific entitlements to support Captive Portal use cases https://bugs.webkit.org/show_bug.cgi?id=233388 <rdar://problem/84481565>"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 435,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 523,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 40,
      "entitlement": "com.apple.private.allow-ldm-exempt-webview",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Lockdown Mode & Parental Controls",
      "short_purpose": "Allows an iOS/visionOS host application to exempt a WKWebView from Lockdown Mode or captive portal mode.",
      "webkit_usage_summary": "WebKit checks this entitlement in WKWebpagePreferences.mm on iOS-family platforms when a host application attempts to disable Lockdown Mode via setLockdownModeEnabled:NO or captive portal mode via _setCaptivePortalModeEnabled:NO. If the calling host application lacks both this private entitlement and 'com.apple.developer.web-browser', WebKit raises an NSInternalInconsistencyException.",
      "browserenginekit_implications": "As an Apple-private entitlement, this is inaccessible to third-party developers and BrowserEngineKit browser engines. Third-party default browser apps must obtain Apple's managed 'com.apple.developer.web-browser' entitlement to configure or disable Lockdown Mode on their web views, while non-browser third-party apps cannot exempt their web views from Lockdown Mode.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "UIProcess / Host App"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebpagePreferences.mm",
          "line": 536,
          "description": "Entitlement check in _setCaptivePortalModeEnabled: verifying caller has permission to disable captive portal mode"
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebpagePreferences.mm",
          "line": 643,
          "description": "Entitlement check in setLockdownModeEnabled: raising an exception if an unauthorized host app attempts to disable Lockdown Mode"
        }
      ],
      "key_commits": [
        {
          "hash": "ee77044edb54",
          "date": "2024-07-08",
          "subject": "[Cocoa] Recognize a second entitlement to allow non-Lockdown Mode processes to launch"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebpagePreferences.mm",
          "line": 536,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebpagePreferences.mm",
          "line": 643,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 41,
      "entitlement": "com.apple.private.appstored",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Storage, Assets & System Databases",
      "short_purpose": "Grants permission to communicate with the App Store daemon (appstored) to register web-to-app install attribution parameters.",
      "webkit_usage_summary": "WebKit signs the iOS and visionOS Network process with this entitlement holding the 'InstallWebAttribution' string capability in process-entitlements.sh. This privilege allows WebKit's Private Click Measurement (PCM) subsystem to interact with AppStoreDaemon's ASDInstallWebAttributionService SPI to bridge web ad clicks to SKAdNetwork and AdAttributionKit for app installations. The check is enforced by appstored when receiving XPC attribution requests from WebKit.",
      "browserenginekit_implications": "Because com.apple.private.appstored is an Apple-internal entitlement, third-party browsers and BrowserEngineKit network extensions cannot obtain it. Third-party browser engines on iOS are unable to interface directly with ASDInstallWebAttributionService or submit PCM attribution data to appstored through this private channel.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "InstallWebAttribution"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 648,
          "description": "Adds com.apple.private.appstored array containing InstallWebAttribution to the iOS and visionOS Network process entitlements"
        },
        {
          "file": "Source/WebKit/NetworkProcess/cocoa/AppStoreDaemonSPI.h",
          "line": 56,
          "description": "Declares private SPI interfaces for ASDInstallWebAttributionService used to submit install attribution parameters"
        }
      ],
      "key_commits": [
        {
          "hash": "b40525e84793",
          "date": "2023-05-22",
          "subject": "Adopt ASDInstallWebAttributionService replacing ASDInstallAttribution"
        },
        {
          "hash": "4f69690a0415",
          "date": "2022-03-23",
          "subject": "Implement PCM to SKAdNetwork bridge"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 648,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 649,
          "function": "ios_family_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "InstallWebAttribution",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 11,
      "related_spis": [
        {
          "name": "ASDInstallWebAttributionParamsConfig",
          "kind": "classes",
          "framework": "AppStoreDaemon",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "ASDInstallWebAttributionService",
          "kind": "classes",
          "framework": "AppStoreDaemon",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "addInstallWebAttributionParamsWithConfig:completionHandler:",
          "kind": "selectors",
          "framework": "AppStoreDaemon",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "privateBrowsingSessionId",
          "kind": "selectors",
          "framework": "AppStoreDaemon",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "removeInstallWebAttributionParamsFromPrivateBrowsingSessionID:completionHandler:",
          "kind": "selectors",
          "framework": "AppStoreDaemon",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "setAdNetworkRegistrableDomain:",
          "kind": "selectors",
          "framework": "AppStoreDaemon",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "setAppAdamId:",
          "kind": "selectors",
          "framework": "AppStoreDaemon",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "setAttributionContext:",
          "kind": "selectors",
          "framework": "AppStoreDaemon",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "setImpressionId:",
          "kind": "selectors",
          "framework": "AppStoreDaemon",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "setPrivateBrowsingSessionId:",
          "kind": "selectors",
          "framework": "AppStoreDaemon",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "setSourceWebRegistrableDomain:",
          "kind": "selectors",
          "framework": "AppStoreDaemon",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        }
      ]
    },
    {
      "id": 42,
      "entitlement": "com.apple.private.aps-connection-initiate",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Grants permission to initiate direct connections to the Apple Push Notification service daemon (apsd) via APSConnection.",
      "webkit_usage_summary": "Granted to the webpushd daemon on macOS in process-entitlements.sh to allow it to establish connections with apsd for receiving push notifications. The daemon uses private APSConnection APIs in ApplePushServiceConnection.mm to manage Web Push API subscriptions and dispatch incoming push messages to web applications. On iOS-family platforms, WebKit provisions the corresponding unprefixed aps-connection-initiate entitlement to webpushd instead.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this private entitlement, as direct connection initiation to apsd is restricted to Apple system daemons. Instead of running a custom push daemon with raw APSConnection access, third-party browsers must manage push notifications via public UserNotifications / APNs APIs in their host application process.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 275,
          "description": "Adds com.apple.private.aps-connection-initiate to macOS webpushd entitlements"
        },
        {
          "file": "Source/WebKit/webpushd/ApplePushServiceConnection.mm",
          "line": 50,
          "description": "Implements APSConnectionDelegate methods in webpushd to handle public push tokens and incoming push messages"
        }
      ],
      "key_commits": [
        {
          "hash": "2beff75a4205",
          "date": "2021-12-07",
          "subject": "webpushd should run with regular user permissions https://bugs.webkit.org/show_bug.cgi?id=233844"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 275,
          "function": "mac_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 18,
      "related_spis": [
        {
          "name": "APSConnection",
          "kind": "classes",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "APSURLTokenInfo",
          "kind": "classes",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "_setEnabledTopics:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "_setIgnoredTopics:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "_setNonWakingTopics:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "_setOpportunisticTopics:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "enabledTopics",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "ignoredTopics",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "initWithEnvironmentName:namedDelegatePort:queue:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "initWithTopic:vapidPublicKey:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "invalidateURLTokenForInfo:completion:",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "nonWakingTopics",
          "kind": "selectors",
          "framework": "ApplePushService",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        }
      ]
    },
    {
      "id": 43,
      "entitlement": "com.apple.private.assets.accessible-asset-types",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Storage, Assets & System Databases",
      "short_purpose": "Specifies an allowlist of MobileAsset catalog asset types that a sandboxed process is authorized to query and download from mobileassetd.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the NetworkProcess on macOS, iOS, and visionOS with the value 'com.apple.MobileAsset.WebContentRestrictions'. This grants the network process permission to retrieve MobileAsset bundles containing URL restriction databases used by ParentalControlsURLFilter for Screen Time and parental controls filtering.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this Apple-private entitlement and cannot directly query or download MobileAsset restriction assets. Instead, 3P engines rely on higher-level system APIs such as the WebContentRestrictions framework (e.g., WCRBrowserEngineClient) to evaluate URLs against parental control policies.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "com.apple.MobileAsset.WebContentRestrictions"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 118,
          "description": "Configures com.apple.private.assets.accessible-asset-types array with com.apple.MobileAsset.WebContentRestrictions for the macOS NetworkProcess"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 668,
          "description": "Configures com.apple.private.assets.accessible-asset-types array with com.apple.MobileAsset.WebContentRestrictions for the iOS and visionOS NetworkProcess"
        }
      ],
      "key_commits": [
        {
          "hash": "d259da0f78ae",
          "date": "2022-12-15",
          "subject": "[macOS, iOS] Sandbox: Adopt new MobileAsset endpoints"
        },
        {
          "hash": "1e054343a3ef",
          "date": "2026-04-08",
          "subject": "Remove obsolete OS version checks in process-entitlements.sh"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 118,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 119,
          "function": "mac_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "com.apple.MobileAsset.WebContentRestrictions",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 668,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 669,
          "function": "ios_family_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "com.apple.MobileAsset.WebContentRestrictions",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 5,
      "related_spis": [
        {
          "name": "WCRBrowserEngineClient",
          "kind": "classes",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "allowURL:withCompletion:",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "evaluateURL:mainDocumentURL:withCompletion:onCompletionQueue:",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "evaluateURL:withCompletion:onCompletionQueue:",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "shouldEvaluateURLs",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        }
      ]
    },
    {
      "id": 44,
      "entitlement": "com.apple.private.assets.bypass-asset-types-check",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Storage, Assets & System Databases",
      "short_purpose": "Allows a process to bypass mobileassetd asset type validation checks when querying or downloading MobileAsset assets.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the Network process on macOS, iOS, and visionOS via process-entitlements.sh alongside com.apple.private.assets.accessible-asset-types. It allows the Network process to communicate with mobileassetd to fetch assets such as com.apple.MobileAsset.WebContentRestrictions for parental controls and content filtering. The entitlement is enforced directly by the system MobileAsset daemon rather than WebKit source code.",
      "browserenginekit_implications": "This is an Apple-private entitlement that is not granted to third-party browsers or BrowserEngineKit extensions on iOS. Third-party browser engines cannot access or download MobileAsset bundles directly under these private asset types, relying instead on public content-filtering or parental controls APIs if supported by the platform.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 117,
          "description": "Adds com.apple.private.assets.bypass-asset-types-check to macOS Network process entitlements"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 667,
          "description": "Adds com.apple.private.assets.bypass-asset-types-check to iOS and visionOS Network process entitlements"
        }
      ],
      "key_commits": [
        {
          "hash": "d259da0f78aebd1cd62401c82c57544c0579cfe3",
          "date": "2022-12-15",
          "subject": "[macOS, iOS] Sandbox: Adopt new MobileAsset endpoints"
        },
        {
          "hash": "1e054343a3ef797a1385fffb04a177969a072245",
          "date": "2026-04-08",
          "subject": "Remove obsolete OS version checks in process-entitlements.sh"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 117,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 667,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 5,
      "related_spis": [
        {
          "name": "WCRBrowserEngineClient",
          "kind": "classes",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "allowURL:withCompletion:",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "evaluateURL:mainDocumentURL:withCompletion:onCompletionQueue:",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "evaluateURL:withCompletion:onCompletionQueue:",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "shouldEvaluateURLs",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        }
      ]
    },
    {
      "id": 45,
      "entitlement": "com.apple.private.attribution.explicitly-assumed-identities",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows a process to explicitly assume arbitrary client process identities (via wildcard) when reporting activity attribution to the system status bar and Control Center for resource usage such as microphone and camera capture.",
      "webkit_usage_summary": "Granted to WebKit's GPU process on iOS and visionOS in `process-entitlements.sh` with a wildcard identity type. This allows the GPU process, which performs audio and media capture on behalf of web processes and host applications, to attribute privacy indicators (such as the orange microphone dot in the iOS status bar) to the hosting client application rather than the auxiliary GPU daemon itself.",
      "browserenginekit_implications": "This is an Apple-private entitlement not granted to third-party browsers or BrowserEngineKit extensions. Third-party browser engines running auxiliary rendering or networking processes cannot explicitly assume arbitrary client identities for system privacy attribution, relying instead on standard app-level attribution or standard system capture APIs.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "wildcard"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 564,
          "description": "Adds com.apple.private.attribution.explicitly-assumed-identities array with wildcard identity type to the GPU process entitlements on iOS and visionOS"
        }
      ],
      "key_commits": [
        {
          "hash": "cb605074fb29",
          "date": "2021-10-01",
          "subject": "GPU Process microphone attribution SPI adoption https://bugs.webkit.org/show_bug.cgi?id=231034 <rdar://problem/83732537>"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 564,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 565,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": "0:type",
          "type": "string",
          "value": "wildcard",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 46,
      "entitlement": "com.apple.private.canGetAppLinkInfo",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Allows a process to query LaunchServices for App Link (Universal Link) target application metadata and status for a given URL.",
      "webkit_usage_summary": "WebKit checks this entitlement at runtime in the UIProcess / host app alongside com.apple.private.canModifyAppLinkPermissions inside WKActionSheetAssistant.mm. When present (such as in MobileSafari), WebKit queries LSAppLink to present contextual action sheet options, such as opening the URL in the target native app or forcing it to open in Safari.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit or standard WebKit on iOS cannot obtain this Apple-private entitlement. Consequently, WebKit disables built-in LSAppLink context menu resolution for third-party host applications, requiring 3P browsers to handle Universal Link routing and prompt options independently.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "UIProcess / Host App"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/UIProcess/ios/WKActionSheetAssistant.mm",
          "line": 81,
          "description": "applicationHasAppLinkEntitlements() checks WTF::processHasEntitlement(\"com.apple.private.canGetAppLinkInfo\"_s) to verify permission to query LSAppLink information"
        }
      ],
      "key_commits": [
        {
          "hash": "dd956d5e74249681ddf904e0bbe401f308b65e0f",
          "date": "2022-06-05",
          "subject": "Drop operator==() overload for comparing a String to a const char*"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/ios/WKActionSheetAssistant.mm",
          "line": 81,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 47,
      "entitlement": "com.apple.private.canModifyAppLinkPermissions",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Grants permission to modify LaunchServices App Link (Universal Link) user routing preferences and enablement state.",
      "webkit_usage_summary": "Checked at runtime in the UIProcess (WKActionSheetAssistant.mm) alongside com.apple.private.canGetAppLinkInfo to verify if the host application has permission to query and modify Universal Link routing state. When both entitlements are present (such as in MobileSafari), WebKit exposes context menu actions allowing users to toggle whether a link opens in its associated native app or in the browser via LSAppLink.",
      "browserenginekit_implications": "Because this is an Apple-internal private entitlement (com.apple.private.*), it is not available to third-party browsers using BrowserEngineKit on iOS. Third-party browsers cannot use private LaunchServices LSAppLink SPIs to inspect or modify system-wide Universal Link routing preferences directly via WebKit context menus.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "UIProcess / Host App"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/UIProcess/ios/WKActionSheetAssistant.mm",
          "line": 81,
          "description": "Checks if the host process possesses com.apple.private.canModifyAppLinkPermissions and com.apple.private.canGetAppLinkInfo before offering App Link actions."
        },
        {
          "file": "Source/WebKit/UIProcess/ios/WKActionSheetAssistant.mm",
          "line": 503,
          "description": "Uses applicationHasAppLinkEntitlements() to conditionally append 'Open in Safari' and 'Open in [App]' actions that manipulate LSAppLink.enabled."
        }
      ],
      "key_commits": [
        {
          "hash": "dd956d5e7424",
          "date": "2022-06-05",
          "subject": "Drop operator==() overload for comparing a String to a const char* https://bugs.webkit.org/show_bug.cgi?id=241285"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/ios/WKActionSheetAssistant.mm",
          "line": 81,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 48,
      "entitlement": "com.apple.private.ciphermld.allow",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Authorizes a process to communicate with the system ciphermld daemon to perform privacy-preserving Private Information Retrieval (PIR) and Private Encrypted Compute (PEC) cryptographic queries.",
      "webkit_usage_summary": "WebKit provisions this entitlement to its Network process (`com.apple.WebKit.Networking`) on macOS, iOS, and visionOS via `process-entitlements.sh`. It allows the network process to interface with `ciphermld` / `CipherML.framework` to execute cryptographic PIR lookups for privacy-preserving web content evaluation and parental control restrictions without revealing query metadata.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this entitlement because it is restricted to Apple private system components (`com.apple.private.*`). Third-party browser networking extensions (`com.apple.developer.web-browser-engine.networking`) cannot connect directly to `ciphermld` and must perform any custom privacy-preserving network queries or oblivious HTTP in userspace using standard public networking APIs.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 127,
          "description": "Adds com.apple.private.ciphermld.allow to the macOS Network process entitlements."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 637,
          "description": "Adds com.apple.private.ciphermld.allow to iOS and visionOS Network process entitlements."
        }
      ],
      "key_commits": [
        {
          "hash": "1e054343a3ef",
          "date": "2026-04-08",
          "subject": "Remove obsolete OS version checks in process-entitlements.sh"
        },
        {
          "hash": "bdbf8bd332f6",
          "date": "2023-04-13",
          "subject": "Add content filter related Mach service to sandbox"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 127,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 637,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 49,
      "entitlement": "com.apple.private.coremedia.allow-fps-attachment",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Allows CoreMedia / AVFoundation to attach FairPlay Streaming (FPS) content decryption keys directly to media sample buffers.",
      "webkit_usage_summary": "Provisioned to WebKit's GPU process across macOS, macCatalyst, iOS, and visionOS to enable FairPlay Streaming DRM decryption via AVSampleBufferAttachContentKey. CoreMedia enforces this entitlement internally when sample buffers are associated with content keys during protected media playback.",
      "browserenginekit_implications": "This is an Apple-private entitlement that is unavailable to third-party developers or BrowserEngineKit extensions. Notably, WebKit's process-entitlements.sh explicitly excludes it when building GPUExtension, meaning third-party browser GPU extensions on iOS cannot use direct FairPlay Streaming sample buffer key attachments.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 553,
          "description": "Adds the entitlement to the iOS/visionOS GPU process, explicitly excluding GPUExtension"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 83,
          "description": "Adds the entitlement to the macOS GPU process"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 374,
          "description": "Adds the entitlement to the macCatalyst GPU process"
        }
      ],
      "key_commits": [
        {
          "hash": "dcf4f5aba692",
          "date": "2023-12-12",
          "subject": "[Cocoa] Adopt AVSampleBufferAttachContentKey"
        },
        {
          "hash": "4a1e342eb471",
          "date": "2023-12-14",
          "subject": "[iOS] Enable SampleBufferContentKeySessionSupportEnabled by default"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 83,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 374,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 553,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 5,
      "related_spis": [
        {
          "name": "FigPhotoDecompressionSetHardwareCutoff",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigThreadRegisterAbortAction",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigThreadUnregisterAbortAction",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigVideoTargetCreateWithVideoReceiverEndpointID",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "kCMTextMarkupAttribute_PreventLineWrapping",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 50,
      "entitlement": "com.apple.private.coremedia.extensions.audiorecording.allow",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Allows an XPC service or extension process to perform audio recording and access audio capture sessions through CoreMedia.",
      "webkit_usage_summary": "WebKit assigns this entitlement to both the shared WebContent process and the GPU process on iOS and visionOS via process-entitlements.sh. It enables CoreMedia audio recording pipelines required for media capture features such as WebRTC and getUserMedia. The entitlement check is enforced internally by Apple's CoreMedia framework and system media daemons rather than directly in WebKit source code.",
      "browserenginekit_implications": "Because this is an Apple-private entitlement, it is unavailable to third-party browser engines and BrowserEngineKit extension processes on iOS. Third-party browsers must handle audio recording either through standard public AVFoundation/AudioUnit APIs in the main application process or within the bounds permitted by public audio session configurations, subject to host-level TCC microphone authorization.",
      "canonical_processes": [
        "WebContent",
        "GPU"
      ],
      "raw_processes": [
        "GPU",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 436,
          "description": "Adds the audio recording entitlement to the shared WebContent process on iOS and visionOS."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 524,
          "description": "Adds the audio recording entitlement to the GPU process on iOS and visionOS."
        }
      ],
      "key_commits": [
        {
          "hash": "13771f185bf4ee131478ea0c5e728024c8e294d1",
          "date": "2020-02-07",
          "subject": "Build entitlements into GPU Process"
        },
        {
          "hash": "f38acd8fe12e6c4d4012939c3533809bd0abb421",
          "date": "2019-08-02",
          "subject": "macCatalyst build fails the first attempt, requires a second build"
        },
        {
          "hash": "586ce1b3e48bed4740672a2a00b745a8e7080c06",
          "date": "2021-11-29",
          "subject": "Create a new XPC service with specific entitlements to support Captive Portal use cases"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 436,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 524,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 5,
      "related_spis": [
        {
          "name": "FigPhotoDecompressionSetHardwareCutoff",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigThreadRegisterAbortAction",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigThreadUnregisterAbortAction",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigVideoTargetCreateWithVideoReceiverEndpointID",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "kCMTextMarkupAttribute_PreventLineWrapping",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 51,
      "entitlement": "com.apple.private.coremedia.pidinheritance.allow",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Allows CoreMedia client processes to pass and inherit client process identifiers (PIDs) across media services for proper session attribution, power accounting, and playback state management.",
      "webkit_usage_summary": "WebKit assigns this private entitlement to both the WebContent and GPU processes on iOS and visionOS via `process-entitlements.sh`. It enables CoreMedia and system media daemons (such as mediaserverd) to attribute media playback sessions originating in WebKit's auxiliary processes back to the hosting browser application PID.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot receive this private Apple entitlement. Instead, 3P browser engines must rely on standard BrowserEngineKit process models and public AVFoundation/CoreMedia APIs, which manage process attribution automatically at the framework boundary without arbitrary CoreMedia PID inheritance.",
      "canonical_processes": [
        "WebContent",
        "GPU"
      ],
      "raw_processes": [
        "GPU",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 437,
          "description": "Adds com.apple.private.coremedia.pidinheritance.allow to WebContent process entitlements on iOS and visionOS."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 528,
          "description": "Adds com.apple.private.coremedia.pidinheritance.allow to GPU process entitlements on iOS and visionOS."
        }
      ],
      "key_commits": [
        {
          "hash": "13771f185bf4",
          "date": "2020-02-07",
          "subject": "Build entitlements into GPU Process"
        },
        {
          "hash": "f38acd8fe12e",
          "date": "2019-08-02",
          "subject": "macCatalyst build fails the first attempt, requires a second build"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 437,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 528,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 5,
      "related_spis": [
        {
          "name": "FigPhotoDecompressionSetHardwareCutoff",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigThreadRegisterAbortAction",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigThreadUnregisterAbortAction",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "FigVideoTargetCreateWithVideoReceiverEndpointID",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "kCMTextMarkupAttribute_PreventLineWrapping",
          "kind": "symbols",
          "framework": "CoreMedia",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 52,
      "entitlement": "com.apple.private.coreservices.canmaplsdatabase",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Storage, Assets & System Databases",
      "short_purpose": "Grants permission to directly memory-map the system Launch Services database, enabling fast in-process queries for registered applications, URL schemes, and UTI associations without XPC IPC roundtrips.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the NetworkProcess on iOS and visionOS within `process-entitlements.sh`. It allows WebKit's network subsystem and `LaunchServicesDatabaseObserver` to map and observe the system Launch Services database (`LSDatabaseContext`) directly to accelerate process launch and URL scheme resolution.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this Apple-private entitlement. Third-party networking and web content extensions cannot directly memory-map the Launch Services database and must instead rely on public, sandboxed APIs for URL handling and scheme querying.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 631,
          "description": "Grants `com.apple.private.coreservices.canmaplsdatabase` to the NetworkProcess on iOS and visionOS"
        },
        {
          "file": "Source/WebKit/NetworkProcess/cocoa/LaunchServicesDatabaseObserver.mm",
          "line": 50,
          "description": "Observes Launch Services database changes via `LSDatabaseContext` in the NetworkProcess"
        }
      ],
      "key_commits": [
        {
          "hash": "9982d3f14c3b",
          "date": "2023-10-12",
          "subject": "Improve launch time of WebKit processes, v2"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 631,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 19,
      "related_spis": [
        {
          "name": "LSAppLink",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSApplicationWorkspace",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSBundleProxy",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSDatabaseContext",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "_LSOpenConfiguration",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "appLinksWithURL:limit:error:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "bundleProxyWithAuditToken:error:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "defaultWorkspace",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "getSystemContentDatabaseObject4WebKit:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "iTunesStoreURL",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "observeDatabaseChange4WebKit:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "openApplicationWithBundleID:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        }
      ]
    },
    {
      "id": 53,
      "entitlement": "com.apple.private.cs.debugger",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Grants private kernel code-signing debugger privileges, allowing the process to attach to, inspect, and analyze target processes across code-signing enforcement boundaries.",
      "webkit_usage_summary": "Applied conditionally via process-entitlements.sh to 'mya' (JavaScriptCore's MemorY Analyzer developer tool) across macOS, macCatalyst, iOS, and visionOS when restricted entitlements are enabled. It provides the tool with debugger status to facilitate process memory profiling and diagnostic analysis.",
      "browserenginekit_implications": "Unavailable to third-party developers and BrowserEngineKit extensions as an Apple-private entitlement. This causes no practical disparity for third-party browser engines since it is used exclusively by an internal JavaScriptCore memory analysis CLI tool rather than production browser processes.",
      "canonical_processes": [
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "mya (JSC)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 76,
          "description": "Signs the mya executable with com.apple.private.cs.debugger on macOS when WK_USE_RESTRICTED_ENTITLEMENTS is YES"
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 206,
          "description": "Signs the mya executable with com.apple.private.cs.debugger on iOS family platforms when WK_USE_RESTRICTED_ENTITLEMENTS is YES"
        }
      ],
      "key_commits": [
        {
          "hash": "96b672949791",
          "date": "2026-08-28",
          "subject": "[Re-landing] Introducing Mya, a MemorY Analyzer, and libJavaScriptCoreTools."
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 76,
          "function": "mac_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 157,
          "function": "maccatalyst_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 206,
          "function": "ios_family_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 54,
      "entitlement": "com.apple.private.darwin-notification.introspect",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "WebKit Internal IPC & Features",
      "short_purpose": "Grants a sandboxed process permission to introspect or observe specific Darwin notifications from an explicit allowlist when notifyd access is restricted.",
      "webkit_usage_summary": "WebKit injects this entitlement into WebContent processes across macOS, iOS, and visionOS via `notify_entitlements()` in `process-entitlements.sh`. It populates an array with notification names parsed from `.def` files (such as `ForwardedNotifications.def`) alongside `com.apple.developer.web-browser-engine.restrict.notifyd` to prevent notifyd infinite repost loops while retaining observation of essential preferences and accessibility events.",
      "browserenginekit_implications": "Because this is an Apple-private entitlement (`com.apple.private.*`), third-party browser engines using BrowserEngineKit on iOS cannot obtain it. While 3P engines can restrict notifyd using the public `com.apple.developer.web-browser-engine.restrict.notifyd` entitlement, they cannot selectively introspect Darwin notifications at the OS level and must instead implement their own host-to-extension IPC notification forwarding mechanism.",
      "canonical_processes": [
        "WebContent"
      ],
      "raw_processes": [
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "\"$NOTIFICATION\""
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 189,
          "description": "Constructs the `com.apple.private.darwin-notification.introspect` array and populates it from notification definition files in `notify_entitlements()`"
        },
        {
          "file": "Source/WebKit/Resources/cocoa/NotificationAllowList/ForwardedNotifications.def",
          "line": 1,
          "description": "Defines Darwin notifications that UIProcess forwards to WebContent, which are extracted into the entitlement array"
        }
      ],
      "key_commits": [
        {
          "hash": "693ae98c2146edd20bf2bb087eda06c9dc1ce48f",
          "date": "2024-05-16",
          "subject": "Add entitlement related to notifyd blocking to WebContent Development"
        },
        {
          "hash": "2a0d601bd768e29f46a571c905d7132ae3f2a41e",
          "date": "2024-05-08",
          "subject": "Forward notifications to the WebContent processes"
        },
        {
          "hash": "957ddb2b94a123946d5ef1e6420bcbcceca2f53c",
          "date": "2024-05-30",
          "subject": "Whitelist more notifyd notifications for WebContent"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 189,
          "function": "notify_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 194,
          "function": "notify_entitlements",
          "subkey": "$NOTIFICATION_INDEX",
          "type": "string",
          "value": "\"$NOTIFICATION\"",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 201,
          "function": "notify_entitlements",
          "subkey": "$NOTIFICATION_INDEX",
          "type": "string",
          "value": "\"$NOTIFICATION\"",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 206,
          "function": "notify_entitlements",
          "subkey": "$NOTIFICATION_INDEX",
          "type": "string",
          "value": "\"$NOTIFICATION\"",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 212,
          "function": "notify_entitlements",
          "subkey": "$NOTIFICATION_INDEX",
          "type": "string",
          "value": "\"$NOTIFICATION\"",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 55,
      "entitlement": "com.apple.private.device-configuration.effective-configuration-ids.read",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Lockdown Mode & Parental Controls",
      "short_purpose": "Authorizes reading effective system device configuration policies and identifiers for specified configuration domains such as WebContentRestrictions.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the Network process on macOS (macOS 26+) via mac_process_network_entitlements() in process-entitlements.sh. It configures an array allowing read access specifically for the 'com.apple.WebContentRestrictions' configuration ID, enabling the networking layer to query parental controls and content restrictions.",
      "browserenginekit_implications": "This is an Apple-private entitlement restricted to first-party system binaries and is unavailable to third-party browser engines or BrowserEngineKit extensions on iOS. Third-party browsers cannot query private device configuration IDs directly and must rely on system-level Screen Time enforcement or supported public APIs.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "com.apple.WebContentRestrictions"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 123,
          "description": "mac_process_network_entitlements adds com.apple.private.device-configuration.effective-configuration-ids.read with value com.apple.WebContentRestrictions on macOS"
        }
      ],
      "key_commits": [
        {
          "hash": "d166417eff11fe412ffb1f0d1818cec7225a4c9d",
          "date": "2026-05-28",
          "subject": "Add additional entitlements for WebKit's web content restrictions usage https://bugs.webkit.org/show_bug.cgi?id=315576 rdar://174963227"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 123,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 124,
          "function": "mac_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "com.apple.WebContentRestrictions",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 9,
      "related_spis": [
        {
          "name": "WCRBrowserEngineClient",
          "kind": "classes",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "allowURL:withCompletion:",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "crossSiteTrackingPreventionRelaxedDomains",
          "kind": "selectors",
          "framework": "ManagedConfiguration",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "effectiveBoolValueForSetting:",
          "kind": "selectors",
          "framework": "ManagedConfiguration",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "evaluateURL:mainDocumentURL:withCompletion:onCompletionQueue:",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "evaluateURL:withCompletion:onCompletionQueue:",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "isURLManaged:",
          "kind": "selectors",
          "framework": "ManagedConfiguration",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "sharedConnection",
          "kind": "selectors",
          "framework": "ManagedConfiguration",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "shouldEvaluateURLs",
          "kind": "selectors",
          "framework": "WebContentRestrictions",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        }
      ]
    },
    {
      "id": 56,
      "entitlement": "com.apple.private.disable-log-mach-ports",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "WebKit Internal IPC & Features",
      "short_purpose": "Instructs system logging libraries (os_log/libtrace) to avoid opening Mach ports to system logging daemons (such as logd and diagnosticd).",
      "webkit_usage_summary": "WebKit assigns this entitlement in process-entitlements.sh to WebContent processes on iOS, macCatalyst, and visionOS. In conjunction with WebKit's log forwarding mechanism (which forwards os_log entries over WebKit IPC to the UI process) and the Seatbelt sandbox rule `(logd-blocking)` defined in common.sb, this entitlement allows WebKit to block direct Mach communication with logging daemons without causing system logging runtime crashes.",
      "browserenginekit_implications": "This is an Apple-private entitlement that is unavailable to third-party browser engines or BrowserEngineKit extensions. While BrowserEngineKit provides an entitlement to restrict notifyd (com.apple.developer.web-browser-engine.restrict.notifyd), Apple does not provide a 3P counterpart to suppress logd Mach port creation, meaning third-party web content processes cannot similarly sever direct logd Mach connectivity without breaking OS-level logging.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking"
      ],
      "raw_processes": [
        "All Processes",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 438,
          "description": "Adds com.apple.private.disable-log-mach-ports to WebContent processes on iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 335,
          "description": "Adds com.apple.private.disable-log-mach-ports to WebContent processes on macCatalyst"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/common.sb",
          "line": 83,
          "description": "Defines the (logd-blocking) Seatbelt sandbox predicate requiring com.apple.private.disable-log-mach-ports"
        }
      ],
      "key_commits": [
        {
          "hash": "7a08ca5a5b61",
          "date": "2025-05-24",
          "subject": "Unify sandbox rules for logging"
        },
        {
          "hash": "18ed829ce6c8",
          "date": "2025-06-03",
          "subject": "[Catalyst][WebContent] Add entitlement to disable opening of Mach port"
        },
        {
          "hash": "a443055848fd",
          "date": "2024-12-11",
          "subject": "Add logging definition file for OS log entries that should be forwarded from the WebContent process to the UI process"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 335,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 438,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Shared/Sandbox/common.sb",
          "line": 83,
          "process": "All Processes",
          "platform": "iOS",
          "snippet": "(define (logd-blocking) (require-entitlement \"com.apple.private.disable-log-mach-ports\"))"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 57,
      "entitlement": "com.apple.private.disable.screencapturekit.alert",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Suppresses default ScreenCaptureKit system alerts and notifications when initiating screen or window capture.",
      "webkit_usage_summary": "Assigned to the WebKit GPU process on macOS via process-entitlements.sh. It allows WebKit's media capture subsystem (such as ScreenCaptureKitSharingSessionManager implementing getDisplayMedia) to capture display and window streams without triggering OS-level ScreenCaptureKit alert dialogs, allowing the browser to provide its own user experience.",
      "browserenginekit_implications": "This is an Apple-private, macOS-only entitlement that is inaccessible to third-party apps or BrowserEngineKit extensions on iOS. Third-party browsers on macOS must use standard ScreenCaptureKit APIs and cannot suppress OS-level alerts or notifications during screen capture sessions.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 76,
          "description": "Adds com.apple.private.disable.screencapturekit.alert to the macOS GPU process entitlements"
        },
        {
          "file": "Source/WebCore/platform/mediastream/cocoa/ScreenCaptureKitSharingSessionManager.mm",
          "line": 35,
          "description": "Implements ScreenCaptureKit content sharing picker management for getDisplayMedia screen capture in WebKit"
        }
      ],
      "key_commits": [
        {
          "hash": "930d40c09c32",
          "date": "2023-01-10",
          "subject": "[Cocoa] Add new screen capture entitlement"
        },
        {
          "hash": "1e054343a3ef",
          "date": "2026-04-08",
          "subject": "Remove obsolete OS version checks in process-entitlements.sh"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 76,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 58,
      "entitlement": "com.apple.private.dmd.policy",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Lockdown Mode & Parental Controls",
      "short_purpose": "Allows communication with the DeviceManagement daemon (dmd) to query and monitor Screen Time and MDM website restriction policies.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the NetworkProcess on iOS and visionOS via process-entitlements.sh. It enables the networking process to communicate with dmd through the private DeviceManagement framework SPI (DMFWebsitePolicyMonitor) to evaluate website restriction policies and receive policy change notifications. The OS daemon requires this private entitlement to authorize XPC queries regarding managed website restrictions and Screen Time limits.",
      "browserenginekit_implications": "This is an Apple-private entitlement that is not granted to third-party browsers or BrowserEngineKit extension processes on iOS. Third-party browser engines cannot directly query dmd for device management website policies using this private SPI. Third-party browsers must rely on standard public Screen Time and parental control frameworks or app-level content filters provided by iOS.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 638,
          "description": "Adds com.apple.private.dmd.policy to the NetworkProcess entitlements on iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Platform/spi/Cocoa/DeviceManagementSPI.h",
          "line": 38,
          "description": "Declares DMFWebsitePolicyMonitor SPI for querying and monitoring website restriction policies"
        }
      ],
      "key_commits": [
        {
          "hash": "f38acd8fe12e",
          "date": "2019-08-02",
          "subject": "macCatalyst build fails the first attempt, requires a second build https://bugs.webkit.org/show_bug.cgi?id=200242 <rdar://problem/53678481>"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 638,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 2,
      "related_spis": [
        {
          "name": "initWithPolicyChangeHandler:",
          "kind": "selectors",
          "framework": "DeviceManagement",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "requestPoliciesForWebsites:completionHandler:",
          "kind": "selectors",
          "framework": "DeviceManagement",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        }
      ]
    },
    {
      "id": 59,
      "entitlement": "com.apple.private.extensionkit.host-requirement-exemption",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Exempts an ExtensionKit extension from host validation requirements enforced by ExtensionKit and ExtensionFoundation.",
      "webkit_usage_summary": "Applied to WebKit's iOS auxiliary process extension bundles (WebContentProcessExtension, NetworkingProcessExtension, and GPUProcessExtension). It allows these extensions to be hosted and launched by processes such as test runners and internal tools without requiring the host to meet strict ExtensionKit host entitlement or bundle constraints.",
      "browserenginekit_implications": "This is an Apple-private entitlement unavailable to third-party developers. Third-party browser engines using BrowserEngineKit on iOS cannot obtain this exemption and must strictly satisfy ExtensionKit host requirements, ensuring only host applications possessing `com.apple.developer.web-browser-engine.host` can launch their corresponding browser engine extensions.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking"
      ],
      "raw_processes": [
        "GPU",
        "Networking",
        "WebContent"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 13,
          "description": "Declares host requirement exemption for the WebContent ExtensionKit extension"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/NetworkingProcessExtension.entitlements",
          "line": 7,
          "description": "Declares host requirement exemption for the Networking ExtensionKit extension"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/GPUProcessExtension.entitlements",
          "line": 9,
          "description": "Declares host requirement exemption for the GPU Process ExtensionKit extension"
        }
      ],
      "key_commits": [
        {
          "hash": "638c7e3dc408",
          "date": "2024-02-20",
          "subject": "Fix layout tests in simulator after https://commits.webkit.org/274822@main"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/GPUProcessExtension.entitlements",
          "line": 9,
          "value": true,
          "process": "GPU"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/NetworkingProcessExtension.entitlements",
          "line": 7,
          "value": true,
          "process": "Networking"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 13,
          "value": true,
          "process": "WebContent"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 1,
      "related_spis": [
        {
          "name": "layerHierarchyWithOptions:error:",
          "kind": "selectors",
          "framework": "ExtensionKit",
          "feature_category": "Web Extensions & Native Messaging"
        }
      ]
    },
    {
      "id": 60,
      "entitlement": "com.apple.private.get-system-corpse",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Grants privileged access to Darwin kernel task corpses (snapshots of crashed or terminated processes) for generating automatic memgraph diagnostics and crash reports.",
      "webkit_usage_summary": "WebKit signs the macOS NetworkProcess with this entitlement in mac_process_network_entitlements() to facilitate automatic memgraph diagnostics and memory crash investigations. It allows the system diagnostic infrastructure to capture and inspect task corpses for debugging specific crashes. WebKit comments indicate this is a temporary addition intended to be removed after crash investigations conclude (rdar://160965793).",
      "browserenginekit_implications": "This is an Apple-private entitlement that cannot be obtained by third-party applications or BrowserEngineKit extensions on iOS. Third-party browser engines must rely on standard user-space diagnostic tools and standard OS crash logs rather than kernel task corpse inspection. Additionally, WebKit only enables this entitlement for its macOS NetworkProcess.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 145,
          "description": "Adds com.apple.private.get-system-corpse to macOS NetworkProcess entitlements for automatic memgraph crash investigations"
        }
      ],
      "key_commits": [
        {
          "hash": "b5c5c88fa7c9e32ea7736627f3f2795e3c302b4d",
          "date": "2025-09-30",
          "subject": "Entitlements for NetworkProcess to enable automatic memgraph diagnostics"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 145,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 61,
      "entitlement": "com.apple.private.gpu-restricted",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "GPU, Graphics & Display",
      "short_purpose": "Restricts the process's graphics driver and IOKit user client interface to a hardened, filtered subset of GPU commands to limit kernel attack surface.",
      "webkit_usage_summary": "WebKit signs both its GPU and WebContent processes on macOS, iOS, and visionOS with this entitlement via process-entitlements.sh (in mac_process_gpu_entitlements, mac_process_webcontent_shared_entitlements, ios_family_process_gpu_entitlements, and ios_family_process_webcontent_shared_entitlements). It instructs OS graphics drivers (such as IOGPUDeviceUserClient) to enforce strict method filtering on GPU client connections. On iOS, WebKit explicitly restricts this entitlement to system XPC services and omits it from ExtensionKit/BrowserEngineKit extension bundles.",
      "browserenginekit_implications": "Because this is an internal Apple-private entitlement (com.apple.private.*), third-party browser engines using BrowserEngineKit on iOS cannot obtain it. Third-party engines instead separate graphics into rendering extensions using the public com.apple.developer.web-browser-engine.rendering entitlement, relying on standard framework restrictions and platform sandbox rules rather than internal Apple kernel IOKit filtering entitlements.",
      "canonical_processes": [
        "WebContent",
        "GPU"
      ],
      "raw_processes": [
        "GPU",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 69,
          "description": "Adds com.apple.private.gpu-restricted to the macOS GPU process"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 256,
          "description": "Adds com.apple.private.gpu-restricted to shared macOS WebContent processes"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 453,
          "description": "Adds com.apple.private.gpu-restricted to iOS/visionOS WebContent processes (excluding ExtensionKit variants)"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 551,
          "description": "Adds com.apple.private.gpu-restricted to the iOS/visionOS GPU process (excluding GPUExtension)"
        }
      ],
      "key_commits": [
        {
          "hash": "a8b0ae298477",
          "date": "2021-11-16",
          "subject": "[iOS] Limit graphics related IOKit method filtering"
        },
        {
          "hash": "574d366ba7f8",
          "date": "2023-11-08",
          "subject": "WebKit process extensions do not have the same entitlement requirements"
        },
        {
          "hash": "eb466700acaf",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 69,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 256,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 453,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 551,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 62,
      "entitlement": "com.apple.private.hid.client.event-dispatch.internal",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Allows an application or test process to dispatch internal synthetic IOHID events into the system HID event stream.",
      "webkit_usage_summary": "WebKit assigns this entitlement exclusively to the TestWebKitAPI test runner binary on macOS and macCatalyst when built with internal restricted entitlements (WK_USE_RESTRICTED_ENTITLEMENTS). It enables test suites to synthesize low-level HID input events (such as clicks and gestures) to test AppKit and WebKit event and gesture handling.",
      "browserenginekit_implications": "Third-party iOS browsers using BrowserEngineKit do not have access to this Apple-private entitlement. Because it is used strictly for internal macOS test automation in TestWebKitAPI and is not present in shipping WebKit or Safari binaries, its absence has no impact on third-party browser engines on iOS.",
      "canonical_processes": [
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "TestWebKitAPI"
      ],
      "platforms": [
        "macCatalyst",
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 61,
          "description": "Applies com.apple.private.hid.client.event-dispatch.internal to TestWebKitAPI when WK_USE_RESTRICTED_ENTITLEMENTS is YES on macOS/macCatalyst."
        }
      ],
      "key_commits": [
        {
          "hash": "fdf97620232c",
          "date": "2026-04-29",
          "subject": "[AppKit Gestures] Add a test for clicking to change selection https://bugs.webkit.org/show_bug.cgi?id=313585 rdar://175798813"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 61,
          "function": "process_mac_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "macOS",
            "macCatalyst"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 63,
      "entitlement": "com.apple.private.hid.client.event-filter",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Permits a process to register an IOHIDEventSystemClient filter to intercept, inspect, and filter system-level Human Interface Device (HID) input events.",
      "webkit_usage_summary": "WebKit declares this private entitlement exclusively for the `TestWebKitAPI` test binary on macOS and macCatalyst when built with restricted entitlements (`WK_USE_RESTRICTED_ENTITLEMENTS = YES`). It is never granted to or used by production WebKit runtime processes such as WebContent, Networking, GPU, or the UIProcess. The entitlement allows automated API tests to install low-level HID event filters to observe or manipulate input event delivery during testing.",
      "browserenginekit_implications": "Third-party browser engines using BrowserEngineKit on iOS cannot obtain this Apple-private entitlement, as it is strictly forbidden for third parties and governed by Apple code-signing policies. However, because production WebKit and Safari on iOS do not possess or use this entitlement either\u2014it being restricted solely to internal macOS test harnesses\u2014its absence has no practical impact on 3P browser functionality.",
      "canonical_processes": [
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "TestWebKitAPI"
      ],
      "platforms": [
        "macCatalyst",
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 60,
          "description": "Applies com.apple.private.hid.client.event-filter to macOS and macCatalyst TestWebKitAPI entitlements when WK_USE_RESTRICTED_ENTITLEMENTS is YES"
        }
      ],
      "key_commits": [
        {
          "hash": "2177a497f6ef",
          "date": "2025-04-24",
          "subject": "Introduce a script to generate TestWebKitAPI entitlements"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 60,
          "function": "process_mac_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "macOS",
            "macCatalyst"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 64,
      "entitlement": "com.apple.private.kernel.override-cpumon",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "RunningBoard & Process Lifecycle",
      "short_purpose": "Allows a process to override or configure kernel CPU monitor (cpumon) thresholds and scheduling limits via system-sched operations.",
      "webkit_usage_summary": "In WebKit, this entitlement appears strictly as a conditional gate in the iOS Seatbelt sandbox profiles for WebContent, Networking, and GPU processes (`(allow system-sched (require-entitlement \"com.apple.private.kernel.override-cpumon\"))`). WebKit processes do not actually declare or sign this entitlement in `process-entitlements.sh`, meaning the sandbox denies `system-sched` CPU monitor overrides in production. The rule was carried over and retained when WebKit inlined rules from the system's shared `common.sb` profile.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this Apple-private kernel entitlement. 3P browser extension processes (web content, networking, rendering) are subject to standard iOS kernel CPU monitoring and energy enforcement without the ability to modify or override CPU throttling limits. Because production WebKit processes also do not possess this entitlement, third-party browser engines operate on parity with WebKit in this respect.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking"
      ],
      "raw_processes": [
        "GPU",
        "Networking",
        "WebContent"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.WebContent.sb.in",
          "line": 128,
          "description": "Restricts system-sched operations to callers holding the override-cpumon entitlement in WebContent sandbox"
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.Networking.sb.in",
          "line": 173,
          "description": "Restricts system-sched operations to callers holding the override-cpumon entitlement in Networking sandbox"
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.GPU.sb.in",
          "line": 116,
          "description": "Restricts system-sched operations to callers holding the override-cpumon entitlement in GPU process sandbox"
        }
      ],
      "key_commits": [
        {
          "hash": "007213f8be5abb366cd4b94b753b4787f74bfb4d",
          "date": "2019-10-24",
          "subject": "[iOS] Stop including 'common.sb'"
        },
        {
          "hash": "e0c788b57e1db6001fe923da9370d0c4d2095e02",
          "date": "2025-09-08",
          "subject": "Reduce size of Development sandboxes"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.GPU.Development.sb.in",
          "line": 92,
          "process": "GPU",
          "platform": "iOS",
          "snippet": "(require-entitlement \"com.apple.private.kernel.override-cpumon\"))"
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.GPU.sb.in",
          "line": 116,
          "process": "GPU",
          "platform": "iOS",
          "snippet": "(require-entitlement \"com.apple.private.kernel.override-cpumon\"))"
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.Networking.Development.sb.in",
          "line": 88,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(require-entitlement \"com.apple.private.kernel.override-cpumon\"))"
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.Networking.sb.in",
          "line": 173,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(require-entitlement \"com.apple.private.kernel.override-cpumon\"))"
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.WebContent.Development.sb.in",
          "line": 68,
          "process": "WebContent",
          "platform": "iOS",
          "snippet": "(require-entitlement \"com.apple.private.kernel.override-cpumon\"))"
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.WebContent.sb.in",
          "line": 128,
          "process": "WebContent",
          "platform": "iOS",
          "snippet": "(require-entitlement \"com.apple.private.kernel.override-cpumon\"))"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 65,
      "entitlement": "com.apple.private.launchservices.allowedtochangethesekeysinotherapplications",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "RunningBoard & Process Lifecycle",
      "short_purpose": "Authorizes a process to modify specified LaunchServices application information keys (such as display name and active web page origins) on behalf of other processes.",
      "webkit_usage_summary": "WebKit declares this entitlement for the macOS Network process in `process-entitlements.sh`, specifying array values `LSActivePageUserVisibleOriginsKey` and `LSDisplayName`. In `NetworkConnectionToWebProcessMac.mm`, the Network process calls private LaunchServices SPIs (`_LSSetApplicationInformationItem`) to register and update these metadata keys for WebContent processes, which cannot directly communicate with LaunchServices due to sandbox restrictions.",
      "browserenginekit_implications": "This entitlement is Apple-private and exclusive to macOS LaunchServices. Third-party iOS browsers utilizing BrowserEngineKit cannot obtain this entitlement, nor is LaunchServices used on iOS, where process lifecycle and visibility management are handled by RunningBoard and FrontBoard.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "LSActivePageUserVisibleOriginsKey",
        "LSDisplayName"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 129,
          "description": "Grants com.apple.private.launchservices.allowedtochangethesekeysinotherapplications with LSActivePageUserVisibleOriginsKey and LSDisplayName to the macOS Network process"
        },
        {
          "file": "Source/WebKit/NetworkProcess/mac/NetworkConnectionToWebProcessMac.mm",
          "line": 45,
          "description": "NetworkConnectionToWebProcess::updateActivePages calls _LSSetApplicationInformationItem to set LSActivePageUserVisibleOriginsKey and _kLSDisplayNameKey for WebContent processes"
        }
      ],
      "key_commits": [
        {
          "hash": "6bc94444fd61f240b055a22ca839cc3e74904ff3",
          "date": "2020-11-28",
          "subject": "[macOS] Set application information in the Networking process on behalf of the WebContent process"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 129,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 130,
          "function": "mac_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "LSActivePageUserVisibleOriginsKey",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 131,
          "function": "mac_process_network_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "LSDisplayName",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 19,
      "related_spis": [
        {
          "name": "LSAppLink",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSApplicationWorkspace",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSBundleProxy",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSDatabaseContext",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "_LSOpenConfiguration",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "appLinksWithURL:limit:error:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "bundleProxyWithAuditToken:error:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "defaultWorkspace",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "getSystemContentDatabaseObject4WebKit:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "iTunesStoreURL",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "observeDatabaseChange4WebKit:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "openApplicationWithBundleID:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        }
      ]
    },
    {
      "id": 66,
      "entitlement": "com.apple.private.launchservices.allowedtolaunchasproxy",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Allows a process to register or check in another process with Launch Services on its behalf as a proxy using private CoreServices SPIs.",
      "webkit_usage_summary": "Granted to WebKit's NetworkProcess on macOS in `process-entitlements.sh`. When Launch Services sandbox extension blocking is enabled to isolate WebContent processes, the NetworkProcess uses this entitlement to invoke `_LSApplicationCheckInProxy` in `NetworkConnectionToWebProcessMac.mm`, registering WebContent processes with Launch Services and managing their process attributes.",
      "browserenginekit_implications": "This is an Apple-private entitlement restricted to macOS system processes and unavailable to third-party developers. Third-party iOS browsers using BrowserEngineKit do not have access to it and do not need it, as iOS manages process lifecycle and isolation via RunningBoard and BrowserEngineKit host/extension mechanisms rather than macOS Launch Services proxy check-ins.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 132,
          "description": "Adds com.apple.private.launchservices.allowedtolaunchasproxy to mac_process_network_entitlements"
        },
        {
          "file": "Source/WebKit/NetworkProcess/mac/NetworkConnectionToWebProcessMac.mm",
          "line": 147,
          "description": "NetworkConnectionToWebProcess::checkInWebProcess invokes _LSApplicationCheckInProxy to check in WebContent processes with Launch Services"
        }
      ],
      "key_commits": [
        {
          "hash": "a5286f75826f",
          "date": "2025-02-27",
          "subject": "[macOS] Check in WebContent process with Launch Services from the Networking process rdar://145370973 https://bugs.webkit.org/show_bug.cgi?id=288290"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 132,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 19,
      "related_spis": [
        {
          "name": "LSAppLink",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSApplicationWorkspace",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSBundleProxy",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSDatabaseContext",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "_LSOpenConfiguration",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "appLinksWithURL:limit:error:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "bundleProxyWithAuditToken:error:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "defaultWorkspace",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "getSystemContentDatabaseObject4WebKit:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "iTunesStoreURL",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "observeDatabaseChange4WebKit:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "openApplicationWithBundleID:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        }
      ]
    },
    {
      "id": 67,
      "entitlement": "com.apple.private.launchservices.allowopenwithanyhandler",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Allows a process to launch target applications via LaunchServices URL opening without standard iOS scheme restrictions or handler limitations.",
      "webkit_usage_summary": "Assigned to the web push daemon (`webpushd`) on iOS and visionOS in `process-entitlements.sh`. It permits `webpushd` to invoke LaunchServices (`-[LSApplicationWorkspace openURL:configuration:completionHandler:]`) to launch client target applications (such as WebClip web apps via `SafariViewService` for `webapp://web-push/` URLs) in the background upon receiving push events. The entitlement check is enforced internally by LaunchServices / CoreServices daemons during URL opening.",
      "browserenginekit_implications": "This private Apple entitlement is unavailable to third-party apps and BrowserEngineKit extensions. Third-party browsers cannot use private LaunchServices APIs with arbitrary URL handlers to wake or open target applications directly in response to push messages, and must rely on standard system background notifications and UserNotifications frameworks.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 612,
          "description": "Grants com.apple.private.launchservices.allowopenwithanyhandler to webpushd on iOS family platforms."
        },
        {
          "file": "Source/WebKit/webpushd/WebPushDaemon.mm",
          "line": 638,
          "description": "Invokes LSApplicationWorkspace openURL:configuration:completionHandler: to launch target web apps upon receiving push notifications."
        }
      ],
      "key_commits": [
        {
          "hash": "fa39417e4a4f",
          "date": "2022-03-05",
          "subject": "Change app launch scheme"
        },
        {
          "hash": "e7505e3ca7ed",
          "date": "2022-03-04",
          "subject": "Allow webpushd to launch browser in background"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 612,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 19,
      "related_spis": [
        {
          "name": "LSAppLink",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSApplicationWorkspace",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSBundleProxy",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSDatabaseContext",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "_LSOpenConfiguration",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "appLinksWithURL:limit:error:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "bundleProxyWithAuditToken:error:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "defaultWorkspace",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "getSystemContentDatabaseObject4WebKit:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "iTunesStoreURL",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "observeDatabaseChange4WebKit:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "openApplicationWithBundleID:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        }
      ]
    },
    {
      "id": 68,
      "entitlement": "com.apple.private.launchservices.canspecifysourceapplication",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Allows a process to explicitly specify or override the source application identifier when opening URLs or activating applications via LaunchServices and FrontBoard.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the webpushd daemon on iOS and visionOS within process-entitlements.sh. When webpushd processes incoming push notifications, it launches SafariViewService or web apps in the background via LaunchServices (LSApplicationWorkspace openURL:configuration:completionHandler:) and passes UIApplicationLaunchOptionsSourceApplicationKey set to 'com.apple.WebKit.webpushd' inside FrontBoard launch options. The LaunchServices daemon requires this entitlement to permit specifying an explicit source application payload rather than defaulting or restricting it to standard app-to-app handoffs.",
      "browserenginekit_implications": "This is an Apple-internal entitlement under com.apple.private.* that is not granted to third-party browsers or BrowserEngineKit extensions. Third-party web browser engines on iOS cannot specify arbitrary or daemon source application identifiers when opening URLs or triggering background launches, as LaunchServices enforces caller identity based on actual audit tokens.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 614,
          "description": "Adds com.apple.private.launchservices.canspecifysourceapplication to webpushd entitlements on iOS family platforms."
        },
        {
          "file": "Source/WebKit/webpushd/WebPushDaemon.mm",
          "line": 629,
          "description": "Sets UIApplicationLaunchOptionsSourceApplicationKey to 'com.apple.WebKit.webpushd' in FrontBoard options passed to _LSOpenConfiguration and LSApplicationWorkspace."
        }
      ],
      "key_commits": [
        {
          "hash": "0e9914e91f10c1d21552e0249a0837eda3420f6b",
          "date": "2022-12-14",
          "subject": "Compile-time enable Notifications for additional platform (runtime off by default)"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 614,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 19,
      "related_spis": [
        {
          "name": "LSAppLink",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSApplicationWorkspace",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSBundleProxy",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "LSDatabaseContext",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "_LSOpenConfiguration",
          "kind": "classes",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "appLinksWithURL:limit:error:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "bundleProxyWithAuditToken:error:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "defaultWorkspace",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "getSystemContentDatabaseObject4WebKit:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "iTunesStoreURL",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "observeDatabaseChange4WebKit:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "openApplicationWithBundleID:",
          "kind": "selectors",
          "framework": "LaunchServices",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        }
      ]
    },
    {
      "id": 69,
      "entitlement": "com.apple.private.launchservices.entitledtoaccessothersessions",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Allows a process or daemon to query and access LaunchServices application information across different user and audit sessions on macOS.",
      "webkit_usage_summary": "Granted to the webpushd daemon on macOS via process-entitlements.sh. It enables webpushd to invoke LaunchServices SPIs (_LSCopyMatchingApplicationsWithItems and _LSCopyApplicationInformationItem) with client audit session IDs (audit_token_to_asid) to resolve host application bundle identifiers across session boundaries.",
      "browserenginekit_implications": "This is an Apple-private macOS entitlement that is completely unavailable to third-party developers and BrowserEngineKit extensions on iOS. It is macOS-specific and irrelevant to iOS BrowserEngineKit, where web push notifications and process identity are managed through standard iOS notification frameworks and ExtensionKit/RunningBoard without cross-session LaunchServices queries.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 276,
          "description": "Adds com.apple.private.launchservices.entitledtoaccessothersessions to webpushd on macOS."
        },
        {
          "file": "Source/WebKit/webpushd/PushClientConnection.mm",
          "line": 94,
          "description": "Queries LaunchServices across audit sessions using audit_token_to_asid to determine the host app bundle identifier from its audit token."
        }
      ],
      "key_commits": [
        {
          "hash": "0646de88e5b9",
          "date": "2023-04-12",
          "subject": "Query LaunchServices to determine the host app bundle identifier https://bugs.webkit.org/show_bug.cgi?id=255361 rdar://107931346"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 276,
          "function": "mac_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 70,
      "entitlement": "com.apple.private.mediaexperience.processassertionaudittokens.allow",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Allows a process to supply presenting client application audit tokens to AVAudioSession and MediaExperience so the system can hold background process assertions for those client processes during audio playback.",
      "webkit_usage_summary": "Granted to WebKit's GPU process on iOS and visionOS via process-entitlements.sh. When web content plays audio\u2014particularly when embedded in third-party host applications via SVS (SafariViewService) / SFSafariViewController\u2014RemoteAudioSessionProxyManager passes the presenting application's audit tokens to AudioSessionIOS::setPresentingProcesses, which invokes -[AVAudioSession setAuditTokensForProcessAssertion:error:]. This entitlement permits the MediaExperience subsystem to assert background execution on behalf of those presenting processes so playback is not interrupted when the host app backgrounds.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit cannot obtain this Apple-private entitlement. However, 3P browsers operate as standalone applications managing their own BrowserEngineKit extensions rather than acting as a multi-client system view service like SafariViewService, so they rely directly on standard background audio modes and RunningBoard assertions to maintain audio playback.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 526,
          "description": "Signs the GPU process on iOS and visionOS with com.apple.private.mediaexperience.processassertionaudittokens.allow"
        },
        {
          "file": "Source/WebCore/platform/audio/ios/AudioSessionIOS.mm",
          "line": 171,
          "description": "AudioSessionIOS::setPresentingProcesses passes audit tokens to -[AVAudioSession setAuditTokensForProcessAssertion:error:]"
        },
        {
          "file": "Source/WebKit/GPUProcess/media/RemoteAudioSessionProxyManager.cpp",
          "line": 133,
          "description": "RemoteAudioSessionProxyManager aggregates active presenting process audit tokens and updates AudioSession"
        }
      ],
      "key_commits": [
        {
          "hash": "fe4410ca4cb9",
          "date": "2021-11-10",
          "subject": "[iOS] Adopt -[AVAudioSession setAuditTokensForProcessAssertion:]"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 526,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 71,
      "entitlement": "com.apple.private.mediaexperience.recordingWebsite.allow",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Permits a process to attribute active audio or video recording sessions to a specific website domain or URL in system privacy indicators via the MediaExperience framework.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the GPU process on iOS and visionOS in `process-entitlements.sh`. When the GPU process captures microphone or camera input for WebRTC and `getUserMedia`, it uses MediaExperience framework APIs to declare the origin of the recording website. This enables iOS system privacy indicators (such as the Control Center recording pill and status bar indicators) to display the specific website responsible for recording rather than just an anonymous background process.",
      "browserenginekit_implications": "Because this is an Apple-internal private entitlement, third-party browsers using BrowserEngineKit cannot obtain it for their host apps or extension processes (`WebContent`, `Networking`, `Rendering`). Third-party browser engines cannot report site-specific recording attribution directly to MediaExperience, meaning iOS will attribute microphone and camera usage to the parent browser app rather than individual web origins.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 527,
          "description": "Adds com.apple.private.mediaexperience.recordingWebsite.allow to the GPU process entitlements on iOS and visionOS"
        }
      ],
      "key_commits": [
        {
          "hash": "3c0664a53923cd59554cfe9ee10c131ed5c448ef",
          "date": "2023-02-28",
          "subject": "[iOS] Add \"recording website\" entitlement https://bugs.webkit.org/show_bug.cgi?id=253111 rdar://104938740"
        },
        {
          "hash": "9614c09f9688754dd82757480739bb2112608ff9",
          "date": "2023-02-02",
          "subject": "[Cocoa] Add \"recording website\" entitlement https://bugs.webkit.org/show_bug.cgi?id=251585 rdar://104938740"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 527,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 72,
      "entitlement": "com.apple.private.mediaexperience.startrecordinginthebackground.allow",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Permits a process to initiate audio/microphone recording while running in the background via system MediaExperience and mediaserverd services.",
      "webkit_usage_summary": "Provisioned to the WebKit GPU process on iOS and visionOS in `process-entitlements.sh` (`ios_family_process_gpu_entitlements`). This allows the GPU process, which manages WebRTC audio capture via `UserMediaCaptureManagerProxy`, to start microphone recording sessions even when the host application is backgrounded. Enforced by CoreMedia's MediaExperience framework rather than WebKit runtime code.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit cannot obtain this private Apple entitlement. 3P browser helper extensions (such as rendering or web content processes) cannot initiate background audio recording, requiring active foreground user interaction or standard public background audio modes routed through the host app.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 525,
          "description": "Adds com.apple.private.mediaexperience.startrecordinginthebackground.allow to GPU process entitlements on iOS family platforms"
        }
      ],
      "key_commits": [
        {
          "hash": "2f0e3161c641",
          "date": "2020-02-25",
          "subject": "Allow GPU Process to capture microphone in the background https://bugs.webkit.org/show_bug.cgi?id=208193"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 525,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 73,
      "entitlement": "com.apple.private.memory.ownership_transfer",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "GPU, Graphics & Display",
      "short_purpose": "Allows a process to transfer memory allocation accounting and ownership (such as IOSurface buffers) to another task's Jetsam ledger using task identity tokens.",
      "webkit_usage_summary": "Granted exclusively to the GPU process (`GPUProcess`) across macOS, macCatalyst, iOS, and visionOS in `Source/WebKit/Scripts/process-entitlements.sh`. It enables the GPU process to receive a Mach `task_identity_token_t` from a client `WebProcess` and transfer memory ledger accounting of allocated graphics resources (specifically IOSurfaces) to the originating WebProcess, preventing the GPU process from being terminated by Jetsam due to high client memory consumption.",
      "browserenginekit_implications": "Because this is an Apple-private entitlement (`com.apple.private.*`), third-party browsers cannot directly obtain it. However, BrowserEngineKit grants 3P browser engines equivalent capability through the `com.apple.developer.web-browser-engine.rendering` and `com.apple.developer.web-browser-engine.webcontent` entitlements, allowing them to call `task_create_identity_token` and transfer buffer memory attribution using `IOSurfaceSetOwnershipIdentity` and `-[MTLResource setOwnerWithIdentity:]`.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 530,
          "description": "Signs com.apple.private.memory.ownership_transfer into the GPU process entitlements on iOS and visionOS (also on macOS at line 79 and macCatalyst at line 371)"
        },
        {
          "file": "Source/WebKit/GPUProcess/GPUConnectionToWebProcess.cpp",
          "line": 1,
          "description": "GPU process connection endpoint that manages WebProcess connections, receives task identity tokens, and handles graphics resource allocation attribution"
        }
      ],
      "key_commits": [
        {
          "hash": "8c4494f5a64198ac5ae1939d145fafcf64c43cce",
          "date": "2021-02-23",
          "subject": "Prepare for memory ownership transfer in the GPUProcess https://bugs.webkit.org/show_bug.cgi?id=222122"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 79,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 371,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 530,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 74,
      "entitlement": "com.apple.private.memorystatus",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "RunningBoard & Process Lifecycle",
      "short_purpose": "Grants permission to call privileged Darwin kernel memorystatus control APIs to configure and query Jetsam memory limits and process memory status properties.",
      "webkit_usage_summary": "WebKit assigns this entitlement via process-entitlements.sh on iOS and visionOS to its WebContent (Shared), GPU, Model, and Network auxiliary processes. It permits these processes to invoke privileged memorystatus_control syscall operations in the XNU kernel for Jetsam memory limit and lifecycle management.",
      "browserenginekit_implications": "Because this is an Apple-private entitlement, it is unavailable to third-party browsers and BrowserEngineKit extension processes (webcontent, rendering, networking). Third-party engines cannot directly configure or manage their Jetsam memory limits via privileged memorystatus syscalls and must operate strictly within the OS-enforced limits and standard memory pressure notifications.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "Model"
      ],
      "raw_processes": [
        "GPU",
        "Model",
        "Networking",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 439,
          "description": "Adds com.apple.private.memorystatus to WebContent shared process entitlements on iOS family platforms"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 529,
          "description": "Adds com.apple.private.memorystatus to GPU process entitlements on iOS family platforms"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 586,
          "description": "Adds com.apple.private.memorystatus to Model process entitlements on iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 639,
          "description": "Adds com.apple.private.memorystatus to Network process entitlements on iOS family platforms"
        }
      ],
      "key_commits": [
        {
          "hash": "13771f185bf4",
          "date": "2020-02-07",
          "subject": "Build entitlements into GPU Process"
        },
        {
          "hash": "11061972c748",
          "date": "2024-02-28",
          "subject": "Model Process CA layer hosting rdar://123273873"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 439,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 529,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 586,
          "function": "ios_family_process_model_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Model",
          "platforms": [
            "visionOS",
            "iOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 639,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 75,
      "entitlement": "com.apple.private.messages.enhanced-link-security",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Lockdown Mode & Parental Controls",
      "short_purpose": "Grants authorization to communicate with the Messages daemon's link security service (com.apple.imagent.EnhancedLinkSecurityStore) via LinkSecurity.framework to identify URLs flagged for enhanced security restrictions.",
      "webkit_usage_summary": "WebKit declares this entitlement in TestWebKitAPI signing scripts (Tools/TestWebKitAPI/Scripts/process-entitlements.sh) on iOS, macOS, macCatalyst, and visionOS to enable testing of the LinkSecurity integration. At runtime, WebKit uses LinkSecurity.framework's LSLinkSecurityManager to query whether navigation URLs are flagged by Messages, allowing the network process to perform mach-lookup to com.apple.imagent.EnhancedLinkSecurityStore and enforce Enhanced Security restrictions on matching sites.",
      "browserenginekit_implications": "This is a private Apple entitlement inaccessible to third-party apps and BrowserEngineKit extensions on iOS. Third-party browser engines cannot interface with Apple's internal Messages daemon (imagent) or LinkSecurity store to detect flagged message links, meaning any URL reputation or heightened security mitigations must be implemented independently within the browser engine.",
      "canonical_processes": [
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "TestWebKitAPI"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 40,
          "description": "Adds com.apple.private.messages.enhanced-link-security to TestWebKitAPI when restricted entitlements are enabled"
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.Networking.sb.in",
          "line": 324,
          "description": "Allows the iOS network process sandbox to perform mach-lookup to com.apple.imagent.EnhancedLinkSecurityStore when HAVE(ENHANCED_SECURITY_LINKS) is enabled"
        },
        {
          "file": "Source/WebKit/Shared/Cocoa/EnhancedSecurityLinkUtilities.mm",
          "line": 48,
          "description": "Uses soft-linked LinkSecurity.framework and LSLinkSecurityManager to check whether navigation URLs require enhanced security"
        }
      ],
      "key_commits": [
        {
          "hash": "aae6a13f406fe29df1873f31f6f3e801dbf32e26",
          "date": "2026-02-12",
          "subject": "Support enabling Enhanced Security for specific URLs"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 40,
          "function": "process_restricted_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 76,
      "entitlement": "com.apple.private.neagent",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Allows an internal process to communicate directly with Apple's Network Extension Agent (neagent) daemon to configure network extensions and custom DNS resolution.",
      "webkit_usage_summary": "WebKit declares this entitlement only within WebKitTestRunner internal configuration files on macOS (WebKitTestRunner-internal.entitlements). It is used during automated Web Platform Tests (WPT) alongside nehelper entitlements to override DNS resolution and mock network configurations. It is not included in production WebKit or WebContent binaries.",
      "browserenginekit_implications": "As an Apple-private entitlement, it is unavailable to third-party developers and BrowserEngineKit extensions on iOS. Third-party browser engines must rely on standard public NetworkExtension framework APIs or system-managed networking rather than internal neagent IPC interfaces.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "Test Runner / Harness (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner-internal.entitlements",
          "line": 13,
          "description": "WebKitTestRunner entitlement enabling interaction with neagent for test-time DNS resolution overrides"
        }
      ],
      "key_commits": [
        {
          "hash": "ae5d4ebf2175",
          "date": "2025-09-16",
          "subject": "[Cocoa] Add support for overriding DNS resolution for WPT"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner-internal.entitlements",
          "line": 13,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 77,
      "entitlement": "com.apple.private.nehelper.privileged",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Grants privileged communication access to Apple's NetworkExtension helper daemon (nehelper) to configure system network extension and DNS resolution settings.",
      "webkit_usage_summary": "WebKit declares this entitlement exclusively in internal test runner configurations (WebKitTestRunner-internal.entitlements) on macOS. It is used to allow WebKitTestRunner to interact with privileged nehelper SPIs to override DNS resolution when running Web Platform Tests (WPT). It is not granted to production WebKit processes.",
      "browserenginekit_implications": "This is an Apple-private entitlement unavailable to third-party browsers or BrowserEngineKit extensions on iOS. Third-party browsers must rely on standard public networking frameworks (or BrowserEngineKit's networking extension) and cannot communicate directly with privileged nehelper daemons to manipulate system-level DNS or NetworkExtension state.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "Test Runner / Harness (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner-internal.entitlements",
          "line": 11,
          "description": "Enables privileged nehelper access for internal WebKitTestRunner builds to support DNS resolution overrides during test execution"
        }
      ],
      "key_commits": [
        {
          "hash": "ae5d4ebf2175",
          "date": "2025-09-16",
          "subject": "[Cocoa] Add support for overriding DNS resolution for WPT"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner-internal.entitlements",
          "line": 11,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 78,
      "entitlement": "com.apple.private.network.socket-delegate",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Grants Darwin kernel privilege PRIV_NET_PRIVILEGED_SOCKET_DELEGATE to delegate socket ownership and attribute network traffic, cellular data, and power usage to client applications.",
      "webkit_usage_summary": "WebKit provisions this entitlement via process-entitlements.sh to NetworkProcess (across iOS, macCatalyst, macOS, visionOS) as well as GPU, WebContent shared, and adattributiond on iOS family platforms. Seatbelt sandbox profiles on iOS and macOS specifically gate the system-privilege PRIV_NET_PRIVILEGED_SOCKET_DELEGATE on holding this entitlement, allowing CFNetwork and kernel socket layers to delegate network accounting to client applications embedding WebKit.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this private Apple entitlement. Third-party networking extensions (com.apple.developer.web-browser-engine.networking) cannot delegate BSD sockets at the kernel level to external client processes, meaning all network usage and accounting remain tied directly to the browser application and extension sandbox.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "adattributiond"
      ],
      "raw_processes": [
        "GPU",
        "Networking",
        "WebContent (Shared)",
        "adattributiond"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 640,
          "description": "Injects com.apple.private.network.socket-delegate into iOS/visionOS NetworkProcess entitlements"
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.Networking.sb.in",
          "line": 122,
          "description": "Allows system-privilege PRIV_NET_PRIVILEGED_SOCKET_DELEGATE conditional on holding com.apple.private.network.socket-delegate"
        },
        {
          "file": "Source/WebKit/NetworkProcess/mac/com.apple.WebKit.NetworkProcess.sb.in",
          "line": 30,
          "description": "Allows system-privilege PRIV_NET_PRIVILEGED_SOCKET_DELEGATE conditional on holding com.apple.private.network.socket-delegate in macOS NetworkProcess"
        }
      ],
      "key_commits": [
        {
          "hash": "b9f2cf44ea80",
          "date": "2021-09-28",
          "subject": "Explicitly deny 'system-privilege' in the sandbox profile as a hardening measure"
        },
        {
          "hash": "13771f185bf4",
          "date": "2020-02-07",
          "subject": "Build entitlements into GPU Process"
        },
        {
          "hash": "f8277ab0a96d",
          "date": "2026-06-05",
          "subject": "[PCM] Support proxying PCM requests on iOS"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 107,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 396,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 440,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 531,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 602,
          "function": "ios_family_process_adattributiond_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "adattributiond",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 640,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/NetworkProcess/mac/com.apple.WebKit.NetworkProcess.sb.in",
          "line": 30,
          "process": "Networking",
          "platform": "macOS",
          "snippet": "(require-entitlement \"com.apple.private.network.socket-delegate\")))"
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.Networking.Development.sb.in",
          "line": 68,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(require-entitlement \"com.apple.private.network.socket-delegate\")))"
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.Networking.sb.in",
          "line": 122,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(require-entitlement \"com.apple.private.network.socket-delegate\")))"
        }
      ],
      "related_spis_count": 242,
      "related_spis": [
        {
          "name": "NSURLDownload",
          "kind": "classes",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_NSHSTSStorage",
          "kind": "classes",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_NSHTTPAlternativeServicesFilter",
          "kind": "classes",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_NSHTTPAlternativeServicesStorage",
          "kind": "classes",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "HTTPServiceEntriesWithFilter:",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_CFCachedURLResponse",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_CFURLCache",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_CFURLRequest",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_CFURLResponse",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_CTDataConnectionServiceType",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_GetInternalCFHTTPCookie",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        },
        {
          "name": "_adoptEffectiveConfiguration:",
          "kind": "selectors",
          "framework": "CFNetwork",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        }
      ]
    },
    {
      "id": 79,
      "entitlement": "com.apple.private.networkextension.configuration",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Grants read access to system-wide NetworkExtension configuration preferences to inspect managed VPN, proxy, and content filtering settings.",
      "webkit_usage_summary": "Defined as a conditional sandbox filter in WebKit's iOS network sandbox profile definitions (Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb) that permits reading /private/var/preferences/com.apple.networkextension.plist if the process possesses the entitlement. This rule was imported into WebKit when decoupling NetworkProcess sandboxing from system common.sb profiles. WebKit's shipping processes do not explicitly declare this entitlement in open-source signing scripts, relying instead on NetworkExtension framework APIs and system daemons.",
      "browserenginekit_implications": "This is an Apple-private entitlement unavailable to third-party browsers and BrowserEngineKit network extensions. Third-party network extensions (com.apple.developer.web-browser-engine.networking) cannot directly access system NetworkExtension configuration plists, but system-wide VPNs and content filters are handled transparently by the OS kernel and nesessionmanager daemon without requiring raw file inspection.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 92,
          "description": "Seatbelt sandbox filter gating file-read access to /private/var/preferences/com.apple.networkextension.plist behind com.apple.private.networkextension.configuration"
        }
      ],
      "key_commits": [
        {
          "hash": "d4fb8ae7288211c8a887ae8785f54511fb1a7ec9",
          "date": "2020-01-08",
          "subject": "Network process sandboxes should not include 'common.sb' or 'system.sb'"
        },
        {
          "hash": "f3953af233f97e058ead9b189233ac7ad84662cf",
          "date": "2025-09-02",
          "subject": "Create new files for sandbox defines"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 92,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(with-filter (require-entitlement \"com.apple.private.networkextension.configuration\")"
        }
      ],
      "related_spis_count": 12,
      "related_spis": [
        {
          "name": "NEFilterSource",
          "kind": "classes",
          "framework": "NetworkExtension",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "filterRequired",
          "kind": "selectors",
          "framework": "NetworkExtension",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "finishedLoadingWithDecisionHandler:",
          "kind": "selectors",
          "framework": "NetworkExtension",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "initWithDecisionQueue:",
          "kind": "selectors",
          "framework": "NetworkExtension",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "receivedData:decisionHandler:",
          "kind": "selectors",
          "framework": "NetworkExtension",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "receivedResponse:decisionHandler:",
          "kind": "selectors",
          "framework": "NetworkExtension",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "remediateWithDecisionHandler:",
          "kind": "selectors",
          "framework": "NetworkExtension",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "setDelegation:",
          "kind": "selectors",
          "framework": "NetworkExtension",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "setSourceAppIdentifier:",
          "kind": "selectors",
          "framework": "NetworkExtension",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "setSourceAppPid:",
          "kind": "selectors",
          "framework": "NetworkExtension",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "willSendRequest:decisionHandler:",
          "kind": "selectors",
          "framework": "NetworkExtension",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "NEHelperTrackerGetDisposition",
          "kind": "symbols",
          "framework": "NetworkExtension",
          "feature_category": "Networking, HTTP/3, WebTransport & Cookies"
        }
      ]
    },
    {
      "id": 80,
      "entitlement": "com.apple.private.networkserviceproxy",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Allows a process to interact with Apple's Network Service Proxy daemon to route network traffic through Apple's privacy proxies.",
      "webkit_usage_summary": "WebKit declares this entitlement for the Private Click Measurement daemon (`adattributiond`) on iOS and visionOS in `Source/WebKit/Scripts/process-entitlements.sh`. It enables `adattributiond` to communicate with the `com.apple.networkserviceproxy` Mach service to route attribution requests through privacy proxies, preventing ad attribution servers from linking source and destination IP addresses. WebKit pairs this entitlement with a Mach lookup exception for `com.apple.networkserviceproxy` in the daemon's sandbox profile.",
      "browserenginekit_implications": "Because `com.apple.private.networkserviceproxy` is an Apple-internal private entitlement, third-party browsers and BrowserEngineKit extension processes on iOS cannot obtain it. Third-party browser engines implementing conversion measurement or proxying cannot interface directly with Apple's Network Service Proxy daemon and must instead handle any anonymized attribution routing using standard public networking APIs or their own proxy infrastructure.",
      "canonical_processes": [
        "adattributiond"
      ],
      "raw_processes": [
        "adattributiond"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 604,
          "description": "Adds com.apple.private.networkserviceproxy to adattributiond entitlements on iOS and visionOS."
        }
      ],
      "key_commits": [
        {
          "hash": "f8277ab0a96d",
          "date": "2026-06-05",
          "subject": "[PCM] Support proxying PCM requests on iOS https://bugs.webkit.org/show_bug.cgi?id=308999 rdar://168773036"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 604,
          "function": "ios_family_process_adattributiond_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "adattributiond",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 81,
      "entitlement": "com.apple.private.pac.exception",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Configures the XNU kernel to treat Pointer Authentication Code (PAC) validation failures as immediately fatal, terminating the process upon a PAC authentication fault.",
      "webkit_usage_summary": "WebKit build scripts conditionally embed this entitlement when WK_USE_FATAL_EXCEPTIONS is enabled across all auxiliary processes (WebContent, Networking, GPU, Model) and JavaScriptCore test tools (jsc, testapi, mya) across iOS, macOS, visionOS, and macCatalyst. It is not checked directly by WebKit C++ code; rather, the Darwin kernel inspects it during process launch to set the TF_PAC_EXC_FATAL task flag to prevent attackers from catching and recovering from PAC authentication faults during exploitation.",
      "browserenginekit_implications": "Because this is an apple-private entitlement, third-party browser engines using BrowserEngineKit on iOS cannot obtain or use it. Third-party browser helper processes on iOS must rely on the operating system's standard PAC handling for third-party binaries rather than this kernel-level fatal PAC exception policy.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "Model",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "GPU",
        "Model",
        "Networking",
        "WebContent (Shared)",
        "jsc / JSC Tools",
        "mya (JSC)",
        "testapi (JSC)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 463,
          "description": "Adds com.apple.private.pac.exception to iOS and visionOS WebContent processes when WK_USE_FATAL_EXCEPTIONS is enabled"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 88,
          "description": "Adds com.apple.private.pac.exception to macOS GPU process when WK_USE_FATAL_EXCEPTIONS is enabled"
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 26,
          "description": "Adds com.apple.private.pac.exception to JavaScriptCore CLI tools when WK_USE_FATAL_EXCEPTIONS is enabled"
        }
      ],
      "key_commits": [
        {
          "hash": "50141c659194",
          "date": "2026-03-10",
          "subject": "[JSC] Add OVERRIDE_WK_USE_FATAL_EXCEPTIONS"
        },
        {
          "hash": "eb466700acaf",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function"
        },
        {
          "hash": "96b672949791",
          "date": "2026-08-28",
          "subject": "[Re-landing] Introducing Mya, a MemorY Analyzer, and libJavaScriptCoreTools."
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 88,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 154,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 253,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 322,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 381,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 410,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 463,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 557,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 594,
          "function": "ios_family_process_model_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Model",
          "platforms": [
            "visionOS",
            "iOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 662,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 26,
          "function": "mac_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 53,
          "function": "mac_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 80,
          "function": "mac_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 106,
          "function": "maccatalyst_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 137,
          "function": "maccatalyst_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 161,
          "function": "maccatalyst_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 180,
          "function": "ios_family_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 211,
          "function": "ios_family_process_mya_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "mya (JSC)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 82,
      "entitlement": "com.apple.private.sandbox.profile",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Specifies the name of a system-defined Seatbelt sandbox profile that the OS kernel automatically applies to the process upon launch.",
      "webkit_usage_summary": "Injected by `process-entitlements.sh` on iOS and visionOS for standalone auxiliary processes and daemons, including WebContent, GPU, Model, Networking, adattributiond, and webpushd (when not packaged as extensions). The OS kernel and launchd read this string entitlement to initialize the process directly under the designated system sandbox profile (such as `com.apple.WebKit.WebContent` or `com.apple.WebKit.Networking`).",
      "browserenginekit_implications": "This is a private Apple entitlement unavailable to third-party developers or BrowserEngineKit extensions. Rather than choosing or customizing system sandbox profiles via this entitlement, third-party browser engines must use the designated BrowserEngineKit extension points (`com.apple.developer.web-browser-engine.webcontent`, `rendering`, `networking`), which the OS places into Apple's fixed, standardized BrowserEngineKit sandbox profiles.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "webpushd",
        "adattributiond",
        "Model"
      ],
      "raw_processes": [
        "GPU",
        "Model",
        "Networking",
        "WebContent (Shared)",
        "adattributiond",
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "com.apple.WebKit.GPU",
        "com.apple.WebKit.Model",
        "com.apple.WebKit.Networking",
        "com.apple.WebKit.WebContent",
        "com.apple.WebKit.adattributiond",
        "com.apple.WebKit.webpushd"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 454,
          "description": "Sets `com.apple.private.sandbox.profile` to `com.apple.WebKit.WebContent` for standalone WebContent processes on iOS/visionOS."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 552,
          "description": "Sets `com.apple.private.sandbox.profile` to `com.apple.WebKit.GPU` for standalone GPU processes on iOS/visionOS."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 658,
          "description": "Sets `com.apple.private.sandbox.profile` to `com.apple.WebKit.Networking` for standalone Networking processes on iOS/visionOS."
        }
      ],
      "key_commits": [
        {
          "hash": "11061972c748",
          "date": "2024-02-28",
          "subject": "Model Process CA layer hosting rdar://123273873 https://bugs.webkit.org/show_bug.cgi?id=269762"
        },
        {
          "hash": "5ab76c736b67",
          "date": "2022-12-16",
          "subject": "Add webpushd iOS sandbox https://bugs.webkit.org/show_bug.cgi?id=249436 rdar://103410333"
        },
        {
          "hash": "bf822a014db0",
          "date": "2026-04-06",
          "subject": "Fix indentation in process-entitlements.sh https://bugs.webkit.org/show_bug.cgi?id=311563 rdar://174160086"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 454,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "string",
          "value": "com.apple.WebKit.WebContent",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 552,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "string",
          "value": "com.apple.WebKit.GPU",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 588,
          "function": "ios_family_process_model_entitlements",
          "subkey": null,
          "type": "string",
          "value": "com.apple.WebKit.Model",
          "process": "Model",
          "platforms": [
            "visionOS",
            "iOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 601,
          "function": "ios_family_process_adattributiond_entitlements",
          "subkey": null,
          "type": "string",
          "value": "com.apple.WebKit.adattributiond",
          "process": "adattributiond",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 610,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "string",
          "value": "com.apple.WebKit.webpushd",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 658,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "string",
          "value": "com.apple.WebKit.Networking",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 83,
      "entitlement": "com.apple.private.screencapturekit.sharingsession",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Grants private authorization to manage ScreenCaptureKit content sharing sessions and picker streams for screen and window capture.",
      "webkit_usage_summary": "Injected into the WebKit GPU process on macOS via process-entitlements.sh. It permits the GPU process to manage ScreenCaptureKit capture sessions and picker interactions in ScreenCaptureKitSharingSessionManager for display and window capture (getDisplayMedia) under sandbox constraints.",
      "browserenginekit_implications": "This is an Apple-private macOS-only entitlement not available to third-party browsers or BrowserEngineKit extensions on iOS. Third-party iOS browser engines cannot obtain private ScreenCaptureKit entitlements and must rely on standard platform screen capture mechanisms.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 70,
          "description": "Adds com.apple.private.screencapturekit.sharingsession to the macOS GPU process entitlements"
        },
        {
          "file": "Source/WebCore/platform/mediastream/cocoa/ScreenCaptureKitSharingSessionManager.mm",
          "line": 35,
          "description": "Implements ScreenCaptureKit sharing session and picker observer management for screen capture"
        }
      ],
      "key_commits": [
        {
          "hash": "c031315809bf",
          "date": "2022-02-18",
          "subject": "[macOS] Allow screen and window capture to be done in the GPU Process"
        },
        {
          "hash": "1e054343a3ef",
          "date": "2026-04-08",
          "subject": "Remove obsolete OS version checks in process-entitlements.sh"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 70,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 84,
      "entitlement": "com.apple.private.security.enable-state-flags",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Authorizes a process to dynamically toggle specified Seatbelt sandbox state flags at runtime via sandbox_enable_state_flag.",
      "webkit_usage_summary": "WebKit declares this entitlement as an array of allowed flag strings on WebContent (iOS, macOS, visionOS) and Networking processes, as well as the host test browser MobileMiniBrowser. Flags like BlockNetworkAccess, BlockIOKitInWebContentSandbox, and BlockUserInstalledFonts allow WebKit to progressively lock down or alter sandbox profiles at runtime. In WebProcessCocoa.mm, WebProcess checks whether its parent UIProcess holds EnableQuickLookSandboxResources before enabling ParentProcessCanEnableQuickLookStateFlag.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this private Apple entitlement. Consequently, 3P browser engines cannot use sandbox_enable_state_flag to dynamically manipulate their Seatbelt sandbox state or toggle system sandbox profiles dynamically, and must operate strictly within the static sandbox constraints established by Apple's standard BrowserEngineKit extension profiles.",
      "canonical_processes": [
        "WebContent",
        "Networking",
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MobileMiniBrowser (Host App)",
        "Networking",
        "WebContent (Shared)",
        "WebContent (checking UIProcess)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "BlockIOKitInWebContentSandbox",
        "BlockNetworkAccess",
        "BlockUserInstalledFonts",
        "EnableExperimentalSandbox",
        "ParentProcessCanEnableQuickLookStateFlag",
        "UnifiedPDFEnabled",
        "WebProcessDidNotInjectStoreBundle",
        "[\"EnableQuickLookSandboxResources\"]",
        "local:WebContentProcessLaunched"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 170,
          "description": "webcontent_sandbox_entitlements assigns com.apple.private.security.enable-state-flags with flags such as BlockIOKitInWebContentSandbox, ParentProcessCanEnableQuickLookStateFlag, and BlockUserInstalledFonts"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 675,
          "description": "ios_family_process_network_entitlements assigns com.apple.private.security.enable-state-flags with BlockNetworkAccess for the iOS Networking process"
        },
        {
          "file": "Source/WebKit/WebProcess/cocoa/WebProcessCocoa.mm",
          "line": 636,
          "description": "WebProcess verifies that the parent UIProcess holds EnableQuickLookSandboxResources before calling sandbox_enable_state_flag for ParentProcessCanEnableQuickLookStateFlag"
        }
      ],
      "key_commits": [
        {
          "hash": "cb7daacd4330",
          "date": "2026-08-22",
          "subject": "[macOS] The Networking process sandbox should inherit network access from the UI process"
        },
        {
          "hash": "e0e27e741c51",
          "date": "2025-12-10",
          "subject": "The Networking process sandbox should inherit network access from the UI process"
        },
        {
          "hash": "4b92e372b511",
          "date": "2026-04-15",
          "subject": "Remove BlockOpenDirectoryInWebContentSandbox setting"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MobileMiniBrowser/MobileMiniBrowser/MobileMiniBrowser.entitlements",
          "line": 15,
          "value": [
            "EnableQuickLookSandboxResources"
          ],
          "process": "MobileMiniBrowser (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 149,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 150,
          "function": "mac_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "BlockNetworkAccess",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 170,
          "function": "webcontent_sandbox_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 171,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "EnableExperimentalSandbox",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 172,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "BlockIOKitInWebContentSandbox",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 173,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "2",
          "type": "string",
          "value": "local:WebContentProcessLaunched",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 174,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "3",
          "type": "string",
          "value": "ParentProcessCanEnableQuickLookStateFlag",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 175,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "4",
          "type": "string",
          "value": "UnifiedPDFEnabled",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 176,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "5",
          "type": "string",
          "value": "WebProcessDidNotInjectStoreBundle",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 177,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "6",
          "type": "string",
          "value": "BlockUserInstalledFonts",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 675,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 676,
          "function": "ios_family_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "BlockNetworkAccess",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/WebProcess/cocoa/WebProcessCocoa.mm",
          "line": 636,
          "process": "WebContent (checking UIProcess)",
          "platforms": [
            "iOS",
            "visionOS",
            "macOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 85,
      "entitlement": "com.apple.private.security.message-filter",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Enables Mach message filtering capabilities within the process's Seatbelt sandbox profile, allowing the sandbox to inspect, filter, or restrict Mach messages sent to system services.",
      "webkit_usage_summary": "WebKit grants this entitlement to its macOS GPU, Network, and WebContent processes (as well as macCatalyst WebContent) in process-entitlements.sh. During auxiliary process startup in AuxiliaryProcessMac.mm, WebKit checks for this entitlement via processHasEntitlement to set the ENABLE_SANDBOX_MESSAGE_FILTER sandbox parameter before compiling and applying the Seatbelt sandbox profile.",
      "browserenginekit_implications": "This is an Apple-internal private entitlement (com.apple.private.*) that cannot be granted to third-party developers or BrowserEngineKit extensions. Furthermore, it is macOS and macCatalyst-specific, so it has no direct relevance to iOS BrowserEngineKit extensions, which run under iOS-specific sandbox profiles.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking"
      ],
      "raw_processes": [
        "GPU",
        "Networking",
        "WebContent (Shared)",
        "WebContent / GPU / Networking"
      ],
      "platforms": [
        "macCatalyst",
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 64,
          "description": "Adds com.apple.private.security.message-filter to the macOS GPU process."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 109,
          "description": "Adds com.apple.private.security.message-filter to the macOS Network process."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 247,
          "description": "Adds com.apple.private.security.message-filter to the macOS WebContent shared processes."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 316,
          "description": "Adds com.apple.private.security.message-filter to the macCatalyst WebContent shared processes."
        },
        {
          "file": "Source/WebKit/Shared/mac/AuxiliaryProcessMac.mm",
          "line": 702,
          "description": "Queries processHasEntitlement to set the ENABLE_SANDBOX_MESSAGE_FILTER parameter when initializing the auxiliary process sandbox."
        }
      ],
      "key_commits": [
        {
          "hash": "4df4e176dbe5",
          "date": "2023-11-03",
          "subject": "Remove message filter entitlement"
        },
        {
          "hash": "eb466700acaf",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function"
        },
        {
          "hash": "184bfa73c8e9",
          "date": "2026-04-07",
          "subject": "Consolidate shared entitlements for the macCatalyst WebContent process variants"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 64,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 109,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 247,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 316,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/Shared/mac/AuxiliaryProcessMac.mm",
          "line": 702,
          "process": "WebContent / GPU / Networking",
          "platforms": [
            "macOS",
            "macCatalyst"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 86,
      "entitlement": "com.apple.private.security.mutable-state-flags",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Permits a process to dynamically toggle or mutate specific Seatbelt sandbox state flags at runtime.",
      "webkit_usage_summary": "Applied via process-entitlements.sh to WebContent processes (iOS, macOS, visionOS) and Network processes (macOS, iOS, visionOS). It authorizes changing specific sandbox flags dynamically\u2014such as BlockNetworkAccess in the networking process, and EnableExperimentalSandbox, BlockIOKitInWebContentSandbox, or EnableQuickLookSandboxResources in the WebContent process\u2014to adjust sandbox restrictions after initialization.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit cannot obtain this private Apple entitlement. They operate under static sandbox profiles assigned to BrowserEngineKit extensions and cannot use Apple's private sandbox state-flag SPI to dynamically tighten or modify kernel sandbox restrictions at runtime.",
      "canonical_processes": [
        "WebContent",
        "Networking"
      ],
      "raw_processes": [
        "Networking",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "BlockIOKitInWebContentSandbox",
        "BlockNetworkAccess",
        "BlockUserInstalledFonts",
        "EnableExperimentalSandbox",
        "EnableQuickLookSandboxResources",
        "ParentProcessCanEnableQuickLookStateFlag",
        "UnifiedPDFEnabled",
        "WebProcessDidNotInjectStoreBundle",
        "local:WebContentProcessLaunched"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 147,
          "description": "Grants mutable BlockNetworkAccess state flag to macOS NetworkProcess"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 161,
          "description": "Grants mutable sandbox state flags (BlockIOKitInWebContentSandbox, UnifiedPDFEnabled, etc.) to WebContent processes across platforms"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 673,
          "description": "Grants mutable BlockNetworkAccess state flag to iOS/visionOS NetworkProcess"
        }
      ],
      "key_commits": [
        {
          "hash": "cb7daacd4330",
          "date": "2026-08-22",
          "subject": "[macOS] The Networking process sandbox should inherit network access from the UI process"
        },
        {
          "hash": "e0e27e741c51",
          "date": "2025-12-10",
          "subject": "The Networking process sandbox should inherit network access from the UI process"
        },
        {
          "hash": "4b92e372b511",
          "date": "2026-04-15",
          "subject": "Remove BlockOpenDirectoryInWebContentSandbox setting"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 147,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 148,
          "function": "mac_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "BlockNetworkAccess",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 161,
          "function": "webcontent_sandbox_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 162,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "EnableExperimentalSandbox",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 163,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "BlockIOKitInWebContentSandbox",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 164,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "2",
          "type": "string",
          "value": "local:WebContentProcessLaunched",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 165,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "3",
          "type": "string",
          "value": "EnableQuickLookSandboxResources",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 166,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "4",
          "type": "string",
          "value": "ParentProcessCanEnableQuickLookStateFlag",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 167,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "5",
          "type": "string",
          "value": "UnifiedPDFEnabled",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 168,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "6",
          "type": "string",
          "value": "WebProcessDidNotInjectStoreBundle",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 169,
          "function": "webcontent_sandbox_entitlements",
          "subkey": "7",
          "type": "string",
          "value": "BlockUserInstalledFonts",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 673,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 674,
          "function": "ios_family_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "BlockNetworkAccess",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 87,
      "entitlement": "com.apple.private.security.restricted-application-groups",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Storage, Assets & System Databases",
      "short_purpose": "Permits sandboxed processes to join Apple-namespaced or team-unprefixed shared application group containers.",
      "webkit_usage_summary": "In WebKit, this entitlement is granted to the macOS push notification daemon (`webpushd`) when built as a system daemon (`WK_RELOCATABLE_WEBPUSHD == NO`). It allows `webpushd` to access the system-owned group container `group.com.apple.webkit.webpushd` in `~/Library/Group Containers/` for persistent push state management.",
      "browserenginekit_implications": "This entitlement is Apple-private and restricted to system daemons; it is not available to third-party developers or BrowserEngineKit extensions on iOS. Third-party iOS browsers share data between their main app and BrowserEngineKit processes using standard Developer Team-prefixed `com.apple.security.application-groups` containers instead.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "group.com.apple.webkit.webpushd"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 282,
          "description": "Adds com.apple.private.security.restricted-application-groups with group.com.apple.webkit.webpushd to webpushd on macOS"
        }
      ],
      "key_commits": [
        {
          "hash": "8237aaf69a3f",
          "date": "2025-03-18",
          "subject": "Move webpushd state to container https://bugs.webkit.org/show_bug.cgi?id=289557 rdar://110714823"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 282,
          "function": "mac_process_webpushd_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "webpushd",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 283,
          "function": "mac_process_webpushd_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "group.com.apple.webkit.webpushd",
          "process": "webpushd",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 88,
      "entitlement": "com.apple.private.security.storage.os_eligibility.readonly",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Storage, Assets & System Databases",
      "short_purpose": "Grants read-only access to the protected OS Eligibility system database and storage path (/private/var/db/os_eligibility/).",
      "webkit_usage_summary": "Assigned to the webpushd daemon on iOS and visionOS within `ios_family_process_webpushd_entitlements()` in `process-entitlements.sh`. It is paired with a sandbox file exception for `/private/var/db/os_eligibility/eligibility.plist`, enabling webpushd to inspect OS feature eligibility state directly from the local database.",
      "browserenginekit_implications": "This is an Apple-private entitlement unavailable to third-party developers or BrowserEngineKit processes. Third-party browser engines cannot access os_eligibility database storage directly; instead, regional eligibility (such as EU DMA browser engine availability) is evaluated and enforced externally by the OS and system daemons.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 619,
          "description": "Adds com.apple.private.security.storage.os_eligibility.readonly to webpushd on iOS family platforms"
        }
      ],
      "key_commits": [
        {
          "hash": "60973b36d99f",
          "date": "2024-09-11",
          "subject": "Allow webpushd to read eligbility state https://bugs.webkit.org/show_bug.cgi?id=279545 rdar://135827625"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 619,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 89,
      "entitlement": "com.apple.private.tcc.allow",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "TCC, Privacy & Permissions",
      "short_purpose": "Grants direct, pre-approved authorization for specified Transparency, Consent, and Control (TCC) services, bypassing standard permission prompts for the entitled binary.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the macOS GPU process with the array value `kTCCServiceScreenCapture` in `process-entitlements.sh`. This allows the helper GPU process to capture display and window streams via ScreenCaptureKit without requiring its own independent TCC consent prompt. Enforcement is handled directly by the macOS TCC daemon and kernel rather than internal WebKit C++ checks.",
      "browserenginekit_implications": "Third-party iOS apps and BrowserEngineKit extensions cannot obtain this Apple-private entitlement, as private TCC bypasses are restricted to system daemons and platform binaries. In WebKit this entitlement is macOS-only; on iOS, screen and media capture must go through host app permissions and standard ReplayKit/AVFoundation flows.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "kTCCServiceScreenCapture"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 71,
          "description": "Adds com.apple.private.tcc.allow array with kTCCServiceScreenCapture to the macOS GPU process"
        }
      ],
      "key_commits": [
        {
          "hash": "1e054343a3ef",
          "date": "2026-04-08",
          "subject": "Remove obsolete OS version checks in process-entitlements.sh"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 71,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 72,
          "function": "mac_process_gpu_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "kTCCServiceScreenCapture",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 6,
      "related_spis": [
        {
          "name": "TCCAccessPreflight",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "kTCCServiceCamera",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "kTCCServiceMicrophone",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "kTCCServicePhotos",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "kTCCServiceWebKitIntelligentTrackingPrevention",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "tcc_identity_create",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        }
      ]
    },
    {
      "id": 90,
      "entitlement": "com.apple.private.tcc.manager.check-by-audit-token",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "TCC, Privacy & Permissions",
      "short_purpose": "Grants permission to query the TCC daemon for privacy permission states (specifically Intelligent Tracking Prevention and User Tracking) of another process using its Mach audit token.",
      "webkit_usage_summary": "Assigned to the NetworkProcess on iOS, macOS, macCatalyst, and visionOS in `process-entitlements.sh` specifying `kTCCServiceWebKitIntelligentTrackingPrevention` and `kTCCServiceUserTracking`. This allows the out-of-process networking daemon to invoke private TCC SPI functions like `TCCAccessPreflightWithAuditToken` using the UIProcess's audit token to evaluate Intelligent Tracking Prevention (ITP) and cross-site tracking consent without running in the client app's own process context.",
      "browserenginekit_implications": "This Apple-private entitlement is not granted to third-party browsers or BrowserEngineKit network extensions (`com.apple.developer.web-browser-engine.networking`). 3P browser engines cannot use private TCC manager SPIs to query authorization on behalf of other processes by audit token; they must manage tracking prevention policies in-engine or evaluate permissions in their host application and relay state across their own IPC.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "kTCCServiceUserTracking",
        "kTCCServiceWebKitIntelligentTrackingPrevention"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 644,
          "description": "Appends array containing kTCCServiceWebKitIntelligentTrackingPrevention and kTCCServiceUserTracking to com.apple.private.tcc.manager.check-by-audit-token for iOS/visionOS NetworkProcess"
        },
        {
          "file": "Source/WebKit/Shared/Cocoa/DefaultWebBrowserChecks.mm",
          "line": 195,
          "description": "Invokes TCCAccessPreflightWithAuditToken on the parent process audit token to check ITP permission status"
        },
        {
          "file": "Source/WebKit/Shared/Cocoa/TCCSoftLink.h",
          "line": 44,
          "description": "Soft-links private TCC SPI TCCAccessPreflightWithAuditToken used for out-of-process token-based permission checks"
        }
      ],
      "key_commits": [
        {
          "hash": "88e75e671992",
          "date": "2023-04-05",
          "subject": "Tracker traffic is blocked even if user grants tracking permission"
        },
        {
          "hash": "d2b1197b133b",
          "date": "2023-04-11",
          "subject": "Tracker traffic is blocked even if user grants tracking permission"
        },
        {
          "hash": "936d469758ef",
          "date": "2020-03-03",
          "subject": "Add flag to indicate that ITP state was explicitly set"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 110,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 111,
          "function": "mac_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "kTCCServiceWebKitIntelligentTrackingPrevention",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 112,
          "function": "mac_process_network_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "kTCCServiceUserTracking",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 402,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 403,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "kTCCServiceWebKitIntelligentTrackingPrevention",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 404,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "kTCCServiceUserTracking",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 644,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 645,
          "function": "ios_family_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "kTCCServiceWebKitIntelligentTrackingPrevention",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 646,
          "function": "ios_family_process_network_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "kTCCServiceUserTracking",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 6,
      "related_spis": [
        {
          "name": "TCCAccessPreflight",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "kTCCServiceCamera",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "kTCCServiceMicrophone",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "kTCCServicePhotos",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "kTCCServiceWebKitIntelligentTrackingPrevention",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "tcc_identity_create",
          "kind": "symbols",
          "framework": "TCC",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        }
      ]
    },
    {
      "id": 91,
      "entitlement": "com.apple.private.usernotifications.app-management-domain.proxy",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Authorizes a daemon to act as a proxy within UserNotifications for managing, posting, and querying notifications under a designated app-management domain.",
      "webkit_usage_summary": "WebKit signs the iOS and visionOS web push daemon (`webpushd`) with this entitlement set to `com.apple.WebKit.PushBundles` via `process-entitlements.sh`. This allows `webpushd` to interact with `usernotificationsd` to schedule, retrieve, and manage push notifications on behalf of web push subscriptions and Home Screen web applications (PWA WebClips).",
      "browserenginekit_implications": "This is an Apple-private entitlement not granted to third-party browsers or BrowserEngineKit extension processes. Third-party browser engines on iOS cannot utilize Apple's internal `webpushd` proxy mechanism to dispatch notifications under synthetic push bundle domains, and must instead schedule notifications directly through their host app's standard UserNotifications entitlements and permissions.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "com.apple.WebKit.PushBundles"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 617,
          "description": "Sets com.apple.private.usernotifications.app-management-domain.proxy to 'com.apple.WebKit.PushBundles' for webpushd on iOS family platforms"
        },
        {
          "file": "Source/WebKit/Platform/spi/Cocoa/UserNotificationsSPI.h",
          "line": 60,
          "description": "Declares private SPIs for UserNotifications used by webpushd such as defaultActionBundleIdentifier and notificationWithRequest:date:"
        },
        {
          "file": "Source/WebKit/webpushd/WebPushDaemon.mm",
          "line": 39,
          "description": "Imports UserNotificationsSPI.h and implements daemon-level notification scheduling and retrieval"
        }
      ],
      "key_commits": [
        {
          "hash": "9d08f2e924fa",
          "date": "2024-07-22",
          "subject": "Implement webpushd built-in showNotification and getNotifications rdar://131362923 https://bugs.webkit.org/show_bug.cgi?id=276823"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 617,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "string",
          "value": "com.apple.WebKit.PushBundles",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 1,
      "related_spis": [
        {
          "name": "setDefaultActionBundleIdentifier:",
          "kind": "selectors",
          "framework": "UserNotifications",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        }
      ]
    },
    {
      "id": 92,
      "entitlement": "com.apple.private.verified-jit",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Enables Apple kernel-level verified JIT code execution and JIT Cage memory hardening mechanisms.",
      "webkit_usage_summary": "Applied to WebContent, jsc, and testapi binaries across iOS, macOS, macCatalyst, and visionOS via process-entitlements.sh. JavaScriptCore checks it at runtime in `canUseJITCage()` within Options.cpp to gate JIT Cage security protections and asserts its presence in ExecutableAllocator.cpp when configuring JIT memory. The UIProcess also inspects it on WebContent connections in WKWebView testing code when evaluating JIT and Enhanced Security (Lockdown Mode) states.",
      "browserenginekit_implications": "Because this is an Apple-private entitlement (`com.apple.private.*`), third-party browser engines using BrowserEngineKit on iOS cannot obtain it. Third-party engines must rely on `com.apple.developer.cs.allow-jit` for JIT execution and cannot access Apple's proprietary verified-JIT or JIT Cage hardening infrastructure.",
      "canonical_processes": [
        "WebContent",
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "UIProcess (inspecting WebContent)",
        "WebContent",
        "WebContent / JSC",
        "jsc / JSC Tools",
        "testapi (JSC)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 473,
          "description": "Adds com.apple.private.verified-jit to WebContent process entitlements on iOS and visionOS"
        },
        {
          "file": "Source/JavaScriptCore/runtime/Options.cpp",
          "line": 1552,
          "description": "Checks entitlement in canUseJITCage() to gate activation of JIT Cage hardening"
        },
        {
          "file": "Source/JavaScriptCore/jit/ExecutableAllocator.cpp",
          "line": 163,
          "description": "Asserts the entitlement when initializing JIT allocator and memory configurations"
        }
      ],
      "key_commits": [
        {
          "hash": "299f0aa7d776",
          "date": "2024-05-31",
          "subject": "Disable JITCage by default when ASAN is enabled"
        },
        {
          "hash": "9cc524ed511e",
          "date": "2025-10-09",
          "subject": "Add entitlement assertions for JIT disabling on macOS"
        },
        {
          "hash": "ce585987e8f9",
          "date": "2024-04-05",
          "subject": "(3) Adopt com.apple.developer.cs.allow-jit entitlement for iOS."
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/JavaScriptCore/entitlements.plist",
          "line": 5,
          "value": true,
          "process": "jsc / JSC Tools"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 20,
          "function": "mac_process_webcontent_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 344,
          "function": "maccatalyst_process_webcontent_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 473,
          "function": "ios_family_process_webcontent_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 34,
          "function": "mac_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 64,
          "function": "mac_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 117,
          "function": "maccatalyst_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 148,
          "function": "maccatalyst_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 186,
          "function": "ios_family_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/jit/ExecutableAllocator.cpp",
          "line": 163,
          "process": "WebContent / JSC",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/runtime/Options.cpp",
          "line": 1552,
          "process": "WebContent / JSC",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebViewTesting.mm",
          "line": 1439,
          "process": "UIProcess (inspecting WebContent)",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 45,
      "related_spis": [
        {
          "name": "OSLaunchdJob",
          "kind": "classes",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "initWithPlist:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "proxyRebuildCache",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setServiceName:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "IOHIDDeviceClose",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceOpen",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceRegisterInputReportCallback",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceScheduleWithRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceSetReport",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceUnscheduleFromRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDEventAppendEvent",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDEventCreateDigitizerEvent",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        }
      ]
    },
    {
      "id": 93,
      "entitlement": "com.apple.private.webinspector.allow-remote-inspection",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Allows remote Web Inspector debugging and inspection of web and JavaScript contexts without requiring developer provisioning profiles (get-task-allow).",
      "webkit_usage_summary": "WebKit assigns this entitlement to the iOS WebContent (Shared) captive portal service in process-entitlements.sh. At runtime, JavaScriptCore checks it in JSRemoteInspector.cpp to enable remote web inspection by default for the process or parent application, serving as a deprecated legacy entitlement mechanism prior to the modern Cocoa inspectable API.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit cannot obtain this private Apple entitlement. However, this is not an architectural disadvantage because Apple deprecated this entitlement in favor of the public inspectable API (e.g., WKWebView.isInspectable) and standard developer provisioning, which 3P engines and applications use for remote debugging.",
      "canonical_processes": [
        "WebContent",
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "UIProcess / WebContent",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 441,
          "description": "Adds com.apple.private.webinspector.allow-remote-inspection to the WebContent (Shared) service entitlement list on iOS and visionOS"
        },
        {
          "file": "Source/JavaScriptCore/API/JSRemoteInspector.cpp",
          "line": 107,
          "description": "Checks if the process or parent process audit token holds the deprecated entitlement to enable remote inspection by default"
        }
      ],
      "key_commits": [
        {
          "hash": "3d99c5a13754",
          "date": "2022-10-14",
          "subject": "Remote Web Inspector: [Cocoa] `inspectable` API"
        },
        {
          "hash": "586ce1b3e48b",
          "date": "2021-11-29",
          "subject": "Create a new XPC service with specific entitlements to support Captive Portal use cases"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 441,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/API/JSRemoteInspector.cpp",
          "line": 1061,
          "process": "UIProcess / WebContent",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 94,
      "entitlement": "com.apple.private.webinspector.proxy-application",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Allows an out-of-process service to register with webinspectord as a proxy application for remote Web Inspector debugging sessions.",
      "webkit_usage_summary": "WebKit signs the shared WebContent process on iOS and visionOS with this entitlement via process-entitlements.sh. It allows out-of-process WebContent instances to communicate with Apple's webinspectord daemon so that remote web inspection targets can be correlated and proxied under the host application.",
      "browserenginekit_implications": "Because this is an Apple-private entitlement, third-party browser engines using BrowserEngineKit (com.apple.developer.web-browser-engine.webcontent) cannot obtain it. Consequently, third-party browser webcontent processes cannot use Apple's internal webinspectord proxy application interface directly, and must rely on public BrowserEngineKit developer mechanisms or engine-specific debugging transports (such as Chrome DevTools Protocol).",
      "canonical_processes": [
        "WebContent"
      ],
      "raw_processes": [
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 442,
          "description": "Adds com.apple.private.webinspector.proxy-application to shared WebContent entitlements for iOS and visionOS."
        }
      ],
      "key_commits": [
        {
          "hash": "586ce1b3e48b",
          "date": "2021-11-29",
          "subject": "Create a new XPC service with specific entitlements to support Captive Portal use cases"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 442,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 95,
      "entitlement": "com.apple.private.webinspector.webinspectord",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Authorizes Apple's webinspectord system daemon to establish trusted XPC connections to target processes hosting JavaScriptCore RemoteInspector instances for debugging and automation.",
      "webkit_usage_summary": "WebKit processes do not hold this entitlement; rather, JavaScriptCore's RemoteInspector subsystem acts as an entitlement verifier on macOS. In RemoteInspectorXPCConnection.mm, when an XPC connection is established with the Web Inspector Relay Mach service, the target process verifies that the connecting peer's audit token possesses 'com.apple.private.webinspector.webinspectord'. If the peer lacks this entitlement, the connection is immediately terminated to protect the remote debugging endpoint against unauthorized local processes.",
      "browserenginekit_implications": "Third-party browsers and BrowserEngineKit extensions on iOS cannot obtain this Apple-private entitlement, nor do they need it. The entitlement belongs exclusively to Apple's system daemon (webinspectord), and the audit token check in RemoteInspectorXPCConnection is macOS-only (#if PLATFORM(MAC)). Third-party engines on iOS act as inspection targets mediated by webinspectord using standard developer mode and inspectability APIs rather than acting as the relay daemon itself.",
      "canonical_processes": [
        "WebContent",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "WebContent / JSC RemoteInspector"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/JavaScriptCore/inspector/remote/cocoa/RemoteInspectorXPCConnection.mm",
          "line": 146,
          "description": "Verifies that the peer audit token holds com.apple.private.webinspector.webinspectord on macOS before processing RemoteInspector messages"
        }
      ],
      "key_commits": [
        {
          "hash": "a77812341c29",
          "date": "2017-02-11",
          "subject": "WebInspector: refactor RemoteInspector to move cocoa specific code to their own files"
        },
        {
          "hash": "dd956d5e7424",
          "date": "2022-06-05",
          "subject": "Drop operator==() overload for comparing a String to a const char*"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/inspector/remote/cocoa/RemoteInspectorXPCConnection.mm",
          "line": 146,
          "process": "WebContent / JSC RemoteInspector",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 96,
      "entitlement": "com.apple.private.webkit.adattributiond",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "WebKit Internal IPC & Features",
      "short_purpose": "Authorizes WebKit network processes to connect over Mach IPC to the Private Click Measurement daemon (adattributiond).",
      "webkit_usage_summary": "WebKit provisions this entitlement to the Network Process on macOS, iOS, and visionOS in process-entitlements.sh. The background adattributiond daemon checks for this entitlement when accepting incoming Mach service connections in PCMDaemonEntryPoint.mm, ensuring only trusted WebKit network processes can store Private Click Measurement data and trigger attribution reporting.",
      "browserenginekit_implications": "Because this is an Apple-private entitlement, third-party browsers using BrowserEngineKit on iOS cannot obtain it and cannot connect to WebKit's system-managed adattributiond daemon. Alternative browser engines must maintain their own in-process or extension-hosted attribution state and handle ad click measurement reporting independently.",
      "canonical_processes": [
        "Networking",
        "adattributiond"
      ],
      "raw_processes": [
        "Networking",
        "adattributiond / Networking"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 632,
          "description": "Grants com.apple.private.webkit.adattributiond to the Network Process on iOS and visionOS (and macOS at line 136)"
        },
        {
          "file": "Source/WebKit/Shared/EntryPointUtilities/Cocoa/Daemon/PCMDaemonEntryPoint.mm",
          "line": 150,
          "description": "Validates that connecting Mach service clients possess com.apple.private.webkit.adattributiond before establishing an IPC connection to the PCM daemon"
        }
      ],
      "key_commits": [
        {
          "hash": "bb4992df17f5",
          "date": "2021-10-05",
          "subject": "Add an entitlement check to only allow AdAttributionDaemon to be connected to by the network process"
        },
        {
          "hash": "9b2718aee828",
          "date": "2021-10-12",
          "subject": "Rename AdAttributionDaemon to adattributiond"
        },
        {
          "hash": "27b78b5a8991",
          "date": "2021-10-14",
          "subject": "Share IPC communication code between webpushd and adattributiond"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 136,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 632,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/Shared/EntryPointUtilities/Cocoa/Daemon/PCMDaemonEntryPoint.mm",
          "line": 150,
          "process": "adattributiond / Networking",
          "platforms": [
            "iOS",
            "macOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 97,
      "entitlement": "com.apple.private.webkit.adattributiond.testing",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Authorizes a host application or test harness to invoke test-only Private Click Measurement / adattributiond debugging and timer override APIs.",
      "webkit_usage_summary": "Granted to internal test harness binaries (WebKitTestRunner and TestWebKitAPI) across iOS, macOS, macCatalyst, and visionOS. In NetworkProcess::allowsPrivateClickMeasurementTestFunctionality(), the NetworkProcess inspects the calling UIProcess audit token for this entitlement when built against Apple internal SDKs before permitting test-only Private Click Measurement functionality such as overriding timers.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this Apple-private testing entitlement. However, this has no impact on production third-party browser engines as it is exclusively used for automated test suites to manipulate internal Private Click Measurement test hooks.",
      "canonical_processes": [
        "Networking",
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "Networking (checking UIProcess)",
        "Test Runner / Harness (Host App)",
        "TestWebKitAPI"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/NetworkProcess/NetworkProcess.cpp",
          "line": 3173,
          "description": "NetworkProcess::allowsPrivateClickMeasurementTestFunctionality checks the source application's audit token for the entitlement"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner-internal.entitlements",
          "line": 9,
          "description": "Entitlement declared for WebKitTestRunner internal test harness"
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 37,
          "description": "Adds the entitlement when signing TestWebKitAPI test bundles"
        }
      ],
      "key_commits": [
        {
          "hash": "9d75cf56a21ccf9c963428bcf7e1f43789ee3a25",
          "date": "2021-12-20",
          "subject": "Prevent test functionality in AdAttributionDaemon when not running tests"
        },
        {
          "hash": "2177a497f6efeb5d73a550f771900ef35b7d86ea",
          "date": "2025-04-24",
          "subject": "Introduce a script to generate TestWebKitAPI entitlements"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner-internal.entitlements",
          "line": 9,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS-simulator.entitlements",
          "line": 13,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS.entitlements",
          "line": 13,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 37,
          "function": "process_restricted_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/NetworkProcess/NetworkProcess.cpp",
          "line": 3173,
          "process": "Networking (checking UIProcess)",
          "platforms": [
            "iOS",
            "macOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 98,
      "entitlement": "com.apple.private.webkit.enhanced-security",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Lockdown Mode & Parental Controls",
      "short_purpose": "Identifies a WebContent auxiliary process as running in Enhanced Security mode, enabling UIProcess verification of the hardened process variant.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the `WebContent.EnhancedSecurity` auxiliary process variant in `process-entitlements.sh` on iOS and visionOS. At runtime, WebKit's UIProcess inspects the XPC connection to verify whether a connected WebContent process holds this entitlement (e.g., in `WKWebViewTesting.mm`) to distinguish Enhanced Security processes from standard and Lockdown Mode variants.",
      "browserenginekit_implications": "Because this is an Apple-internal private entitlement (`com.apple.private.*`), third-party browsers using BrowserEngineKit on iOS cannot obtain it. Third-party browser engines implementing custom hardened or JIT-restricted process modes must track and enforce process isolation and security policies internally rather than relying on WebKit-specific private variant entitlements.",
      "canonical_processes": [
        "WebContent",
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "UIProcess (inspecting WebContent)",
        "WebContent.EnhancedSecurity"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 506,
          "description": "Signs WebContent.EnhancedSecurity on iOS-family platforms with com.apple.private.webkit.enhanced-security."
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebViewTesting.mm",
          "line": 1443,
          "description": "Inspects the WebContent XPC connection for com.apple.private.webkit.enhanced-security to classify the process variant."
        }
      ],
      "key_commits": [
        {
          "hash": "bb4d3ee9eae2",
          "date": "2025-10-02",
          "subject": "New WebContent process variant for Enhanced Security"
        },
        {
          "hash": "3fd7f86c3308",
          "date": "2025-11-05",
          "subject": "Add additional API tests for EnhancedSecurity"
        },
        {
          "hash": "65d2aea68566",
          "date": "2026-01-14",
          "subject": "use signing-identifier to distinguish webcontent variant"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 506,
          "function": "ios_family_process_webcontent_enhancedsecurity_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent.EnhancedSecurity",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebViewTesting.mm",
          "line": 1443,
          "process": "UIProcess (inspecting WebContent)",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 99,
      "entitlement": "com.apple.private.webkit.lockdown-mode",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Lockdown Mode & Parental Controls",
      "short_purpose": "Identifies a WebContent auxiliary process running under Lockdown Mode with disabled JIT and restricted capabilities.",
      "webkit_usage_summary": "Granted via `process-entitlements.sh` to the `com.apple.WebKit.WebContent.CaptivePortal` process variant on iOS and visionOS. In `WKWebViewTesting.mm`, UIProcess checks whether an inspecting WebContent XPC connection possesses this entitlement to verify if the WebContent process is operating in Lockdown Mode (returning 'lockdown').",
      "browserenginekit_implications": "This entitlement is Apple-private (`com.apple.private.*`) and cannot be obtained by third-party browsers using BrowserEngineKit on iOS. Third-party browser engines implementing Lockdown Mode must manage JIT disabling (e.g., omitting `com.apple.developer.cs.allow-jit`) and restrict engine capabilities inside their own BEWebContent processes without relying on Apple's internal WebContent variant entitlements.",
      "canonical_processes": [
        "WebContent",
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "UIProcess (inspecting WebContent)",
        "WebContent.CaptivePortal"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 491,
          "description": "Signs `com.apple.private.webkit.lockdown-mode` into the CaptivePortal WebContent process variant on iOS-family platforms"
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebViewTesting.mm",
          "line": 1450,
          "description": "Checks `hasEntitlement` on the WebContent XPC connection to identify whether the process is running in Lockdown Mode"
        }
      ],
      "key_commits": [
        {
          "hash": "a646dbce6fc3",
          "date": "2023-06-02",
          "subject": "Add Lockdown Mode entitlement"
        },
        {
          "hash": "65d2aea68566",
          "date": "2026-01-14",
          "subject": "use signing-identifier to distinguish webcontent variant"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 491,
          "function": "ios_family_process_webcontent_captiveportal_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent.CaptivePortal",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebViewTesting.mm",
          "line": 1450,
          "process": "UIProcess (inspecting WebContent)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 100,
      "entitlement": "com.apple.private.webkit.use-xpc-endpoint",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "WebKit Internal IPC & Features",
      "short_purpose": "Authorizes WebKit auxiliary processes to establish and communicate over internal anonymous XPC endpoints.",
      "webkit_usage_summary": "WebKit signs all auxiliary processes (WebContent, GPUProcess, NetworkProcess, ModelProcess) across iOS, macOS, macCatalyst, and visionOS with this entitlement via process-entitlements.sh and simulator entitlement plists. At runtime in XPCEndpoint.mm and XPCEndpointClient.mm, incoming anonymous XPC connections and messages audit the connecting peer's audit token; if pid != getpid() and the peer lacks this entitlement, the connection or message is rejected. This prevents unauthorized processes on the system from connecting to WebKit's private XPC communication channels.",
      "browserenginekit_implications": "This Apple-private entitlement is not granted to third-party browsers or BrowserEngineKit extension processes on iOS. Because this entitlement protects WebKit-specific internal XPC endpoints rather than gating an Apple platform service, third-party browser engines using BrowserEngineKit are unaffected as they rely on their own IPC abstractions (such as Mojo or native Mach port exchanges) for inter-process communication.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "UIProcess / Host App",
        "webpushd",
        "Model",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "All iOS XPC Services / webpushd (Simulator)",
        "GPU",
        "Model",
        "Networking",
        "WebContent",
        "WebContent (Shared)",
        "WebContent / GPU / Networking / UIProcess"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/Cocoa/XPCEndpoint.mm",
          "line": 56,
          "description": "Verifies that connecting clients to an anonymous XPC endpoint have the com.apple.private.webkit.use-xpc-endpoint entitlement."
        },
        {
          "file": "Source/WebKit/Shared/Cocoa/XPCEndpointClient.mm",
          "line": 65,
          "description": "Validates that the remote sender connection for incoming endpoint messages possesses the entitlement."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 443,
          "description": "Signs WebContent, GPU, and Network processes on iOS and macOS with com.apple.private.webkit.use-xpc-endpoint."
        }
      ],
      "key_commits": [
        {
          "hash": "eb466700acaf",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function"
        },
        {
          "hash": "bef97a66bbfd",
          "date": "2024-09-04",
          "subject": "Allow layout tests to load model content on visionOS with model process"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Resources/ios/GPUService-visionOS-simulator.entitlements",
          "line": 7,
          "value": true,
          "process": "GPU"
        },
        {
          "file": "Source/WebKit/Resources/ios/ModelService-embedded-simulator.entitlements",
          "line": 7,
          "value": true,
          "process": "Model"
        },
        {
          "file": "Source/WebKit/Resources/ios/XPCService-embedded-simulator.entitlements",
          "line": 7,
          "value": true,
          "process": "All iOS XPC Services / webpushd (Simulator)"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/GPUProcessExtension.entitlements",
          "line": 11,
          "value": true,
          "process": "GPU"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/NetworkingProcessExtension.entitlements",
          "line": 9,
          "value": true,
          "process": "Networking"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 15,
          "value": true,
          "process": "WebContent"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 80,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 133,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 240,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 305,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 372,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 399,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 443,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 532,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 641,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/Shared/Cocoa/XPCEndpoint.mm",
          "line": 56,
          "process": "WebContent / GPU / Networking / UIProcess",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Shared/Cocoa/XPCEndpointClient.mm",
          "line": 65,
          "process": "WebContent / GPU / Networking / UIProcess",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 46,
      "related_spis": [
        {
          "name": "OSLaunchdJob",
          "kind": "classes",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "initWithPlist:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "proxyRebuildCache",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setServiceName:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "webProcessPlugInBrowserContextController:didSameDocumentNavigationForFrame:",
          "kind": "selectors",
          "framework": "WebKit",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "IOHIDDeviceClose",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceOpen",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceRegisterInputReportCallback",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceScheduleWithRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceSetReport",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceUnscheduleFromRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDEventAppendEvent",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        }
      ]
    },
    {
      "id": 101,
      "entitlement": "com.apple.private.webkit.webpush",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "WebKit Internal IPC & Features",
      "short_purpose": "Authorizes processes and host applications to connect to WebKit's web push daemon (webpushd) over Mach/XPC.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the Network process on macOS, iOS, and visionOS, as well as test utilities like webpushtool and MobileMiniBrowser. The web push daemon (webpushd) enforces this entitlement upon incoming Mach service connections to com.apple.webkit.webpushd.service and verifies that the connecting host application's audit token possesses it before initializing push client sessions.",
      "browserenginekit_implications": "Because this is an Apple-private entitlement, third-party browsers using BrowserEngineKit on iOS cannot obtain it and cannot connect to WebKit's internal webpushd daemon. Third-party browser engines must implement their own push notification handling and background push wakeups using standard Apple Push Notification service (APNs) and background task mechanisms available to third-party apps.",
      "canonical_processes": [
        "Networking",
        "UIProcess / Host App",
        "webpushd",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "All iOS XPC Services / webpushd (Simulator)",
        "MobileMiniBrowser (Host App)",
        "Networking",
        "TestWebKitAPI",
        "webpushd (checking Client/Host App)",
        "webpushd (checking Peer)",
        "webpushtool"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 633,
          "description": "Adds com.apple.private.webkit.webpush to the Network process on iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 137,
          "description": "Adds com.apple.private.webkit.webpush to the Network process on macOS"
        },
        {
          "file": "Source/WebKit/webpushd/WebPushDaemonMain.mm",
          "line": 213,
          "description": "Enforces com.apple.private.webkit.webpush as peerEntitlementName when listening for Mach service connections"
        },
        {
          "file": "Source/WebKit/webpushd/PushClientConnection.mm",
          "line": 187,
          "description": "Validates that the host application possesses com.apple.private.webkit.webpush during PushClientConnection initialization"
        }
      ],
      "key_commits": [
        {
          "hash": "14e2516cb5f3",
          "date": "2022-02-08",
          "subject": "Add PushService"
        },
        {
          "hash": "c9c593aab62e",
          "date": "2024-08-08",
          "subject": "Read host app info from extension process directly in webpushd"
        },
        {
          "hash": "c5b08c20f512",
          "date": "2024-08-20",
          "subject": "Fix webpushtool on iOS"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Resources/ios/XPCService-embedded-simulator.entitlements",
          "line": 9,
          "value": true,
          "process": "All iOS XPC Services / webpushd (Simulator)"
        },
        {
          "file": "Source/WebKit/Resources/webpushtool.entitlements",
          "line": 5,
          "value": true,
          "process": "webpushtool"
        },
        {
          "file": "Tools/MobileMiniBrowser/MobileMiniBrowser/MobileMiniBrowser.entitlements",
          "line": 11,
          "value": true,
          "process": "MobileMiniBrowser (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 137,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 633,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 38,
          "function": "process_restricted_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/webpushd/PushClientConnection.mm",
          "line": 73,
          "process": "webpushd (checking Client/Host App)",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/webpushd/WebPushDaemonMain.mm",
          "line": 64,
          "process": "webpushd (checking Peer)",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 102,
      "entitlement": "com.apple.private.webkit.webpush.inject",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Grants permission to inject mock push messages, query internal push topics, and bypass host app requirements in webpushd for testing.",
      "webkit_usage_summary": "WebKit declares this entitlement for the 'webpushtool' CLI diagnostic utility and 'TestWebKitAPI' across iOS, macOS, macCatalyst, and visionOS. In webpushd (PushClientConnection.mm and WebPushDaemon.mm), runtime checks verify this entitlement on connecting peer and host audit tokens to allow standalone CLI tools without ExtensionKit host apps, permit bundle identifier overrides, and gate test injection APIs including injectPushMessageForTesting, injectEncryptedPushMessageForTesting, and getPushTopicsForTesting.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot obtain this Apple-private entitlement because it is restricted to internal testing tools and test harnesses. This restriction does not impact production 3P browser functionality, as production web push messages arrive via APNs rather than local webpushd injection interfaces.",
      "canonical_processes": [
        "webpushd",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "TestWebKitAPI",
        "webpushd (checking Test/Tool Peer)",
        "webpushtool"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Resources/webpushtool.entitlements",
          "line": 7,
          "description": "Declares the entitlement for the webpushtool diagnostic CLI tool"
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 39,
          "description": "Signs TestWebKitAPI with the entitlement across iOS, macOS, macCatalyst, and visionOS"
        },
        {
          "file": "Source/WebKit/webpushd/PushClientConnection.mm",
          "line": 148,
          "description": "Checks peer audit token for the entitlement to allow direct tool connections without a host app and authorize bundle identifier overrides"
        },
        {
          "file": "Source/WebKit/webpushd/WebPushDaemon.mm",
          "line": 447,
          "description": "Verifies hostAppHasPushInjectEntitlement before allowing injectPushMessageForTesting, injectEncryptedPushMessageForTesting, or getPushTopicsForTesting"
        }
      ],
      "key_commits": [
        {
          "hash": "123c794438c2",
          "date": "2021-12-09",
          "subject": "Add ability to inject messages into webpushd"
        },
        {
          "hash": "c5b08c20f512",
          "date": "2024-08-20",
          "subject": "Fix webpushtool on iOS"
        },
        {
          "hash": "2177a497f6ef",
          "date": "2025-04-24",
          "subject": "Introduce a script to generate TestWebKitAPI entitlements"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Resources/webpushtool.entitlements",
          "line": 7,
          "value": true,
          "process": "webpushtool"
        }
      ],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 39,
          "function": "process_restricted_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/webpushd/PushClientConnection.mm",
          "line": 148,
          "process": "webpushd (checking Test/Tool Peer)",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 103,
      "entitlement": "com.apple.private.xpc.domain-extension",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Enables a process to interface with launchd to dynamically create or extend XPC service domain boundaries.",
      "webkit_usage_summary": "Applied conditionally to macOS WebContent service processes in process-entitlements.sh (under mac_process_webcontent_shared_entitlements) when internal SDK builds enable WK_WEBCONTENT_SERVICE_NEEDS_XPC_DOMAIN_EXTENSION_ENTITLEMENT. It allows the WebContent XPC service to manage or extend isolated launchd XPC domains used for helper process communications. WebKit does not check this entitlement directly in C++ code; enforcement is handled by launchd and libxpc.",
      "browserenginekit_implications": "This entitlement is private to Apple (com.apple.private.*) and specific to macOS WebContent processes; it is unavailable to third-party developers or BrowserEngineKit extensions on iOS. Third-party iOS browsers using BrowserEngineKit rely instead on standard BrowserEngineKit process spawning APIs and framework-managed XPC endpoints without access to low-level launchd domain extension capabilities.",
      "canonical_processes": [
        "WebContent"
      ],
      "raw_processes": [
        "WebContent (Shared)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 231,
          "description": "Conditionally injects com.apple.private.xpc.domain-extension into macOS WebContent process entitlements when restricted entitlements and WK_WEBCONTENT_SERVICE_NEEDS_XPC_DOMAIN_EXTENSION_ENTITLEMENT are enabled."
        }
      ],
      "key_commits": [
        {
          "hash": "a06b30c383bc",
          "date": "2019-02-07",
          "subject": "Fix XCBuild issue related to codesigning WebContent process"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 231,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 104,
      "entitlement": "com.apple.private.xpc.launchd.job-manager",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Process Launching & BrowserEngineKit",
      "short_purpose": "Grants privileged permission to register, manage, or host system jobs and XPC services under Apple's launchd service manager.",
      "webkit_usage_summary": "WebKit declares this entitlement in webpushtool.entitlements (value 'webpushtool') and injects it for TestWebKitAPI on iOS family platforms via process-entitlements.sh (value 'TestWebKitAPI'). This enables internal developer tools and test harnesses to dynamically register and host mock background service daemons (such as webpushd) with launchd during testing.",
      "browserenginekit_implications": "This is a private Apple entitlement that is unavailable to third-party browsers and BrowserEngineKit extensions on iOS. Third parties cannot manage arbitrary launchd jobs and must instead use BrowserEngineKit's dedicated extension process lifecycle APIs (e.g., BEWebContentProcess, BENetworkingProcess). In WebKit itself, this entitlement is strictly restricted to test harnesses and developer tools rather than production browser binaries.",
      "canonical_processes": [
        "webpushd",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "TestWebKitAPI",
        "webpushtool"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "\"webpushtool\"",
        "TestWebKitAPI"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Resources/webpushtool.entitlements",
          "line": 9,
          "description": "Entitlement entry assigning job manager domain 'webpushtool' to allow hosting the push daemon"
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 76,
          "description": "Adds com.apple.private.xpc.launchd.job-manager string TestWebKitAPI for iOS family test targets"
        }
      ],
      "key_commits": [
        {
          "hash": "c089982630afbf30945f9fd2873e88c67e046f04",
          "date": "2021-12-14",
          "subject": "Teach webpushtool to register and \"host\" the daemon."
        },
        {
          "hash": "2177a497f6efeb5d73a550f771900ef35b7d86ea",
          "date": "2025-04-24",
          "subject": "Introduce a script to generate TestWebKitAPI entitlements"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Resources/webpushtool.entitlements",
          "line": 9,
          "value": "webpushtool",
          "process": "webpushtool"
        }
      ],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 76,
          "function": "process_ios_family_testwebkitapi_entitlements",
          "subkey": null,
          "type": "string",
          "value": "TestWebKitAPI",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 105,
      "entitlement": "com.apple.rootless.storage.JavaScriptCore",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Storage, Assets & System Databases",
      "short_purpose": "Grants an exemption from System Integrity Protection (SIP/rootless) to read and modify protected filesystem storage associated with the JavaScriptCore domain.",
      "webkit_usage_summary": "Assigned via `process-entitlements.sh` to the JavaScriptCore `testapi` command-line test utility on macOS (when building with restricted entitlements) and unconditionally on macCatalyst. It permits the test runner to access and manipulate SIP-protected directory storage designated for JavaScriptCore without encountering rootless filesystem restrictions.",
      "browserenginekit_implications": "This is a private Apple entitlement specific to macOS System Integrity Protection (SIP) storage classes and is completely unavailable to third-party developers or BrowserEngineKit engines on iOS. Third-party iOS browser engines do not have or need SIP exemptions, as iOS enforces app sandbox container boundaries rather than macOS rootless filesystem storage exemptions.",
      "canonical_processes": [
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "testapi (JSC)"
      ],
      "platforms": [
        "macCatalyst",
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 57,
          "description": "Adds com.apple.rootless.storage.JavaScriptCore to the macOS testapi binary entitlements when WK_USE_RESTRICTED_ENTITLEMENTS is YES."
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 124,
          "description": "Adds com.apple.rootless.storage.JavaScriptCore to the macCatalyst testapi binary entitlements."
        }
      ],
      "key_commits": [
        {
          "hash": "85c10165689c",
          "date": "2021-02-16",
          "subject": "[JSC] Dynamically generate entitlements"
        },
        {
          "hash": "2626d3d39c5b",
          "date": "2021-02-16",
          "subject": "[JSC] Enable JITCage on macOS"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 57,
          "function": "mac_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 124,
          "function": "maccatalyst_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 106,
      "entitlement": "com.apple.rootless.storage.WebKitGPUSandbox",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Storage, Assets & System Databases",
      "short_purpose": "Grants access to filesystem locations protected by macOS System Integrity Protection (SIP / rootless) designated for WebKit's GPU sandbox.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the macOS GPU process (com.apple.WebKit.GPUProcess) in process-entitlements.sh when WK_USE_RESTRICTED_ENTITLEMENTS is enabled. It permits the GPU process to read and write to SIP-restricted directories categorized under the WebKitGPUSandbox rootless storage class.",
      "browserenginekit_implications": "This is an Apple-private macOS System Integrity Protection entitlement that is unavailable to third-party developers or BrowserEngineKit extensions. On iOS, rootless storage classes are not utilized, and third-party browser engines rely on standard iOS container sandbox rules and BrowserEngineKit rendering extension entitlements.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 81,
          "description": "Adds com.apple.rootless.storage.WebKitGPUSandbox to the macOS GPU process entitlements when restricted entitlements are enabled."
        }
      ],
      "key_commits": [
        {
          "hash": "13771f185bf4ee131478ea0c5e728024c8e294d1",
          "date": "2020-02-07",
          "subject": "Build entitlements into GPU Process"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 81,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 107,
      "entitlement": "com.apple.rootless.storage.WebKitNetworkingSandbox",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Storage, Assets & System Databases",
      "short_purpose": "Grants access to macOS System Integrity Protection (SIP) rootless-protected filesystem locations designated under the WebKitNetworkingSandbox storage class.",
      "webkit_usage_summary": "Provisioned to WebKit's macOS NetworkProcess via mac_process_network_entitlements() in process-entitlements.sh. It allows the NetworkProcess to read and write to SIP-protected directories associated with WebKit's networking storage class without violating macOS rootless integrity policies. TestWebKitAPI explicitly tests for the presence of this entitlement on macOS when built against Apple internal SDKs.",
      "browserenginekit_implications": "This is an Apple-private, macOS-only entitlement tied to System Integrity Protection rootless storage classes. It is not available to third-party developers or BrowserEngineKit extensions on iOS, where storage isolation relies on standard iOS application sandboxing and container directories rather than macOS SIP rootless storage classes.",
      "canonical_processes": [
        "Networking",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "Networking",
        "TestWebKitAPI (testing NetworkProcess)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 134,
          "description": "Adds com.apple.rootless.storage.WebKitNetworkingSandbox to the macOS NetworkProcess entitlements."
        },
        {
          "file": "Tools/TestWebKitAPI/Tests/WebKit/WKWebView/NetworkProcess.mm",
          "line": 67,
          "description": "Verifies that the NetworkProcess has the com.apple.rootless.storage.WebKitNetworkingSandbox entitlement on macOS with Apple internal SDK."
        }
      ],
      "key_commits": [
        {
          "hash": "a06b30c383bc",
          "date": "2019-02-07",
          "subject": "Fix XCBuild issue related to codesigning WebContent process https://bugs.webkit.org/show_bug.cgi?id=193799 <rdar://problem/47533890>"
        },
        {
          "hash": "f3786b5bebf8",
          "date": "2026-04-06",
          "subject": "Reorganize TestWebKitAPI project directory structure https://bugs.webkit.org/show_bug.cgi?id=311494 rdar://174088227"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 134,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Tools/TestWebKitAPI/Tests/WebKit/WKWebView/NetworkProcess.mm",
          "line": 67,
          "process": "TestWebKitAPI (testing NetworkProcess)",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 108,
      "entitlement": "com.apple.rootless.storage.WebKitWebContentSandbox",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Storage, Assets & System Databases",
      "short_purpose": "Grants access under macOS System Integrity Protection (rootless) to filesystem locations protected by the WebKitWebContentSandbox rootless storage class.",
      "webkit_usage_summary": "WebKit adds this entitlement to all macOS WebContent process variants via mac_process_webcontent_shared_entitlements in process-entitlements.sh. It allows sandboxed macOS WebContent worker processes to access designated storage paths governed by Apple's rootless storage policies without violating System Integrity Protection.",
      "browserenginekit_implications": "This entitlement is Apple-private and specific to macOS System Integrity Protection (SIP), so it is not applicable to iOS or BrowserEngineKit. Third-party iOS browsers utilizing BrowserEngineKit operate within standard iOS sandbox containers and cannot obtain private com.apple.rootless.* entitlements on any platform.",
      "canonical_processes": [
        "WebContent"
      ],
      "raw_processes": [
        "WebContent (Shared)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 241,
          "description": "Applies com.apple.rootless.storage.WebKitWebContentSandbox to shared macOS WebContent process entitlements"
        }
      ],
      "key_commits": [
        {
          "hash": "eb466700acafb0a4e0823b232fb9d7e8b54c4771",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function"
        },
        {
          "hash": "a06b30c383bce7d8a19a9bcce9ae13ce5e82600a",
          "date": "2019-02-07",
          "subject": "Fix XCBuild issue related to codesigning WebContent process"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 241,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 109,
      "entitlement": "com.apple.runningboard.assertions.webkit",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "RunningBoard & Process Lifecycle",
      "short_purpose": "Authorizes a process to acquire RunningBoard process lifecycle and power management assertions within the private 'com.apple.webkit' assertion domain.",
      "webkit_usage_summary": "WebKit assigns this entitlement to its WebContent, GPU, Networking, and Model auxiliary processes across iOS, macOS, visionOS, and macCatalyst, as well as test host apps like MobileMiniBrowser. At runtime, WebProcessPool checks this entitlement on the host UIProcess before attempting to take a self-targeted 'WebKit Media Playback' ProcessAssertion in the 'com.apple.webkit' RunningBoard domain when audible media is active. Auxiliary processes use this domain to manage background, foreground, suspension, and media playback assertion states.",
      "browserenginekit_implications": "This is an Apple-private RunningBoard entitlement not granted to third-party browsers or their extension processes. Third-party browser engines on iOS must manage process lifetimes and priorities using BrowserEngineKit's supported capability APIs (such as BEProcessCapability and extension activation grants on BEWebContentProcess, BERenderingProcess, and BENetworkingProcess) rather than directly acquiring private RunningBoard assertions under the 'com.apple.webkit' domain.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "UIProcess / Host App",
        "webpushd",
        "Model",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "All iOS XPC Services / webpushd (Simulator)",
        "GPU",
        "MobileMiniBrowser (Host App)",
        "Model",
        "Networking",
        "UIProcess / Host App",
        "WebContent",
        "WebContent (Shared)"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/UIProcess/WebProcessPool.cpp",
          "line": 2726,
          "description": "Verifies whether the host UIProcess has the entitlement before taking a self-targeted MediaPlayback RunningBoard assertion during audible playback"
        },
        {
          "file": "Source/WebKit/UIProcess/Cocoa/ProcessAssertionCocoa.mm",
          "line": 379,
          "description": "Maps WebKit ProcessAssertionType values (Foreground, Background, MediaPlayback, Suspended, etc.) to the 'com.apple.webkit' RunningBoard domain"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 444,
          "description": "Injects the entitlement into WebContent, GPU, Networking, and Model processes during build signing"
        }
      ],
      "key_commits": [
        {
          "hash": "184bfa73c8e9",
          "date": "2026-04-07",
          "subject": "Consolidate shared entitlements for the macCatalyst WebContent process variants"
        },
        {
          "hash": "bb4d3ee9eae2",
          "date": "2025-10-02",
          "subject": "New WebContent process variant for Enhanced Security"
        },
        {
          "hash": "8746ea87f06c",
          "date": "2025-01-28",
          "subject": "[visionOS] Move shared simulation connection from the Model process to the GPU process"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Resources/ios/GPUService-visionOS-simulator.entitlements",
          "line": 5,
          "value": true,
          "process": "GPU"
        },
        {
          "file": "Source/WebKit/Resources/ios/ModelService-embedded-simulator.entitlements",
          "line": 5,
          "value": true,
          "process": "Model"
        },
        {
          "file": "Source/WebKit/Resources/ios/XPCService-embedded-simulator.entitlements",
          "line": 5,
          "value": true,
          "process": "All iOS XPC Services / webpushd (Simulator)"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/GPUProcessExtension.entitlements",
          "line": 13,
          "value": true,
          "process": "GPU"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/NetworkingProcessExtension.entitlements",
          "line": 11,
          "value": true,
          "process": "Networking"
        },
        {
          "file": "Source/WebKit/Shared/AuxiliaryProcessExtensions/WebContentProcessExtension.entitlements",
          "line": 17,
          "value": true,
          "process": "WebContent"
        },
        {
          "file": "Tools/MobileMiniBrowser/MobileMiniBrowser/MobileMiniBrowser.entitlements",
          "line": 9,
          "value": true,
          "process": "MobileMiniBrowser (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 73,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 116,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 227,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 306,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 369,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 398,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 444,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 533,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 587,
          "function": "ios_family_process_model_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Model",
          "platforms": [
            "visionOS",
            "iOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 642,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/WebProcessPool.cpp",
          "line": 2726,
          "process": "UIProcess / Host App",
          "platforms": [
            "iOS",
            "macOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 28,
      "related_spis": [
        {
          "name": "RBSAssertion",
          "kind": "classes",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "RBSDomainAttribute",
          "kind": "classes",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "RBSProcessHandle",
          "kind": "classes",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "RBSProcessIdentifier",
          "kind": "classes",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "RBSProcessMonitor",
          "kind": "classes",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "RBSProcessPredicate",
          "kind": "classes",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "RBSProcessStateDescriptor",
          "kind": "classes",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "RBSTarget",
          "kind": "classes",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "acquireWithError:",
          "kind": "selectors",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "acquireWithInvalidationHandler:",
          "kind": "selectors",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "activeLimitations",
          "kind": "selectors",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "attributeWithDomain:name:",
          "kind": "selectors",
          "framework": "RunningBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        }
      ]
    },
    {
      "id": 110,
      "entitlement": "com.apple.runningboard.launch_extensions",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "RunningBoard & Process Lifecycle",
      "short_purpose": "Allows an application to request RunningBoard to launch and manage extension processes directly.",
      "webkit_usage_summary": "WebKit declares this entitlement in WebKitTestRunnerApp-iOS.entitlements for the iOS layout test runner host app. It enables the test runner harness to launch BrowserEngineKit and ExtensionKit extension processes via RunningBoard during automated test runs on iOS and the iOS Simulator.",
      "browserenginekit_implications": "This is an internal Apple private RunningBoard entitlement not granted to third-party browsers. Third-party browsers using BrowserEngineKit instead rely on the public com.apple.developer.web-browser-engine.host entitlement and BrowserEngineKit APIs (such as BEWebContentProcess and BENetworkingProcess), where the OS mediates extension lifecycle management without requiring direct RunningBoard launch privileges.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "Test Runner / Harness (Host App)"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS.entitlements",
          "line": 15,
          "description": "Entitlement declaration enabling the WebKitTestRunner iOS host app to launch extension processes via RunningBoard during tests."
        }
      ],
      "key_commits": [
        {
          "hash": "47d87cd99fd2",
          "date": "2024-01-23",
          "subject": "Fix layout tests in simulator rdar://121324669 https://bugs.webkit.org/show_bug.cgi?id=267822"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS.entitlements",
          "line": 15,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 111,
      "entitlement": "com.apple.security.app-sandbox",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Enables the macOS App Sandbox security container and isolation model for an application process.",
      "webkit_usage_summary": "Declared in the entitlements plists for macOS test browser applications (MiniBrowser and SwiftBrowser) to execute them inside the standard macOS App Sandbox. WebKit's auxiliary engine processes (WebContent, Networking, GPU) do not rely on this host entitlement directly, but instead apply dedicated Seatbelt sandbox profiles at launch.",
      "browserenginekit_implications": "This is a macOS-only standard App Sandbox entitlement with no applicability to iOS or BrowserEngineKit. On iOS, all host browser applications and BrowserEngineKit extension processes are sandboxed unconditionally by the OS sandbox architecture and specialized BEK extension profiles.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 5,
          "description": "Enables the macOS App Sandbox for MiniBrowser test host application"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 5,
          "description": "Enables the macOS App Sandbox for SwiftBrowser sample browser application"
        }
      ],
      "key_commits": [
        {
          "hash": "4f8ffdf62150",
          "date": "2024-12-09",
          "subject": "[SwiftUI] Introduce SwiftBrowser"
        },
        {
          "hash": "c624799348d5",
          "date": "2018-01-31",
          "subject": "[macOS] MiniBrowser isn\u2019t app-sandboxed"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 5,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 5,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 112,
      "entitlement": "com.apple.security.application-groups",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Storage, Assets & System Databases",
      "short_purpose": "Enables an application or daemon to access shared group container directories and shared preferences across binaries belonging to the same development team.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the macOS `webpushd` daemon during code signing in `process-entitlements.sh`. It grants access to the `group.com.apple.webkit.webpushd` container so the daemon can store and manage persistent Web Push notification state and databases inside a sandboxed container.",
      "browserenginekit_implications": "This is a standard Apple Developer entitlement available to all third-party iOS apps and BrowserEngineKit extensions using their own Team ID prefix. Third-party browser host applications and extensions can use it to share storage and coordination data across processes, though they cannot join Apple-reserved groups like `group.com.apple.webkit.webpushd`.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "group.com.apple.webkit.webpushd"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 280,
          "description": "Adds the `com.apple.security.application-groups` array containing `group.com.apple.webkit.webpushd` to macOS `webpushd`."
        }
      ],
      "key_commits": [
        {
          "hash": "8237aaf69a3f",
          "date": "2025-03-18",
          "subject": "Move webpushd state to container"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 280,
          "function": "mac_process_webpushd_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "webpushd",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 281,
          "function": "mac_process_webpushd_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "group.com.apple.webkit.webpushd",
          "process": "webpushd",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 113,
      "entitlement": "com.apple.security.cs.allow-jit",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Allows an application signed with macOS Hardened Runtime to create writable and executable memory pages using MAP_JIT for JIT compilation.",
      "webkit_usage_summary": "WebKit applies this entitlement to macOS and macCatalyst WebContent processes and JavaScriptCore standalone tooling via process-entitlements.sh. In ExecutableAllocator.cpp, JavaScriptCore checks for this entitlement at runtime under MAC_JIT_RESTRICTIONS before allocating executable memory, and UIProcess testing SPI inspects it on the WebContent XPC connection to verify JIT security configuration.",
      "browserenginekit_implications": "This entitlement is specific to macOS and macCatalyst and cannot be used on iOS. On iOS, third-party browser engines using BrowserEngineKit must use the dedicated com.apple.developer.cs.allow-jit entitlement to enable JIT compilation. On macOS, this entitlement is generally available to all developers via standard Hardened Runtime code-signing options.",
      "canonical_processes": [
        "WebContent",
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "Test Runner / Harness (Host App)",
        "UIProcess (inspecting WebContent)",
        "WebContent",
        "WebContent / JSC",
        "jsc / JSC Tools",
        "testapi (JSC)"
      ],
      "platforms": [
        "macCatalyst",
        "macOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/JavaScriptCore/jit/ExecutableAllocator.cpp",
          "line": 139,
          "description": "Verifies that the process has com.apple.security.cs.allow-jit under MAC_JIT_RESTRICTIONS before enabling JIT execution"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 16,
          "description": "Adds com.apple.security.cs.allow-jit to the macOS WebContent process entitlement plist"
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebViewTesting.mm",
          "line": 1438,
          "description": "Checks whether the connecting WebContent process possesses JIT entitlements during testing"
        }
      ],
      "key_commits": [
        {
          "hash": "d7ce599636c5ae2b631791ba0422f9672f95d1f4",
          "date": "2023-04-19",
          "subject": "For Apple internal Mac builds, only ask for JIT memory if the appropriate entitlement is available."
        },
        {
          "hash": "ee19c59a58e727d26bc3d36b0d8e63b06a1371a8",
          "date": "2023-06-22",
          "subject": "Re-landing: Skip JIT memory allocation in ExecutableAllocator::disableJIT() when running on an open source XNU."
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/DumpRenderTree/mac/Configurations/DumpRenderTree.entitlements",
          "line": 5,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 16,
          "function": "mac_process_webcontent_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 342,
          "function": "maccatalyst_process_webcontent_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 15,
          "function": "mac_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 56,
          "function": "mac_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 95,
          "function": "maccatalyst_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 125,
          "function": "maccatalyst_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/jit/ExecutableAllocator.cpp",
          "line": 139,
          "process": "WebContent / JSC",
          "platforms": [
            "macOS",
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebViewTesting.mm",
          "line": 1438,
          "process": "UIProcess (inspecting WebContent)",
          "platforms": [
            "macOS",
            "macCatalyst"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 45,
      "related_spis": [
        {
          "name": "OSLaunchdJob",
          "kind": "classes",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "initWithPlist:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "proxyRebuildCache",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setServiceName:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "IOHIDDeviceClose",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceOpen",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceRegisterInputReportCallback",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceScheduleWithRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceSetReport",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceUnscheduleFromRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDEventAppendEvent",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDEventCreateDigitizerEvent",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        }
      ]
    },
    {
      "id": 114,
      "entitlement": "com.apple.security.cs.disable-library-validation",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Allows a macOS application with the Hardened Runtime enabled to load dynamic libraries and frameworks not signed by Apple or the application's Team ID.",
      "webkit_usage_summary": "WebKit adds this entitlement exclusively on macOS to the shared WebContent process when built with the 'Development' XPC service variant (WK_XPC_SERVICE_VARIANT=Development). It permits loading custom, unsigned, or differently signed dynamic libraries during local debugging and development without triggering code-signing integrity violations under the macOS Hardened Runtime. It is omitted from production WebKit builds.",
      "browserenginekit_implications": "This is a macOS-only Hardened Runtime entitlement and is not applicable to iOS or BrowserEngineKit extensions. On iOS, code signature validation for dynamic libraries is strictly enforced by the kernel and cannot be bypassed using this entitlement. On macOS, any third-party browser or app adopting the Hardened Runtime can publicly claim this entitlement without special Apple approval.",
      "canonical_processes": [
        "WebContent"
      ],
      "raw_processes": [
        "WebContent (Shared)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 261,
          "description": "Adds com.apple.security.cs.disable-library-validation to the shared macOS WebContent process entitlements when WK_XPC_SERVICE_VARIANT is Development"
        }
      ],
      "key_commits": [
        {
          "hash": "b38c80e4b75a",
          "date": "2022-03-08",
          "subject": "Remove remnants of WebKit.Plugin.64.xpc service"
        },
        {
          "hash": "f38acd8fe12e",
          "date": "2019-08-02",
          "subject": "macCatalyst build fails the first attempt, requires a second build"
        },
        {
          "hash": "a06b30c383bc",
          "date": "2019-02-07",
          "subject": "Fix XCBuild issue related to codesigning WebContent process"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 261,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 115,
      "entitlement": "com.apple.security.cs.jit-write-allowlist",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Authorizes an application under macOS Hardened Runtime to use callback-based JIT write APIs (such as pthread_jit_write_with_callback_np) to toggle memory permissions and modify JIT pages securely.",
      "webkit_usage_summary": "WebKit provisions this entitlement in process-entitlements.sh for macOS and macCatalyst auxiliary processes (WebContent, GPU, and Network) when WK_USE_RESTRICTED_ENTITLEMENTS is enabled, as well as for standalone JavaScriptCore tools (jsc, testapi). Under Apple's Hardened Runtime, it enforces callback-driven write permissions for JIT compilation while disabling the less restrictive global pthread_jit_write_protect_np toggle.",
      "browserenginekit_implications": "This entitlement is specific to macOS and macCatalyst Hardened Runtime environments and does not apply to iOS. On iOS, third-party browser engines using BrowserEngineKit obtain JIT capabilities for their WebContent extension processes through the dedicated BrowserEngineKit entitlement com.apple.developer.cs.allow-jit rather than macOS code-signing entitlements.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "GPU",
        "Networking",
        "WebContent (Shared)",
        "jsc / JSC Tools",
        "testapi (JSC)"
      ],
      "platforms": [
        "macCatalyst",
        "macOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 222,
          "description": "Adds com.apple.security.cs.jit-write-allowlist to macOS WebContent processes when WK_USE_RESTRICTED_ENTITLEMENTS is YES"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 65,
          "description": "Adds com.apple.security.cs.jit-write-allowlist to macOS GPU process"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 114,
          "description": "Adds com.apple.security.cs.jit-write-allowlist to macOS Network process"
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 29,
          "description": "Adds com.apple.security.cs.jit-write-allowlist to macOS jsc tool binary"
        }
      ],
      "key_commits": [
        {
          "hash": "3a899215c988",
          "date": "2026-04-07",
          "subject": "Remove JIT related entitlements from Captive Portal variant of the macCatalyst WebContent binary"
        },
        {
          "hash": "bb4d3ee9eae2",
          "date": "2025-10-02",
          "subject": "New WebContent process variant for Enhanced Security"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 65,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 114,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 222,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 327,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 386,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 415,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 29,
          "function": "mac_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 59,
          "function": "mac_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 109,
          "function": "maccatalyst_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 143,
          "function": "maccatalyst_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 116,
      "entitlement": "com.apple.security.cs.single-jit",
      "category": "generally-available",
      "ios_parity_status": "ios-public-parity",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Instructs the macOS kernel to restrict the process's virtual memory map to at most one JIT executable memory mapping.",
      "webkit_usage_summary": "Applied to macOS and macCatalyst WebContent processes and JavaScriptCore tools via `process-entitlements.sh` and `entitlements.plist`. In `Source/JavaScriptCore/jit/ExecutableAllocator.cpp`, WebKit asserts its presence when disabling JIT (such as in Lockdown Mode / Enhanced Security) so that a dummy allocation permanently exhausts and disables any future JIT memory mappings.",
      "browserenginekit_implications": "This entitlement is macOS and macCatalyst-specific and is evaluated only within the macOS build of the XNU kernel (`#if XNU_TARGET_OS_OSX`), so it is not applicable to iOS or BrowserEngineKit. Third-party iOS browser engines use the BrowserEngineKit entitlement `com.apple.developer.cs.allow-jit` on their WebContent extensions instead.",
      "canonical_processes": [
        "WebContent",
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "UIProcess (inspecting WebContent)",
        "WebContent",
        "WebContent / JSC",
        "jsc / JSC Tools",
        "testapi (JSC)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 21,
          "description": "Applies com.apple.security.cs.single-jit to macOS WebContent processes"
        },
        {
          "file": "Source/JavaScriptCore/jit/ExecutableAllocator.cpp",
          "line": 164,
          "description": "Asserts processHasEntitlement(\"com.apple.security.cs.single-jit\") before exhausting JIT memory allocations during disableJIT()"
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebViewTesting.mm",
          "line": 1440,
          "description": "Checks the WebContent connection's single-jit entitlement in SPI testing helpers for Enhanced Security"
        }
      ],
      "key_commits": [
        {
          "hash": "9cc524ed511e",
          "date": "2025-10-09",
          "subject": "Add entitlement assertions for JIT disabling on macOS"
        },
        {
          "hash": "eb466700acaf",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function"
        },
        {
          "hash": "3fd7f86c3308",
          "date": "2025-11-05",
          "subject": "Add additional API tests for EnhancedSecurity"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/JavaScriptCore/entitlements.plist",
          "line": 7,
          "value": true,
          "process": "jsc / JSC Tools"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 21,
          "function": "mac_process_webcontent_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 345,
          "function": "maccatalyst_process_webcontent_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 35,
          "function": "mac_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 65,
          "function": "mac_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 118,
          "function": "maccatalyst_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 149,
          "function": "maccatalyst_process_testapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "testapi (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/jit/ExecutableAllocator.cpp",
          "line": 164,
          "process": "WebContent / JSC",
          "platforms": [
            "macOS",
            "macCatalyst",
            "iOS"
          ]
        },
        {
          "file": "Source/WebKit/UIProcess/API/Cocoa/WKWebViewTesting.mm",
          "line": 1440,
          "process": "UIProcess (inspecting WebContent)",
          "platforms": [
            "macOS",
            "macCatalyst"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 45,
      "related_spis": [
        {
          "name": "OSLaunchdJob",
          "kind": "classes",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "initWithPlist:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        },
        {
          "name": "proxyRebuildCache",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setServiceName:",
          "kind": "selectors",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "IOHIDDeviceClose",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceOpen",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceRegisterInputReportCallback",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceScheduleWithRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceSetReport",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDDeviceUnscheduleFromRunLoop",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDEventAppendEvent",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "IOHIDEventCreateDigitizerEvent",
          "kind": "symbols",
          "framework": "libSystem / dyld / xpc",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        }
      ]
    },
    {
      "id": 117,
      "entitlement": "com.apple.security.device.camera",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Enables a sandboxed macOS application to capture video and still images using built-in or external camera devices.",
      "webkit_usage_summary": "In WebKit, this standard macOS App Sandbox entitlement is declared in the entitlements files of macOS browser harness applications, specifically MiniBrowser and SwiftBrowser. It grants the host process permission to access camera hardware when WebRTC or getUserMedia camera capture is requested, working in conjunction with system TCC camera prompts. It is not declared in WebKit's XPC helper services via process-entitlements.sh, as camera capture is delegated and sandboxed through the host application context.",
      "browserenginekit_implications": "This entitlement is specific to the macOS App Sandbox and has no relevance to iOS or BrowserEngineKit. On iOS, third-party browsers using BrowserEngineKit access camera hardware through standard iOS privacy mechanisms (NSCameraUsageDescription in the host app's Info.plist and user-granted TCC authorization) rather than App Sandbox device entitlements.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 7,
          "description": "Declares com.apple.security.device.camera to grant MiniBrowser camera hardware access in macOS App Sandbox"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 7,
          "description": "Declares com.apple.security.device.camera to grant SwiftBrowser camera hardware access in macOS App Sandbox"
        }
      ],
      "key_commits": [
        {
          "hash": "59c414c14bab",
          "date": "2020-09-22",
          "subject": "Implement a default prompt for getUserMedia"
        },
        {
          "hash": "4f8ffdf62150",
          "date": "2024-12-09",
          "subject": "[SwiftUI] Introduce SwiftBrowser"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 7,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 7,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 118,
      "entitlement": "com.apple.security.device.microphone",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Media, Audio & AirPlay",
      "short_purpose": "Grants a sandboxed macOS application access to record audio from connected and built-in microphone devices.",
      "webkit_usage_summary": "WebKit includes this entitlement in the entitlements files for macOS test host applications (MiniBrowser and SwiftBrowser) to enable WebRTC and navigator.mediaDevices.getUserMedia() audio capture. It is not assigned to WebKit's internal XPC service processes (WebContent, NetworkProcess, GPUProcess) in process-entitlements.sh, as sandboxed child helper processes capture media via host process delegation or dedicated OS audio daemons.",
      "browserenginekit_implications": "This entitlement is specific to the macOS App Sandbox and is not applicable to iOS or BrowserEngineKit extensions. On iOS, third-party browsers using BrowserEngineKit handle microphone access through standard iOS TCC permissions, NSMicrophoneUsageDescription declarations in the main host app bundle, and BrowserEngineKit host app media capture pipelines without needing this macOS App Sandbox entitlement.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 9,
          "description": "Enables microphone hardware access for the sandboxed macOS MiniBrowser test application."
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 9,
          "description": "Enables microphone hardware access for the sandboxed macOS SwiftBrowser test application."
        }
      ],
      "key_commits": [
        {
          "hash": "59c414c14bab",
          "date": "2020-09-22",
          "subject": "Implement a default prompt for getUserMedia"
        },
        {
          "hash": "4f8ffdf62150",
          "date": "2024-12-09",
          "subject": "[SwiftUI] Introduce SwiftBrowser"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 9,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 9,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 119,
      "entitlement": "com.apple.security.device.usb",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants a sandboxed macOS application permission to interact directly with connected USB devices.",
      "webkit_usage_summary": "WebKit declares this entitlement in the macOS test browser applications MiniBrowser and SwiftBrowser so that they can communicate with USB hardware under the macOS App Sandbox. This allows testing of USB-connected hardware peripherals, particularly FIDO2/CTAP HID authenticators for WebAuthn. It is not granted to production WebKit auxiliary processes (WebContent, Networking, or GPU processes).",
      "browserenginekit_implications": "This is a standard macOS App Sandbox entitlement that is inapplicable to iOS and BrowserEngineKit. Third-party browser engines on iOS cannot obtain direct USB device access, relying instead on system-level frameworks such as AuthenticationServices and CoreBluetooth for security key operations.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 11,
          "description": "Enables USB hardware access in the sandboxed MiniBrowser macOS test host application"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 11,
          "description": "Enables USB hardware access in the sandboxed SwiftBrowser macOS test host application"
        }
      ],
      "key_commits": [
        {
          "hash": "b84fc28b1d05",
          "date": "2018-11-14",
          "subject": "[WebAuthN] Support CTAP HID authenticators on macOS"
        },
        {
          "hash": "4f8ffdf62150",
          "date": "2024-12-09",
          "subject": "[SwiftUI] Introduce SwiftBrowser"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 11,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 11,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 120,
      "entitlement": "com.apple.security.exception.files.absolute-path.read-only",
      "category": "restricted-other",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants sandboxed processes read-only filesystem access to specified absolute file paths outside the standard sandbox container.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the webpushd daemon on iOS and visionOS to permit read-only access to '/private/var/db/os_eligibility/eligibility.plist'. This allows webpushd to inspect OS eligibility framework state (such as regional feature availability) without sandbox violations. Previously, legacy file exception rules were removed from older WebKit sandbox profiles.",
      "browserenginekit_implications": "Third-party iOS browsers and BrowserEngineKit extensions cannot obtain App Sandbox file exception entitlements, as Apple strictly prohibits custom sandbox exceptions for App Store apps. Furthermore, webpushd is an Apple-managed system push daemon rather than a BrowserEngineKit process, meaning 3P browser engines cannot use this exception to access system databases directly.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "/private/var/db/os_eligibility/eligibility.plist"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 620,
          "description": "Appends com.apple.security.exception.files.absolute-path.read-only containing '/private/var/db/os_eligibility/eligibility.plist' for webpushd on iOS family platforms"
        }
      ],
      "key_commits": [
        {
          "hash": "60973b36d99f",
          "date": "2024-09-11",
          "subject": "Allow webpushd to read eligbility state"
        },
        {
          "hash": "03438bff22ab",
          "date": "2021-09-29",
          "subject": "Remove unused \"com.apple.security.exception.file*\" rules from WebKit sandboxes"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 620,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 621,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "/private/var/db/os_eligibility/eligibility.plist",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 121,
      "entitlement": "com.apple.security.exception.files.home-relative-path.read-write",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants an App Sandbox exception allowing read-write filesystem access to specified paths relative to the user's home directory outside the container.",
      "webkit_usage_summary": "WebKit does not sign its processes with this entitlement directly. Instead, WebKit's iOS Seatbelt sandbox definitions for the Network and GPU processes consume it as a sandbox extension in file-issue-extension rules, permitting the process to issue 'com.apple.nsurlstorage.extension-cache' extensions for cache directories under Library/Caches when granted an extension for a home-relative read-write path.",
      "browserenginekit_implications": "This is a restricted App Sandbox exception entitlement that requires explicit Apple App Review approval and is not granted to third-party browsers or BrowserEngineKit extensions on iOS. Third-party browser engines on iOS operate within standard app sandbox containers and BrowserEngineKit extension boundaries without the ability to use home-relative exception entitlements to bypass filesystem isolation.",
      "canonical_processes": [
        "GPU",
        "Networking"
      ],
      "raw_processes": [
        "GPU",
        "Networking"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 565,
          "description": "Permits file-issue-extension for com.apple.nsurlstorage.extension-cache when holding a com.apple.security.exception.files.home-relative-path.read-write sandbox extension"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/gpu-defines.sb",
          "line": 658,
          "description": "Permits file-issue-extension for com.apple.nsurlstorage.extension-cache when holding a com.apple.security.exception.files.home-relative-path.read-write sandbox extension"
        }
      ],
      "key_commits": [
        {
          "hash": "03438bff22ab43d92292ead00d9595b61d11912b",
          "date": "2021-09-29",
          "subject": "Remove unused \"com.apple.security.exception.file*\" rules from WebKit sandboxes"
        },
        {
          "hash": "e0c788b57e1db6001fe923da9370d0c4d2095e02",
          "date": "2025-09-08",
          "subject": "Reduce size of Development sandboxes"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/gpu-defines.sb",
          "line": 658,
          "process": "GPU",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.files.home-relative-path.read-write\")"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 565,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.files.home-relative-path.read-write\")"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 122,
      "entitlement": "com.apple.security.exception.mach-lookup.global-name",
      "category": "restricted-other",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants a sandboxed process an explicit sandbox exception to look up specific Mach service global names registered with launchd.",
      "webkit_usage_summary": "In WebKit for iOS and visionOS, process-entitlements.sh grants this entitlement to the GPU process to access com.apple.systemstatus.activityattribution (for camera and microphone indicator attribution) and to adattributiond to connect to com.apple.networkserviceproxy (for Private Click Measurement proxying). In the iOS Networking process Seatbelt sandbox profile, mach-lookup extension tokens for this entitlement are explicitly denied under elevated precedence.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS do not have access to arbitrary sandbox exception entitlements, as Apple restricts mach-lookup exceptions through managed provisioning profiles. 3P browser engine processes cannot use this entitlement to connect to private system services like com.apple.systemstatus.activityattribution or com.apple.networkserviceproxy, relying instead on standard BrowserEngineKit APIs and host-mediated workflows.",
      "canonical_processes": [
        "GPU",
        "Networking",
        "adattributiond"
      ],
      "raw_processes": [
        "GPU",
        "Networking",
        "adattributiond"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "com.apple.networkserviceproxy",
        "com.apple.systemstatus.activityattribution"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 562,
          "description": "Adds mach-lookup global-name exception array containing com.apple.systemstatus.activityattribution for the GPU process on iOS and visionOS."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 605,
          "description": "Adds mach-lookup global-name exception for com.apple.networkserviceproxy in the adattributiond daemon on iOS and visionOS."
        },
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.Networking.sb.in",
          "line": 136,
          "description": "Denies mach-lookup extensions matching com.apple.security.exception.mach-lookup.global-name with elevated precedence."
        }
      ],
      "key_commits": [
        {
          "hash": "f8277ab0a96d",
          "date": "2026-06-05",
          "subject": "[PCM] Support proxying PCM requests on iOS"
        },
        {
          "hash": "cb18053524fe",
          "date": "2021-07-14",
          "subject": "[iOS] Dynamically set capture attribution"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 562,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 563,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "com.apple.systemstatus.activityattribution",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 605,
          "function": "ios_family_process_adattributiond_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "com.apple.networkserviceproxy",
          "process": "adattributiond",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.Networking.sb.in",
          "line": 136,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.mach-lookup.global-name\")))"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 123,
      "entitlement": "com.apple.security.exception.mach-lookup.local-name",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "App Sandbox exception entitlement and sandbox extension class allowing lookup of specific local-name Mach bootstrap services.",
      "webkit_usage_summary": "WebKit's iOS Networking process Seatbelt sandbox profile (com.apple.WebKit.Networking.sb.in) explicitly denies mach-lookup via extension class 'com.apple.security.exception.mach-lookup.local-name' with elevated precedence. This rule ensures that dynamic sandbox extensions cannot be used to grant the sandboxed network process access to local Mach services.",
      "browserenginekit_implications": "Third-party browsers using BrowserEngineKit on iOS cannot use App Sandbox exception entitlements, which are restricted and subject to App Store review rejection. Third-party networking and web content extension processes operate under fixed system sandboxes and cannot use mach-lookup exception entitlements to reach arbitrary host or system Mach services.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.Networking.sb.in",
          "line": 139,
          "description": "Elevated-precedence deny rule blocking mach-lookup for sandbox extensions of class 'com.apple.security.exception.mach-lookup.local-name'"
        }
      ],
      "key_commits": [
        {
          "hash": "d4fb8ae7288211c8a887ae8785f54511fb1a7ec9",
          "date": "2020-01-08",
          "subject": "Network process sandboxes should not include 'common.sb' or 'system.sb'"
        },
        {
          "hash": "fc55b4b5008ca22247637021794fbe055313e85d",
          "date": "2025-09-04",
          "subject": "Remove redundant sandbox rules in the Networking process on iOS"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Resources/SandboxProfiles/ios/com.apple.WebKit.Networking.sb.in",
          "line": 139,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.mach-lookup.local-name\"))))"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 124,
      "entitlement": "com.apple.security.exception.managed-preference.read-only",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants a sandboxed process read-only access to system managed preferences (such as those pushed via Mobile Device Management / MDM profiles) via sandbox extension.",
      "webkit_usage_summary": "WebKit uses this entitlement/extension class across its iOS Seatbelt sandbox profiles for WebContent, Networking, and GPU processes (`webcontent-defines.sb`, `networking-defines.sb`, and `gpu-defines.sb`). Under `allow managed-preference-read`, WebKit authorizes consuming sandbox extensions of this class to read managed preferences administered by system profiles or MDM.",
      "browserenginekit_implications": "Third-party iOS browsers using BrowserEngineKit do not have access to this entitlement, as `com.apple.security.exception.*` entitlements are restricted sandbox exceptions not granted to third-party iOS apps or BEK extensions. Any enterprise MDM or managed configuration settings intended for 3P browser helper processes must be read by the main host app and explicitly relayed across IPC rather than read directly by child processes via sandbox extensions.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking"
      ],
      "raw_processes": [
        "GPU",
        "Networking",
        "WebContent"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/webcontent-defines.sb",
          "line": 769,
          "description": "Permits managed-preference-read via com.apple.security.exception.managed-preference.read-only extension in WebContent process"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 554,
          "description": "Permits managed-preference-read via com.apple.security.exception.managed-preference.read-only extension in Networking process"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/gpu-defines.sb",
          "line": 651,
          "description": "Permits managed-preference-read via com.apple.security.exception.managed-preference.read-only extension in GPU process"
        }
      ],
      "key_commits": [
        {
          "hash": "007213f8be5abb366cd4b94b753b4787f74bfb4d",
          "date": "2019-10-24",
          "subject": "[iOS] Stop including 'common.sb' https://bugs.webkit.org/show_bug.cgi?id=203318"
        },
        {
          "hash": "d4fb8ae7288211c8a887ae8785f54511fb1a7ec9",
          "date": "2020-01-08",
          "subject": "Network process sandboxes should not include 'common.sb' or 'system.sb' https://bugs.webkit.org/show_bug.cgi?id=205521"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/gpu-defines.sb",
          "line": 651,
          "process": "GPU",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.managed-preference.read-only\"))"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 554,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.managed-preference.read-only\"))"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/webcontent-defines.sb",
          "line": 769,
          "process": "WebContent",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.managed-preference.read-only\"))"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 125,
      "entitlement": "com.apple.security.exception.process-info",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Acts as a sandbox exception entitlement permitting a sandboxed process to inspect process-level information (such as PID info, file descriptors, resource usage, and code signatures) and read process-related sysctl variables.",
      "webkit_usage_summary": "WebKit includes this entitlement check in its iOS Seatbelt sandbox definitions (networking-defines.sb) under rules-with-elevated-precedence, conditionally allowing process-info queries and kern.proc.* sysctl reads if the process holds the entitlement. WebKit does not grant this entitlement to its own network process in process-entitlements.sh; the rule exists as part of upstream system sandbox profile imports. Neither WebKit's production networking nor WebContent processes rely on having this entitlement granted.",
      "browserenginekit_implications": "Third-party browser engines using BrowserEngineKit on iOS cannot obtain this entitlement, as Apple restricts com.apple.security.exception.* sandbox exceptions and does not make them available to BrowserEngineKit extensions. However, because WebKit's own production processes do not claim this entitlement, 3P browsers and their networking extensions operate on an equal footing without any process inspection disparity.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 570,
          "description": "Seatbelt filter requiring com.apple.security.exception.process-info to allow process-info inspection primitives and kern.proc sysctl reads"
        }
      ],
      "key_commits": [
        {
          "hash": "d4fb8ae72882",
          "date": "2020-01-08",
          "subject": "Network process sandboxes should not include 'common.sb' or 'system.sb'"
        },
        {
          "hash": "e0c788b57e1d",
          "date": "2025-09-08",
          "subject": "Reduce size of Development sandboxes"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 570,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(with-filter (require-entitlement \"com.apple.security.exception.process-info\")"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 126,
      "entitlement": "com.apple.security.exception.shared-preference.read-only",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants read-only access to specified shared CFPreferences domains that would otherwise be blocked by sandbox restrictions.",
      "webkit_usage_summary": "WebKit's iOS Seatbelt sandbox definitions (WebContent, Networking, and GPU) define rules permitting 'user-preference-read' when authorized by a 'com.apple.security.exception.shared-preference.read-only' extension. In addition, WebKit's iOS test host app MobileMiniBrowser explicitly claims this entitlement to read the 'com.apple.messages.EnhancedLinkSecurity' preference domain.",
      "browserenginekit_implications": "Third-party iOS browsers utilizing BrowserEngineKit cannot obtain this sandbox exception entitlement, as App Sandbox exception entitlements require special Apple managed approvals and are not included in the BrowserEngineKit entitlement suite. Consequently, third-party browser engines cannot read private system preference domains such as Messages enhanced link security.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "GPU",
        "MobileMiniBrowser (Host App)",
        "Networking",
        "WebContent"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "[\"com.apple.messages.EnhancedLinkSecurity\"]"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/webcontent-defines.sb",
          "line": 771,
          "description": "Permits user-preference-read in WebContent processes via the shared-preference.read-only extension class"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 556,
          "description": "Permits user-preference-read in Networking processes via the shared-preference.read-only extension class"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/gpu-defines.sb",
          "line": 653,
          "description": "Permits user-preference-read in GPU processes via the shared-preference.read-only extension class"
        },
        {
          "file": "Tools/MobileMiniBrowser/MobileMiniBrowser/MobileMiniBrowser.entitlements",
          "line": 19,
          "description": "Entitles MobileMiniBrowser to read the com.apple.messages.EnhancedLinkSecurity shared preference domain"
        }
      ],
      "key_commits": [
        {
          "hash": "3873896ae741",
          "date": "2026-04-30",
          "subject": "Move hasURLsRequiringEnhancedSecurityCheck to the UI process"
        },
        {
          "hash": "9217c5816986",
          "date": "2020-01-08",
          "subject": "Network process sandboxes should not include 'common.sb' or 'system.sb'"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MobileMiniBrowser/MobileMiniBrowser/MobileMiniBrowser.entitlements",
          "line": 19,
          "value": [
            "com.apple.messages.EnhancedLinkSecurity"
          ],
          "process": "MobileMiniBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/gpu-defines.sb",
          "line": 653,
          "process": "GPU",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.shared-preference.read-only\"))"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 556,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.shared-preference.read-only\"))"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/webcontent-defines.sb",
          "line": 771,
          "process": "WebContent",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.shared-preference.read-only\"))))"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 127,
      "entitlement": "com.apple.security.exception.sysctl.read-only",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants a sandboxed process read-only access to specific sysctl kernel variables via sandbox exception extensions.",
      "webkit_usage_summary": "In WebKit, this entitlement and extension identifier is referenced in the iOS Seatbelt sandbox definitions (Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb) within rules-with-elevated-precedence. It allows the networking process to execute sysctl-read operations when presented with an active sandbox extension matching this exception class.",
      "browserenginekit_implications": "Third-party iOS browsers and BrowserEngineKit processes cannot obtain arbitrary sandbox exception entitlements (com.apple.security.exception.*), which are restricted App Sandbox exceptions disallowed by standard App Store provisioning. Third-party networking extensions (com.apple.developer.web-browser-engine.networking) are confined to Apple's standardized BEK sandbox profile and cannot issue or consume custom sysctl exception extensions.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 558,
          "description": "Allows sysctl-read when presented with a com.apple.security.exception.sysctl.read-only sandbox extension in rules-with-elevated-precedence"
        }
      ],
      "key_commits": [
        {
          "hash": "d4fb8ae72882",
          "date": "2020-01-08",
          "subject": "Network process sandboxes should not include 'common.sb' or 'system.sb'"
        },
        {
          "hash": "e0c788b57e1d",
          "date": "2025-09-08",
          "subject": "Reduce size of Development sandboxes"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 558,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.sysctl.read-only\"))"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 128,
      "entitlement": "com.apple.security.exception.sysctl.read-write",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants an App Sandbox exception allowing read and write access to kernel sysctl variables covered by a sandbox extension.",
      "webkit_usage_summary": "In WebKit, this is referenced in the iOS Network Process Seatbelt definitions (networking-defines.sb) under elevated precedence rules, allowing sysctl-read and sysctl-write when accompanied by a matching extension. WebKit does not statically sign its production iOS Network Process with this entitlement, but retains the sandbox rule to consume dynamic sandbox extensions during development or specialized configurations.",
      "browserenginekit_implications": "Third-party browsers and BrowserEngineKit network extensions cannot use App Sandbox exception entitlements on iOS, as Apple strictly restricts exception entitlements and rejects them in App Store validation. However, third-party browser engines rely on standard user-space networking frameworks and sockets rather than raw sysctl writes, so the absence of this exception does not hinder BrowserEngineKit networking functionality.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 560,
          "description": "Allows sysctl-read and sysctl-write operations for processes holding a com.apple.security.exception.sysctl.read-write sandbox extension"
        }
      ],
      "key_commits": [
        {
          "hash": "d4fb8ae7288211c8a887ae8785f54511fb1a7ec9",
          "date": "2020-01-08",
          "subject": "Network process sandboxes should not include 'common.sb' or 'system.sb' https://bugs.webkit.org/show_bug.cgi?id=205521 <rdar://problem/58095870>"
        },
        {
          "hash": "e0c788b57e1db6001fe923da9370d0c4d2095e02",
          "date": "2025-09-08",
          "subject": "Reduce size of Development sandboxes https://bugs.webkit.org/show_bug.cgi?id=298469 rdar://158907488"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 560,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(extension \"com.apple.security.exception.sysctl.read-write\"))"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 129,
      "entitlement": "com.apple.security.fatal-exceptions",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Configures the Darwin kernel and OS runtime hardening to treat specified exceptions (such as JIT faults) as non-recoverable and immediately terminate the process.",
      "webkit_usage_summary": "WebKit signs this entitlement with array value [\"jit\"] into WebContent, GPU, Network, and JavaScriptCore command-line/test binaries (jsc, testapi) across iOS, macOS, macCatalyst, and visionOS when WK_USE_FATAL_EXCEPTIONS is enabled. It ensures that any Mach exceptions or hardware faults occurring in JIT memory regions immediately abort the process, mitigating exploit chains that catch or recover from memory corruption. WebKit's build system provides OVERRIDE_WK_USE_FATAL_EXCEPTIONS so developers can locally disable this behavior during debugging.",
      "browserenginekit_implications": "This is an Apple-private security hardening entitlement that is not granted to third-party developers or BrowserEngineKit extensions. While third-party browser engines receive JIT execution capabilities via com.apple.developer.cs.allow-jit on iOS, they cannot declare com.apple.security.fatal-exceptions to enforce kernel-level fatal termination for JIT exceptions, relying instead on standard userspace crash handling.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "GPU",
        "Networking",
        "WebContent (Shared)",
        "jsc / JSC Tools",
        "testapi (JSC)"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "jit"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 448,
          "description": "Appends com.apple.security.fatal-exceptions array with 'jit' to iOS/visionOS WebContent processes when WK_USE_FATAL_EXCEPTIONS is YES"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 50,
          "description": "Appends com.apple.security.fatal-exceptions array with 'jit' to macOS GPU process"
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 18,
          "description": "Appends com.apple.security.fatal-exceptions array with 'jit' to jsc command-line tool"
        },
        {
          "file": "Source/WebKit/Configurations/Base.xcconfig",
          "line": 149,
          "description": "Defines WK_USE_FATAL_EXCEPTIONS defaulting to YES with OVERRIDE_WK_USE_FATAL_EXCEPTIONS override switch"
        }
      ],
      "key_commits": [
        {
          "hash": "569a5bc33cff",
          "date": "2024-03-26",
          "subject": "Adopt Fatal Exceptions Entitlement (2)"
        },
        {
          "hash": "50141c659194",
          "date": "2026-03-10",
          "subject": "[JSC] Add OVERRIDE_WK_USE_FATAL_EXCEPTIONS"
        },
        {
          "hash": "eb466700acaf",
          "date": "2026-04-07",
          "subject": "Move common WebContent entitlements to shared function"
        },
        {
          "hash": "28e1e825b7af",
          "date": "2024-03-23",
          "subject": "Adopt Fatal Exceptions Entitlement"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 50,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 51,
          "function": "mac_process_gpu_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 101,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 102,
          "function": "mac_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 268,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 269,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 310,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 311,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 379,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 380,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 408,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 409,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 448,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 449,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 546,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 547,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 653,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 654,
          "function": "ios_family_process_network_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 18,
          "function": "mac_process_jsc_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 19,
          "function": "mac_process_jsc_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 46,
          "function": "mac_process_testapi_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "testapi (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 47,
          "function": "mac_process_testapi_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "testapi (JSC)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 98,
          "function": "maccatalyst_process_jsc_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 99,
          "function": "maccatalyst_process_jsc_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "jsc / JSC Tools",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 129,
          "function": "maccatalyst_process_testapi_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "testapi (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 130,
          "function": "maccatalyst_process_testapi_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "testapi (JSC)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 178,
          "function": "ios_family_process_jsc_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "jsc / JSC Tools",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 179,
          "function": "ios_family_process_jsc_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "jit",
          "process": "jsc / JSC Tools",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 130,
      "entitlement": "com.apple.security.files.downloads.read-write",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants a sandboxed macOS application read-write access to the user's ~/Downloads directory without requiring user interaction via an Open/Save panel.",
      "webkit_usage_summary": "Declared in the macOS App Sandbox entitlements for WebKit's developer host applications MiniBrowser and SwiftBrowser. It allows these test harness browser apps to save downloaded web files directly to the Downloads directory during download testing. It is not used or checked by production WebKit engine daemons or helper services.",
      "browserenginekit_implications": "This is a standard macOS App Sandbox entitlement and is not applicable to iOS or BrowserEngineKit. On iOS, 3P browser apps and BrowserEngineKit helper processes operate within iOS sandbox containers and rely on standard iOS document pickers or share sheets rather than macOS sandbox file entitlements.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 13,
          "description": "Enables Downloads directory read-write access for the macOS MiniBrowser test application"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 13,
          "description": "Enables Downloads directory read-write access for the macOS SwiftBrowser SwiftUI test application"
        }
      ],
      "key_commits": [
        {
          "hash": "619a552127eb",
          "date": "2026-08-16",
          "subject": "MiniBrowser should support downloads for testing purposes https://bugs.webkit.org/show_bug.cgi?id=138673 rdar://185001852"
        },
        {
          "hash": "b577152034d7",
          "date": "2025-01-02",
          "subject": "[SwiftUI] Support download functionality https://bugs.webkit.org/show_bug.cgi?id=285225 rdar://141109043"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 13,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 13,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 131,
      "entitlement": "com.apple.security.files.user-selected.read-write",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants an App Sandboxed macOS application read and write access to files and directories explicitly selected by the user via system open and save dialogs or drag-and-drop.",
      "webkit_usage_summary": "In WebKit, this entitlement is declared only for macOS browser host test harnesses (MiniBrowser and SwiftBrowser) to allow opening local HTML documents, saving downloaded files, and exporting PDFs chosen by the user. It is not granted to WebKit's helper XPC services (WebContent, Networking, GPU) or iOS binaries, as file access in auxiliary processes is brokered via sandbox extensions.",
      "browserenginekit_implications": "This entitlement is macOS-specific and irrelevant to BrowserEngineKit on iOS. On iOS, third-party browsers use standard iOS document picker APIs (UIDocumentPickerViewController) and security-scoped resource URLs or BrowserEngineKit sandbox extensions rather than App Sandbox file-access entitlements.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 15,
          "description": "Declares user-selected file read-write entitlement for macOS MiniBrowser host application."
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 15,
          "description": "Declares user-selected file read-write entitlement for macOS SwiftBrowser host application to support downloads and opening local files."
        }
      ],
      "key_commits": [
        {
          "hash": "b577152034d7",
          "date": "2025-01-02",
          "subject": "[SwiftUI] Support download functionality"
        },
        {
          "hash": "4f8ffdf62150",
          "date": "2024-12-09",
          "subject": "[SwiftUI] Introduce SwiftBrowser"
        },
        {
          "hash": "2b99db70b33d",
          "date": "2019-09-10",
          "subject": "Add SPI to save a PDF from the contents of a WKWebView."
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 15,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 15,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 132,
      "entitlement": "com.apple.security.get-task-allow",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Allows debuggers and developer tools (like Xcode and LLDB) to attach to a process and obtain its Mach task port during development.",
      "webkit_usage_summary": "WebKit conditionally injects this entitlement into non-production builds (when RC_XBS != YES) for developer binaries, test harnesses (TestWebKitAPI, ANGLE tests), the jsc CLI, and com.apple.WebKit.WebContent.Development to enable Xcode and LLDB attachment. Additionally, JavaScriptCore's JSRemoteInspector runtime check queries this entitlement on macOS to enable remote web inspection by default for applications linked against legacy SDKs.",
      "browserenginekit_implications": "This is a standard, generally-available Apple developer entitlement automatically provisioned by Xcode during development builds for all third-party apps and BrowserEngineKit extensions on iOS. It is excluded from production App Store submissions for both Apple and 3P applications, meaning BrowserEngineKit developers have full debugging parity with WebKit during development.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "Test Runner / Harness (Host App)",
        "TestWebKitAPI",
        "Top-Level / Conditional",
        "UIProcess / JSC Host"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 706,
          "description": "Injects get-task-allow into com.apple.WebKit.WebContent.Development during non-XBS builds to allow Xcode debugging"
        },
        {
          "file": "Source/JavaScriptCore/API/JSRemoteInspector.cpp",
          "line": 94,
          "description": "Checks com.apple.security.get-task-allow on macOS to determine whether remote inspection should default to enabled on legacy SDKs"
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 28,
          "description": "Adds get-task-allow to the base entitlements for TestWebKitAPI test binaries across iOS, macOS, macCatalyst, and visionOS"
        }
      ],
      "key_commits": [
        {
          "hash": "c663098fb4c1",
          "date": "2024-05-28",
          "subject": "Xcode is not able to attach to WebContent Development variant"
        },
        {
          "hash": "3d99c5a13754",
          "date": "2022-10-14",
          "subject": "Remote Web Inspector: [Cocoa] `inspectable` API"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/ThirdParty/ANGLE/Configurations/ANGLEEnd2EndTestsApp-iOS-simulator.entitlements",
          "line": 5,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        },
        {
          "file": "Source/ThirdParty/ANGLE/Configurations/ANGLEEnd2EndTestsApp-iOS.entitlements",
          "line": 5,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 693,
          "function": "top-level",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Top-Level / Conditional",
          "platforms": [
            "macOS",
            "iOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 706,
          "function": "top-level",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Top-Level / Conditional",
          "platforms": [
            "macOS",
            "iOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 223,
          "function": "top-level",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Top-Level / Conditional",
          "platforms": [
            "macOS",
            "iOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 226,
          "function": "top-level",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Top-Level / Conditional",
          "platforms": [
            "macOS",
            "iOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 245,
          "function": "top-level",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Top-Level / Conditional",
          "platforms": [
            "macOS",
            "iOS"
          ]
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 28,
          "function": "process_base_testwebkitapi_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/API/JSRemoteInspector.cpp",
          "line": 1048,
          "process": "UIProcess / JSC Host",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 133,
      "entitlement": "com.apple.security.hardened-process.checked-allocations.no-tagged-receive",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Disables receiving tagged memory allocations across Mach IPC boundaries under OS checked allocations and hardware Memory Tagging Extension (MTE) hardening.",
      "webkit_usage_summary": "WebKit assigns this entitlement via `process-entitlements.sh` across all major auxiliary processes\u2014including WebContent (shared and enhanced security variants), GPU, Networking, Model, and webpushd\u2014on iOS, visionOS, macOS, and macCatalyst. It operates alongside `com.apple.developer.hardened-process` to configure kernel and memory allocator behaviors when running with checked allocations or MTE soft mode.",
      "browserenginekit_implications": "This is an Apple-private security hardening entitlement unavailable to third-party developers or BrowserEngineKit extensions on iOS. While Apple's first-party WebKit auxiliary processes leverage this low-level allocator configuration to adopt MTE/checked allocations without breaking Mach IPC tagged memory reception, third-party browser processes cannot claim it.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "webpushd",
        "Model"
      ],
      "raw_processes": [
        "GPU",
        "Model",
        "Networking",
        "WebContent (Shared)",
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 459,
          "description": "Adds the checked-allocations.no-tagged-receive entitlement to iOS and visionOS WebContent processes alongside com.apple.developer.hardened-process"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 92,
          "description": "Applies the entitlement to macOS GPU processes"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 141,
          "description": "Applies the entitlement to macOS Network processes"
        }
      ],
      "key_commits": [
        {
          "hash": "57709f26206d",
          "date": "2026-09-09",
          "subject": "Enable MTE in soft mode for WebPushd"
        },
        {
          "hash": "ed598b08761c",
          "date": "2026-03-28",
          "subject": "[iOS] Add entitlement related to checked allocations"
        },
        {
          "hash": "1b4dd17f517a",
          "date": "2026-02-04",
          "subject": "Adopt the soft-mode/no-tagged-receive entitlements for the EnhancedSecurity WebContent variant"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 92,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 141,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 237,
          "function": "mac_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 291,
          "function": "mac_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 331,
          "function": "maccatalyst_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 389,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 418,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 459,
          "function": "ios_family_process_webcontent_shared_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent (Shared)",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 576,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 596,
          "function": "ios_family_process_model_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Model",
          "platforms": [
            "visionOS",
            "iOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 623,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 671,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 134,
      "entitlement": "com.apple.security.hardened-process.checked-allocations.soft-mode",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Configures hardware memory tagging (ARM MTE / checked allocations) in soft mode, causing memory tag violations to be handled non-fatally rather than triggering immediate process termination.",
      "webkit_usage_summary": "WebKit assigns this entitlement via Source/WebKit/Scripts/process-entitlements.sh to the webpushd daemon on macOS (gated on WK_USE_RESTRICTED_ENTITLEMENTS) as well as iOS and visionOS. It enables libpas and the system memory allocator to run hardware-assisted tag checking in soft mode for testing and rollout in WebPushd without crashing on tag mismatches.",
      "browserenginekit_implications": "This is a private Apple entitlement unavailable to third-party browsers and BrowserEngineKit extensions on iOS. Third-party browser engines cannot opt into or configure kernel-level checked allocation soft modes for their helper daemons or processes.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 293,
          "description": "Adds checked-allocations.soft-mode to webpushd on macOS under WK_USE_RESTRICTED_ENTITLEMENTS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 624,
          "description": "Adds checked-allocations.soft-mode to webpushd on iOS and visionOS"
        }
      ],
      "key_commits": [
        {
          "hash": "57709f26206d",
          "date": "2026-09-09",
          "subject": "Enable MTE in soft mode for WebPushd"
        },
        {
          "hash": "8d85f545cea5",
          "date": "2026-06-30",
          "subject": "Re-enable MTE hard-mode"
        },
        {
          "hash": "bdbe48f72fba",
          "date": "2026-03-16",
          "subject": "[libpas] Enable soft-mode and retag-on-scavenge"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 293,
          "function": "mac_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 624,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 135,
      "entitlement": "com.apple.security.network.client",
      "category": "generally-available",
      "ios_parity_status": "ios-public-parity",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Enables sandboxed applications and auxiliary processes to initiate outgoing network connections and resolve domain names.",
      "webkit_usage_summary": "WebKit assigns this entitlement to macCatalyst GPU and Networking processes, the iOS/visionOS adattributiond daemon, and developer/test host apps like MiniBrowser and SwiftBrowser. In XPCServiceEntryPoint.mm, WebKit validates that sandboxed client processes on macOS and macCatalyst hold this entitlement before allowing connection initialization. Additionally, on watchOS, the networking Seatbelt sandbox profile (networking-defines.sb) requires this entitlement (or network.server) to access mDNSResponder and dnssd services.",
      "browserenginekit_implications": "This is a public, generally-available App Sandbox entitlement that third-party developers can freely declare in macOS and macCatalyst applications. On iOS, regular applications possess outbound network access by default, and third-party browser engines use BrowserEngineKit's dedicated 'com.apple.developer.web-browser-engine.networking' entitlement for isolated network extensions rather than macOS App Sandbox entitlements.",
      "canonical_processes": [
        "WebContent",
        "GPU",
        "Networking",
        "UIProcess / Host App",
        "adattributiond",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "GPU",
        "MiniBrowser / SwiftBrowser (Host App)",
        "Networking",
        "Networking / GPU / WebContent",
        "Test Runner / Harness (Host App)",
        "adattributiond"
      ],
      "platforms": [
        "iOS",
        "macCatalyst",
        "macOS",
        "visionOS",
        "watchOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check",
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/EntryPointUtilities/Cocoa/XPCService/XPCServiceEntryPoint.mm",
          "line": 57,
          "description": "Verifies that sandboxed client processes possess the network client entitlement before initializing XPC services on macOS and macCatalyst"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 397,
          "description": "Applies com.apple.security.network.client to the macCatalyst network process (and lines 368/603 for macCatalyst GPU and iOS adattributiond)"
        },
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 68,
          "description": "Requires com.apple.security.network.client on watchOS to permit outbound communication with mDNSResponder and DNS service lookups"
        }
      ],
      "key_commits": [
        {
          "hash": "3c8bea442395",
          "date": "2020-05-06",
          "subject": "[MacCatalyst] Processes should check for network entitlement as we do for macOS apps"
        },
        {
          "hash": "f8277ab0a96d",
          "date": "2026-06-05",
          "subject": "[PCM] Support proxying PCM requests on iOS"
        },
        {
          "hash": "719026f5bf12",
          "date": "2021-01-26",
          "subject": "REGRESSION(r261238): WKWebView crashes on launch inside a quicklook preview"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 17,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 17,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-watchOS.entitlements",
          "line": 5,
          "value": true,
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 368,
          "function": "maccatalyst_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 397,
          "function": "maccatalyst_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macCatalyst"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 603,
          "function": "ios_family_process_adattributiond_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "adattributiond",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/WebKit/Shared/EntryPointUtilities/Cocoa/XPCService/XPCServiceEntryPoint.mm",
          "line": 57,
          "process": "Networking / GPU / WebContent",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst"
          ]
        }
      ],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 68,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(require-entitlement \"com.apple.security.network.client\")"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 136,
      "entitlement": "com.apple.security.network.server",
      "category": "generally-available",
      "ios_parity_status": "ios-public-parity",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Permits listening for incoming network connections and server socket creation within sandboxed environments.",
      "webkit_usage_summary": "WebKit references this entitlement within its shared networking sandbox definitions (`networking-defines.sb`). On watchOS, the sandbox profile requires either `com.apple.security.network.client` or `com.apple.security.network.server` to access `/private/var/run/mDNSResponder` and look up `com.apple.dnssd.service`. WebKit binaries do not directly embed this entitlement in their iOS or macOS entitlement plists.",
      "browserenginekit_implications": "Third-party iOS browsers using BrowserEngineKit rely on `com.apple.developer.web-browser-engine.networking` for network extension processes and do not need `com.apple.security.network.server`. Furthermore, this entitlement requirement in WebKit's sandbox definitions is isolated to watchOS under `PLATFORM(WATCHOS)` (where BrowserEngineKit is unavailable), while on iOS access to mDNSResponder is controlled via the `BlockNetworkAccess` state flag.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Seatbelt Sandbox Profile"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 69,
          "description": "Sandbox rule filtering mDNSResponder socket and dnssd service access behind network client or network server entitlement on watchOS"
        }
      ],
      "key_commits": [
        {
          "hash": "f3953af233f9",
          "date": "2025-09-02",
          "subject": "Create new files for sandbox defines"
        },
        {
          "hash": "129d7629be7d",
          "date": "2022-12-01",
          "subject": "Upgrade to sandbox version 3 on iOS and macOS"
        },
        {
          "hash": "9217c5816986",
          "date": "2020-01-08",
          "subject": "Network process sandboxes should not include 'common.sb' or 'system.sb'"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [
        {
          "file": "Source/WebKit/Shared/Sandbox/iOS/networking-defines.sb",
          "line": 69,
          "process": "Networking",
          "platform": "iOS",
          "snippet": "(require-entitlement \"com.apple.security.network.server\"))"
        }
      ],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 137,
      "entitlement": "com.apple.security.print",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants a sandboxed macOS application permission to interact with the system printing subsystem and display standard print dialogs.",
      "webkit_usage_summary": "In WebKit, this entitlement is granted to macOS host and harness applications including MiniBrowser and SwiftBrowser. It allows these sandboxed browser host apps to send print jobs and communicate with the system print daemon. It is not declared on WebKit's secondary XPC service processes (WebContent, GPU, Network) or used on iOS.",
      "browserenginekit_implications": "This entitlement is macOS App Sandbox-specific and is not applicable to iOS or BrowserEngineKit. On iOS, third-party browsers using BrowserEngineKit initiate printing through standard UIKit APIs such as UIPrintInteractionController within the host app, which operates under iOS sandbox rules and does not require this macOS entitlement.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 19,
          "description": "Enables the printing entitlement for the macOS MiniBrowser test harness."
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 19,
          "description": "Enables the printing entitlement for the macOS SwiftBrowser application."
        }
      ],
      "key_commits": [
        {
          "hash": "8dfe17d90373",
          "date": "2022-12-03",
          "subject": "Add printing entitlement to Minibrowser"
        },
        {
          "hash": "4f8ffdf62150",
          "date": "2024-12-09",
          "subject": "[SwiftUI] Introduce SwiftBrowser"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 19,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 19,
          "value": true,
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 138,
      "entitlement": "com.apple.security.script-restrictions",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Disallows JavaScript VM execution and freezes interpreter dispatch structures for hardened system processes.",
      "webkit_usage_summary": "JavaScriptCore checks this entitlement at runtime via processHasEntitlement in Source/JavaScriptCore/llint/LLIntData.cpp on Cocoa platforms. If present, WebKit marks g_jscConfig.vmEntryDisallowed as true and permanently freezes os_script_config_storage with FreezePagePermission::None, preventing any entry into the LLInt interpreter.",
      "browserenginekit_implications": "This is an internal Apple security entitlement that is not available to third-party developers or BrowserEngineKit extensions. Third-party browser engines require active script execution (and typically rely on JIT entitlements like com.apple.developer.cs.allow-jit), so this restrictive lockdown entitlement has no applicability or availability for 3P browsers on iOS.",
      "canonical_processes": [
        "WebContent",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "WebContent / JSC"
      ],
      "platforms": [
        "iOS",
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/JavaScriptCore/llint/LLIntData.cpp",
          "line": 98,
          "description": "Evaluates whether scripting is forbidden via processHasEntitlement to disable VM entry and freeze opcode configuration pages."
        }
      ],
      "key_commits": [
        {
          "hash": "d5e7d2a3eeee",
          "date": "2025-08-17",
          "subject": "Harden the interpreter dispatchers more for ARM64E."
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/llint/LLIntData.cpp",
          "line": 98,
          "process": "WebContent / JSC",
          "platforms": [
            "macOS",
            "iOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 139,
      "entitlement": "com.apple.security.temporary-exception.files.absolute-path.read-only",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants a sandboxed macOS application temporary exception access to read files at specified absolute filesystem paths without user interaction.",
      "webkit_usage_summary": "Applied to developer test host applications (MiniBrowser and SwiftBrowser) on macOS with the value '/', granting read-only access to the entire root filesystem. This allows sandboxed developer browser harnesses to load and test local web resources and test fixtures from anywhere on the filesystem without prompting for user file access.",
      "browserenginekit_implications": "This is a macOS App Sandbox temporary exception entitlement and is not available or applicable to iOS or BrowserEngineKit. On iOS, 3P browser apps and BrowserEngineKit extension processes operate under iOS seatbelt sandboxes where local file access is strictly governed by app sandbox containers, UIDocumentPickerViewController, and security-scoped resource extensions.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "\"/\""
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 21,
          "description": "Declares temporary exception read-only access to '/' for the macOS MiniBrowser test harness."
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 21,
          "description": "Declares temporary exception read-only access to '/' for the macOS SwiftBrowser host app."
        }
      ],
      "key_commits": [
        {
          "hash": "c624799348d5",
          "date": "2018-01-31",
          "subject": "[macOS] MiniBrowser isn\u2019t app-sandboxed"
        },
        {
          "hash": "4f8ffdf62150",
          "date": "2024-12-09",
          "subject": "[SwiftUI] Introduce SwiftBrowser"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 21,
          "value": "/",
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 21,
          "value": "/",
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 140,
      "entitlement": "com.apple.security.temporary-exception.files.absolute-path.read-write",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Provides a temporary exception to macOS App Sandbox restrictions, granting read and write filesystem access to specified absolute paths outside the application container.",
      "webkit_usage_summary": "Declared in `Tools/MiniBrowser/MiniBrowser.entitlements` with the path `/private/tmp/` on macOS. It is used exclusively by the MiniBrowser developer test tool to dump debugging output and test artifacts into `/tmp` while running under the macOS App Sandbox. Production WebKit binaries and system services do not carry this entitlement.",
      "browserenginekit_implications": "This entitlement is specific to the macOS App Sandbox and has no relevance or applicability to iOS or BrowserEngineKit. Third-party iOS browsers using BrowserEngineKit operate within iOS application sandbox boundaries and Seatbelt profiles, where macOS temporary exception entitlements are unavailable and unsupported.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "\"/private/tmp/\""
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 23,
          "description": "Declares temporary read-write access to `/private/tmp/` for the sandboxed MiniBrowser macOS host app"
        }
      ],
      "key_commits": [
        {
          "hash": "d8b714fbd289",
          "date": "2026-01-07",
          "subject": "Add entitlement to MiniBrowser to support dumping to /tmp https://bugs.webkit.org/show_bug.cgi?id=303509"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 23,
          "value": "/private/tmp/",
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 141,
      "entitlement": "com.apple.security.temporary-exception.mach-lookup.global-name",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants a sandboxed macOS application a temporary App Sandbox exception to look up and connect to specified global Mach services outside its sandbox.",
      "webkit_usage_summary": "Used in macOS browser test harness apps (MiniBrowser and SwiftBrowser) to allow communication with external system services including PIPAgent (picture-in-picture), Safari SafeBrowsing Service, WebKit NetworkingDaemon, and webinspector. It is not declared in WebKit's production helper processes (WebProcess, NetworkProcess, GPUProcess), which are governed by custom Seatbelt profiles rather than standard App Sandbox temporary exception entitlements.",
      "browserenginekit_implications": "This entitlement is specific to the macOS App Sandbox and has no relevance to iOS or BrowserEngineKit. Third-party browsers using BrowserEngineKit on iOS run within iOS sandbox containers and extension points where Mach lookup access is controlled by iOS Seatbelt profiles and Apple-managed extension entitlements rather than App Sandbox temporary exception plists.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "[\"com.apple.PIPAgent\", \"com.apple.Safari.SafeBrowsing.Service\", \"com.apple.WebKit.NetworkingDaemon\", \"com.apple.webinspector\"]"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 25,
          "description": "Declares temporary Mach lookup exceptions for com.apple.PIPAgent, com.apple.Safari.SafeBrowsing.Service, com.apple.WebKit.NetworkingDaemon, and com.apple.webinspector"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 23,
          "description": "Replicates the Mach lookup temporary exceptions for the SwiftUI SwiftBrowser test application"
        }
      ],
      "key_commits": [
        {
          "hash": "eb162b9182ac",
          "date": "2018-08-16",
          "subject": "Add entitlement to MiniBrowser to allow it to communicate with com.apple.Safari.SafeBrowsing.Service"
        },
        {
          "hash": "4f8ffdf62150",
          "date": "2024-12-09",
          "subject": "[SwiftUI] Introduce SwiftBrowser"
        },
        {
          "hash": "b577152034d7",
          "date": "2025-01-02",
          "subject": "[SwiftUI] Support download functionality"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 25,
          "value": [
            "com.apple.PIPAgent",
            "com.apple.Safari.SafeBrowsing.Service",
            "com.apple.WebKit.NetworkingDaemon",
            "com.apple.webinspector"
          ],
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 23,
          "value": [
            "com.apple.PIPAgent",
            "com.apple.Safari.SafeBrowsing.Service",
            "com.apple.WebKit.NetworkingDaemon",
            "com.apple.webinspector"
          ],
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 142,
      "entitlement": "com.apple.security.temporary-exception.sbpl",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Allows a sandboxed macOS application to evaluate custom inline Sandbox Profile Language (SBPL) rules as an App Sandbox temporary exception.",
      "webkit_usage_summary": "WebKit declares this entitlement in host applications and test harnesses on macOS and macCatalyst, including MiniBrowser, SwiftBrowser, WebKitTestRunner, and TestWebKitAPI. It injects SBPL rules that permit the sandboxed host process to issue 'com.apple.webkit.extension.mach' and 'com.apple.webkit.extension.iokit' sandbox extension tokens to child processes like WebContent and GPUProcess. The entitlement is evaluated directly by Apple's Seatbelt / App Sandbox infrastructure during process signing rather than through internal WebKit runtime code checks.",
      "browserenginekit_implications": "This entitlement is a macOS App Sandbox temporary exception and is not applicable to iOS or BrowserEngineKit. Third-party iOS browser engines using BrowserEngineKit operate under iOS sandbox architecture governed by com.apple.developer.web-browser-engine.* entitlements and system extension APIs, with no access to or need for macOS-specific SBPL temporary exceptions.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)",
        "Test Runner / Harness (Host App)",
        "TestWebKitAPI"
      ],
      "platforms": [
        "macCatalyst",
        "macOS"
      ],
      "values_seen": [
        "'(allow iokit-issue-extension (require-all (extension-class \\\"com.apple.webkit.extension.iokit\\\")))'",
        "'(allow mach-issue-extension (require-all (extension-class \\\"com.apple.webkit.extension.mach\\\")))'",
        "[\"(allow mach-issue-extension (require-all (extension-class \\\"com.apple.webkit.extension.mach\\\")))\", \"(allow iokit-issue-extension (require-all (extension-class \\\"com.apple.webkit.extension.iokit\\\")))\"]"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 32,
          "description": "Specifies inline SBPL rules allowing MiniBrowser to issue mach and iokit sandbox extensions for WebKit extension classes."
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 51,
          "description": "Dynamically provisions the temporary-exception.sbpl array containing mach-issue-extension and iokit-issue-extension rules for TestWebKitAPI on macOS and macCatalyst."
        }
      ],
      "key_commits": [
        {
          "hash": "afad2cf186e6",
          "date": "2020-02-17",
          "subject": "Update WebKit Tools to issue mach extensions as needed"
        },
        {
          "hash": "2177a497f6ef",
          "date": "2025-04-24",
          "subject": "Introduce a script to generate TestWebKitAPI entitlements"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 32,
          "value": [
            "(allow mach-issue-extension (require-all (extension-class \"com.apple.webkit.extension.mach\")))",
            "(allow iokit-issue-extension (require-all (extension-class \"com.apple.webkit.extension.iokit\")))"
          ],
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 30,
          "value": [
            "(allow mach-issue-extension (require-all (extension-class \"com.apple.webkit.extension.mach\")))",
            "(allow iokit-issue-extension (require-all (extension-class \"com.apple.webkit.extension.iokit\")))"
          ],
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner-internal.entitlements",
          "line": 17,
          "value": [
            "(allow mach-issue-extension (require-all (extension-class \"com.apple.webkit.extension.mach\")))",
            "(allow iokit-issue-extension (require-all (extension-class \"com.apple.webkit.extension.iokit\")))"
          ],
          "process": "Test Runner / Harness (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner.entitlements",
          "line": 5,
          "value": [
            "(allow mach-issue-extension (require-all (extension-class \"com.apple.webkit.extension.mach\")))",
            "(allow iokit-issue-extension (require-all (extension-class \"com.apple.webkit.extension.iokit\")))"
          ],
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 51,
          "function": "process_mac_testwebkitapi_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "TestWebKitAPI",
          "platforms": [
            "macOS",
            "macCatalyst"
          ]
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 52,
          "function": "process_mac_testwebkitapi_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "'(allow mach-issue-extension (require-all (extension-class \\\"com.apple.webkit.extension.mach\\\")))'",
          "process": "TestWebKitAPI",
          "platforms": [
            "macOS",
            "macCatalyst"
          ]
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 53,
          "function": "process_mac_testwebkitapi_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "'(allow iokit-issue-extension (require-all (extension-class \\\"com.apple.webkit.extension.iokit\\\")))'",
          "process": "TestWebKitAPI",
          "platforms": [
            "macOS",
            "macCatalyst"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 143,
      "entitlement": "com.apple.security.temporary-exception.shared-preference.read-only",
      "category": "restricted-other",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "macOS App Sandbox & Exceptions",
      "short_purpose": "Grants a sandboxed macOS application read-only access to specified system or application preference domains outside its container.",
      "webkit_usage_summary": "WebKit includes this macOS App Sandbox temporary exception entitlement in the plist entitlements of host test applications (Tools/MiniBrowser and Tools/SwiftBrowser). It specifies domains such as 'com.apple.Safari.SandboxBroker' and 'com.apple.messages.EnhancedLinkSecurity', enabling these sandboxed browser test harnesses to read shared link security and broker configuration preferences. WebKit production daemons and XPC services do not declare or enforce this entitlement directly.",
      "browserenginekit_implications": "This entitlement is specific to macOS App Sandbox and has no relevance to iOS or BrowserEngineKit. Third-party iOS browsers utilizing BrowserEngineKit operate within standard iOS sandbox containers and cannot use macOS temporary exception entitlements.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "MiniBrowser / SwiftBrowser (Host App)"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "[\"com.apple.Safari.SandboxBroker\", \"com.apple.messages.EnhancedLinkSecurity\"]",
        "[\"com.apple.Safari.SandboxBroker\"]"
      ],
      "enforcement_mechanisms": [
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 37,
          "description": "Entitlement declaration allowing MiniBrowser read-only access to com.apple.Safari.SandboxBroker and com.apple.messages.EnhancedLinkSecurity preferences."
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 35,
          "description": "Entitlement declaration granting SwiftBrowser read-only access to com.apple.Safari.SandboxBroker preferences."
        }
      ],
      "key_commits": [
        {
          "hash": "b577152034d7",
          "date": "2025-01-02",
          "subject": "[SwiftUI] Support download functionality"
        },
        {
          "hash": "4f8ffdf62150",
          "date": "2024-12-09",
          "subject": "[SwiftUI] Introduce SwiftBrowser"
        },
        {
          "hash": "bb5043eb8af9",
          "date": "2020-11-19",
          "subject": "[macOS] Issue sandbox extension to Web Inspector service"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/MiniBrowser/MiniBrowser.entitlements",
          "line": 37,
          "value": [
            "com.apple.Safari.SandboxBroker",
            "com.apple.messages.EnhancedLinkSecurity"
          ],
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        },
        {
          "file": "Tools/SwiftBrowser/Resources/SwiftBrowser.entitlements",
          "line": 35,
          "value": [
            "com.apple.Safari.SandboxBroker"
          ],
          "process": "MiniBrowser / SwiftBrowser (Host App)"
        }
      ],
      "script_declarations": [],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 144,
      "entitlement": "com.apple.springboard.opensensitiveurl",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows a process to open sensitive or restricted URLs and launch system targets via SpringBoard without standard URL restrictions or user confirmation dialogs.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the webpushd daemon on iOS and visionOS within process-entitlements.sh. It enables the push notification daemon to interact with SpringBoard and LaunchServices to open sensitive URLs and launch target web applications or system destinations in response to push notification user interactions.",
      "browserenginekit_implications": "This is a private Apple entitlement that is completely inaccessible to third-party browsers and BrowserEngineKit extensions on iOS. Third-party engines cannot invoke SpringBoard's sensitive URL opening interfaces (e.g. SBSOpenSensitiveURLAndUnlock) and must instead rely on standard UIKit openURL APIs subject to system URL handling rules and user prompts.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 613,
          "description": "Adds com.apple.springboard.opensensitiveurl to webpushd entitlements on iOS and visionOS"
        }
      ],
      "key_commits": [
        {
          "hash": "0e9914e91f10",
          "date": "2022-12-14",
          "subject": "Compile-time enable Notifications for additional platform (runtime off by default)"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 613,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 7,
      "related_spis": [
        {
          "name": "SBSStatusBarStyleOverridesAssertion",
          "kind": "classes",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "SBSStatusBarStyleOverridesCoordinator",
          "kind": "classes",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "acquireWithHandler:invalidationHandler:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "assertionWithStatusBarStyleOverrides:forPID:exclusive:showsWhenForeground:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setCurrentAttributionStringWithFormat:auditToken:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setCurrentAttributionWebsiteString:auditToken:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setRegisteredStyleOverrides:reply:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        }
      ]
    },
    {
      "id": 145,
      "entitlement": "com.apple.springboard.statusbarstyleoverrides",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows a process to acquire SpringBoard status bar style overrides and receive status bar tap events for active system indicators.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the GPU process (`WebKit.GPUProcess`) on iOS and visionOS in `process-entitlements.sh`. It is used by `MediaCaptureStatusBarManager` via private `SpringBoardServices` SPIs (`SBSStatusBarStyleOverridesAssertion` and `SBSStatusBarStyleOverridesCoordinator`) to display status bar indicator banners/pills for WebRTC audio and video capture on behalf of the presenting application.",
      "browserenginekit_implications": "This is an Apple-private SpringBoard entitlement that is unavailable to third-party browsers and BrowserEngineKit extension processes. Third-party browser engines cannot register or manage SpringBoard status bar overrides directly; status bar recording and capture indicators are instead managed automatically by standard iOS system frameworks (such as AVFoundation capture sessions) associated with the host application.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 539,
          "description": "Adds com.apple.springboard.statusbarstyleoverrides to ios_family_process_gpu_entitlements() for the GPU process"
        },
        {
          "file": "Source/WebCore/platform/mediastream/ios/MediaCaptureStatusBarManager.mm",
          "line": 81,
          "description": "Acquires an SBSStatusBarStyleOverridesAssertion for UIStatusBarStyleOverrideWebRTCAudioCapture and initializes SBSStatusBarStyleOverridesCoordinator"
        }
      ],
      "key_commits": [
        {
          "hash": "b3e3f3725328",
          "date": "2022-09-01",
          "subject": "[iOS] Manage Capture Status Bar in GPUProcess"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 539,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 7,
      "related_spis": [
        {
          "name": "SBSStatusBarStyleOverridesAssertion",
          "kind": "classes",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "SBSStatusBarStyleOverridesCoordinator",
          "kind": "classes",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "acquireWithHandler:invalidationHandler:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "assertionWithStatusBarStyleOverrides:forPID:exclusive:showsWhenForeground:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setCurrentAttributionStringWithFormat:auditToken:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setCurrentAttributionWebsiteString:auditToken:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setRegisteredStyleOverrides:reply:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        }
      ]
    },
    {
      "id": 146,
      "entitlement": "com.apple.springboard.statusbarstyleoverrides.coordinator",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows a process to act as an override coordinator for specific system status bar indicator styles (specifically WebRTC audio and video capture indicators) via SpringBoardServices.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the GPU process on iOS and visionOS within `process-entitlements.sh`, specifying array values `UIStatusBarStyleOverrideWebRTCAudioCapture` and `UIStatusBarStyleOverrideWebRTCCapture`. It enables `MediaCaptureStatusBarManager` to instantiate `SBSStatusBarStyleOverridesCoordinator` and `SBSStatusBarStyleOverridesAssertion` to register and coordinate system capture status bar pills when WebRTC media capture streams are active.",
      "browserenginekit_implications": "Third-party browsers and BrowserEngineKit extension processes do not have access to this private SpringBoard entitlement. A 3P browser engine cannot directly coordinate status bar capture overrides using `SBSStatusBarStyleOverridesCoordinator`, and must rely on standard public AVFoundation capture privacy indicators or host application lifecycle mechanisms.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "UIStatusBarStyleOverrideWebRTCAudioCapture",
        "UIStatusBarStyleOverrideWebRTCCapture"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 540,
          "description": "Signs the GPU process on iOS/visionOS with com.apple.springboard.statusbarstyleoverrides.coordinator containing UIStatusBarStyleOverrideWebRTCAudioCapture and UIStatusBarStyleOverrideWebRTCCapture"
        },
        {
          "file": "Source/WebCore/platform/mediastream/ios/MediaCaptureStatusBarManager.mm",
          "line": 82,
          "description": "Instantiates SBSStatusBarStyleOverridesCoordinator and calls setRegisteredStyleOverrides:reply: to manage the WebRTC capture status bar indicators"
        }
      ],
      "key_commits": [
        {
          "hash": "b3e3f3725328eb8317a0c01cdd865f582729b15a",
          "date": "2022-09-01",
          "subject": "[iOS] Manage Capture Status Bar in GPUProcess"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 540,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 541,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "UIStatusBarStyleOverrideWebRTCAudioCapture",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 542,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "UIStatusBarStyleOverrideWebRTCCapture",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 7,
      "related_spis": [
        {
          "name": "SBSStatusBarStyleOverridesAssertion",
          "kind": "classes",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "SBSStatusBarStyleOverridesCoordinator",
          "kind": "classes",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "acquireWithHandler:invalidationHandler:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "assertionWithStatusBarStyleOverrides:forPID:exclusive:showsWhenForeground:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setCurrentAttributionStringWithFormat:auditToken:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setCurrentAttributionWebsiteString:auditToken:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        },
        {
          "name": "setRegisteredStyleOverrides:reply:",
          "kind": "selectors",
          "framework": "SpringBoardServices",
          "feature_category": "Process Management, RunningBoard, XPC & System Lifecycle"
        }
      ]
    },
    {
      "id": 147,
      "entitlement": "com.apple.surfboard.application-service-client",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows a process to act as an application service client connecting to visionOS Surfboard (the system shell and UI manager).",
      "webkit_usage_summary": "WebKit assigns this entitlement to the GPU process on visionOS (xrOS) and in the visionOS simulator GPUService entitlements. It allows the GPU process to communicate directly with Surfboard application services to facilitate shared simulation connections and 3D spatial content rendering (such as `<model>` elements).",
      "browserenginekit_implications": "This is a private Apple system entitlement that is not accessible to third-party browsers or BrowserEngineKit extensions. While BrowserEngineKit currently targets iOS rather than visionOS, any visionOS spatial rendering integration relying on Surfboard application services remains exclusive to Apple's first-party processes.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 570,
          "description": "Adds com.apple.surfboard.application-service-client to the GPU process entitlements when building for xrOS"
        },
        {
          "file": "Source/WebKit/Resources/ios/GPUService-visionOS-simulator.entitlements",
          "line": 9,
          "description": "Declares com.apple.surfboard.application-service-client as true for the GPU process in the visionOS simulator"
        }
      ],
      "key_commits": [
        {
          "hash": "8746ea87f06c",
          "date": "2025-01-28",
          "subject": "[visionOS] Move shared simulation connection from the Model process to the GPU process"
        },
        {
          "hash": "8a4b871eeecd",
          "date": "2024-03-05",
          "subject": "Render <model> tags in Model process"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Resources/ios/GPUService-visionOS-simulator.entitlements",
          "line": 9,
          "value": true,
          "process": "GPU"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 570,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 148,
      "entitlement": "com.apple.surfboard.chrome-customization",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Authorizes an application on visionOS to customize system window chrome and delegate fullscreen image display to QuickLook preview windows.",
      "webkit_usage_summary": "Checked at runtime in the UIProcess on visionOS within `WKFullScreenWindowControllerIOS.mm` when entering fullscreen for an HTML image element. If the host application holds this entitlement, WebKit delegates presentation to QuickLook via `WKPreviewWindowController` to render the image in a separate window scene or immersive space; without it, WebKit falls back to standard in-app fullscreen presentation.",
      "browserenginekit_implications": "This entitlement is private to Apple's visionOS system shell (Surfboard) and is not granted to third-party browsers or BrowserEngineKit extensions. Third-party browsers running on visionOS cannot trigger system QuickLook immersive image fullscreen experiences and must render fullscreen images within standard web process view hierarchies.",
      "canonical_processes": [
        "UIProcess / Host App"
      ],
      "raw_processes": [
        "UIProcess / Host App"
      ],
      "platforms": [
        "visionOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/UIProcess/ios/fullscreen/WKFullScreenWindowControllerIOS.mm",
          "line": 1066,
          "description": "Gates QuickLook image fullscreen presentation behind WTF::processHasEntitlement(\"com.apple.surfboard.chrome-customization\"_s)"
        }
      ],
      "key_commits": [
        {
          "hash": "6ac0f7beb971",
          "date": "2024-06-07",
          "subject": "[visionOS] Only delegate Image Fullscreen to Quick Look if client has proper entitlements"
        },
        {
          "hash": "70014c526e8e",
          "date": "2024-07-12",
          "subject": "[visionOS] Optimize the QuickLook fullscreen transition"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/WebKit/UIProcess/ios/fullscreen/WKFullScreenWindowControllerIOS.mm",
          "line": 1066,
          "process": "UIProcess / Host App",
          "platforms": [
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 149,
      "entitlement": "com.apple.surfboard.shared-simulation-connection-request",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows a process to request and establish a connection to the Surfboard shared spatial simulation service on visionOS.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the GPU process on visionOS (and the visionOS simulator) in `process-entitlements.sh`. It was previously used by the Model process and moved to the GPU process to enable connecting to Surfboard's shared spatial simulation infrastructure for rendering and interacting with HTML `<model>` element content.",
      "browserenginekit_implications": "This is a private Apple entitlement specific to visionOS system services and is completely unavailable to third-party browsers using BrowserEngineKit. Third-party browser engines on iOS cannot obtain `com.apple.surfboard.*` entitlements, nor is BrowserEngineKit currently deployed to visionOS.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 571,
          "description": "Adds com.apple.surfboard.shared-simulation-connection-request to GPU process entitlements when target platform is xrOS"
        },
        {
          "file": "Source/WebKit/Resources/ios/GPUService-visionOS-simulator.entitlements",
          "line": 11,
          "description": "Declares com.apple.surfboard.shared-simulation-connection-request for the GPU process on the visionOS simulator"
        }
      ],
      "key_commits": [
        {
          "hash": "8746ea87f06c2e65ea34055e95bcb7cbfa1ea59e",
          "date": "2025-01-28",
          "subject": "[visionOS] Move shared simulation connection from the Model process to the GPU process"
        },
        {
          "hash": "8a4b871eeecd5ca8e2001f76f417c739209a8c4f",
          "date": "2024-03-05",
          "subject": "Render <model> tags in Model process"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/WebKit/Resources/ios/GPUService-visionOS-simulator.entitlements",
          "line": 11,
          "value": true,
          "process": "GPU"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 571,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 150,
      "entitlement": "com.apple.surfboard.shared-simulation-memory-attribution",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "GPU, Graphics & Display",
      "short_purpose": "Allows a process to attribute memory consumed by shared spatial simulations to specific client processes when communicating with visionOS's Surfboard service.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the GPU process on visionOS (xrOS) within process-entitlements.sh. It enables accurate memory tracking and attribution when rendering 3D model elements (<model>) through xrOS's shared simulation architecture.",
      "browserenginekit_implications": "This is an Apple-private entitlement unavailable to third-party developers or BrowserEngineKit extensions. Third-party browser engines on iOS or visionOS cannot obtain Surfboard entitlements and cannot interface directly with internal shared simulation memory attribution mechanisms.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 572,
          "description": "Adds com.apple.surfboard.shared-simulation-memory-attribution to the GPU process entitlements when targeting visionOS (xros)"
        }
      ],
      "key_commits": [
        {
          "hash": "d1807b80b6c2",
          "date": "2025-04-11",
          "subject": "Support memory attribution for Model Element"
        },
        {
          "hash": "bf822a014db0",
          "date": "2026-04-06",
          "subject": "Fix indentation in process-entitlements.sh"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 572,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 151,
      "entitlement": "com.apple.symptom_analytics.configure",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "Networking & Privacy Proxies",
      "short_purpose": "Allows modifying and configuring network telemetry and domain tracking records in the system SymptomAnalytics service (symptomsd).",
      "webkit_usage_summary": "WebKit provisions this entitlement to the NetworkProcess on macOS, iOS, and visionOS in process-entitlements.sh. It is used in NetworkSessionCocoa::removeNetworkWebsiteData via private Symptoms framework SPIs (AnalyticsWorkspace and UsageFeed) to purge recorded network domain tracking history associated with App Privacy Report when a user clears browser history or website data.",
      "browserenginekit_implications": "This private entitlement is restricted to Apple system components and cannot be granted to third-party browsers or BrowserEngineKit networking extensions. Third-party iOS browsers cannot programmatically purge domain tracking records recorded by symptomsd for App Privacy Report via these private SymptomAnalytics SPIs.",
      "canonical_processes": [
        "Networking"
      ],
      "raw_processes": [
        "Networking"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 135,
          "description": "Adds com.apple.symptom_analytics.configure to the macOS NetworkProcess entitlement plist"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 665,
          "description": "Adds com.apple.symptom_analytics.configure to the iOS/visionOS NetworkProcess entitlement plist"
        },
        {
          "file": "Source/WebKit/NetworkProcess/cocoa/NetworkSessionCocoa.mm",
          "line": 2167,
          "description": "removeNetworkWebsiteData uses SymptomAnalytics UsageFeed to clear network domain tracking history for App Privacy Report"
        }
      ],
      "key_commits": [
        {
          "hash": "7496c071f4af",
          "date": "2021-04-02",
          "subject": "Clear network website data when a user clears history/website data"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 135,
          "function": "mac_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 665,
          "function": "ios_family_process_network_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "Networking",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 10,
      "related_spis": [
        {
          "name": "AnalyticsWorkspace",
          "kind": "classes",
          "framework": "SymptomAnalytics",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "UsageFeed",
          "kind": "classes",
          "framework": "SymptomAnalytics",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "initWithWorkspace:",
          "kind": "selectors",
          "framework": "SymptomAnalytics",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "initWorkspaceWithService:",
          "kind": "selectors",
          "framework": "SymptomAnalytics",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "performNetworkDomainsActionWithOptions:reply:",
          "kind": "selectors",
          "framework": "SymptomAnalytics",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "kSymptomAnalyticsServiceDomainTrackingClearHistoryBundleIDs",
          "kind": "symbols",
          "framework": "SymptomAnalytics",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "kSymptomAnalyticsServiceDomainTrackingClearHistoryEndDate",
          "kind": "symbols",
          "framework": "SymptomAnalytics",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "kSymptomAnalyticsServiceDomainTrackingClearHistoryKey",
          "kind": "symbols",
          "framework": "SymptomAnalytics",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "kSymptomAnalyticsServiceDomainTrackingClearHistoryStartDate",
          "kind": "symbols",
          "framework": "SymptomAnalytics",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        },
        {
          "name": "kSymptomAnalyticsServiceEndpoint",
          "kind": "symbols",
          "framework": "SymptomAnalytics",
          "feature_category": "Privacy, Tracking Prevention, Content Filtering & Safe Browsing"
        }
      ]
    },
    {
      "id": 152,
      "entitlement": "com.apple.systemstatus.activityattribution",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows a process to communicate with systemstatusd to publish dynamic activity attributions for hardware resource usage such as camera and microphone capture indicators in the status bar.",
      "webkit_usage_summary": "WebKit signs the iOS and visionOS GPU process with this entitlement in process-entitlements.sh, alongside a Mach lookup exception for com.apple.systemstatus.activityattribution and private identity assumption entitlements. This capability allows the GPU process (via STDynamicActivityAttributionPublisher and UserMediaCaptureManagerProxy) to dynamically attribute active media capture streams to the client web application or origin so that iOS displays proper status bar indicators (e.g. orange/green recording dots and Control Center attributions).",
      "browserenginekit_implications": "Third-party browsers and BrowserEngineKit extension processes (webcontent, rendering, networking) cannot obtain this Apple-private entitlement. As a result, 3P browser auxiliary processes cannot directly communicate with systemstatusd to dynamically re-attribute microphone or camera capture to individual web origins in the iOS status bar, Dynamic Island, or Control Center; capture attribution remains tied to the host browser application bundle.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 561,
          "description": "Adds com.apple.systemstatus.activityattribution and matching Mach lookup exceptions to ios_family_process_gpu_entitlements"
        },
        {
          "file": "Source/WebKit/GPUProcess/webrtc/UserMediaCaptureManagerProxy.cpp",
          "line": 131,
          "description": "Coordinates audio capture start and presenting application PID attribution in the GPU process"
        }
      ],
      "key_commits": [
        {
          "hash": "cb18053524fe",
          "date": "2021-07-14",
          "subject": "[iOS] Dynamically set capture attribution"
        },
        {
          "hash": "c7d2ab747c75",
          "date": "2020-04-24",
          "subject": "Call STDynamicActivityAttributionPublisher in the WebProcess"
        },
        {
          "hash": "10521e725cec",
          "date": "2022-07-08",
          "subject": "[iOS][GPU] Remove more sandbox telemetry"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 561,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 153,
      "entitlement": "com.apple.tcc.delegated-services",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "TCC, Privacy & Permissions",
      "short_purpose": "Allows a helper process to access protected TCC services like camera and microphone with permission attribution delegated to its client or host application.",
      "webkit_usage_summary": "WebKit injects this entitlement into the GPUProcess on both macOS (under restricted entitlements) and iOS-family platforms via process-entitlements.sh, specifying kTCCServiceCamera and kTCCServiceMicrophone. This enables the isolated GPU process to capture camera and microphone streams for WebRTC without tccd attributing the capture or prompting permissions under the GPU helper identity.",
      "browserenginekit_implications": "This is an Apple-private TCC entitlement unavailable to third-party browser engines using BrowserEngineKit. Third-party iOS browser engines running helper extension processes cannot delegate camera/microphone TCC permissions in this manner, necessitating that media capture consent and access remain bound directly to the host application bundle.",
      "canonical_processes": [
        "GPU"
      ],
      "raw_processes": [
        "GPU"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "kTCCServiceCamera",
        "kTCCServiceMicrophone"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 56,
          "description": "Adds com.apple.tcc.delegated-services array with kTCCServiceCamera and kTCCServiceMicrophone to macOS GPU process entitlements."
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 535,
          "description": "Adds com.apple.tcc.delegated-services array with kTCCServiceCamera and kTCCServiceMicrophone to iOS-family GPU process entitlements."
        },
        {
          "file": "Source/WebKit/GPUProcess/webrtc/UserMediaCaptureManagerProxy.cpp",
          "line": 1,
          "description": "GPU process media capture manager proxy responsible for handling camera and microphone capture sessions delegated from WebContent."
        }
      ],
      "key_commits": [
        {
          "hash": "13771f185bf4",
          "date": "2020-02-07",
          "subject": "Build entitlements into GPU Process"
        },
        {
          "hash": "ac5c0d67aaf4",
          "date": "2023-09-28",
          "subject": "[iOS] Only allow access to the TCC daemon when the GPU process is not enabled"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 56,
          "function": "mac_process_gpu_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 57,
          "function": "mac_process_gpu_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "kTCCServiceMicrophone",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 58,
          "function": "mac_process_gpu_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "kTCCServiceCamera",
          "process": "GPU",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 535,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 536,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "kTCCServiceCamera",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 537,
          "function": "ios_family_process_gpu_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "kTCCServiceMicrophone",
          "process": "GPU",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 88,
      "related_spis": [
        {
          "name": "AVAssetCollection",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVContentKeyReportGroup",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVOutputContext",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVStreamDataParser",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "AVSystemController",
          "kind": "classes",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "URLSession",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "URLSessionDataDelegate",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "URLSessionDataDelegateQueue",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "_setPreventsSleepDuringVideoPlayback:",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "_setSuppressesAudioRendering:",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "appendStreamData:",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        },
        {
          "name": "appendStreamData:withFlags:",
          "kind": "selectors",
          "framework": "AVFoundation",
          "feature_category": "Media Playback, AirPlay, AVFoundation & Codecs"
        }
      ]
    },
    {
      "id": 154,
      "entitlement": "com.apple.uikitservices.app.value-access",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows a system daemon to access and manipulate UIKit application-level state and properties (such as badge values and application support attributes) across bundle identifier boundaries via UIKitServices.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the `webpushd` daemon on iOS and visionOS via `process-entitlements.sh`. It was introduced alongside built-in notification scheduling and proxying (`showNotification` and `getNotifications`) to allow `webpushd` to read and adjust application-level values for target web app bundles via UIKitServices.",
      "browserenginekit_implications": "This is an Apple-private entitlement that is not accessible to third-party browsers or BrowserEngineKit extensions. Third-party browsers on iOS cannot host system push daemons with cross-bundle UIKitServices value access and must manage notifications and app badges solely within their own app container using standard UserNotifications and UIKit APIs.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 616,
          "description": "Adds com.apple.uikitservices.app.value-access to webpushd on iOS and visionOS platforms."
        }
      ],
      "key_commits": [
        {
          "hash": "9d08f2e924fa",
          "date": "2024-07-22",
          "subject": "Implement webpushd built-in showNotification and getNotifications"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 616,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 281,
      "related_spis": [
        {
          "name": "PUActivityProgressController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "PXActivityProgressController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "System Integration, App Links, QuickLook & File Previews"
        },
        {
          "name": "UIDocumentPasswordView",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIKeyboard",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIKeyboardImpl",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIKeyboardInputModeController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIPeripheralHost",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIPickerContentView",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UIPreviewItemController",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UITextAutofillSuggestion",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UITextInputTraits",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        },
        {
          "name": "UITextSelectionRectCustomHandleInfo",
          "kind": "classes",
          "framework": "UIKit",
          "feature_category": "UIKit Views, Scrolling, Gestures & Text Input"
        }
      ]
    },
    {
      "id": 155,
      "entitlement": "com.apple.usernotification.notificationschedulerproxy",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "System UI, SpringBoard & Status Bar",
      "short_purpose": "Allows a process to act as a proxy notification scheduler, enabling it to schedule, display, and manage notifications on behalf of other bundle identifiers.",
      "webkit_usage_summary": "WebKit assigns this entitlement to the Web Push daemon (`webpushd`) on iOS, macOS, and visionOS in `process-entitlements.sh`. It allows `webpushd` to use private `UNUserNotificationCenter` SPIs (`initWithBundleIdentifier:`) to schedule declarative push notifications, query existing notifications, and update app badges on behalf of individual web applications and Home Screen WebClips.",
      "browserenginekit_implications": "This is an Apple-private entitlement that is not available to third-party browsers or BrowserEngineKit extensions. Third-party browsers on iOS cannot act as proxy notification schedulers for other bundle identifiers or WebClips via this mechanism, and must instead schedule notifications strictly under their own host application bundle using public `UserNotifications` framework APIs.",
      "canonical_processes": [
        "webpushd"
      ],
      "raw_processes": [
        "webpushd"
      ],
      "platforms": [
        "iOS",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "YES"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 615,
          "description": "Adds com.apple.usernotification.notificationschedulerproxy to webpushd entitlements on iOS and visionOS"
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 277,
          "description": "Adds com.apple.usernotification.notificationschedulerproxy to webpushd entitlements on macOS"
        },
        {
          "file": "Source/WebKit/webpushd/WebPushDaemon.mm",
          "line": 1049,
          "description": "Initializes UNUserNotificationCenter with target bundle identifiers to post proxy web push notifications via addNotificationRequest"
        }
      ],
      "key_commits": [
        {
          "hash": "9d08f2e924fa",
          "date": "2024-07-22",
          "subject": "Implement webpushd built-in showNotification and getNotifications"
        },
        {
          "hash": "4433278ba6e8",
          "date": "2024-08-02",
          "subject": "Handle setAppBadge in webpushd"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 277,
          "function": "mac_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "macOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 615,
          "function": "ios_family_process_webpushd_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "webpushd",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 1,
      "related_spis": [
        {
          "name": "setDefaultActionBundleIdentifier:",
          "kind": "selectors",
          "framework": "UserNotifications",
          "feature_category": "Web Push Notifications & Home Screen WebClips (webpushd)"
        }
      ]
    },
    {
      "id": 156,
      "entitlement": "com.apple.webinspector.allow",
      "category": "apple-private",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Allows a macOS process and its embedded WebKit/JavaScriptCore contexts to be remotely inspected via Web Inspector by default without requiring debug entitlements or explicit programmatic opt-in.",
      "webkit_usage_summary": "Checked at runtime on macOS in `JSRemoteInspector.cpp` within `defaultStateForRemoteInspectionEnabledByDefault()`. JavaScriptCore inspects the audit token of the process or parent application, enabling remote inspection by default if present while logging a deprecation notice recommending the modern `inspectable` API.",
      "browserenginekit_implications": "This legacy entitlement is Apple-private and macOS-only (the iOS equivalent being `com.apple.private.webinspector.allow-remote-inspection`), so it is unavailable to third-party iOS browsers using BrowserEngineKit. In iOS 16.4+ and macOS 13.3+, inspection is governed programmatically via the public `isInspectable` API on `WKWebView` / `JSContext` or development provisioning (`get-task-allow`), meaning lack of this entitlement does not impede third-party browser debugging.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "UIProcess / JSC Host"
      ],
      "platforms": [
        "macOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/JavaScriptCore/API/JSRemoteInspector.cpp",
          "line": 105,
          "description": "Checks `com.apple.webinspector.allow` on macOS to enable remote inspection by default for legacy processes."
        }
      ],
      "key_commits": [
        {
          "hash": "3d99c5a13754",
          "date": "2022-10-14",
          "subject": "Remote Web Inspector: [Cocoa] `inspectable` API"
        },
        {
          "hash": "a0a26311c18d",
          "date": "2022-10-10",
          "subject": "Remote Web Inspector: [Cocoa] `inspectable` API"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/API/JSRemoteInspector.cpp",
          "line": 1059,
          "process": "UIProcess / JSC Host",
          "platforms": [
            "macOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 157,
      "entitlement": "dynamic-codesigning",
      "category": "apple-private",
      "ios_parity_status": "ios-webkit-exclusive",
      "functional_domain": "JIT & Memory Hardening",
      "short_purpose": "Allows a process to generate and execute unsigned machine code dynamically in memory without kernel code signature verification on iOS-family platforms.",
      "webkit_usage_summary": "WebKit signs WebContent processes and JavaScriptCore command-line tools with this entitlement on visionOS and on iOS SDKs prior to 17.4 to enable JIT compilation. At runtime in `ExecutableAllocator.cpp`, JavaScriptCore verifies that the process possesses either `dynamic-codesigning` or `com.apple.developer.cs.allow-jit` before initializing executable JIT memory allocations. On iOS 17.4+, WebContent was migrated to use `com.apple.developer.cs.allow-jit`, but `dynamic-codesigning` remains as legacy fallback and for non-iPhoneOS platforms.",
      "browserenginekit_implications": "Third-party browsers cannot obtain the private `dynamic-codesigning` entitlement on iOS. Instead, BrowserEngineKit provides the managed entitlement `com.apple.developer.cs.allow-jit` specifically for 3P WebContent extensions, which grants comparable dynamic code generation privileges and which WebKit itself adopted starting in iOS 17.4.",
      "canonical_processes": [
        "WebContent",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "WebContent",
        "WebContent / JSC",
        "jsc / JSC Tools"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "YES",
        "true"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 478,
          "description": "Conditionally injects dynamic-codesigning into WebContent entitlements on visionOS and iOS SDK versions prior to 17.4."
        },
        {
          "file": "Source/JavaScriptCore/jit/ExecutableAllocator.cpp",
          "line": 137,
          "description": "Checks via processHasEntitlement for dynamic-codesigning or com.apple.developer.cs.allow-jit to determine if JIT should be enabled."
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 192,
          "description": "Adds dynamic-codesigning to JavaScriptCore tool binaries (jsc) on iOS/visionOS when built with older SDKs."
        }
      ],
      "key_commits": [
        {
          "hash": "ce585987e8f9",
          "date": "2024-04-05",
          "subject": "(3) Adopt com.apple.developer.cs.allow-jit entitlement for iOS. https://bugs.webkit.org/show_bug.cgi?id=270723 rdar://122841355"
        },
        {
          "hash": "ee19c59a58e7",
          "date": "2023-06-22",
          "subject": "Re-landing: Skip JIT memory allocation in ExecutableAllocator::disableJIT() when running on an open source XNU. https://bugs.webkit.org/show_bug.cgi?id=258409 rdar://111170164"
        }
      ],
      "plist_declarations": [
        {
          "file": "Source/JavaScriptCore/entitlements.plist",
          "line": 9,
          "value": true,
          "process": "jsc / JSC Tools"
        }
      ],
      "script_declarations": [
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 478,
          "function": "ios_family_process_webcontent_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/WebKit/Scripts/process-entitlements.sh",
          "line": 481,
          "function": "ios_family_process_webcontent_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "WebContent",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 192,
          "function": "ios_family_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        },
        {
          "file": "Source/JavaScriptCore/Scripts/process-entitlements.sh",
          "line": 195,
          "function": "ios_family_process_jsc_entitlements",
          "subkey": null,
          "type": "bool",
          "value": "YES",
          "process": "jsc / JSC Tools",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/jit/ExecutableAllocator.cpp",
          "line": 137,
          "process": "WebContent / JSC",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 158,
      "entitlement": "get-task-allow",
      "category": "generally-available",
      "ios_parity_status": "ios-public-parity",
      "functional_domain": "Developer Tools & Testing",
      "short_purpose": "Allows developer tools like Xcode and LLDB to attach to, inspect, and debug the process on iOS and visionOS.",
      "webkit_usage_summary": "JavaScriptCore's remote inspector subsystem (in JSRemoteInspector.cpp) inspects the host process's audit token for get-task-allow on iOS and visionOS. When an application is linked against an SDK predating inspectable-by-default restrictions, the presence of get-task-allow automatically enables remote Web Inspector debugging without requiring explicit opt-in. Test harnesses and development builds of WebKit processes also receive this entitlement to facilitate debugging under Xcode.",
      "browserenginekit_implications": "Third-party iOS browsers and BrowserEngineKit extension processes have standard access to get-task-allow in debug builds, as Xcode and Apple development provisioning profiles automatically inject it. In release/App Store distribution builds, this entitlement is stripped by Apple's code-signing pipeline, so production inspection must be controlled programmatically via the inspectable API rather than relying on development entitlements.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "UIProcess / JSC Host"
      ],
      "platforms": [
        "iOS",
        "visionOS"
      ],
      "values_seen": [
        "true"
      ],
      "enforcement_mechanisms": [
        "WebKit C++/ObjC Runtime Check"
      ],
      "key_code_pointers": [
        {
          "file": "Source/JavaScriptCore/API/JSRemoteInspector.cpp",
          "line": 96,
          "description": "Checks get-task-allow on the parent/main process audit token on iOS/visionOS to enable remote inspection by default for legacy SDK apps"
        }
      ],
      "key_commits": [
        {
          "hash": "3d99c5a13754",
          "date": "2022-10-14",
          "subject": "Remote Web Inspector: [Cocoa] `inspectable` API"
        },
        {
          "hash": "c663098fb4c1",
          "date": "2024-05-28",
          "subject": "Xcode is not able to attach to WebContent Development variant"
        }
      ],
      "plist_declarations": [],
      "script_declarations": [],
      "code_checks": [
        {
          "file": "Source/JavaScriptCore/API/JSRemoteInspector.cpp",
          "line": 1050,
          "process": "UIProcess / JSC Host",
          "platforms": [
            "iOS",
            "visionOS"
          ]
        }
      ],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    },
    {
      "id": 159,
      "entitlement": "keychain-access-groups",
      "category": "generally-available",
      "ios_parity_status": "macos-or-harness-only",
      "functional_domain": "Keychain, Crypto & Security",
      "short_purpose": "Specifies keychain access groups that an application is authorized to access for querying, storing, and sharing keychain items such as keys, certificates, and passwords.",
      "webkit_usage_summary": "In WebKit, this entitlement is not assigned to auxiliary runtime processes (WebContent, Networking, GPU), but is configured on test runner and harness host applications (WebKitTestRunner, WebKitTestRunnerApp, TestWebKitAPI) across iOS, macOS, visionOS, and simulator targets. It enables test suites to access specific test keychain groups (such as com.apple.TestWebKitAPI and com.apple.TestWebKitAPIAlternate) when validating credential storage, WebAuthn keys, or client identity certificates.",
      "browserenginekit_implications": "As a standard Apple developer capability, keychain-access-groups is generally available to third-party iOS app developers, allowing 3P browser host applications to declare access groups to manage and share credentials across their app suite. However, child BrowserEngineKit extension processes (webcontent, networking, rendering) run in sandboxes without direct keychain access; credential and certificate handling must be coordinated through or brokered by the browser host application or networking layer.",
      "canonical_processes": [
        "UIProcess / Host App",
        "JSC / Tools & Test Harness"
      ],
      "raw_processes": [
        "Test Runner / Harness (Host App)",
        "TestWebKitAPI"
      ],
      "platforms": [
        "iOS",
        "iOS/visionOS Simulator",
        "macCatalyst",
        "macOS",
        "visionOS"
      ],
      "values_seen": [
        "[\"com.apple.WebKitTestRunner\"]",
        "[\"com.apple.WebKitTestRunnerApp\"]",
        "com.apple.TestWebKitAPI",
        "com.apple.TestWebKitAPIAlternate"
      ],
      "enforcement_mechanisms": [
        "Signing Script (process-entitlements.sh)",
        "Static Plist (.entitlements)",
        "OS Kernel / XPC Daemon Enforcement"
      ],
      "key_code_pointers": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 34,
          "description": "Injects keychain-access-groups with 'com.apple.TestWebKitAPIAlternate' and 'com.apple.TestWebKitAPI' into TestWebKitAPI test bundles"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS.entitlements",
          "line": 5,
          "description": "Declares keychain-access-groups with 'com.apple.WebKitTestRunnerApp' for the iOS test runner host application"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner-internal.entitlements",
          "line": 5,
          "description": "Declares keychain-access-groups with 'com.apple.WebKitTestRunner' for internal WebKitTestRunner test harness builds"
        }
      ],
      "key_commits": [
        {
          "hash": "2177a497f6ef",
          "date": "2025-04-24",
          "subject": "Introduce a script to generate TestWebKitAPI entitlements"
        },
        {
          "hash": "8d65dc712846",
          "date": "2024-07-03",
          "subject": "WKTR installation on iOS devices is not working"
        },
        {
          "hash": "e347e3e762ae",
          "date": "2022-09-06",
          "subject": "Allow ad-hoc code signing for TestWebKitAPI and WebKitTestRunner"
        }
      ],
      "plist_declarations": [
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunner-internal.entitlements",
          "line": 5,
          "value": [
            "com.apple.WebKitTestRunner"
          ],
          "process": "Test Runner / Harness (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS-simulator.entitlements",
          "line": 5,
          "value": [
            "com.apple.WebKitTestRunnerApp"
          ],
          "process": "Test Runner / Harness (Host App)"
        },
        {
          "file": "Tools/WebKitTestRunner/Configurations/WebKitTestRunnerApp-iOS.entitlements",
          "line": 5,
          "value": [
            "com.apple.WebKitTestRunnerApp"
          ],
          "process": "Test Runner / Harness (Host App)"
        }
      ],
      "script_declarations": [
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 34,
          "function": "process_restricted_testwebkitapi_entitlements",
          "subkey": null,
          "type": "array",
          "value": "",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 35,
          "function": "process_restricted_testwebkitapi_entitlements",
          "subkey": "0",
          "type": "string",
          "value": "com.apple.TestWebKitAPIAlternate",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        },
        {
          "file": "Tools/TestWebKitAPI/Scripts/process-entitlements.sh",
          "line": 36,
          "function": "process_restricted_testwebkitapi_entitlements",
          "subkey": "1",
          "type": "string",
          "value": "com.apple.TestWebKitAPI",
          "process": "TestWebKitAPI",
          "platforms": [
            "iOS",
            "macOS",
            "macCatalyst",
            "visionOS"
          ]
        }
      ],
      "code_checks": [],
      "sandbox_checks": [],
      "related_spis_count": 0,
      "related_spis": []
    }
  ]
};
