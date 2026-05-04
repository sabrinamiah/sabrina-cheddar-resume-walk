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

const techLabels = [
  "Salesforce",
  "Microsoft Dynamics 365",
  "Marketo",
  "Clay",
  "LLMs (+ vibe coding)",
  "Relevance AI",
  "Momentum",
  "Kernel AI",
  "MadKudu",
  "6sense",
  "Clari / Groove",
  "LinkedIn Sales Navigator Smartlead",
  "LeadForensics",
  "Google Analytics & Looker Studio Power BI",
  "Microsoft Excel",
  "ZoomInfo, HG Insights, D&B",
  "G2",
  "Optimizely",
  "SEMrush",
  "Drupal 9",
  "WordPress",
  "GoToWebinar",
  "Wrike",
  "Slack",
  "Adobe Suite",
];

const signalSortCards = [
  { card: "A company has $100M in annual revenue", category: "Firmographic Fit", feedback: "Revenue size suggests this account fits a defined target market." },
  { card: "A company has 1,200 employees", category: "Firmographic Fit", feedback: "Employee count helps qualify company size and market segment." },
  { card: "A company has a mature marketing team with many functions", category: "Firmographic Fit", feedback: "Org structure shows operational maturity and likely buying readiness." },
  { card: "A company has a dedicated RevOps function", category: "Firmographic Fit", feedback: "Team makeup signals process maturity and stronger GTM infrastructure." },
  { card: "A company serves enterprise healthcare buyers", category: "Firmographic Fit", feedback: "Industry and buyer type help confirm whether the account fits your target market." },
  { card: "A company operates across North America and EMEA", category: "Firmographic Fit", feedback: "Geographic footprint can signal scale, complexity, and strategic fit." },
  { card: "A company is backed by private equity", category: "Firmographic Fit", feedback: "Ownership structure can influence budget, growth goals, and GTM priorities." },
  { card: "A company has more than 50 sales reps", category: "Firmographic Fit", feedback: "Team size helps signal organizational scale and likely operational needs." },
  { card: "A company uses Salesforce", category: "Technographic Fit", feedback: "CRM usage is a key stack signal for compatibility and targeting." },
  { card: "A company does not use 6Sense", category: "Technographic Fit", feedback: "Missing intent tooling can signal whitespace or upsell opportunity." },
  { card: "A company recently installed Marketo", category: "Technographic Fit", feedback: "New platform adoption is a strong signal about current GTM systems." },
  { card: "A company uses Microsoft Dynamics 365", category: "Technographic Fit", feedback: "Existing systems help shape fit, messaging, and workflow design." },
  { card: "A company uses HubSpot but not Salesforce", category: "Technographic Fit", feedback: "Existing platform choices shape stack compatibility and targeting strategy." },
  { card: "A company uses ZoomInfo", category: "Technographic Fit", feedback: "Data tooling is a useful signal for GTM maturity and enrichment fit." },
  { card: "A company runs WordPress", category: "Technographic Fit", feedback: "CMS and site tooling can help indicate stack fit and implementation context." },
  { card: "A company recently removed a competitor tool from its stack", category: "Technographic Fit", feedback: "Tool removals can reveal whitespace, dissatisfaction, or active transition." },
  { card: "A company posts its first GTM Engineer role", category: "Hiring Signal", feedback: "This usually signals a move toward automation, data workflows, and modern GTM systems." },
  { card: "A company opens roles for both lifecycle marketing and marketing ops at the same time", category: "Hiring Signal", feedback: "Paired hiring like this often means the team is building a more mature demand engine." },
  { card: "A company is hiring RevOps in EMEA for the first time", category: "Hiring Signal", feedback: "Regional ops hiring can signal international expansion and process scaling." },
  { card: "A company adds job openings tied to ABM or intent-based outbound", category: "Hiring Signal", feedback: "That points to a more targeted, signal-driven go-to-market motion." },
  { card: "A company is hiring solutions engineers", category: "Hiring Signal", feedback: "Technical GTM hiring often signals a move upmarket or toward more complex sales." },
  { card: "A company adds openings for sales operations", category: "Hiring Signal", feedback: "Ops hiring points to investment in process, systems, and scale." },
  { card: "A company is hiring SDRs in multiple regions", category: "Hiring Signal", feedback: "Multi-region hiring often reflects broader GTM expansion." },
  { card: "A company is hiring demand generation managers", category: "Hiring Signal", feedback: "Demand gen hiring usually signals pipeline investment and growth planning." },
  { card: "A target account visits the pricing page three times this week", category: "Intent Signal", feedback: "Repeated pricing-page activity often signals active solution evaluation and near-term interest." },
  { card: "A company shows a surge in research around data governance", category: "Intent Signal", feedback: "Topic-level research spikes can reveal active buying interest before a form fill ever happens." },
  { card: "A prospect downloads a webinar replay", category: "Intent Signal", feedback: "Content engagement like this often indicates meaningful interest in a specific problem space." },
  { card: "A target account returns to the website three times in one week", category: "Intent Signal", feedback: "Repeated visits suggest sustained engagement rather than a one-off click." },
  { card: "A company shows increased intent around revenue attribution tools", category: "Intent Signal", feedback: "Intent data tied to a specific category can point to active vendor evaluation." },
  { card: "Multiple contacts from the same account visit the solutions page", category: "Intent Signal", feedback: "Multi-contact engagement often signals internal discussion and growing buying momentum." },
  { card: "A prospect registers for a product-focused webinar", category: "Intent Signal", feedback: "Event registrations around a product topic can be a strong hand-raise signal." },
  { card: "A target account spends significantly longer than usual on comparison content", category: "Intent Signal", feedback: "Deep time-on-page around comparison content often suggests active consideration of options." },
  { card: "A company just had layoffs", category: "Risk", feedback: "Layoffs can indicate contraction, budget pressure, or organizational instability." },
  { card: "A company freezes hiring across departments", category: "Risk", feedback: "Hiring freezes often point to caution, reduced spend, or internal risk." },
  { card: "A company closes a regional office", category: "Risk", feedback: "Office closures can indicate contraction or strategic pullback." },
  { card: "A company cuts marketing budget by 30%", category: "Risk", feedback: "Budget cuts often signal lower near-term spend and reduced GTM investment." },
  { card: "A company sharply reduces open roles", category: "Risk", feedback: "A sudden drop in hiring activity can indicate caution or slowing growth." },
  { card: "A company pauses expansion plans", category: "Risk", feedback: "Expansion slowdowns can point to budget pressure or internal uncertainty." },
  { card: "A company announces restructuring", category: "Risk", feedback: "Restructuring often signals instability, shifting priorities, or reduced spend." },
  { card: "A company loses a major customer", category: "Risk", feedback: "Customer loss can create revenue pressure and reduce short-term buying readiness." },
  { card: "A company just received $35M in funding", category: "Growth Signal", feedback: "Fresh funding usually increases capacity for hiring, tooling, and expansion." },
  { card: "A company has many roles open", category: "Growth Signal", feedback: "Broad hiring volume often signals expansion and momentum." },
  { card: "A major retailer lists a new company in their catalogue", category: "Growth Signal", feedback: "New distribution or channel reach is a strong expansion signal." },
  { card: "A company launches a new product line", category: "Growth Signal", feedback: "Product expansion often creates new GTM needs and budget opportunities." },
  { card: "A company opens a new office", category: "Growth Signal", feedback: "Physical expansion often reflects hiring, investment, and operating momentum." },
  { card: "A company acquires a smaller startup", category: "Growth Signal", feedback: "Acquisitions often signal expansion, budget, and new integration needs." },
  { card: "A company doubles its SDR hiring", category: "Growth Signal", feedback: "Accelerating revenue hiring is a strong indicator of growth intent." },
  { card: "A company expands into a new market", category: "Growth Signal", feedback: "New market entry usually creates fresh GTM needs and growth opportunities." },
];

