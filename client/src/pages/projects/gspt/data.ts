/**
 * GSPT immersive case study — content data.
 * A multi-chapter engineering story: intro → evolution → engineering → outcomes.
 */

export type Chapter = {
  n: string;
  slug: string;
  path: string;
  label: string;
  kicker: string;
};

export const CHAPTERS: Chapter[] = [
  { n: "01", slug: "overview", path: "/projects/gspt-mcp", label: "Overview", kicker: "The what & why" },
  { n: "02", slug: "evolution", path: "/projects/gspt-mcp/evolution", label: "Evolution", kicker: "6 versions, 12 months" },
  { n: "03", slug: "engineering", path: "/projects/gspt-mcp/engineering", label: "Engineering", kicker: "How it got fast" },
  { n: "04", slug: "outcomes", path: "/projects/gspt-mcp/outcomes", label: "Outcomes", kicker: "What it proves" },
];

export const LINKS = {
  github: "https://github.com/goutham037/gspt",
  live: "https://gspt-4dis.onrender.com/mcp",
};

/** Headline stats shown in the intro. */
export const STATS = [
  { value: 75, suffix: "%", label: "faster response", sub: "15s → 4s" },
  { value: 22, suffix: "", label: "commits", sub: "12 months" },
  { value: 5, suffix: "", label: "optimizations", sub: "one rewrite" },
  { value: 4, suffix: "", label: "dependencies", sub: "down from 19" },
];

/** The version-wise history — a real arc reconstructed from the git log. */
export type Version = {
  tag: string;
  phase: string;
  date: string;
  stack: string;
  what: string;
  problem: string;
  lesson: string;
  accent: string;
};

export const VERSIONS: Version[] = [
  {
    tag: "v0.1",
    phase: "The Scrappy Start",
    date: "Aug 2025",
    stack: "Flask monolith",
    what: "A 2,200-line Flask app that logged into the portal and scraped pages one at a time. Notification channels for Discord, email, and Telegram. A scheduler. Hardcoded secrets. It worked — barely — and only for me.",
    problem: "Every feature bolted onto one file. Scraping meant navigating page by page: login, open attendance, wait, scrape, open timetable, wait, scrape. ~15 seconds per full pull. No concurrency. Secrets committed to git.",
    lesson: "Shipping something end-to-end taught me the portal's real data model — which AJAX calls fire, what the HTML tables look like, where session cookies live. That knowledge became the foundation for everything after.",
    accent: "#64748b",
  },
  {
    tag: "v1.0",
    phase: "The MCP Pivot",
    date: "May 2026",
    stack: "FastMCP + HTTP",
    what: "Reframed the entire project: this data shouldn't power a notification bot — it should be AI-callable. Rebuilt as an MCP server exposing attendance, profile, timetable, and library as tools any AI client can call.",
    problem: "The naive scraper navigated to each page. Then I noticed the portal auto-fires a single AJAX POST on login — ShowStudentProfileNew — carrying the entire student record. Intercepting that one response replaced four page navigations.",
    lesson: "The highest-leverage optimization wasn't faster code — it was noticing the data I needed was already flying past on the wire. Watch the network tab before you write the scraper.",
    accent: "#2563eb",
  },
  {
    tag: "v1.5",
    phase: "The Deploy War",
    date: "May 2026",
    stack: "Render + Playwright",
    what: "Five consecutive commits fighting production deployment. The server ran perfectly on my machine and died every possible way on Render.",
    problem: "Dependency resolution pulled an old mcp build with no FastMCP. FastMCP 1.18's run() dropped host/port args — switched to streamable_http_app() + uvicorn. Chromium's binary didn't survive the build→runtime container boundary — had to self-install it at startup.",
    lesson: "Local success is a hypothesis, not a proof. Each failure was a specific, learnable boundary: dependency resolution, library API drift, container lifecycle. Read the actual error, form one hypothesis, test it. Repeat.",
    accent: "#7c3aed",
  },
  {
    tag: "v1.8",
    phase: "The Safety-Filter Breakthrough",
    date: "Aug 2026",
    stack: "Tool schema design",
    what: "ChatGPT kept refusing to call tools that took a password argument — 'I couldn't complete this due to safety guidelines.' The tools were correct; the model simply wouldn't touch them.",
    problem: "When a password field appears in a tool's input schema, model safety layers flag it as credential handling and refuse the call. The tool never even runs — no error to debug, just a polite refusal.",
    lesson: "The fix was schema design, not code. Split the tools: get_my_* take zero arguments and read credentials from server env vars — nothing for the safety layer to detect. Understanding how the model reasons about tool schemas was the unlock.",
    accent: "#0891b2",
  },
  {
    tag: "v2.0",
    phase: "The Performance Rewrite",
    date: "Aug 2026",
    stack: "asyncio + browser pool",
    what: "The rewrite this case study is about. Persistent Chromium pool, per-request isolated contexts, concurrency semaphore, selective TTL cache, attendance projection engine. 4,100 lines of legacy Flask deleted.",
    problem: "The single-student server couldn't survive a class hitting it at once — a fresh browser per request, no caching, no concurrency control. It would either OOM the box or crawl to a halt.",
    lesson: "Concurrency isn't free parallelism — it's controlled resource sharing. A semaphore that caps browser contexts at 5 is what makes 'many students at once' actually work on a 512MB box. Constraints shape the architecture.",
    accent: "#4f46e5",
  },
  {
    tag: "v2.1",
    phase: "The Automation Layer",
    date: "Aug 2026",
    stack: "Grok scheduled tasks",
    what: "Connected the server to Grok as a tool source. Two scheduled automations deliver attendance intelligence at 8 AM and 9 PM — pre-analyzed, with projections, zero manual checking.",
    problem: "A tool you have to remember to call is a tool you forget to call. The data was fast and accurate, but still pull-based — the student had to initiate every time.",
    lesson: "The last mile of a data system is delivery. Turning attendance from a thing-you-check into a thing-that-arrives is what made it genuinely useful. The intelligence has to come to the user.",
    accent: "#059669",
  },
];

