const locationEntries = [
  ["police", { title: "Police Station", text: "I investigate system-wide issues and track patterns to prevent recurrence. I've led large-scale spam mitigation automation to protect CRM integrity and reporting accuracy, and I investigate automations quietly failing and wasting money and credits. I advise on technically sound campaign architecture to prevent recurring problems." }],
  ["courthouse", { title: "Courthouse", text: "I act as a connective layer between Marketing, Sales, Product, Engineering, Web, and Legal to align stakeholders on complex initiatives. I translate business needs into scalable, compliant systems with governance oversight. I guide decisions through committee-style collaboration." }],
  ["recycle", { title: "Recycling and Waste", text: "I maintain the marketing and sales operations backlog and prioritize issues across Salesforce, HubSpot, Microsoft Dynamics 365, 6sense, and third-party integrations. I identify resolved issues to remove, track them via project management tools, and focus resources on high-impact problems. I realize which work has already been completed and should be cleared." }],
  ["post", { title: "Post Office", text: "I own lead imports, enrichment, deduplication and survivorship logic across the CRM ecosystem. I manage incoming requests and campaign troubleshooting with quick resolution. I ensure accurate output delivery and maintain clean data handoff across systems." }],
  ["gym", { title: "Gym", text: "I lead hands-on training for sales and marketing teams on tool usage and best practices. I research and implement enablement strategies to ensure consistent adoption across the organization. I build strength in team capability and skill development." }],
  ["fire", { title: "Fire Station", text: "I handle urgent campaign issues, system failures, and emergency troubleshooting across marketing technology platforms. I resolve recurring problems in partnership with vendors and platform support teams. I respond quickly to business \"fires\" and prevent downstream failures." }],
  ["library", { title: "Library", text: "Platform expertise: Clay, Salesforce, HubSpot, Marketo, Microsoft Dynamics 365, RingLead, Relevance AI, Momentum, MadKudu, 6sense, Clari/Groove, LinkedIn Sales Navigator, Smartlead, LeadForensics, Google Analytics, Looker Studio, Power BI, Excel, ZoomInfo, HG Insights, D&B, G2, Optimizely, SEMrush, Drupal 9, WordPress, GoToWebinar, Wrike, Slack, and Adobe Suite." }],
  ["school", { title: "School", text: "I spent eight years as a teacher and tutor, and many of my students still come to me for help. I learned the importance of planning, empathy, communication, and meaningful assessments, which help me explain complex ideas in a simple, additive way. I'm proactive in creating process documents and video explanations to help others step into my roles." }],
  ["cityhall", { title: "City Hall", text: "I collaborate with marketing, sales, product, developers, and legal to establish governance, data architecture standards, and compliance frameworks. I lead committee-style decision-making on technology investments and process changes. I share new technology via mass communications and drive enablement across the organization." }],
  ["shop", { title: "Shop", text: "I evaluate tools for integration fit, scalability, governance, and ROI, and I advise on purchase, renewal, or replacement decisions. I continuously reassess the tech stack to make sure we're getting meaningful value from every system." }],
  ["university", { title: "University", text: "I earned my Bachelor of Arts in Journalism with a German minor from Georgia State University in 2021. I completed Georgia Tech's AI for Business certification in 2025, and in 2026 I joined Clay's Alpha Forge program, an intensive GTM Engineering course for RevOps professionals." }],
  ["hospital", { title: "Hospital", text: "I diagnose platform and workflow issues by analyzing performance data and system health metrics. I identify root causes in CRM data architecture, unstructured data standardization, and system integration problems. I conduct deep investigations to prevent future failures." }],
  ["park", { title: "Park", text: "I recharge through piano, art, time with my pets, and exercise, and those things fuel my creativity and perspective. I also network and explore emerging GTM ideas, staying connected to the community and its evolving technology." }],
  ["museum", { title: "Museum", text: "I keep detailed records of how GTM systems and processes have evolved and transformed. I document my work automating workflows, building AI agents, and orchestrating data systems to drive revenue operations." }],
  ["bank", { title: "Bank", text: "I understand the revenue impact of marketing operations: lead quality, attribution accuracy, and clean sales handoff. I evaluate tech stack decisions through an ROI lens so each system choice supports measurable business outcomes." }],
  ["office", { title: "Office", text: "I bring a professional attitude and collaborate effectively with colleagues across departments. I work seamlessly with Marketing, Sales, Product, Engineering, Web, and Legal stakeholders, and I practice strong cross-cultural communication to align diverse teams." }],
  ["bakery", { title: "Bakery", text: "I love getting into creative mode. When I'm in that zone, I aim to deliver polished, scalable outputs through precision-focused operations and systematic execution, including bespoke AI agents and automated workflows that produce real deliverables." }],
  ["airport", { title: "Airport", text: "My career path has moved from education at Eye Level Learning, to running my own private tutoring studio, to GTM roles at Fortra, and then to Revenue Technology Analyst work at Aptean. I'm excited about where that journey goes next." }],
  ["home", { title: "Home", text: "I was born and still live in Atlanta, Georgia. I love visiting my family in Colombia, traveling in general, and spending time with my cats, Lulo and Cheddar. I'm a native Spanish and English speaker, I know German up to the B1 level, and I care deeply about making people feel welcomed and understood." }],
];