const techShapeTemplates = [
  { name: "I", color: "#48d0ff", matrix: [[1, 1, 1, 1]] },
  { name: "O", color: "#ffd95f", matrix: [[1, 1], [1, 1]] },
  { name: "T", color: "#b881ff", matrix: [[0, 1, 0], [1, 1, 1]] },
  { name: "L", color: "#ffaf54", matrix: [[0, 0, 1], [1, 1, 1]] },
  { name: "J", color: "#6f95ff", matrix: [[1, 0, 0], [1, 1, 1]] },
  { name: "S", color: "#7fe48e", matrix: [[0, 1, 1], [1, 1, 0]] },
  { name: "Z", color: "#ff7886", matrix: [[1, 1, 0], [0, 1, 1]] },
];

const locations = Object.fromEntries(locationEntries);

const GRID_COLS = 27;
const GRID_ROWS = 22;
const ROAD_COL_BANDS = [1, 6, 11, 16, 21, 26];
const ROAD_ROW_BANDS = [1, 6, 11, 16, 21];
const ROAD_COLS = ROAD_COL_BANDS.flatMap((start) => [start, start + 1]);
const ROAD_ROWS = ROAD_ROW_BANDS.flatMap((start) => [start, start + 1]);
const PARK_PATH_GAP_ROWS = [13, 14, 15];
const BLOCKED_ROAD_CELLS = new Set(
  PARK_PATH_GAP_ROWS.flatMap((row) => [`16,${row}`, `17,${row}`]),
);

