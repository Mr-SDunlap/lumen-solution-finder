let openDropdown = null;

document.addEventListener("DOMContentLoaded", () => {
  const ROLE_TO_GOALS = {
    "A business executive": [
      "Learn more about Lumen",
      "Innovate faster with AI-ready connectivity",
      "Safeguard applications and data",
      "Optimize my collaboration strategy",
      "Source infrastructure for AI demands",
      "Deliver media content",
    ],
    "An IT decision maker": [
      "Learn more about Lumen",
      "Launch scalable services on demand",
      "Launch high-bandwidth services",
      "Defend against cyberattacks",
      "Enhance and scale customer interactions",
      "Enable high-capacity connections for AI workloads",
      "Deliver media content",
      "Explore Lumen products",
    ],
    "An investor": ["Learn more about Lumen", "Explore Lumen products"],
    "A procurement manager": [
      "Learn more about Lumen",
      "Streamline IT workflows",
      "Get high bandwidth with predictable costs",
      "Minimize costs with integrated security",
      "Optimize CapEx spend on communications",
      "Streamline operations with AI",
      "Deliver media content",
      "Explore Lumen products",
    ],
    "A developer": [
      "Learn more about Lumen",
      "Explore developer resources",
      "Explore APIs",
    ],
    "An industry analyst": ["Learn more about Lumen", "Explore Lumen products"],
    "In another role": ["Learn more about Lumen", "Explore Lumen products"],
  };

  // ----------------------------------------------------
  // 2) Outcome Sets (11 total) – edit images/links here
  // ----------------------------------------------------
  const OUTCOME_SETS = {
    learnLumen: {
      name: "Learn about Lumen",
      cards: [
        {
          title: "Why Lumen?",
          desc: "See how Lumen helps drive business growth with quick, secure and effortless solutions.",
          img: "https://assets.lumen.com/is/image/Lumen/wholesale-network-maps?Creativeid=882cfba8-f202-4ae3-8689-b275f9969a63",
          href: "https://www.lumen.com/en-us/why-lumen.html/content/lumen/en-us",
          alt: "Man sitting at a desk looking at a laptop computer",
        },
        {
          title:
            "Lumen® Connectivity Fabric<sup class='sd-superscript'>SM</sup>",
          desc: "Meet AI demands with a single port, self-service portal and full lifecycle automation.",
          img: "https://assets.lumen.com/is/image/Lumen/LE-resources-card-7?Creativeid=b9f782c2-b1cb-493c-9b1f-45a928b6593c",
          href: "https://www.lumen.com/en-us/lumen-connectivity-fabric/content/lumen/en-us",
          alt: "",
        },
        {
          title: "AI use cases",
          desc: "Support mission-critical AI workloads with support from the Lumen Network.",
          img: "https://assets.lumen.com/is/image/Lumen/wholesale-centurylink-qc-region?Creativeid=7f36cde7-6723-4b28-8acc-597369e4ac65",
          href: "https://www.lumen.com/en-us/solutions/use-case/artificial-intelligence.html/content/lumen/en-us",
          alt: "",
        },
      ],
    },
    set2: {
      name: "Developer Resources",
      cards: [
        {
          title: "Developer Center",
          desc: "See how developers are using Lumen APIs and get started today.",
          img: "https://assets.lumen.com/is/image/Lumen/brief-boost-your-competitive-card?Creativeid=c99cbb15-876a-42e8-9dc8-37bbd9969ef8",
          href: "https://developer.lumen.com/content/lumen/en-us",
          alt: "",
        },
        {
          title: "API Library",
          desc: "Explore the APIs Lumen offers and how they can help you meet evolving demands.",
          img: "https://assets.lumen.com/is/image/Lumen/AI-use-case-resource-enterprise-infographic?Creativeid=2ab3ebbf-49c7-43d2-b254-3888fc537f17",
          href: "https://developer.lumen.com/library/content/lumen/en-us",
          alt: "",
        },
        {
          title: "API Product Library",
          desc: "Browse our diverse suite of products and find the solutions best suited to your business needs.",
          img: "https://assets.lumen.com/is/image/Lumen/AI-use-case-resource-secure-your-future-blog?Creativeid=49906121-5423-4651-a2f6-9388340c3b3d",
          href: "https://developer.lumen.com/products#allProducts/content/lumen/en-us",
          alt: "",
        },
      ],
    },
    set3: {
      name: "Developer APIs",
      cards: [
        {
          title: "API Library",
          desc: "Explore the APIs Lumen offers and how they can help you meet evolving demands.",
          img: "https://assets.lumen.com/is/image/Lumen/AI-use-case-resource-enterprise-infographic?Creativeid=2ab3ebbf-49c7-43d2-b254-3888fc537f17",
          href: "https://developer.lumen.com/library/content/lumen/en-us",
          alt: "",
        },
        {
          title: "API Product Library",
          desc: "Browse our diverse suite of products and find the solutions best suited to your business needs.",
          img: "https://assets.lumen.com/is/image/Lumen/AI-use-case-resource-secure-your-future-blog?Creativeid=49906121-5423-4651-a2f6-9388340c3b3d",
          href: "https://developer.lumen.com/products#allProducts/content/lumen/en-us",
          alt: "",
        },
      ],
    },
    set4: {
      name: "Media & Entertainment",
      cards: [
        {
          title: "Lumen® Vyvx® Broadcast Solutions",
          desc: "Transform your broadcasting capabilities with our full portfolio of end-to-end video transport solutions.",
          img: "https://assets.lumen.com/is/image/Lumen/resource-5-ways-to-supercharge-your-strategy-to-accelerate-growth?Creativeid=ee0b1f4a-9e52-4f31-8b5b-624f204ddce9",
          href: "https://www.lumen.com/en-us/edge-cloud/vyvx-broadcast-solutions.html/content/lumen/en-us",
          alt: "",
        },
      ],
    },
    set5: {
      name: "Security",
      cards: [
        {
          title: "Security Services",
          desc: "Fortify your apps and data with expert-backed integrated cybersecurity solutions.",
          img: "https://assets.lumen.com/is/image/Lumen/dia-sase-bundle-resources-card?Creativeid=4b624977-9450-41ef-b265-ff68cbed1279",
          href: "https://www.lumen.com/en-us/services/security/content/lumen/en-us",
          alt: "",
        },
        {
          title: "Black Lotus Labs®",
          desc: "Identify and address cyberattacks before they strike with advanced threat prevention.",
          img: "https://assets.lumen.com/is/image/Lumen/featured-resource-data-sheet?Creativeid=1b5c6514-22f5-46a1-bc04-147996577b23",
          href: "https://www.lumen.com/en-us/security/black-lotus-labs.html/content/lumen/en-us",
          alt: "",
        },
      ],
    },
    set6: {
      name: "Infrastructure",
      cards: [
        {
          title: "Infrastructure Services",
          desc: "Build a tailored, AI-ready foundation that meets your business needs.",
          img: "https://assets.lumen.com/is/image/Lumen/AI-use-case-resource-social-engineering-blog?Creativeid=9a489328-f416-4a10-9742-b9b81b70de94",
          href: "https://www.lumen.com/en-us/services/infrastructure.html/content/lumen/en-us",
          alt: "",
        },
        {
          title: "Wavelength Solutions",
          desc: "Deliver high-capacity, scalable connectivity for AI and next-gen applications.",
          img: "https://assets.lumen.com/is/image/Lumen/brochure-card?Creativeid=4281b776-874d-4a50-9313-45c7a1ad45a6",
          href: "https://www.lumen.com/en-us/services/wavelengths.html/content/lumen/en-us",
          alt: "",
        },
        {
          title: "Edge Cloud Solutions",
          desc: "Learn how our edge cloud infrastructure drives productivity in major industries.",
          img: "https://assets.lumen.com/is/image/Lumen/resource-infographic?Creativeid=1628e313-09e1-444a-b151-6dd4676882bc",
          href: "https://www.lumen.com/en-us/edge-cloud.html/content/lumen/en-us",
          alt: "",
        },
      ],
    },
    set7: {
      name: "Communication",
      cards: [
        {
          title: "Communication Services",
          desc: "Optimize your collaboration with seamless connectivity services.",
          img: "https://assets.lumen.com/is/image/Lumen/AI-Finance%20Trends-Resource%20card-480x200?Creativeid=eaae238b-fbcd-490e-83d3-871d4c79ca29",
          href: "https://www.lumen.com/en-us/services/communication.html/content/lumen/en-us",
          alt: "",
        },
        {
          title: "Next-Gen Voice",
          desc: "Transform your communications with cloud-based business voice solutions.",
          img: "https://assets.lumen.com/is/image/Lumen/wholesale%20voice?Creativeid=35549077-a059-49c9-8144-994be2cd16e7",
          href: "https://www.lumen.com/en-us/collaboration/voice.html/content/lumen/en-us",
          alt: "",
        },
        {
          title: "Lumen Cloud Communications (Not in copy doc)",
          desc: "TBD",
          img: "https://assets.lumen.com/is/image/Lumen/wholesale-support?Creativeid=b2210642-26fd-47fd-a2ad-0fffbb25ff36",
          href: "https://www.lumen.com/en-us/services/lumen-cloud-communications.html/content/lumen/en-us",
          alt: "",
        },
      ],
    },
    set8: {
      name: "Hyperscaler",
      cards: [
        {
          title: "Private Connectivity Fabric (PCF)",
          desc: "Leverage our future-ready network to meet next-gen data demands.",
          img: "https://assets.lumen.com/is/image/Lumen/wholesale-centurylink-qc-region?Creativeid=7f36cde7-6723-4b28-8acc-597369e4ac65",
          href: "https://www.lumen.com/en-us/networking/private-connectivity-fabric.html/content/lumen/en-us",
          alt: "",
        },
      ],
    },
    set9: {
      name: "Learn Analyst",
      cards: [
        {
          title: "Investor Relations",
          desc: "Stay informed on stock updates, quarterly results and more.",
          img: "https://assets.lumen.com/is/image/Lumen/midsize-business-resource-card?Creativeid=9c4c6f2d-04e7-4974-b7a9-1778804adae3",
          href: "https://ir.lumen.com/home/default.aspx/content/lumen/en-us", //Ask Jared about this kind of url
          alt: "",
        },
        {
          title: "Newsroom",
          desc: "Stay up to date on the latest news, press resources and insights from Lumen.",
          img: "https://assets.lumen.com/is/image/Lumen/resource-webinar?Creativeid=080521eb-7861-499c-aded-b14e58cdf8b1",
          href: "https://www.lumen.com/en-us/news/press-resources.html/content/lumen/en-us",
          alt: "",
        },
        {
          title: "Why Lumen?",
          desc: "See how Lumen helps drive business growth with quick, secure and effortless solutions.",
          img: "https://assets.lumen.com/is/image/Lumen/wholesale-network-maps?Creativeid=882cfba8-f202-4ae3-8689-b275f9969a63",
          href: "https://www.lumen.com/en-us/why-lumen.html/content/lumen/en-us",
          alt: "",
        },
      ],
    },
    set10: {
      name: "Product Finder",
      cards: [
        {
          title: "Product Finder",
          desc: "Explore our product library and find the right fit for your business.",
          img: "https://assets.lumen.com/is/image/Lumen/AI-use-case-resource-AI-essentials-checklist?Creativeid=33939aa2-ac20-45a6-b985-c69903120b1a",
          href: "https://www.lumen.com/en-us/resources/product-finder.html/content/lumen/en-us",
          alt: "",
        },
      ],
    },
    set11: {
      name: "Connectivity",
      cards: [
        {
          title: "Connectivity Services",
          desc: "Meet next-gen data demands with flexible, high-bandwidth, low-latency connectivity solutions.",
          img: "https://assets.lumen.com/is/image/Lumen/naas-analyst-report?Creativeid=923c04ac-90bf-4984-8eb4-bd91372ee89a",
          href: "https://www.lumen.com/en-us/services/connectivity.html/content/lumen/en-us",
          alt: "",
        },
        {
          title: "Internet Services",
          desc: "Find the high-speed, dynamic internet solutions that work best for your enterprise.",
          img: "https://assets.lumen.com/is/image/Lumen/enterprise-network-ebook?Creativeid=aee9306d-dd87-4a86-bed4-bd661ce5fb00",
          href: "https://www.lumen.com/en-us/networking/internet-services.html/content/lumen/en-us",
          alt: "",
        },
        {
          title: "On-Demand Services",
          desc: "Determine which of our customizable pay-as-you-go models of network services best aligns with your business needs.",
          img: "https://assets.lumen.com/is/image/Lumen/technology-industry-cards-img-1?Creativeid=8fa2332b-f442-4a71-9263-e2d056dc3042",
          href: "https://www.lumen.com/en-us/networking/on-demand-services.html/content/lumen/en-us",
          alt: "",
        },
      ],
    },
  };

  const SET_ROUTER = {
    "A business executive": {
      "Learn more about Lumen": "learnLumen", //
      "Innovate faster with AI-ready connectivity": "set11", // Connectivity
      "Safeguard applications and data": "set5", // Security
      "Optimize my collaboration strategy": "set7", // Communication
      "Source infrastructure for AI demands": "set6", // Infrastructure
      "Deliver media content": "set4", // Media & Entertainment
    },
    "An IT decision maker": {
      "Learn more about Lumen": "learnLumen", //Learn about Lumen
      "Launch scalable services on demand": "set11", // Connectivity
      "Launch high-bandwidth services": "set6", // Infrastructure
      "Defend against cyberattacks": "set5", // Security
      "Enhance and scale customer interactions": "set7", // Communication
      "Enable high-capacity connections for AI workloads": "set8", // Hyperscaler
      "Deliver media content": "set4", // Media & Entertainment
      "Explore Lumen products": "set10", // Product Finder
    },
    "An investor": {
      "Learn more about Lumen": "set9", // Learn analyst
      "Explore Lumen products": "set10", // Product Finder
    },
    "A procurement manager": {
      "Learn more about Lumen": "learnLumen", // Learn about Lumen
      "Streamline IT workflows": "set11", // Connectivity
      "Get high bandwidth with predictable costs": "set6", // Infrastructure
      "Minimize costs with integrated security": "set5", // Security
      "Optimize CapEx spend on communications": "set7", // Communication
      "Streamline operations with AI": "set8", // Hyperscaler
      "Deliver media content": "set4", // Media & Entertainment
      "Explore Lumen products": "set10", // Product Finder
    },
    "A developer": {
      "Learn more about Lumen": "learnLumen", // Learn about Lumen
      "Explore developer resources": "set2", // Developer Resources
      "Explore APIs": "set3", // Developer APIs
    },
    "An industry analyst": {
      "Learn more about Lumen": "learnLumen", // Learn about Lumen
      "Explore Lumen products": "set10", // Product Finder
    },
    "In another role": {
      "Learn more about Lumen": "learnLumen", // Learn about Lumen
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
    const alreadyBound = dropdown.dataset.bound === "true";

    // (Re)build menu items every call
    menu.innerHTML = "";
    options.forEach((opt) => {
      const li = document.createElement("li");
      li.textContent = opt;
      li.addEventListener("click", () => {
        selectedText.textContent = opt;

        if (alreadyBound) {
          // We're in a rebind call: don't call closeMenu() (TDZ on isOpen).
          // Use the existing toggle handler to close gracefully.
          if (toggle.classList.contains("open") && !toggle.disabled) {
            toggle.click();
          }
        } else {
          // First-time bind path: safe to call closeMenu defined below.
          closeMenu();
        }

        onSelect(opt);
      });
      menu.appendChild(li);
    });

    // Prevent duplicate listeners when setupDropdown is called multiple times
    if (alreadyBound) {
      return; // options rebuilt above; keep existing toggle handlers
    }

    let isOpen = false;

    function openMenu() {
      // If the user is about to change their role, animate current cards out
      if (dropdown.dataset.type === "role") {
        try {
          renderEmptyState();
        } catch (_) {}
      }

      // Close any other open dropdown (compare against the stored menu)
      if (openDropdown && openDropdown.menu !== menu) {
        if (openDropdown.closeMenu) openDropdown.closeMenu();
      }
      isOpen = true;

      // Make sure the menu is visible before animating in
      menu.style.display = "block";
      menu.style.visibility = "visible";
      menu.style.opacity = "0";
      menu.style.pointerEvents = "auto";

      anime({
        targets: menu,
        opacity: [0, 1],
        translateY: [-5, 0],
        duration: 200,
        easing: "easeOutQuad",
      });
      toggle.classList.add("open");

      openDropdown = { closeMenu, menu };
    }

    function closeMenu() {
      isOpen = false;
      menu.style.pointerEvents = "none";
      anime({
        targets: menu,
        opacity: [1, 0],
        translateY: [0, -5],
        duration: 200,
        easing: "easeInQuad",
        complete: () => {
          menu.style.display = "none";
          menu.style.visibility = "hidden";
          menu.style.transform = "translateY(-5px)";
        },
      });
      toggle.classList.remove("open");
      if (openDropdown && openDropdown.menu === menu) {
        openDropdown = null;
      }
    }

    toggle.addEventListener("click", () => {
      if (toggle.disabled) return;
      isOpen ? closeMenu() : openMenu();
    });

    dropdown.dataset.bound = "true";
  }

  function renderEmptyState() {
    const grid = document.querySelector("#sd-resultGrid");
    const summary = document.querySelector("#sd-resultSummary");
    if (summary) summary.textContent = "";

    const existing = grid.querySelectorAll(".sd-card");
    if (existing.length) {
      anime.remove(existing);
      anime({
        targets: existing,
        opacity: [1, 0],
        translateY: [0, -20], // fade out & move UP
        duration: 250,
        easing: "easeInQuad",
        complete: () => {
          grid.innerHTML = "";
          const empty = document.createElement("div");
          empty.className = "sd-card sd-empty-state";
          empty.innerHTML = ``;
          grid.appendChild(empty);
        },
      });
    } else {
      grid.innerHTML = "";
      const empty = document.createElement("div");
      empty.className = "sd-card sd-empty-state";
      empty.innerHTML = ``;
      grid.appendChild(empty);
    }
  }

  function renderSet(setKey, role, goal) {
    const grid = document.querySelector("#sd-resultGrid");
    const summary = document.querySelector("#sd-resultSummary");
    if (summary) {
      summary.textContent = "Based on your answers, here's what we suggest:";
    }
    const setObj = OUTCOME_SETS[setKey] || OUTCOME_SETS.learnLumen;

    // Helper to build new cards
    const buildNewCards = () => {
      grid.innerHTML = "";
      setObj.cards.forEach((c, idx) => {
        const card = document.createElement("div");
        card.className = "sd-card";
        const safeImg =
          c.img || `https://picsum.photos/400/200?random=${idx + 1}`;
        card.innerHTML = `
        <div class="sd-card-image"><img src="${safeImg}" alt="${
          c.alt || ""
        }" loading="lazy" decoding="async" width="400" height="200"></div>
        <div class="sd-card-content">
          <h3>${c.title}</h3>
          <p class="sd-card-description">${c.desc || ""}</p>
          <a href="${c.href || "#"}" target="_blank" rel="noopener">
            <p class="sd-tertiary-cta">Learn more</p>
            <div class="sd-arrow">
              <span class="sd-arrow-line"></span>
              <span class="sd-arrow-top-tic"></span>
              <span class="sd-arrow-bottom-tic"></span>
            </div>
          </a>
        </div>
      `;
        grid.appendChild(card);
      });

      // Animate new cards IN (fade in + move DOWN)
      anime({
        targets: ".sd-card",
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: anime.stagger(120),
        duration: 600,
        easing: "easeOutQuad",
      });
    };

    // If there are existing cards, animate them OUT first
    const existing = grid.querySelectorAll(".sd-card");
    if (existing.length) {
      anime.remove(existing);
      anime({
        targets: existing,
        opacity: [1, 0],
        translateY: [0, -20], // fade out + move UP
        duration: 320, // slow enough to be visible
        easing: "easeInQuad",
        complete: () => buildNewCards(),
      });
    } else {
      // No existing cards, just build the new ones
      buildNewCards();
    }
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

  // Role dropdown
  setupDropdown(roleDropdown, roleKeys, (role) => {
    selectedRole = role;
    selectedGoal = null;

    // Enable and populate goal dropdown for the chosen role
    const goalToggle = goalDropdown.querySelector(".sd-dropdown-toggle");
    goalToggle.disabled = false;

    // Reset goal placeholder text now that it's enabled
    goalSelectedSpan().textContent = "Choose...";
    renderEmptyState();

    setupDropdown(goalDropdown, ROLE_TO_GOALS[role], (goal) => {
      selectedGoal = goal;

      // Only render once both have values
      if (selectedRole && selectedGoal) {
        onSelectRoleAndGoal(selectedRole, selectedGoal);
        resultsSection.classList.remove("sd-hidden");
      }
    });
  });

  const goalToggle = goalDropdown.querySelector(".sd-dropdown-toggle");
  renderEmptyState();

  goalSelectedSpan().textContent = "Choose...";
});