const locations = Object.fromEntries(locationEntries);

const GRID_COLS = 27;
const GRID_ROWS = 22;
// Two-cell road bands split each shared street into upper/lower or left/right halves.
const ROAD_COL_BANDS = [1, 6, 11, 16, 21, 26];
const ROAD_ROW_BANDS = [1, 6, 11, 16, 21];
const ROAD_COLS = ROAD_COL_BANDS.flatMap((start) => [start, start + 1]);
const ROAD_ROWS = ROAD_ROW_BANDS.flatMap((start) => [start, start + 1]);
const PARK_PATH_GAP_ROWS = [13, 14, 15];
const BLOCKED_ROAD_CELLS = new Set(
  PARK_PATH_GAP_ROWS.flatMap((row) => [`16,${row}`, `17,${row}`]),
);

const map = document.getElementById("map");
const buildings = Array.from(document.querySelectorAll(".building"));
const moveButtons = Array.from(document.querySelectorAll(".move-button"));
const popup = document.getElementById("building-popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupClose = document.getElementById("popup-close");
const walker = document.getElementById("walker");

const approachCellsById = new Map();
const approachCellToIds = new Map();
const buildingCenters = new Map();
const passableCells = new Set();

for (let col = 1; col <= GRID_COLS; col += 1) {
  for (let row = 1; row <= GRID_ROWS; row += 1) {
    const key = `${col},${row}`;
    if ((ROAD_COLS.includes(col) || ROAD_ROWS.includes(row)) && !BLOCKED_ROAD_CELLS.has(key)) {
      passableCells.add(key);
    }
  }
}

buildings.forEach((building) => {
  const col = Number.parseInt(building.style.getPropertyValue("--col"), 10);
  const row = Number.parseInt(building.style.getPropertyValue("--row"), 10);
  const width = Number.parseInt(building.style.getPropertyValue("--w"), 10);
  const height = Number.parseInt(building.style.getPropertyValue("--h"), 10);
  const cells = (building.dataset.approach || "")
    .split("|")
    .filter(Boolean)
    .map((pair) => {
      const [colText, rowText] = pair.split(",");
      return { col: Number.parseInt(colText, 10), row: Number.parseInt(rowText, 10) };
    });

  approachCellsById.set(building.dataset.id, cells);
  buildingCenters.set(building.dataset.id, {
    col: col + (width - 1) / 2,
    row: row + (height - 1) / 2,
  });
  cells.forEach((cell) => {
    const key = `${cell.col},${cell.row}`;
    if (!approachCellToIds.has(key)) {
      approachCellToIds.set(key, []);
    }
    approachCellToIds.get(key).push(building.dataset.id);
  });
});

const keyToDirection = {
  ArrowUp: [0, -1],
  ArrowDown: [0, 1],
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};

let walkerCell = { col: 2, row: 11 };
let activeId = null;
let catSettleTimer = null;
let autoWalkTimer = null;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function setWalkerCell(col, row) {
  walkerCell = {
    col: clamp(col, 1, GRID_COLS),
    row: clamp(row, 1, GRID_ROWS),
  };

  map.style.setProperty("--walker-col", String(walkerCell.col));
  map.style.setProperty("--walker-row", String(walkerCell.row));
}

function positionPopup(id) {
  if (!id) return;

  const activeBuilding = buildings.find((building) => building.dataset.id === id);
  if (!activeBuilding) return;

  const mapRect = map.getBoundingClientRect();
  const buildingRect = activeBuilding.getBoundingClientRect();
  const buildingCenterX = buildingRect.left - mapRect.left + (buildingRect.width / 2);
  const buildingCenterY = buildingRect.top - mapRect.top + (buildingRect.height / 2);
  const showOnRight = buildingCenterX < mapRect.width / 2;
  const horizontalGap = 16;
  const sideClassToAdd = showOnRight ? "popup-right" : "popup-left";
  const sideClassToRemove = showOnRight ? "popup-left" : "popup-right";

  popup.hidden = false;
  popup.setAttribute("aria-hidden", "false");
  popup.classList.remove(sideClassToRemove);
  popup.classList.add(sideClassToAdd);

  const popupWidth = popup.offsetWidth;
  const popupHeight = popup.offsetHeight;
  const rawLeft = showOnRight
    ? buildingRect.right - mapRect.left + horizontalGap
    : buildingRect.left - mapRect.left - horizontalGap;
  const clampedLeft = showOnRight
    ? clamp(rawLeft, 14, mapRect.width - popupWidth - 14)
    : clamp(rawLeft, popupWidth + 14, mapRect.width - 14);
  const clampedTop = clamp(buildingCenterY, popupHeight / 2 + 14, mapRect.height - (popupHeight / 2) - 14);
  const popupTopEdge = clampedTop - (popupHeight / 2);
  const tailTop = clamp(buildingCenterY - popupTopEdge, 22, popupHeight - 22);

  popup.style.setProperty("--bubble-left", `${clampedLeft}px`);
  popup.style.setProperty("--bubble-top", `${clampedTop}px`);
  popup.style.setProperty("--bubble-tail-top", `${tailTop}px`);
}

function updateSelection(id) {
  activeId = id;

  buildings.forEach((building) => {
    const isActive = building.dataset.id === id;
    building.classList.toggle("active", isActive);
    building.setAttribute("aria-pressed", String(isActive));
  });

  if (!id) {
    popup.hidden = true;
    popup.setAttribute("aria-hidden", "true");
    return;
  }

  const location = locations[id];
  if (!location) return;

  popupTitle.textContent = location.title;
  popupText.textContent = location.text;
  positionPopup(id);
}

function chooseApproachTarget(candidateIds, dx, dy) {
  if (candidateIds.length <= 1) {
    return candidateIds[0] || null;
  }

  const directionalMatch = candidateIds.find((id) => {
    const center = buildingCenters.get(id);
    if (!center) return false;
    if (dy < 0) return center.row < walkerCell.row;
    if (dy > 0) return center.row > walkerCell.row;
    if (dx < 0) return center.col < walkerCell.col;
    if (dx > 0) return center.col > walkerCell.col;
    return false;
  });

  if (directionalMatch) {
    return directionalMatch;
  }

  return candidateIds
    .slice()
    .sort((left, right) => {
      const leftCenter = buildingCenters.get(left);
      const rightCenter = buildingCenters.get(right);
      const leftDistance = leftCenter ? Math.hypot(leftCenter.col - walkerCell.col, leftCenter.row - walkerCell.row) : Number.POSITIVE_INFINITY;
      const rightDistance = rightCenter ? Math.hypot(rightCenter.col - walkerCell.col, rightCenter.row - walkerCell.row) : Number.POSITIVE_INFINITY;
      return leftDistance - rightDistance;
    })[0] || null;
}

function syncActiveApproach(dx = 0, dy = 0) {
  const ids = approachCellToIds.get(`${walkerCell.col},${walkerCell.row}`) || [];
  const id = chooseApproachTarget(ids, dx, dy);
  if (id !== activeId) {
    updateSelection(id);
  }
}

function showWalkingCat(dx = 0, dy = 0) {
  walker.classList.toggle("is-walking-up", dy < 0);
  walker.classList.toggle("is-walking-down", dy > 0);
  walker.classList.add("is-walking");
  window.clearTimeout(catSettleTimer);
  catSettleTimer = window.setTimeout(() => {
    walker.classList.remove("is-walking");
    walker.classList.remove("is-walking-up");
    walker.classList.remove("is-walking-down");
  }, 180);
}

function setWalkerFacing(dx, dy) {
  if (dx !== 0) {
    walker.style.transform = dx < 0 ? "scaleX(-1)" : "scaleX(1)";
  } else if (dy !== 0) {
    walker.style.transform = "scaleX(1)";
  }
}

function findShortestPath(start, target) {
  const startKey = `${start.col},${start.row}`;
  const targetKey = `${target.col},${target.row}`;
  if (startKey === targetKey) return [start];

  const queue = [start];
  const visited = new Set([startKey]);
  const previous = new Map();
  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  while (queue.length > 0) {
    const current = queue.shift();
    for (const [dx, dy] of directions) {
      const nextCol = current.col + dx;
      const nextRow = current.row + dy;
      const nextKey = `${nextCol},${nextRow}`;
      if (!passableCells.has(nextKey) || visited.has(nextKey)) continue;

      visited.add(nextKey);
      previous.set(nextKey, `${current.col},${current.row}`);

      if (nextKey === targetKey) {
        const path = [{ col: nextCol, row: nextRow }];
        let cursor = `${current.col},${current.row}`;
        while (cursor !== startKey) {
          const [col, row] = cursor.split(",").map(Number);
          path.push({ col, row });
          cursor = previous.get(cursor);
        }
        path.push(start);
        return path.reverse();
      }

      queue.push({ col: nextCol, row: nextRow });
    }
  }

  return null;
}

function chooseNearestApproachTarget(id) {
  const approachCells = approachCellsById.get(id) || [];
  return approachCells
    .map((cell) => ({ cell, path: findShortestPath(walkerCell, cell) }))
    .filter((entry) => entry.path)
    .sort((left, right) => left.path.length - right.path.length)[0] || null;
}

function stopAutoWalk() {
  window.clearTimeout(autoWalkTimer);
  autoWalkTimer = null;
}

function walkPath(path) {
  if (!path || path.length <= 1) {
    stopAutoWalk();
    syncActiveApproach();
    return;
  }

  stopAutoWalk();

  const steps = path.slice(1);
  const stepForward = () => {
    const nextStep = steps.shift();
    if (!nextStep) {
      stopAutoWalk();
      syncActiveApproach();
      return;
    }

    const dx = nextStep.col - walkerCell.col;
    const dy = nextStep.row - walkerCell.row;
    setWalkerFacing(dx, dy);
    setWalkerCell(nextStep.col, nextStep.row);
    showWalkingCat(dx, dy);
    syncActiveApproach(dx, dy);

    autoWalkTimer = window.setTimeout(stepForward, 165);
  };

  stepForward();
}

function moveWalkerByStep(dx, dy) {
  stopAutoWalk();
  const nextCol = clamp(walkerCell.col + dx, 1, GRID_COLS);
  const nextRow = clamp(walkerCell.row + dy, 1, GRID_ROWS);
  const nextCell = `${nextCol},${nextRow}`;

  if (nextCol === walkerCell.col && nextRow === walkerCell.row) return;
  if (!passableCells.has(nextCell)) return;

  setWalkerCell(nextCol, nextRow);
  setWalkerFacing(dx, dy);
  showWalkingCat(dx, dy);
  syncActiveApproach(dx, dy);
}

buildings.forEach((building) => {
  building.setAttribute("aria-pressed", "false");
  building.addEventListener("click", (event) => {
    event.stopPropagation();
    const nearestTarget = chooseNearestApproachTarget(building.dataset.id);
    if (!nearestTarget) {
      updateSelection(building.dataset.id);
      return;
    }

    walkPath(nearestTarget.path);
    building.blur();
  });
});

popup.addEventListener("click", (event) => {
  event.stopPropagation();
});

popupClose.addEventListener("click", () => {
  updateSelection(null);
  popupClose.blur();
});

map.addEventListener("click", (event) => {
  if (event.target.closest(".building") || popup.contains(event.target)) {
    return;
  }

  updateSelection(null);
});

window.addEventListener("keydown", (event) => {
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  const direction = keyToDirection[key];
  if (!direction) return;

  event.preventDefault();
  moveWalkerByStep(direction[0], direction[1]);
});

moveButtons.forEach((button) => {
  const [dx, dy] = button.dataset.move.split(",").map(Number);

  button.addEventListener("click", () => {
    moveWalkerByStep(dx, dy);
    button.blur();
  });
});

window.addEventListener("resize", () => {
  if (activeId) {
    positionPopup(activeId);
  }
});

setWalkerCell(walkerCell.col, walkerCell.row);
syncActiveApproach();