const TECH_COLS = 10;
const TECH_ROWS = 18;
const TECH_BASE_DROP_MS = 900;

const map = document.getElementById("map");
const buildings = Array.from(document.querySelectorAll(".building"));
const moveButtons = Array.from(document.querySelectorAll(".move-button"));
const popup = document.getElementById("building-popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupClose = document.getElementById("popup-close");
const walker = document.getElementById("walker");

const viewButtons = Array.from(document.querySelectorAll("[data-view-target]"));
const viewPanels = Array.from(document.querySelectorAll("[data-view-panel]"));

const techBoard = document.getElementById("tech-board");
const techScore = document.getElementById("tech-score");
const techLines = document.getElementById("tech-lines");
const techLevel = document.getElementById("tech-level");
const techCurrentLabel = document.getElementById("tech-current-label");
const techNextLabel = document.getElementById("tech-next-label");
const techStatus = document.getElementById("tech-status");
const techRestart = document.getElementById("tech-restart");
const techControlButtons = Array.from(document.querySelectorAll("[data-tech-action]"));
const signalScore = document.getElementById("signal-score");
const signalCorrect = document.getElementById("signal-correct");
const signalStreak = document.getElementById("signal-streak");
const signalProgress = document.getElementById("signal-progress");
const signalCardText = document.getElementById("signal-card-text");
const signalFeedback = document.getElementById("signal-feedback");
const signalFeedbackTitle = document.getElementById("signal-feedback-title");
const signalFeedbackText = document.getElementById("signal-feedback-text");
const signalLaneButtons = Array.from(document.querySelectorAll("[data-signal-category]"));
const signalNext = document.getElementById("signal-next");
const signalRestart = document.getElementById("signal-restart");

const approachCellsById = new Map();
const approachCellToIds = new Map();
const buildingCenters = new Map();
const passableCells = new Set();

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

let currentView = "resume-city";
let walkerCell = { col: 2, row: 11 };
let activeId = null;
let catSettleTimer = null;
let autoWalkTimer = null;
let techAnimationFrame = null;
let techLastTimestamp = null;

const techState = {
  board: createEmptyBoard(),
  pieces: new Map(),
  activePiece: null,
  nextPiece: null,
  score: 0,
  lines: 0,
  level: 1,
  paused: false,
  gameOver: false,
  pendingDropMs: 0,
  dropIntervalMs: TECH_BASE_DROP_MS,
  pieceCounter: 0,
};

const signalSortState = {
  deck: [],
  currentIndex: 0,
  score: 0,
  correct: 0,
  streak: 0,
  answered: false,
  finished: false,
};

let techShapeBag = [];
let techLabelBag = [];

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

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function shuffle(list) {
  const result = [...list];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function cloneMatrix(matrix) {
  return matrix.map((row) => [...row]);
}

function createEmptyBoard() {
  return Array.from({ length: TECH_ROWS }, () => Array(TECH_COLS).fill(null));
}

function createShapeBag() {
  return shuffle(techShapeTemplates);
}

function drawShapeTemplate() {
  if (techShapeBag.length === 0) {
    techShapeBag = createShapeBag();
  }

  return techShapeBag.pop();
}

function drawTechLabel() {
  if (techLabelBag.length === 0) {
    techLabelBag = shuffle(techLabels);
  }

  return techLabelBag.pop();
}

function createTechPiece() {
  const template = drawShapeTemplate();
  const matrix = cloneMatrix(template.matrix);
  const width = matrix[0].length;

  return {
    id: `piece-${techState.pieceCounter += 1}`,
    label: drawTechLabel(),
    color: template.color,
    x: Math.floor((TECH_COLS - width) / 2),
    y: 0,
    matrix,
  };
}

function pieceCells(piece, offsetX = piece.x, offsetY = piece.y, matrix = piece.matrix) {
  const cells = [];

  matrix.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (!value) return;
      cells.push({ x: offsetX + colIndex, y: offsetY + rowIndex });
    });
  });

  return cells;
}