/** The 5 optimizations — the engineering chapter. */
export type Optimization = {
  n: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  code?: string;
};

export const OPTIMIZATIONS: Optimization[] = [
  {
    n: "01",
    title: "AJAX Interception Over Page Navigation",
    problem: "A naive scraper logs in, navigates to the attendance page, waits for the DOM to render, then scrapes. Three page loads. ~12–15 seconds per request.",
    solution: "After login the portal auto-fires a ShowStudentProfileNew AJAX POST carrying the full student record. Playwright intercepts that response mid-flight — zero extra page loads, one 4-second round-trip.",
    impact: "75% faster than multi-page scraping",
    code: `resp = await page.wait_for_event(
    "response",
    predicate=lambda r: r.request.method == "POST"
        and bool(TARGET_RE.search(r.url)),
    timeout=6000,
)
parsed = _parse_profile(await resp.text())`,
  },
  {
    n: "02",
    title: "Persistent Browser Pool + Isolated Contexts",
    problem: "Launching a new Chromium instance takes ~2 seconds. For 20+ concurrent students that's 40 seconds of pure overhead per minute — spent on browser startup alone.",
    solution: "A single Chromium process persists for the server's lifetime. Each request gets an isolated browser context (separate cookies, separate session) — a fresh browser in behaviour, but created in ~50ms instead of ~2000ms.",
    impact: "40× faster context creation",
    code: `async def _get_browser():
    if _browser and _browser.is_connected():
        return _browser        # reuse the process
    async with _browser_lock:  # double-checked launch
        _browser = await _pw.chromium.launch(headless=HEADLESS)
    return _browser`,
  },
  {
    n: "03",
    title: "Selective Caching, Attendance Excepted",
    problem: "Caching everything uniformly either serves stale data or wastes scraping cycles. Attendance changes after every class period — cache it for even 30 minutes and a student could think they have margin when they don't.",
    solution: "A TTL cache with monotonic timestamps: timetable (24h), profile (1h), library (1h). Attendance is NEVER cached — always fetched fresh. Auto-eviction once the cache passes 1000 entries.",
    impact: "Repeat calls <1ms, attendance always real-time",
    code: `CACHE_TTL = {
    "profile":   3600,    # 1 hour
    "timetable": 86400,   # 24 hours
    "library":   3600,    # 1 hour
    # attendance is NEVER cached — always fresh
}`,
  },
  {
    n: "04",
    title: "Concurrency Semaphore",
    problem: "Each Chromium context consumes ~40–60MB. On Render's 512MB free tier, ten simultaneous contexts would out-of-memory the server and take everyone down with it.",
    solution: "An asyncio.Semaphore caps simultaneous browser contexts at MAX_BROWSERS (default 5). Requests beyond the cap queue transparently and run as slots free — no request is ever dropped.",
    impact: "Zero OOM crashes under concurrent load",
    code: `_sem = asyncio.Semaphore(MAX_CONCURRENT)

async def _fetch_attendance(roll, pwd):
    async with _sem:               # queue past the cap
        ctx, page = await _login_ctx(roll, pwd)
        ...`,
  },
  {
    n: "05",
    title: "Attendance Projection Engine",
    problem: "Raw percentages don't answer the real question: 'Can I skip this class?' Students need forward-looking math, not a backward-looking stat.",
    solution: "Pure arithmetic on live attendance: classes needed to reach 75%, classes that can be safely skipped. Computes in microseconds with zero browser cost.",
    impact: "Instant decisions, no extra scraping",
    code: `# classes to reach target %
ceil((target*held - 100*attended) / (100-target))
# classes you can miss before dropping below
floor((100*attended - target*held) / target)`,
  },
];

