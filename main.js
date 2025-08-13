// Shared variable to track the currently open dropdown
let openDropdown = null;

document.addEventListener("DOMContentLoaded", () => {
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
      name: "Developer Resources",
      cards: [
        {
          title: "Developer Center",
          desc: "What, why, and when to use it.",
          img: "/assets/img/edge/intro.jpg",
          href: "#",
        },
        {
          title: "API Library",
          desc: "Measure, budget, and reduce latency.",
          img: "/assets/img/edge/latency.jpg",
          href: "#",
        },
        {
          title: "APIL Product Library",
          desc: "From idea to deployed service.",
          img: "/assets/img/edge/deploy.jpg",
          href: "#",
        },
      ],
    },
    set3: {
      name: "Developer APIs",
      cards: [
        {
          title: "API Library",
          desc: "Protecting critical surfaces.",
          img: "/assets/img/sec/ddos.jpg",
          href: "#",
        },
        {
          title: "API Product Library",
          desc: "Principles and rollout tips.",
          img: "/assets/img/sec/zero-trust.jpg",
          href: "#",
        },
      ],
    },
    set4: {
      name: "Media & Entertainment",
      cards: [
        {
          title: "Vyvx",
          desc: "Backbone connectivity basics.",
          img: "/assets/img/net/ip-transit.jpg",
          href: "#",
        },
      ],
    },
    set5: {
      name: "Security",
      cards: [
        {
          title: "Security CSA",
          desc: "Private links to hyperscalers.",
          img: "/assets/img/cloud/direct.jpg",
          href: "#",
        },
        {
          title: "Black Lotus Labs",
          desc: "Design patterns that work.",
          img: "/assets/img/cloud/multicloud.jpg",
          href: "#",
        },
      ],
    },
    set6: {
      name: "Infrastructure",
      cards: [
        {
          title: "Infrastructure CSA",
          desc: "SLOs, SLIs, and alerts.",
          img: "/assets/img/obs/metrics.jpg",
          href: "#",
        },
        {
          title: "Wavelengths",
          desc: "Find latency hot spots.",
          img: "/assets/img/obs/tracing.jpg",
          href: "#",
        },
        {
          title: "Edge Storage",
          desc: "Actionable logging practices.",
          img: "/assets/img/obs/logs.jpg",
          href: "#",
        },
      ],
    },
    set7: {
      name: "Communication",
      cards: [
        {
          title: "Communication CSA",
          desc: "Quick wins for LCP/CLS/INP.",
          img: "/assets/img/web/vitals.jpg",
          href: "#",
        },
        {
          title: "Next-Gen Voice",
          desc: "Layered caching that sticks.",
          img: "/assets/img/web/cache.jpg",
          href: "#",
        },
        {
          title: "Lumen Cloud Communications",
          desc: "Modern formats & CDNs.",
          img: "/assets/img/web/images.jpg",
          href: "#",
        },
      ],
    },
    set8: {
      name: "Hyperscaler",
      cards: [
        {
          title: "PCF",
          desc: "Reduce cart abandonment.",
          img: "/assets/img/ecom/flow.jpg",
          href: "#",
        },
      ],
    },
    set9: {
      name: "Learn Analyst",
      cards: [
        {
          title: "Investor Relations",
          desc: "How CDNs accelerate content.",
          img: "/assets/img/cdn/primer.jpg",
          href: "#",
        },
        {
          title: "Newsroom",
          desc: "Keys, TTLs, and invalidation.",
          img: "/assets/img/cdn/keys.jpg",
          href: "#",
        },
        {
          title: "Why Lumen",
          desc: "Streaming best practices.",
          img: "/assets/img/cdn/media.jpg",
          href: "#",
        },
      ],
    },
    set10: {
      name: "Product Finder",
      cards: [
        {
          title: "Product Finder",
          desc: "ETL to real-time feeds.",
          img: "/assets/img/ai/pipes.jpg",
          href: "#",
        },
      ],
    },
    set11: {
      name: "Connectivity",
      cards: [
        {
          title: "Connectivity CSA",
          desc: "Get tailored guidance.",
          img: "/assets/img/next/sales.jpg",
          href: "#",
        },
        {
          title: "Internet Services",
          desc: "See real deployments.",
          img: "/assets/img/next/stories.jpg",
          href: "#",
        },
        {
          title: "On Demand Services",
          desc: "Get estimates and plans.",
          img: "/assets/img/next/pricing.jpg",
          href: "#",
        },
      ],
    },
  };

  const SET_ROUTER = {
    "Business Executive": {
      "Learn more about Lumen*": "learnLumen", //
      "Accelerate innovation with agile, AI-ready connectivity": "set11", // Connectivity
      "(missing on word doc)": "set6", // Infrastructure
      "Safeguard applications and data with integrated security solutions":
        "set5", // Security
      "Start a conversation about voice applications": "set7", // Communication
      "Source scalable, secure infrastructure for AI demands": "set6", // Infrastructure
      "Deliver live or prerecorded media content": "set4", // Media & Entertainment
    },
    "IT Decision Maker": {
      "Learn more about Lumen*": "learnLumen", //Learn about Lumen
      "Launch new services fast with scalable bandwidth": "set11", // Connectivity
      "Launch and scale digital expeLaunch and scale digital experiences":
        "set6", // Infrastructure
      "Address cyberattacks with advanced threat intelligence": "set5", // Security
      "Enhance customer interactions and scale communications": "set7", // Communication
      "Enable high-capacity connections for large AI deployments": "set9", // Hyperscaler
      "Deliver live broadcasts or prerecorded content": "set4", // Media & Entertainment
      "Explore Lumen products": "set10", // Product Finder
    },
    Investor: {
      "Learn more about Lumen*": "learnLumen", // Learn about Lumen
      "Explore Lumen products": "set10", // Product Finder
    },
    "Procurement Manager": {
      "Learn more about Lumen*": "learnLumen", // Learn about Lumen
      "Optimize IT investments by streamlining workflows": "set11", // Connectivity
      "Source high bandwidth with predictable costs": "set6", // Infrastructure
      "Drive efficiency and minimize costs with integrated security tools":
        "set5", // Security
      "Optimize revenue with predictable communications budgets": "set7", // Communication
      "Use AI to streamline operations": "set9", // Hyperscaler
      "Deliver live broadcasts or prerecorded content": "set4", // Media & Entertainment
      "Explore Lumen products": "set10", // Product Finder
    },
    Developer: {
      "Learn more about Lumen*": "learnLumen", // Learn about Lumen
      "Explore Developer resources*": "set2", // Developer Resources
      "Explore Lumen products": "set10", // Product Finder
    },
    "Industry Ananlyst": {
      "Learn more about Lumen*": "learnLumen", // Learn about Lumen
      "Explore Lumen products": "set10", // Product Finder
    },
    Other: {
      "Learn more about Lumen*": "learnLumen", // Learn about Lumen
      "Explore Lumen products": "set10", // Product Finder
    },
  };
  const chooseSet = (role, goal) =>
    (SET_ROUTER[role] && SET_ROUTER[role][goal]) || "learnLumen";
  const roleDropdown = document.querySelector("#sd-role-dropdown");
  const goalDropdown = document.querySelector("#sd-goal-dropdown");

  function setupDropdown(dropdown, options, onSelect) {
    const toggle = dropdown.querySelector(".sd-dropdown-toggle");
    const selectedText = dropdown.querySelector(".sd-selected");
    const menu = dropdown.querySelector(".sd-dropdown-menu");

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
      // If another dropdown is open and it's not this one, close it first
      if (openDropdown && openDropdown !== menu) {
        if (openDropdown.closeMenu) openDropdown.closeMenu();
      }
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
      // Set openDropdown to reference this dropdown's closeMenu
      openDropdown = { closeMenu };
      // For direct comparison in the check above, also store menu on the object
      openDropdown.menu = menu;
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
      // If this dropdown was the open one, clear openDropdown
      if (openDropdown && openDropdown.menu === menu) {
        openDropdown = null;
      }
    }
    toggle.addEventListener("click", () => {
      if (toggle.disabled) return;
      isOpen ? closeMenu() : openMenu();
    });
  }

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
            }" target="_blank" rel="noopener">Learn more</a>
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

  function onSelectRoleAndGoal(role, goal) {
    renderSet(chooseSet(role, goal), role, goal);
  }

  const roleKeys = Object.keys(ROLE_TO_GOALS);
  const defaultRole = roleKeys[0];
  const defaultGoal = ROLE_TO_GOALS[defaultRole][0];
  let selectedRole = null;
  let selectedGoal = null;

  const resultsSection = document.querySelector(".sd-results"); // to toggle visibility
  const goalSelectedSpan = () =>
    document.querySelector("#sd-goal-dropdown .sd-selected");
  resultsSection.classList.add("sd-hidden");

  // Role dropdown
  setupDropdown(roleDropdown, roleKeys, (role) => {
    selectedRole = role;
    selectedGoal = null;

    // Enable and populate goal dropdown for the chosen role
    const goalToggle = goalDropdown.querySelector(".sd-dropdown-toggle");
    goalToggle.disabled = false;

    // Reset goal placeholder text now that it's enabled
    goalSelectedSpan().textContent = "Choose...";

    setupDropdown(goalDropdown, ROLE_TO_GOALS[role], (goal) => {
      selectedGoal = goal;

      // Only render once both have values
      if (selectedRole && selectedGoal) {
        onSelectRoleAndGoal(selectedRole, selectedGoal);
        resultsSection.classList.remove("sd-hidden");
      }
    });

    // Hide results until the user picks a goal
    resultsSection.classList.add("sd-hidden");
  });

  // Goal dropdown initially disabled until a role is chosen.
  // If you want it pre-enabled with the default role's list (but no auto-select), do:
  const goalToggle = goalDropdown.querySelector(".sd-dropdown-toggle");
  // keep it disabled at first; it will be enabled after role selection
  // goalToggle.disabled = true; // (already true in HTML)

  // (Optional) If you want to pre-populate the goal list for the first role WITHOUT enabling it, uncomment:
  // setupDropdown(goalDropdown, ROLE_TO_GOALS[defaultRole], () => {});
});