function rotateMatrixClockwise(matrix) {
  return matrix[0].map((_, colIndex) =>
    matrix.map((row) => row[colIndex]).reverse(),
  );
}

function collides(piece, offsetX = piece.x, offsetY = piece.y, matrix = piece.matrix) {
  return pieceCells(piece, offsetX, offsetY, matrix).some((cell) => {
    if (cell.x < 0 || cell.x >= TECH_COLS) return true;
    if (cell.y >= TECH_ROWS) return true;
    if (cell.y < 0) return false;
    return techState.board[cell.y][cell.x] !== null;
  });
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

function setView(viewName) {
  currentView = viewName;

  viewButtons.forEach((button) => {
    const isActive = button.dataset.viewTarget === viewName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  viewPanels.forEach((panel) => {
    const isActive = panel.dataset.viewPanel === viewName;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  if (viewName === "tech-stack") {
    resumeTechGame();
    renderTechGame();
  } else {
    pauseTechGame("Tech Stack is paused while you explore Resume City.");
    if (activeId) {
      positionPopup(activeId);
    }

    if (viewName === "signal-sort") {
      renderSignalSort();
    }
  }
}

function updateSignalLaneButtons(selectedCategory = null, correctCategory = null) {
  signalLaneButtons.forEach((button) => {
    const isSelected = button.dataset.signalCategory === selectedCategory;
    const isCorrect = button.dataset.signalCategory === correctCategory;

    button.classList.remove("is-correct", "is-wrong", "is-locked");

    if (signalSortState.answered || signalSortState.finished) {
      button.classList.add("is-locked");
    }

    if (!signalSortState.answered) return;

    if (isCorrect) {
      button.classList.add("is-correct");
    } else if (isSelected) {
      button.classList.add("is-wrong");
    }
  });
}

function getCurrentSignalCard() {
  return signalSortState.deck[signalSortState.currentIndex] || null;
}

function renderSignalSort() {
  signalScore.textContent = String(signalSortState.score);
  signalCorrect.textContent = String(signalSortState.correct);
  signalStreak.textContent = String(signalSortState.streak);

  if (signalSortState.finished) {
    signalProgress.textContent = `Deck complete: ${signalSortState.correct} of ${signalSortState.deck.length} correct`;
    signalCardText.textContent = "Deck complete. Restart the deck to sort another round of Clay signals.";
    signalFeedback.classList.remove("is-success", "is-error");
    signalFeedbackTitle.textContent = "Round complete.";
    signalFeedbackText.textContent = `Final score: ${signalSortState.score}. You classified ${signalSortState.correct} of ${signalSortState.deck.length} signals correctly.`;
    signalNext.disabled = true;
    updateSignalLaneButtons();
    return;
  }

  const card = getCurrentSignalCard();
  if (!card) return;

  signalProgress.textContent = `Card ${signalSortState.currentIndex + 1} of ${signalSortState.deck.length}`;
  signalCardText.textContent = card.card;
  signalNext.disabled = !signalSortState.answered;

  if (!signalSortState.answered) {
    signalFeedback.classList.remove("is-success", "is-error");
    signalFeedbackTitle.textContent = "Sort the card into the strongest-fit lane.";
    signalFeedbackText.textContent = "Use the lane buttons below, or press number keys 1 through 6.";
    updateSignalLaneButtons();
  }
}

function submitSignalChoice(category) {
  if (currentView !== "signal-sort" || signalSortState.answered || signalSortState.finished) return;

  const card = getCurrentSignalCard();
  if (!card) return;

  signalSortState.answered = true;
  signalFeedback.classList.remove("is-success", "is-error");

  if (category === card.category) {
    signalSortState.correct += 1;
    signalSortState.streak += 1;
    signalSortState.score += 100 + ((signalSortState.streak - 1) * 20);
    signalFeedback.classList.add("is-success");
    signalFeedbackTitle.textContent = `Correct: ${card.category}`;
  } else {
    signalSortState.streak = 0;
    signalSortState.score = Math.max(0, signalSortState.score - 20);
    signalFeedback.classList.add("is-error");
    signalFeedbackTitle.textContent = `Best fit: ${card.category}`;
  }

  signalFeedbackText.textContent = card.feedback;
  signalNext.disabled = false;
  updateSignalLaneButtons(category, card.category);
  signalScore.textContent = String(signalSortState.score);
  signalCorrect.textContent = String(signalSortState.correct);
  signalStreak.textContent = String(signalSortState.streak);
}

function goToNextSignalCard() {
  if (!signalSortState.answered || signalSortState.finished) return;

  signalSortState.currentIndex += 1;
  signalSortState.answered = false;

  if (signalSortState.currentIndex >= signalSortState.deck.length) {
    signalSortState.finished = true;
  }

  renderSignalSort();
}

function resetSignalSort() {
  signalSortState.deck = shuffle(signalSortCards);
  signalSortState.currentIndex = 0;
  signalSortState.score = 0;
  signalSortState.correct = 0;
  signalSortState.streak = 0;
  signalSortState.answered = false;
  signalSortState.finished = false;
  renderSignalSort();
}

function updateTechHud() {
  techScore.textContent = String(techState.score);
  techLines.textContent = String(techState.lines);
  techLevel.textContent = String(techState.level);
  techCurrentLabel.textContent = techState.activePiece ? techState.activePiece.label : "Waiting for next stack";
  techNextLabel.textContent = techState.nextPiece ? techState.nextPiece.label : "Loading next stack";

  if (techState.gameOver) {
    techStatus.textContent = "Board overflow. Hit Restart Run to launch another stack.";
    return;
  }

  if (techState.paused && currentView === "tech-stack") {
    techStatus.textContent = "Paused. Press P or use the controls to jump back in.";
    return;
  }

  if (currentView !== "tech-stack") {
    techStatus.textContent = "Tech Stack is paused while you explore Resume City.";
    return;
  }

  techStatus.textContent = "Stack clean rows to keep the board under control.";
}

function fontSizeForPiece(label, widthCells, heightCells) {
  const base = (widthCells * 5) + (heightCells * 2);
  const penalty = Math.ceil(label.length / 7);
  return clamp(base - penalty + 4, 7, 12);
}

function createPieceElement(piece, active = false) {
  const cells = piece.cells ? piece.cells.map((cell) => ({ ...cell })) : pieceCells(piece);
  if (cells.length === 0) return null;

  const minX = Math.min(...cells.map((cell) => cell.x));
  const maxX = Math.max(...cells.map((cell) => cell.x));
  const minY = Math.min(...cells.map((cell) => cell.y));
  const maxY = Math.max(...cells.map((cell) => cell.y));
  const widthCells = maxX - minX + 1;
  const heightCells = maxY - minY + 1;

  const pieceElement = document.createElement("div");
  pieceElement.className = `tech-piece${active ? " is-active" : ""}`;
  pieceElement.style.left = `${(minX / TECH_COLS) * 100}%`;
  pieceElement.style.top = `${(minY / TECH_ROWS) * 100}%`;
  pieceElement.style.width = `${(widthCells / TECH_COLS) * 100}%`;
  pieceElement.style.height = `${(heightCells / TECH_ROWS) * 100}%`;

  cells.forEach((cell) => {
    const cellElement = document.createElement("div");
    cellElement.className = "tech-piece-cell";
    cellElement.style.left = `${((cell.x - minX) / widthCells) * 100}%`;
    cellElement.style.top = `${((cell.y - minY) / heightCells) * 100}%`;
    cellElement.style.width = `${100 / widthCells}%`;
    cellElement.style.height = `${100 / heightCells}%`;
    cellElement.style.background = `linear-gradient(180deg, ${piece.color}, color-mix(in srgb, ${piece.color} 66%, #101828))`;
    pieceElement.append(cellElement);
  });

  const labelElement = document.createElement("div");
  labelElement.className = "tech-piece-label";
  labelElement.textContent = piece.label;
  labelElement.style.fontSize = `${fontSizeForPiece(piece.label, widthCells, heightCells)}px`;
  pieceElement.append(labelElement);

  return pieceElement;
}

function renderTechGame() {
  techBoard.replaceChildren();

  techState.pieces.forEach((piece) => {
    const pieceElement = createPieceElement(piece);
    if (pieceElement) {
      techBoard.append(pieceElement);
    }
  });

  if (techState.activePiece) {
    const activePieceElement = createPieceElement(techState.activePiece, true);
    if (activePieceElement) {
      techBoard.append(activePieceElement);
    }
  }

  updateTechHud();
}

function updateDropSpeed() {
  techState.level = 1 + Math.floor(techState.lines / 5);
  techState.dropIntervalMs = clamp(TECH_BASE_DROP_MS - ((techState.level - 1) * 70), 150, TECH_BASE_DROP_MS);
}

function rebuildLockedPiecesFromBoard() {
  const nextPieces = new Map();

  for (let row = 0; row < TECH_ROWS; row += 1) {
    for (let col = 0; col < TECH_COLS; col += 1) {
      const pieceId = techState.board[row][col];
      if (!pieceId) continue;

      const existing = nextPieces.get(pieceId) || techState.pieces.get(pieceId);
      if (!existing) continue;

      if (!nextPieces.has(pieceId)) {
        nextPieces.set(pieceId, {
          id: existing.id,
          label: existing.label,
          color: existing.color,
          x: 0,
          y: 0,
          matrix: [[1]],
          cells: [],
        });
      }

      nextPieces.get(pieceId).cells.push({ x: col, y: row });
    }
  }

  techState.pieces = nextPieces;
}

function clearCompletedRows() {
  const fullRows = [];

  for (let row = 0; row < TECH_ROWS; row += 1) {
    if (techState.board[row].every(Boolean)) {
      fullRows.push(row);
    }
  }

  if (fullRows.length === 0) return;

  const clearedRowSet = new Set(fullRows);
  const nextBoard = createEmptyBoard();
  let writeRow = TECH_ROWS - 1;

  for (let row = TECH_ROWS - 1; row >= 0; row -= 1) {
    if (clearedRowSet.has(row)) continue;
    nextBoard[writeRow] = [...techState.board[row]];
    writeRow -= 1;
  }

  techState.board = nextBoard;
  rebuildLockedPiecesFromBoard();

  techState.lines += fullRows.length;
  techState.score += [0, 120, 320, 520, 900][fullRows.length] * techState.level;
  updateDropSpeed();
}

function lockActivePiece() {
  if (!techState.activePiece) return;

  const piece = techState.activePiece;
  const cells = pieceCells(piece).filter((cell) => cell.y >= 0);
  techState.pieces.set(piece.id, {
    id: piece.id,
    label: piece.label,
    color: piece.color,
    x: piece.x,
    y: piece.y,
    matrix: cloneMatrix(piece.matrix),
    cells,
  });

  cells.forEach((cell) => {
    techState.board[cell.y][cell.x] = piece.id;
  });

  techState.activePiece = null;
  clearCompletedRows();
}

function spawnNextTechPiece() {
  if (!techState.nextPiece) {
    techState.nextPiece = createTechPiece();
  }

  techState.activePiece = techState.nextPiece;
  techState.activePiece.x = Math.floor((TECH_COLS - techState.activePiece.matrix[0].length) / 2);
  techState.activePiece.y = 0;
  techState.nextPiece = createTechPiece();
  techState.pendingDropMs = 0;

  if (collides(techState.activePiece)) {
    techState.gameOver = true;
    techState.paused = true;
  }

  renderTechGame();
}

function moveTechPiece(dx, dy) {
  if (!techState.activePiece || techState.gameOver) return false;

  const nextX = techState.activePiece.x + dx;
  const nextY = techState.activePiece.y + dy;
  if (collides(techState.activePiece, nextX, nextY)) {
    if (dy > 0) {
      lockActivePiece();
      spawnNextTechPiece();
    }
    return false;
  }

  techState.activePiece.x = nextX;
  techState.activePiece.y = nextY;
  renderTechGame();
  return true;
}

function rotateTechPiece() {
  if (!techState.activePiece || techState.gameOver) return;

  const rotated = rotateMatrixClockwise(techState.activePiece.matrix);
  const kicks = [0, -1, 1, -2, 2];

  for (const kick of kicks) {
    const nextX = techState.activePiece.x + kick;
    if (!collides(techState.activePiece, nextX, techState.activePiece.y, rotated)) {
      techState.activePiece.matrix = rotated;
      techState.activePiece.x = nextX;
      renderTechGame();
      return;
    }
  }
}

function hardDropTechPiece() {
  if (!techState.activePiece || techState.gameOver) return;

  let dropDistance = 0;
  while (moveTechPiece(0, 1)) {
    dropDistance += 1;
  }

  techState.score += dropDistance * 2;
  renderTechGame();
}

function toggleTechPause() {
  if (techState.gameOver) return;
  techState.paused = !techState.paused;
  renderTechGame();
}

function pauseTechGame(message) {
  techState.paused = true;
  if (message) {
    techStatus.textContent = message;
  }
}

function resumeTechGame() {
  if (techState.gameOver) {
    renderTechGame();
    return;
  }

  techState.paused = false;
  if (!techState.activePiece) {
    spawnNextTechPiece();
  } else {
    renderTechGame();
  }

  if (!techAnimationFrame) {
    techLastTimestamp = null;
    techAnimationFrame = window.requestAnimationFrame(stepTechGame);
  }
}

function resetTechGame() {
  techState.board = createEmptyBoard();
  techState.pieces = new Map();
  techState.activePiece = null;
  techState.nextPiece = createTechPiece();
  techState.score = 0;
  techState.lines = 0;
  techState.level = 1;
  techState.pendingDropMs = 0;
  techState.dropIntervalMs = TECH_BASE_DROP_MS;
  techState.gameOver = false;
  techState.paused = currentView !== "tech-stack";
  spawnNextTechPiece();

  if (currentView === "tech-stack") {
    resumeTechGame();
  } else {
    renderTechGame();
  }
}

function stepTechGame(timestamp) {
  if (!techAnimationFrame) return;

  if (techLastTimestamp === null) {
    techLastTimestamp = timestamp;
  }

  const delta = timestamp - techLastTimestamp;
  techLastTimestamp = timestamp;

  if (!techState.paused && !techState.gameOver && currentView === "tech-stack") {
    techState.pendingDropMs += delta;

    if (techState.pendingDropMs >= techState.dropIntervalMs) {
      techState.pendingDropMs = 0;
      moveTechPiece(0, 1);
    }
  }

  techAnimationFrame = window.requestAnimationFrame(stepTechGame);
}

function handleTechAction(action) {
  if (currentView !== "tech-stack") return;

  switch (action) {
    case "left":
      moveTechPiece(-1, 0);
      break;
    case "right":
      moveTechPiece(1, 0);
      break;
    case "down":
      moveTechPiece(0, 1);
      break;
    case "rotate":
      rotateTechPiece();
      break;
    case "drop":
      hardDropTechPiece();
      break;
    default:
      break;
  }
}

viewButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.dataset.viewTarget === currentView));
  button.addEventListener("click", () => {
    setView(button.dataset.viewTarget);
    button.blur();
  });
});

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

moveButtons.forEach((button) => {
  const [dx, dy] = button.dataset.move.split(",").map(Number);
  button.addEventListener("click", () => {
    if (currentView !== "resume-city") return;
    moveWalkerByStep(dx, dy);
    button.blur();
  });
});

techRestart.addEventListener("click", () => {
  resetTechGame();
  techRestart.blur();
});

techControlButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleTechAction(button.dataset.techAction);
    button.blur();
  });
});

signalLaneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    submitSignalChoice(button.dataset.signalCategory);
    button.blur();
  });
});

signalNext.addEventListener("click", () => {
  goToNextSignalCard();
  signalNext.blur();
});

signalRestart.addEventListener("click", () => {
  resetSignalSort();
  signalRestart.blur();
});

window.addEventListener("keydown", (event) => {
  const activeTag = document.activeElement?.tagName;
  if (activeTag === "BUTTON" || activeTag === "A") {
    if (event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
    }
  }

  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

  if (currentView === "resume-city") {
    const direction = keyToDirection[key];
    if (!direction) return;

    event.preventDefault();
    moveWalkerByStep(direction[0], direction[1]);
    return;
  }

  if (currentView === "signal-sort") {
    const signalKeyMap = {
      1: "Firmographic Fit",
      2: "Technographic Fit",
      3: "Hiring Signal",
      4: "Intent Signal",
      5: "Risk",
      6: "Growth Signal",
      Enter: "next",
    };

    const signalAction = signalKeyMap[key];
    if (!signalAction) return;

    event.preventDefault();
    if (signalAction === "next") {
      goToNextSignalCard();
    } else {
      submitSignalChoice(signalAction);
    }
    return;
  }

  if (currentView !== "tech-stack") return;

  if (key === "ArrowLeft") {
    event.preventDefault();
    moveTechPiece(-1, 0);
  } else if (key === "ArrowRight") {
    event.preventDefault();
    moveTechPiece(1, 0);
  } else if (key === "ArrowDown") {
    event.preventDefault();
    moveTechPiece(0, 1);
  } else if (key === "ArrowUp") {
    event.preventDefault();
    rotateTechPiece();
  } else if (key === " " || key === "Spacebar") {
    event.preventDefault();
    hardDropTechPiece();
  } else if (key === "p") {
    event.preventDefault();
    toggleTechPause();
  }
});

window.addEventListener("resize", () => {
  if (activeId && currentView === "resume-city") {
    positionPopup(activeId);
  }
  renderTechGame();
});

setWalkerCell(walkerCell.col, walkerCell.row);
syncActiveApproach();
resetTechGame();
resetSignalSort();
setView("resume-city");
techLastTimestamp = null;
techAnimationFrame = window.requestAnimationFrame(stepTechGame);