export const PERF_ROWS = [
  { scenario: "Before optimization (v0.1)", time: "~15s", highlight: false },
  { scenario: "After — cold, first call", time: "4–6s", highlight: true },
  { scenario: "After — cached data", time: "<1ms", highlight: true },
  { scenario: "Attendance — always fresh", time: "4–6s", highlight: false },
  { scenario: "Projection calculation", time: "<1ms", highlight: true },
  { scenario: "5 students, in parallel", time: "4–6s each", highlight: false },
];

export const GROK_REPORTS = [
  {
    time: "8:00 AM",
    label: "Morning Briefing",
    when: "Before classes start",
    delivers: [
      "Current % per subject, danger-flagged below 75%",
      "Which classes can be safely skipped today",
      "Subjects needing consecutive attendance to recover",
    ],
  },
  {
    time: "9:00 PM",
    label: "End-of-Day Sync",
    when: "After all classes",
    delivers: [
      "What changed today — attended vs missed",
      "Updated projections for tomorrow's decisions",
      "Alerts if any subject dropped below the safe zone",
    ],
  },
];

/** Learned outcomes — the meta-lessons, one per version turning point. */
export const OUTCOMES = [
  {
    title: "Read the wire before writing the scraper",
    body: "The single biggest speedup came from noticing the data was already being transmitted — not from optimizing code. Observation beats cleverness.",
    from: "v1.0 — AJAX interception",
  },
  {
    title: "Local success is a hypothesis, not a proof",
    body: "Five deploy failures, each a distinct boundary — dependency resolution, library API drift, container lifecycle. Systematic debugging: one hypothesis, one test, repeat.",
    from: "v1.5 — the deploy war",
  },
  {
    title: "Understand how the model reasons, not just the API",
    body: "The safety-filter block wasn't a bug to patch — it was the model reasoning about a schema. The fix was designing tools the model would trust.",
    from: "v1.8 — zero-credential tools",
  },
  {
    title: "Constraints shape the architecture",
    body: "A 512MB box and a 75% attendance rule aren't limitations to work around — they're the spec. The semaphore and the projection engine both fell out of taking constraints seriously.",
    from: "v2.0 — the rewrite",
  },
  {
    title: "Delivery is the last mile",
    body: "Fast, accurate data that nobody remembers to fetch is unused data. Push beats pull. Grok turning attendance into a thing-that-arrives is what made it real.",
    from: "v2.1 — automation",
  },
];

/** Skills demonstrated, each mapped to concrete evidence in the build. */
export const SKILLS = [
  { skill: "Async Python & concurrency", evidence: "asyncio semaphore + persistent browser pool serving 5 students in parallel" },
  { skill: "Browser automation & reverse-engineering", evidence: "Intercepted an undocumented AJAX endpoint instead of scraping rendered pages" },
  { skill: "Systems design under constraints", evidence: "Engineered for a 512MB box with a hard concurrency ceiling" },
  { skill: "LLM tool-calling internals", evidence: "Diagnosed safety-filter refusals; dual MCP transports (HTTP + stdio)" },
  { skill: "Production debugging", evidence: "Resolved a five-stage deploy failure across dependency, library, and container layers" },
  { skill: "Product thinking", evidence: "Projection engine and 8 AM / 9 PM Grok delivery — data shaped into decisions" },
];

export const STACK = [
  { name: "Python 3.11", note: "Async-first with asyncio" },
  { name: "Playwright", note: "Headless Chromium, AJAX interception" },
  { name: "MCP SDK 1.18", note: "Streamable HTTP + stdio transports" },
  { name: "BeautifulSoup4", note: "HTML table parsing" },
  { name: "Uvicorn", note: "ASGI server for cloud deploy" },
  { name: "Render", note: "Auto-deploy on git push" },
  { name: "Grok (xAI)", note: "Scheduled daily intelligence" },
  { name: "asyncio.Semaphore", note: "Concurrency control" },
];
