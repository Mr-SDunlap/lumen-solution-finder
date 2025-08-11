document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------------------------------
  // 1) Role -> Goals (your data, with one typo corrected)
  // ----------------------------------------------------
  const ROLE_TO_GOALS = {
    "Business Executive": [
      "Learn more about Lumen*",
      "Accelerate innovation with agile, AI-ready connectivity",
      "(missing on word doc)",
      "Safeguard applications and data with integrated security solutions",
      "Start a conversation about voice applications",
      "Source scalable, secure infrastructure for AI demands",
      "Deliver live or prerecorded media content",
    ],
    "IT Decision Maker": [
      // <- fixed spelling
      "Learn more about Lumen*",
      "Launch new services fast with scalable bandwidth",
      "Launch and scale digital experiences",
      "Address cyberattacks with advanced threat intelligence",
      "Enhance customer interactions and scale communications",
      "Enable high-capacity connections for large AI deployments",
      "Deliver live broadcasts or prerecorded content",
      "Explore Lumen products",
    ],
    Investor: ["Learn more about Lumen*", "Explore Lumen products"],
    "Procurement Manager": [
      "Learn more about Lumen*",
      "Optimize IT investments by streamlining workflows",
      "Source high bandwidth with predictable costs",
      "Drive efficiency and minimize costs with integrated security tools",
      "Optimize revenue with predictable communications budgets",
      "Use AI to streamline operations",
      "Deliver live broadcasts or prerecorded content",
      "Explore Lumen products",
    ],
    Developer: [
      "Learn more about Lumen*",
      "Explore Developer resources*",
      "Explore Lumen products",
    ],
    "Industry Analyst": ["Learn more about Lumen*", "Explore Lumen products"],
    Other: ["Learn more about Lumen*", "Explore Lumen products"],
  };

  // ----------------------------------------------------
  // 2) Outcome Sets (11 total) – edit images/links here
  // ----------------------------------------------------
  const OUTCOME_SETS = {
    learnLumen: {
      name: "Learn about Lumen",
      cards: [
        {
          title: "Why Lumen",
          desc: "A quick overview of Lumen’s value and where it shines.",
          img: "/assets/img/learn/why-lumen.jpg",
          href: "https://www.lumen.com/en-us/about.html",
        },
        {
          title: "LCF",
          desc: "Lumen Connected Federation (LCF) at a glance and why it matters.",
          img: "/assets/img/learn/lcf.jpg",
          href: "#",
        },
        {
          title: "AI Use Case",
          desc: "See how Lumen powers practical AI use cases at the edge.",
          img: "/assets/img/learn/ai-use-case.jpg",
          href: "#",
        },
      ],
    },
    set2: {
      name: "Performance & Edge",
      cards: [
        {
          title: "Edge Compute Intro",
          desc: "What, why, and when to use it.",
          img: "/assets/img/edge/intro.jpg",
          href: "#",
        },
        {
          title: "Latency Playbook",
          desc: "Measure, budget, and reduce latency.",
          img: "/assets/img/edge/latency.jpg",
          href: "#",
        },
        {
          title: "Deploy at Edge",
          desc: "From idea to deployed service.",
          img: "/assets/img/edge/deploy.jpg",
          href: "#",
        },
      ],
    },
    set3: {
      name: "Security Basics",
      cards: [
        {
          title: "DDoS 101",
          desc: "Protecting critical surfaces.",
          img: "/assets/img/sec/ddos.jpg",
          href: "#",
        },
        {
          title: "Zero Trust",
          desc: "Principles and rollout tips.",
          img: "/assets/img/sec/zero-trust.jpg",
          href: "#",
        },
        {
          title: "SASE Primer",
          desc: "Secure access service edge explained.",
          img: "/assets/img/sec/sase.jpg",
          href: "#",
        },
      ],
    },
    set4: {
      name: "Networking",
      cards: [
        {
          title: "IP Transit",
          desc: "Backbone connectivity basics.",
          img: "/assets/img/net/ip-transit.jpg",
          href: "#",
        },
        {
          title: "Wavelengths",
          desc: "High-capacity optical links.",
          img: "/assets/img/net/waves.jpg",
          href: "#",
        },
        {
          title: "SD-WAN",
          desc: "Branch networking made flexible.",
          img: "/assets/img/net/sdwan.jpg",
          href: "#",
        },
      ],
    },
    set5: {
      name: "Cloud Connect",
      cards: [
        {
          title: "Direct Connect",
          desc: "Private links to hyperscalers.",
          img: "/assets/img/cloud/direct.jpg",
          href: "#",
        },
        {
          title: "Multi-Cloud",
          desc: "Design patterns that work.",
          img: "/assets/img/cloud/multicloud.jpg",
          href: "#",
        },
        {
          title: "Cost Controls",
          desc: "Architect for predictable spend.",
          img: "/assets/img/cloud/costs.jpg",
          href: "#",
        },
      ],
    },
    set6: {
      name: "Observability",
      cards: [
        {
          title: "Metrics 101",
          desc: "SLOs, SLIs, and alerts.",
          img: "/assets/img/obs/metrics.jpg",
          href: "#",
        },
        {
          title: "Tracing",
          desc: "Find latency hot spots.",
          img: "/assets/img/obs/tracing.jpg",
          href: "#",
        },
        {
          title: "Logs",
          desc: "Actionable logging practices.",
          img: "/assets/img/obs/logs.jpg",
          href: "#",
        },
      ],
    },
    set7: {
      name: "Website Speed",
      cards: [
        {
          title: "Core Web Vitals",
          desc: "Quick wins for LCP/CLS/INP.",
          img: "/assets/img/web/vitals.jpg",
          href: "#",
        },
        {
          title: "Caching",
          desc: "Layered caching that sticks.",
          img: "/assets/img/web/cache.jpg",
          href: "#",
        },
        {
          title: "Images",
          desc: "Modern formats & CDNs.",
          img: "/assets/img/web/images.jpg",
          href: "#",
        },
      ],
    },
    set8: {
      name: "E-commerce",
      cards: [
        {
          title: "Frictionless Flow",
          desc: "Reduce cart abandonment.",
          img: "/assets/img/ecom/flow.jpg",
          href: "#",
        },
        {
          title: "Payments",
          desc: "Options & risk reduction.",
          img: "/assets/img/ecom/payments.jpg",
          href: "#",
        },
        {
          title: "Search",
          desc: "Better discovery = more sales.",
          img: "/assets/img/ecom/search.jpg",
          href: "#",
        },
      ],
    },
    set9: {
      name: "Content Delivery",
      cards: [
        {
          title: "CDN Primer",
          desc: "How CDNs accelerate content.",
          img: "/assets/img/cdn/primer.jpg",
          href: "#",
        },
        {
          title: "Cache Keys",
          desc: "Keys, TTLs, and invalidation.",
          img: "/assets/img/cdn/keys.jpg",
          href: "#",
        },
        {
          title: "Media Optim",
          desc: "Streaming best practices.",
          img: "/assets/img/cdn/media.jpg",
          href: "#",
        },
      ],
    },
    set10: {
      name: "Data & AI",
      cards: [
        {
          title: "Pipelines",
          desc: "ETL to real-time feeds.",
          img: "/assets/img/ai/pipes.jpg",
          href: "#",
        },
        {
          title: "Feature Store",
          desc: "Serve ML features reliably.",
          img: "/assets/img/ai/feature.jpg",
          href: "#",
        },
        {
          title: "Guardrails",
          desc: "Safe & compliant AI usage.",
          img: "/assets/img/ai/guard.jpg",
          href: "#",
        },
      ],
    },
    set11: {
      name: "Contact & Next Steps",
      cards: [
        {
          title: "Talk to Sales",
          desc: "Get tailored guidance.",
          img: "/assets/img/next/sales.jpg",
          href: "#",
        },
        {
          title: "Customer Stories",
          desc: "See real deployments.",
          img: "/assets/img/next/stories.jpg",
          href: "#",
        },
        {
          title: "Pricing",
          desc: "Get estimates and plans.",
          img: "/assets/img/next/pricing.jpg",
          href: "#",
        },
      ],
    },
  };

  // ----------------------------------------------------
  // 3) Optional mapping role+goal -> set key
  // ----------------------------------------------------
  const SET_ROUTER = {
    // e.g. "IT Decision Maker": { "Launch new services fast with scalable bandwidth": "set2" }
  };
  const chooseSet = (role, goal) =>
    (SET_ROUTER[role] && SET_ROUTER[role][goal]) || "learnLumen";

  // ----------------------------------------------------
  // 4) Dropdown wiring (custom animated)
  // ----------------------------------------------------
  const roleDropdown = document.querySelector("#sd-role-dropdown");
  const goalDropdown = document.querySelector("#sd-goal-dropdown");

  function setupDropdown(dropdown, options, onSelect) {
    const toggle = dropdown.querySelector(".sd-dropdown-toggle");
    const selectedText = dropdown.querySelector(".sd-selected");
    const menu = dropdown.querySelector(".sd-dropdown-menu");

    // Build menu
    menu.innerHTML = "";
    options.forEach((opt) => {
      const li = document.createElement("li");
      li.textContent = opt;
      li.addEventListener("click", () => {
        selectedText.textContent = opt;
        closeMenu();
        onSelect(opt);
      });
      menu.appendChild(li);
    });

    let isOpen = false;
    function openMenu() {
      isOpen = true;
      menu.style.pointerEvents = "auto";
      anime({
        targets: menu,
        opacity: [0, 1],
        translateY: [-5, 0],
        duration: 200,
        easing: "easeOutQuad",
      });
      toggle.classList.add("open");
    }
    function closeMenu() {
      isOpen = false;
      menu.style.pointerEvents = "none";
      anime({
        targets: menu,
        opacity: [1, 0],
        translateY: [0, -5],
        duration: 180,
        easing: "easeInQuad",
      });
      toggle.classList.remove("open");
    }
    toggle.addEventListener("click", () => {
      if (toggle.disabled) return;
      isOpen ? closeMenu() : openMenu();
    });
  }

  // ----------------------------------------------------
  // 5) Rendering a set (3 cards)
  // ----------------------------------------------------
  function renderSet(setKey, role, goal) {
    const summary = document.querySelector("#sd-resultSummary");
    const grid = document.querySelector("#sd-resultGrid");
    const setObj = OUTCOME_SETS[setKey] || OUTCOME_SETS.learnLumen;

    summary.className = "";
    summary.innerHTML = `<span class="sd-eyebrow">Selected</span>
                           <div><strong>${role}</strong> • ${goal}</div>`;

    grid.innerHTML = "";
    setObj.cards.forEach((c, idx) => {
      const card = document.createElement("div");
      card.className = "sd-card";
      const safeImg =
        c.img || `https://picsum.photos/400/200?random=${idx + 1}`;
      card.innerHTML = `
          <div class="sd-card-image"><img src="${safeImg}" alt="${
        c.title
      }"></div>
          <div class="sd-card-content">
            <h3>${c.title}</h3>
            <p>${c.desc || ""}</p>
            <a href="${
              c.href || "#"
            }" target="_blank" rel="noopener">Explore this suggestion</a>
          </div>
        `;
      grid.appendChild(card);
    });

    anime({
      targets: ".sd-card",
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100),
      duration: 500,
      easing: "easeOutQuad",
    });
  }

  // Helper for goal select
  function onSelectRoleAndGoal(role, goal) {
    renderSet(chooseSet(role, goal), role, goal);
  }

  // ----------------------------------------------------
  // 6) Initialize with defaults (always show something)
  // ----------------------------------------------------
  const roleKeys = Object.keys(ROLE_TO_GOALS);
  const defaultRole = roleKeys[0];
  const defaultGoal = ROLE_TO_GOALS[defaultRole][0];

  // Role dropdown
  setupDropdown(roleDropdown, roleKeys, (role) => {
    const goalToggle = goalDropdown.querySelector(".sd-dropdown-toggle");
    goalToggle.disabled = false;
    setupDropdown(goalDropdown, ROLE_TO_GOALS[role], (goal) => {
      onSelectRoleAndGoal(role, goal);
    });
  });

  // Goal dropdown defaults
  const goalToggle = goalDropdown.querySelector(".sd-dropdown-toggle");
  goalToggle.disabled = false;
  setupDropdown(goalDropdown, ROLE_TO_GOALS[defaultRole], (goal) => {
    onSelectRoleAndGoal(defaultRole, goal);
  });

  // Show defaults in UI + render default set
  roleDropdown.querySelector(".sd-selected").textContent = defaultRole;
  goalDropdown.querySelector(".sd-selected").textContent = defaultGoal;
  renderSet("learnLumen", defaultRole, defaultGoal);
});
