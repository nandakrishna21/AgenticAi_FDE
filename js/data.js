const R = {
  python: ["Python for Everybody (freeCodeCamp)","https://www.freecodecamp.org/learn/scientific-computing-with-python/"],
  llm: ["OpenAI Cookbook","https://cookbook.openai.com/"],
  anthropic: ["Anthropic Docs & Guides","https://docs.anthropic.com/"],
  prompt: ["Prompt Engineering Guide","https://www.promptingguide.ai/"],
  deeplearning: ["DeepLearning.AI short courses (free)","https://www.deeplearning.ai/short-courses/"],
  langchain: ["LangChain / LangGraph Docs","https://python.langchain.com/docs/introduction/"],
  mcp: ["MCP Docs","https://modelcontextprotocol.io/"],
  neetcode: ["NeetCode 150 + videos (free)","https://neetcode.io/practice"],
  lc: ["LeetCode (free tier)","https://leetcode.com/"],
  fcc: ["freeCodeCamp YouTube","https://www.youtube.com/@freecodecamp"],
  yt: ["Krish Naik YouTube","https://www.youtube.com/@krishnaik06"],
  hf: ["Hugging Face LLM Course (free)","https://huggingface.co/learn/llm-course"],
  pgvector: ["pgvector GitHub","https://github.com/pgvector/pgvector"],
  chroma: ["Chroma Docs","https://docs.trychroma.com/"],
  langsmith: ["LangSmith Docs (tracing)","https://docs.smith.langchain.com/"],
  phoenix: ["Arize Phoenix — open-source tracing/evals","https://docs.arize.com/phoenix"],
  docker: ["Docker Get Started (free)","https://docs.docker.com/get-started/"],
  render: ["Render free deploy tier","https://render.com/"],
  fly: ["Fly.io free allowance","https://fly.io/"],
  github: ["GitHub Skills (free)","https://skills.github.com/"],
  sysdesign: ["System Design Primer (free)","https://github.com/donnemartin/system-design-primer"],
  behavioral: ["STAR method guide","https://www.themuse.com/advice/star-interview-method"],
  fdeDeep: ["DeepLearning.AI — The Batch: FDEs & the future","https://www.deeplearning.ai/the-batch/forward-deployed-engineers-and-the-future-of-ai-engineering"],
  fdeMarket: ["open-fde.ai — FDE job market analysis (2026)","https://open-fde.ai/jobs/market/"],
  fdeGuide: ["FDE Interview Prep — role guide","https://fdeinterviewprep.com/blog/fde-vs-ai-engineer"],
  fdeComp: ["FDE vs AI Engineer — Re:Sourced","https://www.resourced.com.au/articles/agentic-ai-engineer-vs-forward-deployed-engineer"],
  excalidraw: ["Excalidraw (free diagrams)","https://excalidraw.com/"],
  loom: ["Loom free tier (demo videos)","https://www.loom.com/"],
  star: ["STAR stories worksheet","https://www.themuse.com/advice/star-interview-method"]
};

const YT = {
  karpathy: ["▶ Karpathy — LLM internals","https://www.youtube.com/@AndrejKarpathy"],
  krishnaik: ["▶ Krish Naik","https://www.youtube.com/@krishnaik06"],
  campusx: ["▶ CampusX","https://www.youtube.com/@campusx-official"],
  freecodecamp: ["▶ freeCodeCamp","https://www.youtube.com/@freecodecamp"],
  langchainYt: ["▶ LangChain (official)","https://www.youtube.com/@LangChain"],
  ragScratch: ["▶ RAG From Scratch playlist","https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x"],
  kamradt: ["▶ Greg Kamradt — LangChain 101","https://www.youtube.com/playlist?list=PLqZXAkvF1bPNQER9mLmDbntNfSpzdDIU5"],
  codebasics: ["▶ codebasics","https://www.youtube.com/@codebasics"],
  ebbelaar: ["▶ Dave Ebbelaar","https://www.youtube.com/@DaveEbbelaar"],
  assemblyai: ["▶ AssemblyAI","https://www.youtube.com/@AssemblyAI"],
  neetcodeYt: ["▶ NeetCode videos","https://www.youtube.com/@NeetCode"],
  bytebytego: ["▶ ByteByteGo","https://www.youtube.com/@ByteByteGo"],
  exponent: ["▶ Exponent","https://www.youtube.com/@Exponent"]
};

const PHASES = [
  { until: 7,  key: "Phase 1", label: "Foundations",   full: "Phase 1 — Foundations: Python, LLMs, Prompting, DSA basics" },
  { until: 14, key: "Phase 2", label: "AI Engineering: RAG", full: "Phase 2 — AI Engineering: RAG & Retrieval" },
  { until: 21, key: "Phase 3", label: "Agentic Engineering", full: "Phase 3 — Agentic Engineering: Agents, LangGraph, MCP" },
  { until: 28, key: "Phase 4", label: "Production AI", full: "Phase 4 — Production AI: Evals, LLMOps, Guardrails" },
  { until: 35, key: "Phase 5", label: "FDE Track",     full: "Phase 5 — FDE Track: Customer scoping, deploy, flagship" },
  { until: 45, key: "Phase 6", label: "Interview Sprint", full: "Phase 6 — Interview Sprint: Design, behavioral, mocks, offers" }
];

const DAYS = [
  {t:"Python + LLM APIs", d:"Setup + first LLM calls",
   ai:["Python refresh: venv, pip, requests/httpx","Call OpenAI + Anthropic APIs, stream responses","Tokens, context window, pricing — write notes"],
   fde:["Read what an FDE actually does (Re:Sourced comparison)","Map your past work to FDE signals: ownership, ambiguity, customer"],
   dsa:["Arrays basics — 3 problems","Big-O refresher + pattern notebook setup"],
   int:["Explain what an LLM is to a non-engineer — out loud, 60s"],
   res:["python","llm","anthropic","fdeComp","neetcode","karpathy","campusx"]},

  {t:"Prompting & structured outputs", d:"System prompts, few-shot, JSON mode",
   ai:["Prompt patterns: role, few-shot, CoT, delimiters","Structured outputs / JSON schema mode","Build reusable prompt template library"],
   fde:["Write a 1-page 'LLM capability brief' for a non-technical stakeholder"],
   dsa:["Hashing — 3 problems (two-sum, group anagrams)"],
   int:["Q: 'How do you stop an LLM hallucinating?' — draft your answer"],
   res:["prompt","deeplearning","fdeGuide","neetcode","krishnaik"]},

  {t:"Tool / function calling", d:"Define tools, schemas, error paths",
   ai:["Tool calling end-to-end with strict schemas","Build: calculator + web-search tool","Handle malformed tool outputs gracefully"],
   fde:["Demo script: show the tool call to a skeptical customer in 3 steps"],
   dsa:["Two pointers — 3 problems"],
   int:["Q: 'Function calling vs fine-tuning — when?' — answer out loud"],
   res:["anthropic","llm","assemblyai","neetcode"]},

  {t:"Build: CLI chatbot", d:"Ship a tool-using chatbot",
   ai:["Build CLI chatbot with 2+ tools + memory (SQLite)","Add /help and graceful exit","README with run instructions"],
   fde:["Write the 'demo to customer' version of the README — problem first, tech second"],
   dsa:["Sliding window — 3 problems"],
   int:["Record 60-second demo of your chatbot on phone"],
   res:["github","yt","fdeGuide","neetcode"]},

  {t:"Embeddings & vector DBs", d:"How retrieval works",
   ai:["Embeddings: cosine similarity, dimensions","Install Chroma or pgvector locally","Embed 100 docs and query them"],
   fde:["Explain embeddings to a business user in one sentence + one analogy — write it down"],
   dsa:["Binary search — 3 problems"],
   int:["Q: 'Why not just keyword search?' — draft answer"],
   res:["chroma","pgvector","hf","neetcode","ragScratch"]},

  {t:"Chatbot v2 + chunking", d:"Integrate retrieval into chatbot",
   ai:["Add retrieval to your chatbot (RAG v0)","Chunking: fixed / recursive / semantic — test all 3","Measure which chunking wins on 5 queries"],
   fde:["Customer scenario: 'our PDFs are scans, mixed quality' — list 5 questions you'd ask"],
   dsa:["Linked lists — 3 problems"],
   int:["Q: 'How do you choose chunk size?' — answer out loud"],
   res:["deeplearning","langchain","ragScratch","neetcode"]},

  {t:"Week 1 review + FDE research", d:"Consolidate + FDE landscape",
   ai:["Re-do weakest topic from the week","Weekly learning log: learned / built / stuck"],
   fde:["Read DeepLearning.AI FDE article + open-fde.ai market analysis","List the 5 FDE 'jobs behind the title' — pick your lean (builder vs strategist)","Update resume headline: 'AI Engineer | Agentic Systems | Customer-facing delivery'"],
   dsa:["Weekly review — 2 easy timed mocks"],
   int:["Mock: 5-min self-intro + why AI engineering"],
   res:["fdeDeep","fdeMarket","fcc","neetcode"]},

  {t:"RAG architecture", d:"End-to-end retrieval design",
   ai:["RAG pipeline: ingest → retrieve → generate","Naive vs advanced RAG (HyDE, query rewrite, multi-query)","Write the design doc for your RAG project"],
   fde:["Draft customer discovery questions for a RAG project (data? users? success metric?)"],
   dsa:["Stacks & queues — 3 problems"],
   int:["Q: 'Walk me through a RAG system you'd build for us' — 2 min answer"],
   res:["deeplearning","langchain","ragScratch","neetcode"]},

  {t:"Vector DB hands-on", d:"Index, filter, persist",
   ai:["Metadata filtering + persistence in Chroma/pgvector","Hybrid index: dense + BM25","Benchmark 3 chunking strategies formally"],
   fde:["Security review prep: where does customer data live, who can see it? — one page"],
   dsa:["Recursion — 3 problems"],
   int:["Q: 'RLS / access control in RAG?' — draft answer"],
   res:["chroma","pgvector","kamradt","neetcode"]},

  {t:"Hybrid search + re-rankers", d:"BM25 + dense + cross-encoder",
   ai:["Add BM25 hybrid retrieval","Add re-ranker (cross-encoder or Cohere free trial)","Measure improvement on 10 fixed queries"],
   fde:["Explain re-ranking to a customer success manager — one paragraph, zero jargon"],
   dsa:["Trees intro — 3 problems"],
   int:["Q: 'Hybrid search vs pure vector?' — answer"],
   res:["langchain","yt","kamradt","neetcode"]},

  {t:"Build RAG v1 on messy data", d:"Real PDFs, citations, no-answer",
   ai:["Ingest 20+ messy real PDFs","RAG Q&A with source citations","Handle 'I don't know' when retrieval is weak"],
   fde:["Role-play: customer says 'it gave a wrong answer in front of our CEO' — write your response"],
   dsa:["BST — 3 problems"],
   int:["Q: 'How do you handle a confident wrong answer?' — draft"],
   res:["langchain","yt","freecodecamp","neetcode"]},

  {t:"Retrieval tuning", d:"Recall, citations, grounding",
   ai:["Tune top-k, chunk overlap, rerank depth","Force citations in the prompt; verify them","Log failure modes: wrong chunk / hallucination / missing context"],
   fde:["Write the weekly status email you'd send the customer sponsor — progress + risks + ask"],
   dsa:["BFS/DFS — 3 problems"],
   int:["Q: 'How do you debug retrieval quality?' — answer"],
   res:["prompt","langsmith","neetcode","ebbelaar"]},

  {t:"RAG evaluation", d:"Measure it properly",
   ai:["Build 20 Q/A golden set from your docs","Compute recall@k and faithfulness (LLM-judge)","Before/after tuning comparison table"],
   fde:["Negotiate the eval: two domain experts disagree on 'correct' — write how you'd resolve"],
   dsa:["Tree problems — 3"],
   int:["Q: 'How do you know your RAG is good enough to ship?' — answer"],
   res:["phoenix","langsmith","deeplearning","neetcode"]},

  {t:"Week 2 review + FDE sim", d:"Consolidate + customer role-play",
   ai:["RAG design doc + metrics table committed to repo","Fix top 3 failure modes","Weekly log"],
   fde:["Full FDE simulation: 15-min mock discovery call (record yourself): problem, data, success, timeline, stakeholders","Debrief: what did you miss?"],
   dsa:["Mock 1 — 45 min timed"],
   int:["Mock: 'Design a RAG system for a bank' — 10 min whiteboard"],
   res:["fdeGuide","fdeComp","neetcode","lc","exponent"]},

  {t:"Agent patterns + LangGraph", d:"State machines for agents",
   ai:["Agent loop: plan → act → observe","LangGraph: state, nodes, edges, cycles","Build minimal ReAct agent"],
   fde:["Where agents fail in front of customers — list 5 failure modes from your experience/reading"],
   dsa:["Heaps — 3 problems"],
   int:["Q: 'What makes an agent different from a chatbot?' — answer"],
   res:["langchain","deeplearning","langchainYt","neetcode"]},

  {t:"Tool schemas + MCP", d:"Model Context Protocol",
   ai:["3 strict tool schemas with validation","MCP: run an MCP server locally","Connect your agent to an MCP tool"],
   fde:["Customer integration story: 'we need it inside Salesforce + Slack' — sketch the MCP/tool map"],
   dsa:["Greedy — 3 problems"],
   int:["Q: 'What is MCP and why does it matter?' — answer"],
   res:["mcp","assemblyai","langchainYt","neetcode"]},

  {t:"Build multi-step agent", d:"Research → summarize → act",
   ai:["Agent with 3+ tools and bounded loop","Max-iterations + token-cost cap guardrails","Full trace of one run saved"],
   fde:["Scope it FDE-style: what's the 2-week POC vs the 2-month build? Write both"],
   dsa:["Backtracking — 3 problems"],
   int:["Q: 'How do you bound an agent's cost?' — answer"],
   res:["langchain","langsmith","langchainYt","neetcode"]},

  {t:"Failure handling & guardrails", d:"Retries, idempotency, aborts",
   ai:["Retry with backoff + fallback model","Idempotent tool design for side-effecting actions","Prompt-injection defense basics + test"],
   fde:["Incident comms: agent took a wrong action at the customer — write the customer email + internal postmortem outline"],
   dsa:["Backtracking — 3 problems"],
   int:["Q: 'Agent loops forever — what do you do?' — answer"],
   res:["anthropic","phoenix","neetcode","krishnaik"]},

  {t:"Human-in-the-loop + state", d:"Approval gates, persistence",
   ai:["Approval gate before side-effecting tools","Persist + resume agent state (SQLite)","Audit log of every agent action"],
   fde:["Governance conversation: 'who approves what?' — draft the autonomy ladder (suggest → draft → act with approval → act autonomously)"],
   dsa:["Graph BFS/DFS — 3 problems"],
   int:["Q: 'How much autonomy should our agent have on day 1?' — answer"],
   res:["langchain","mcp","ebbelaar","neetcode"]},

  {t:"Agent v2 polish", d:"Harden end-to-end",
   ai:["Agent trajectory eval cases","Kill top 2 failure modes from traces","Per-run cost report"],
   fde:["Demo hardening: 3 things that will break live in front of the customer — fix or pre-empt them"],
   dsa:["Topological sort — 3 problems"],
   int:["Q: 'How do you eval an agent's trajectory, not just its answer?' — answer"],
   res:["langsmith","phoenix","neetcode"]},

  {t:"Week 3 review + FDE mock", d:"Consolidate + discovery call",
   ai:["Agent architecture diagram committed","Weekly log + 2-min agent demo recording"],
   fde:["Mock discovery call #2 (record): given messy brief ('we lose claims adjusters to churn, 40 systems, no docs'), scope a 6-week POC","Get 1 friend/colleague to play the customer — feedback on your questions"],
   dsa:["Mock 2 — 45 min timed"],
   int:["Mock: 'Design an agent for X workflow' — 10 min"],
   res:["fdeGuide","neetcode","exponent"]},

  {t:"Eval suites + golden sets", d:"Systematic quality measurement",
   ai:["30-case golden set with expected outputs","Offline eval script for RAG + agent","Pass-rate tracked over time"],
   fde:["Write the acceptance criteria into a 1-page SOW-style doc (exit: eval ≥ X on Y cases)"],
   dsa:["DP 1D — 3 problems (climbing stairs, house robber)"],
   int:["Q: 'What does your eval gate look like?' — answer"],
   res:["phoenix","langsmith","deeplearning","neetcode"]},

  {t:"LLM-as-judge", d:"Automated scoring, calibrated",
   ai:["Judge prompt with rubric + score anchors","Check judge-human agreement on 10 cases","Wire judge into the eval pipeline"],
   fde:["Two experts disagree on labels — document how the rubric resolves it (this is the #1 FDE interview topic)"],
   dsa:["DP 1D — 3 problems (coin change, LIS)"],
   int:["Q: 'LLM-as-judge — how do you trust it?' — answer"],
   res:["prompt","phoenix","neetcode"]},

  {t:"Tracing & observability", d:"See everything in production",
   ai:["Instrument with Phoenix or LangSmith","Dashboard: latency, tokens, cost, errors","Alerting rule for p95 latency / error rate"],
   fde:["Customer-facing reliability report template: uptime, quality score, cost per workflow"],
   dsa:["DP 2D — 3 problems (grid paths, LCS)"],
   int:["Q: 'Agent is slow and expensive — your triage?' — answer"],
   res:["phoenix","langsmith","neetcode"]},

  {t:"Cost & latency optimization", d:"Budgets that hold",
   ai:["Semantic caching for repeat queries","Model routing: cheap first, escalate on failure","Hit ≤ $0.01/query (or your target) and document it"],
   fde:["Commercial framing: turn your cost report into a 'value per workflow' slide for the exec sponsor"],
   dsa:["DP 2D — 3 problems"],
   int:["Q: 'Cut agent cost 10x — how?' — answer"],
   res:["anthropic","yt","neetcode"]},

  {t:"Safety & guardrails", d:"Injection, sandboxing, PII",
   ai:["10-prompt injection test suite","Sandboxed tool execution + allow-list","Output validation + PII/secret filter"],
   fde:["Customer security review dry-run: 10 questions their infosec will ask — write crisp answers"],
   dsa:["Mixed review — 4 problems"],
   int:["Q: 'Top 3 risks of deploying agents, and mitigations?' — answer"],
   res:["anthropic","fdeGuide","neetcode"]},

  {t:"CI eval gate", d:"Block regressions automatically",
   ai:["GitHub Action: evals on PR, fail if pass-rate drops","Store eval history as artifacts","Document the gate in README"],
   fde:["Rollout plan: pilot → canary → full rollout with rollback at each stage — one page"],
   dsa:["Graph problems — 3 (Dijkstra, clone graph)"],
   int:["Q: 'How do you ship weekly without breaking the customer's workflow?' — answer"],
   res:["github","phoenix","neetcode"]},

  {t:"Week 4 review + FDE exec sim", d:"Consolidate + exec presentation",
   ai:["Final eval report: before/after","Weekly log"],
   fde:["Record a 10-minute exec update: problem → what we built → measurable result → ask (expansion budget)","Watch it back — cut every sentence that isn't load-bearing"],
   dsa:["Mock 3 — 45 min timed"],
   int:["Mock: 'An FDE project failed — tell me about a time things broke' — STAR format"],
   res:["fdeMarket","neetcode","exponent","star"]},

  {t:"Flagship scoping", d:"Your portfolio centerpiece",
   ai:["Pick domain: contracts / support / research / finance ops","Spec: users, tools, success metrics, data sources","Repo scaffold + CI skeleton"],
   fde:["Write it as a customer SOW: objective, scope, out-of-scope, acceptance eval, timeline, risks — 1 page"],
   dsa:["DP review — 3 problems"],
   int:["Q: 'Tell me about a project end-to-end' — start drafting STAR"],
   res:["github","sysdesign","fdeGuide","neetcode"]},

  {t:"Core pipeline build", d:"Ingest + RAG + agent loop",
   ai:["Ingestion pipeline with messy real data","Agent loop wired: tools + guardrails + tracing","First end-to-end run works"],
   fde:["Checkpoints: share a demo-in-progress with 1 person as if they were the customer — capture feedback"],
   dsa:["Timed set — 4 problems"],
   int:["Keep a build log — raw material for interview stories"],
   res:["langchain","yt","ebbelaar","neetcode"]},

  {t:"Eval harness", d:"Prove it works",
   ai:["30-case golden set for the flagship","Automated eval + LLM-judge in CI","Baseline vs tuned comparison"],
   fde:["Turn the eval table into the customer's acceptance doc — sign-off criteria they would actually sign"],
   dsa:["Timed set — 4 problems"],
   int:["Q: 'How did you measure success?' — answer with numbers"],
   res:["phoenix","langsmith","neetcode"]},

  {t:"Dockerize & deploy", d:"Live public demo",
   ai:["Dockerfile + docker-compose","Deploy to Render or Fly.io free tier","Public URL + smoke test"],
   fde:["Deployment runbook for a customer VPC: prerequisites, install steps, rollback — assume zero access to their network"],
   dsa:["Mock 4 — 45 min timed"],
   int:["Q: 'Deployed on-prem vs your cloud — tradeoffs?' — answer"],
   res:["docker","render","fly","neetcode"]},

  {t:"Observability + cost report", d:"Production finish",
   ai:["Tracing live in the deployed app","Cost + latency report per workflow","Runbook: top 5 failures + fixes"],
   fde:["Handover pack: README + runbook + eval report + 15-min walkthrough recording — what you'd leave with the customer"],
   dsa:["Weak-area drill — 4 problems"],
   int:["Q: 'Walk me through your production incident process' — answer"],
   res:["phoenix","langsmith","fdeGuide","neetcode"]},

  {t:"README + demo video", d:"Portfolio packaging",
   ai:["README: problem → architecture → evals → demo GIF","Architecture diagram (Excalidraw)","5-min Loom demo"],
   fde:["Two READMEs: (1) engineer-facing deep dive, (2) exec-facing one-pager with outcome metrics"],
   dsa:["Resume-topics timed set — 4 problems"],
   int:["Record the 90-second flagship pitch — memorize it"],
   res:["github","excalidraw","loom","neetcode"]},

  {t:"Week 5 review + retrospective", d:"Flagship retro + applications",
   ai:["Retro: what broke, what you'd redo","Pin flagship repo on GitHub"],
   fde:["Write the customer case study: context, constraint, what shipped, numbers, lesson — 400 words","Post it on LinkedIn (tag #AppliedAI #ForwardDeployed)"],
   dsa:["Full mock — DSA + explain-aloud"],
   int:["Update resume with flagship metrics; list 20 target roles (AI Engineer, Agentic Engineer, FDE)"],
   res:["fdeMarket","github","neetcode","lc"]},

  {t:"Resume & profiles", d:"Get past the screen",
   ai:["Resume v2: flagship first, quantified (eval pass-rate, cost/run, users)","GitHub + LinkedIn polished; headline updated"],
   fde:["Tailor 2 resume variants: (1) AI/Agentic Engineer, (2) FDE — same projects, different framing (depth vs outcome)"],
   dsa:["Mixed — 3 problems"],
   int:["Draft answers: 'why this role', 'why FDE / why not FDE', 'salary expectations research'"],
   res:["github","fdeMarket","fdeGuide","lc"]},

  {t:"Applications blitz", d:"Volume + referrals",
   ai:["Apply 10–15 AI/Agentic Engineer roles","5 referral messages to people at target companies","ATS keyword pass on resume (LLM, RAG, evals, agents, MCP, LangGraph)"],
   fde:["Apply to 5 FDE roles; for each, write 3 bullets mapping their posting → your flagship metrics"],
   dsa:["Mixed — 3 problems"],
   int:["Log every application + follow-up date in a tracker"],
   res:["lc","neetcode","fdeMarket"]},

  {t:"LLM system design I", d:"Design AI systems at scale",
   ai:["Design: enterprise RAG (1M docs, RBAC, freshness, multi-tenant)","Design: agent platform (guardrails, evals, billing, tool registry)","Both whiteboarded in 45 min each"],
   fde:["Design it FDE-flavored: same system, but rollout plan + customer acceptance criteria included"],
   dsa:["Mixed — 3 problems + 1 mock"],
   int:["Record yourself presenting design #1 — watch for jargon leaks"],
   res:["sysdesign","deeplearning","bytebytego","neetcode"]},

  {t:"LLM system design II", d:"Failure modes & tradeoffs",
   ai:["Design: LLM gateway (routing, caching, fallbacks, cost caps)","Design: eval infrastructure (golden sets, judges, CI gates)","Tradeoff language: consistency vs latency vs cost vs safety"],
   fde:["Tradeoff memo: when NOT to use an LLM at all — customers respect this answer"],
   dsa:["Mixed — 3 problems"],
   int:["Q: 'Model selection for a regulated industry?' — answer"],
   res:["sysdesign","bytebytego","krishnaik"]},

  {t:"Behavioral + STAR bank", d:"Tell your story",
   ai:["8 STAR stories: flagship, conflict, failure, ambiguity, customer, scale, learning, leadership"],
   fde:["FDE-specific stories: difficult stakeholder, scope creep, production incident at customer site, saying no to a customer — write all 4"],
   dsa:["Mock — 45 min"],
   int:["90-second 'why AI engineering' — memorized, natural"],
   res:["behavioral","star","exponent"]},

  {t:"Mock interview day 1", d:"Full loop simulation",
   ai:["Mock: 1 DSA (45m) + 1 LLM design (45m) + flagship deep-dive (30m)","Score yourself; fix 3 weakest points"],
   fde:["Mock FDE round: 'Scope a POC for this messy brief in 10 min, out loud' — record and review"],
   dsa:["Timed mixed — 4 problems"],
   int:["Post-mock: rewrite your 3 weakest answers"],
   res:["neetcode","lc","sysdesign","exponent"]},

  {t:"Mock interview day 2", d:"Full loop simulation again",
   ai:["Mock: evals/failure-modes rapid-fire (15 questions)","Mock: live coding with an LLM API (build a small tool-calling function)"],
   fde:["Mock negotiation: offer call simulation — base, equity, travel %, on-call"],
   dsa:["Timed mixed — 4 problems"],
   int:["Salary research: 3 data points for your market (levels.fyi etc.)"],
   res:["lc","exponent","fdeMarket"]},

  {t:"Final prep + rest", d:"Sharpen, don't cram",
   ai:["Re-read: your eval report, architecture doc, cost report","Skim MCP + LangGraph docs once more"],
   fde:["Skim FDE guides once more; keep the one-page autonomy ladder and handover pack handy for interviews"],
   dsa:["Light review only — 1 easy problem from each pattern"],
   int:["Interview logistics ready; sleep 8h; walk 30 min; you are prepared"],
   res:["neetcode","fdeGuide","behavioral"]},

  {t:"Final mock loop + negotiation", d:"Simulate offer stage end-to-end",
   ai:["Rapid-fire: 20 eval/agent/RAG questions answered out loud, timed","Flagship deep-dive mock — a friend asks 'why this architecture?' until you can't go deeper"],
   fde:["Negotiation scripts: base vs equity vs travel % vs on-call vs title","Evaluate 2 hypothetical offers side-by-side (AI Engineer vs FDE) — which fits your life?"],
   dsa:["2 timed mocks — weakest patterns only"],
   int:["Post-interview thank-you + follow-up email templates written"],
   res:["exponent","fdeMarket","fdeGuide","lc"]},

  {t:"Interview day / recovery", d:"Perform, decompress, iterate",
   ai:["Confidence rehearsal: say your 90-second pitch out loud 3 times","Prepare 5 smart questions to ask them (evals? on-call? customer load? success metric for 90 days?)"],
   fde:["If they probe customer judgment: lead with your case study numbers, not adjectives","If it goes well — ask about the first 90 days and the eval gate they'd put you on"],
   dsa:["One easy problem for warm-up only, then stop"],
   int:["After each interview: 10-min debrief log (questions asked, what landed, what to fix) — feed it into the next one"],
   res:["behavioral","star","neetcode"]}
];

window.SPRINT_DATA = { R, YT, PHASES, DAYS };

const PHASE_GUIDE = [
  { focus: "Ship muscle + DSA patterns before anything else.", checkpoint: "You can call an LLM API from memory, explain tokens/temperature, and solved ~20 DSA problems.", pitfalls: ["Watching tutorials without typing code", "Skipping DSA because 'AI is the goal' — interviews filter on it", "API keys hardcoded in repos — use .env"], studyTip: "Code along every video; pause and implement before the instructor shows the answer." },
  { focus: "RAG is the #1 portfolio and interview topic. Retrieval quality is the product.", checkpoint: "A RAG app over your own messy PDFs with citations, a golden set, and measured recall@k.", pitfalls: ["Chunking blindly (fixed 500-token chunks with no measurement)", "No eval set — 'it looks like it works'", "Ignoring the 'I don't know' case"], studyTip: "Debug retrieval first, prompts second. 80% of bad answers are retrieval problems." },
  { focus: "Agents = loops with tools and a budget. Your job is bounding autonomy.", checkpoint: "A multi-step agent with guardrails (max iterations, cost cap), tracing, and an approval gate.", pitfalls: ["No max-iteration cap — the infinite loop interview question", "Non-idempotent side-effecting tools", "Skipping tracing; then debugging blind"], studyTip: "Trace every run. Failures you can see become fixes; failures you can't see become outages." },
  { focus: "Evals are unit tests for non-deterministic systems. CI gates separate demos from products.", checkpoint: "CI fails when eval pass-rate drops; you can quote your cost/query and p95 latency.", pitfalls: ["LLM-as-judge never calibrated against humans", "Eval set too small (<20) — noise, not signal", "Guardrails bolted on last instead of designed in"], studyTip: "Write the judge rubric first, then check it against 10 human-labeled cases before trusting it." },
  { focus: "FDE = own one customer's outcome. Audit, negotiate the eval, rollout slowly, handover.", checkpoint: "Flagship built as a customer engagement: SOW → demo → deploy → handover pack + case study.", pitfalls: ["Building before shadowing the real workflow", "Demoing without a backup environment", "No handover — the customer can't maintain it"], studyTip: "Play customer seriously: get a friend to push back on your scope out loud." },
  { focus: "Convert everything into interview signal: numbers, stories, reps.", checkpoint: "2 resume variants, 25+ applications sent, 5+ mock interviews done, negotiation scripts ready.", pitfalls: ["One generic resume for both roles", "Zero mock interviews — first real interview shouldn't be your first rep", "Weak stories: adjectives instead of numbers"], studyTip: "Describe your work in one quantified sentence per project. If you can't, you don't understand it yet." }
];

window.SPRINT_DATA.PHASE_GUIDE = PHASE_GUIDE;

const ROLES = [
  {
    id: "ai-engineer",
    name: "AI Engineer",
    tagline: "Build LLM-powered product features that serve thousands of users",
    color: "ai",
    whatYouOwn: "A system or feature many users touch � retrieval quality, agent reliability, cost and latency, and a measurable eval suite.",
    hardPart: "Model quality at scale, latency, cost",
    judgedOn: "Eval pass-rate, product metrics, reliability",
    travel: "None (product team, your codebase)",
    bestIf: "You like depth on one product, A/B tests, offline eval loops, and a stable roadmap.",
    syllabus: [
      "LLM fundamentals: tokens, context windows, pricing, model selection",
      "Prompt & context engineering + structured outputs (JSON schemas)",
      "RAG end-to-end: chunking, embeddings, vector DBs, hybrid BM25+dense search, re-rankers",
      "Agents & tool calling (LangGraph), MCP basics",
      "Evals: golden sets, LLM-as-judge, regression gates in CI",
      "Production: tracing (LangSmith/Phoenix), semantic caching, model routing, cost/latency budgets",
      "Safety: prompt-injection defense, output validation, PII filters",
      "LLM system design: RAG at scale, LLM gateways, eval infrastructure"
    ],
    roadmap: [
      { days: "Days 1�7", focus: "Foundations: Python, LLM APIs, prompting, tool calling", phase: 1 },
      { days: "Days 8�14", focus: "RAG & retrieval � your first shippable AI system", phase: 2 },
      { days: "Days 15�21", focus: "Agents & tool use � the differentiating skill", phase: 3 },
      { days: "Days 22�28", focus: "Evals, tracing, cost control � what makes it production-grade", phase: 4 },
      { days: "Days 29�35", focus: "Flagship project + public demo (your interview artifact)", phase: 5 },
      { days: "Days 36�45", focus: "Resume, apply to AI Engineer roles, system design + mocks", phase: 6 }
    ],
    interviewFocus: [
      "LLM system design: 'Design RAG for a bank' (RBAC, freshness, multi-tenant)",
      "Deep-dive your flagship: architecture choices, eval numbers, cost per query",
      "Rapid-fire: chunking strategies, hybrid search, LLM-as-judge calibration, CI eval gates",
      "DSA: standard patterns (arrays ? DP) � NeetCode 150"
    ],
    youtube: [
      ["1. Generative AI for Beginners — Microsoft full course","https://www.youtube.com/playlist?list=PLlrxD0HtieHj2nfK54c62lcs3-YSTx3Je"],
      ["2. Hugging Face LLM Course — official","https://www.youtube.com/playlist?list=PLo2EIpI_JMQvWfQndUesu0nPBAtZ9gP1o"],
      ["3. Generative AI Full Course — freeCodeCamp","https://youtu.be/mEsleV16qdo"],
      ["4. RAG from Scratch — freeCodeCamp","https://youtu.be/sVcwVQRHIc8"],
      ["5. RAG From Scratch — LangChain official series","https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x"],
      ["6. Master LangChain — Krish Naik playlist","https://www.youtube.com/playlist?list=PLZoTAELRMXVORE4VF7WQ_fAl0L1Gljtar"],
      ["7. Complete Agentic AI Course (10h) — Krish Naik","https://www.youtube.com/watch?v=rV3HJ4LEZ7k"],
      ["8. NeetCode — 150 DSA pattern videos","https://www.youtube.com/@NeetCode"],
      ["9. ByteByteGo — system design for interviews","https://www.youtube.com/@ByteByteGo"],
      ["10. Krish Naik — MCP (Model Context Protocol) playlist","https://www.krishnaik.in/playlists"]
    ],
    resources: [
      ["DeepLearning.AI short courses","https://www.deeplearning.ai/short-courses/"],
      ["LangChain / LangGraph docs","https://python.langchain.com/docs/introduction/"],
      ["RAG From Scratch (LangChain)","https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x"],
      ["NeetCode 150","https://neetcode.io/practice"]
    ]
  },
  {
    id: "agentic-engineer",
    name: "Agentic Engineer",
    tagline: "Make autonomous systems reliable: loops, tools, guardrails, recovery",
    color: "fde",
    whatYouOwn: "The agentic system itself � planning loops, tool orchestration, state machines, failure handling, cost caps, and safe autonomy.",
    hardPart: "Control flow: loops, retries, cost, safe actions on non-deterministic components",
    judgedOn: "Task completion rate, safe failure modes, cost per run",
    travel: "None (platform / product team)",
    bestIf: "You like distributed-systems thinking applied to unreliable components, and you enjoy debugging 'why did it do that?'",
    syllabus: [
      "Agent loop anatomy: observe ? reason ? act (ReAct), plan-and-execute",
      "LangGraph: state, nodes, edges, cycles, persistence, human-in-the-loop",
      "Tool design: strict JSON schemas, validation, idempotency, error taxonomy",
      "MCP (Model Context Protocol): servers, clients, tool registries",
      "Guardrails: max iterations, token/cost caps, timeouts, approval gates for side-effects",
      "Failure handling: retries with backoff, fallback models, graceful degradation",
      "Trajectory evals: golden tool-call sequences, not just final answers",
      "Observability: step-level traces, per-run cost reports, audit logs",
      "Multi-agent patterns: researcher/critic, orchestrator/worker � and when NOT to use them"
    ],
    roadmap: [
      { days: "Days 1�7", focus: "Foundations (shared core) � LLM APIs, prompting, tools", phase: 1 },
      { days: "Days 8�14", focus: "RAG as agent memory � retrieval is the agent's context source", phase: 2 },
      { days: "Days 15�21", focus: "CORE PHASE � LangGraph, MCP, guardrails, HITL, multi-step agents", phase: 3 },
      { days: "Days 22�28", focus: "Trajectory evals, tracing, cost caps � the production bar", phase: 4 },
      { days: "Days 29�35", focus: "Flagship = an agent with evals, guardrails and a live trace demo", phase: 5 },
      { days: "Days 36�45", focus: "Deep-dive prep: agent failure modes, trajectory evals, live coding", phase: 6 }
    ],
    interviewFocus: [
      "'Agent loops forever � what do you do?' (iteration caps, timeouts, human escalation)",
      "'How do you eval an agent trajectory?' (golden sequences, step-level judges, CI gates)",
      "'Design an agent for X workflow' � with guardrails, HITL and cost caps stated unprompted",
      "Idempotency and exactly-once semantics for side-effecting tools",
      "MCP: why a protocol beats per-app tool glue"
    ],
    youtube: [
      ["1. Complete Agentic AI Course (10h) — Krish Naik: LangGraph, RAG, guardrails, evals","https://www.youtube.com/watch?v=rV3HJ4LEZ7k"],
      ["2. Get Started with LangGraph — official quickstart","https://youtu.be/gqvFmK7LpDo"],
      ["3. Agentic AI with LangGraph — Krish Naik playlist (12 videos)","https://www.youtube.com/playlist?list=PLZoTAELRMXVPFd7JdvB-rnTb_5V26NYNO"],
      ["4. LangGraph beginner → advanced — Sunny Savita playlist","https://www.youtube.com/playlist?list=PLQxDHpeGU14AJ4sBRWLBqjMthxrLXJmgF"],
      ["5. Code Your First AI Agent — Akshit Madan","https://youtu.be/nQnN31yg-MU"],
      ["6. Building AI Agent Projects — Sonu Kumar playlist","https://www.youtube.com/playlist?list=PLrLEqwuz-mRLLOov7hBru67qyiq9oZyF1"],
      ["7. LangSmith Evaluations — LangChain official playlist","https://www.youtube.com/playlist?list=PLfaIDFEXuae0um8Fj0V4dHG37fGFU8Q5S"],
      ["8. RAG & Agents with Prof. Tom Yeh — full playlist","https://www.youtube.com/playlist?list=PL0cq-CiC5Qht17CmxgQDotcT-mlOulxqg"],
      ["9. Updated LangChain series — Krish Naik (2025/26)","https://www.youtube.com/playlist?list=PLZoTAELRMXVOQPRG7VAuHL--y97opD5GQ"],
      ["10. NeetCode — heaps, graphs, DP for interviews","https://www.youtube.com/@NeetCode"]
    ],
    resources: [
      ["LangGraph docs","https://python.langchain.com/docs/introduction/"],
      ["MCP docs","https://modelcontextprotocol.io/"],
      ["Krish Naik — Agentic AI course (10h)","https://www.youtube.com/@krishnaik06"],
      ["codebasics — Agentic AI crash course","https://www.youtube.com/@codebasics"],
      ["DeepLearning.AI — Agentic courses","https://www.deeplearning.ai/short-courses/"]
    ]
  },
  {
    id: "fde",
    name: "Forward Deployed Engineer",
    tagline: "Own one customer's outcome inside their messy reality",
    color: "fde",
    whatYouOwn: "The outcome at one account: messy data, blocked access, sceptical stakeholders, security review, rollout, adoption � discovery to production.",
    hardPart: "The environment & people: undocumented data, permissions, politics, disagreement on 'correct'",
    judgedOn: "Customer adoption + production outcome (and expansion revenue)",
    travel: "25�50% (OpenAI/Anthropic postings), on-call possible",
    bestIf: "You like fast end-to-end ownership, ambiguity, direct customer impact, and can handle travel � and saying no.",
    syllabus: [
      "Discovery: audit the real workflow vs the documented one; who signs off; success metric",
      "Scoping: 2-week POC vs 2-month build; scope negotiation; saying no with a reason",
      "Negotiated evals: domain experts disagree ? shared rubric ? it becomes the acceptance test",
      "Deployment into customer environments: VPC, on-prem, air-gapped, data residency, RBAC",
      "Security review readiness: infosec Q&A, PII handling, audit logs, rollback plans",
      "Rollout: pilot ? canary ? full rollout with explicit rollback at each stage",
      "Exec communication: 10-min updates, outcome metrics, expansion asks � zero jargon",
      "Handover: runbook, eval report, walkthrough � the system must survive your departure",
      "Commercial judgment: autonomy ladder (suggest ? draft ? approve ? act), value-per-workflow framing"
    ],
    roadmap: [
      { days: "Days 1�7", focus: "Foundations + FDE landscape: read the market analyses, pick your lean (builder vs strategist)", phase: 1 },
      { days: "Days 8�14", focus: "RAG as the typical first FDE deliverable; practice the 5 discovery questions", phase: 2 },
      { days: "Days 15�21", focus: "Agents with guardrails + the autonomy ladder � FDE demos live on this", phase: 3 },
      { days: "Days 22�28", focus: "The negotiated-eval skill + acceptance criteria � FDE's #1 interview topic", phase: 4 },
      { days: "Days 29�35", focus: "CORE PHASE � build the flagship as a customer engagement: SOW ? build ? deploy ? handover pack", phase: 5 },
      { days: "Days 36–45", focus: "FDE resume variant, 5 targeted FDE applications, mock FDE rounds, negotiation", phase: 6 }
    ],
    playbook: [
      { h: "The FDE loop (memorize this)", items: [
        "1. AUDIT — sit with users, watch the real workflow (not the documented one). Shadow before building.",
        "2. NEGOTIATED EVAL — domain experts define 'correct', they disagree; you drive a shared rubric. It IS the acceptance test and SOW exit criteria.",
        "3. SANDBOX → PILOT → CANARY → FULL ROLLOUT — autonomy expands only as trust is earned; rollback at every stage.",
        "4. HANDOVER — runbook + eval report + 15-min walkthrough. The system must survive your departure."
      ]},
      { h: "Discovery questions (ask these first)", items: [
        "What does success look like, in numbers? Who signs off?",
        "Where does the data live? Who owns it? What's messy about it?",
        "What has already been tried? Why did it fail?",
        "What can we NOT touch (security, compliance, existing systems)?",
        "Who is the skeptic? Who is the champion? Who has the budget?",
        "What's the 2-week POC vs the 2-month build?"
      ]},
      { h: "The autonomy ladder", items: [
        "Stage 1 — Suggest: agent proposes, human decides (low trust, week 1)",
        "Stage 2 — Draft: agent drafts actions/outputs, human reviews before anything executes",
        "Stage 3 — Act with approval: agent executes after explicit human yes",
        "Stage 4 — Act autonomously: agent executes; humans audit samples (weeks 4+)"
      ]},
      { h: "Negotiated eval — the #1 FDE interview topic", items: [
        "Step 1: collect 30–50 real cases from the customer's workflow",
        "Step 2: two domain experts label them independently — log every disagreement",
        "Step 3: adjudicate each disagreement; convert decisions into explicit rubric criteria",
        "Step 4: rubric becomes the LLM-judge prompt + golden set + CI gate + SOW acceptance clause",
        "Step 5: re-baseline quarterly — the definition of 'correct' drifts"
      ]},
      { h: "Security & rollout checklist", items: [
        "Data residency: where does data live? Does anything leave their VPC?",
        "RBAC: who can see traces? PII redaction in logs?",
        "Sandbox first, mirror of prod, rollback rehearsed",
        "Pilot with 1 team → canary 10% → full rollout; weekly eval report to sponsor",
        "Postmortem template ready BEFORE the first incident"
      ]},
      { h: "Customer comms that work", items: [
        "Weekly email: progress (with numbers) + risk + one clear ask",
        "Say no with a reason + a smaller yes (not X, but here's Y in 2 weeks)",
        "Never demo without a backup environment and a rehearsed failure plan",
        "10-minute exec update formula: problem → what shipped → number → next ask",
        "Leave every meeting with: decision made, owner, date — in writing"
      ]}
    ],
    interviewFocus: [
      "'Scope a POC from this messy brief, out loud, in 10 minutes' � the signature Palantir-style round",
      "'Two experts disagree on correctness � how do you settle it?' (negotiated rubric)",
      "Behavioral: difficult stakeholder, production incident at a customer, saying no to scope, failure",
      "'Why FDE and not product engineering?' � travel, ambiguity, outcome ownership",
      "Your flagship as a case study: constraint ? what shipped ? numbers ? lesson"
    ],
    youtube: [
      ["1. Generative AI for Beginners — Microsoft (speak the customer's language)","https://www.youtube.com/playlist?list=PLlrxD0HtieHj2nfK54c62lcs3-YSTx3Je"],
      ["2. Generative AI Full Course — freeCodeCamp (build & demo end-to-end)","https://youtu.be/mEsleV16qdo"],
      ["3. Complete Agentic AI Course (10h) — Krish Naik (your demo workhorse)","https://www.youtube.com/watch?v=rV3HJ4LEZ7k"],
      ["4. RAG from Scratch — freeCodeCamp (the #1 FDE deliverable)","https://youtu.be/sVcwVQRHIc8"],
      ["5. ByteByteGo — explaining systems to non-engineers","https://www.youtube.com/@ByteByteGo"],
      ["6. Exponent — behavioral, scoping & negotiation mocks","https://www.youtube.com/@Exponent"],
      ["7. Krish Naik — all project playlists (clone-ready demos)","https://www.krishnaik.in/playlists"],
      ["8. NeetCode — DSA for the coding round","https://www.youtube.com/@NeetCode"],
      ["9. YouTube search: 'forward deployed engineer' — Palantir & OpenAI talks","https://www.youtube.com/results?search_query=forward+deployed+engineer"]
    ],
    resources: [
      ["DeepLearning.AI — The Batch: FDEs","https://www.deeplearning.ai/the-batch/forward-deployed-engineers-and-the-future-of-ai-engineering"],
      ["open-fde.ai — FDE market analysis","https://open-fde.ai/jobs/market/"],
      ["FDE vs AI Engineer (Re:Sourced)","https://www.resourced.com.au/articles/agentic-ai-engineer-vs-forward-deployed-engineer"],
      ["FDE Interview Prep — complete guide","https://fdeinterviewprep.com/blog/fde-vs-ai-engineer"]
    ]
  }
];

window.SPRINT_DATA.ROLES = ROLES;

const SYLLABUS = [
  // Day 1
  ["What an LLM really is: next-token prediction, parameters, no database � why hallucination is structural","Tokens & tokenization: ~0.75 words per token, input vs output pricing math (do 3 cost calculations by hand)","Messages API: system / user / assistant roles; statelessness � memory = resending history","Sampling parameters: temperature, top_p, max_tokens � when to use 0 vs 0.7","Context windows & 'lost in the middle'; KV cache at a conceptual level","Lab: venv + .env + first streaming call to OpenAI AND Anthropic; print usage/tokens"],
  // Day 2
  ["Prompt anatomy: role, context, task, constraints, output format � the 5-part system prompt","Few-shot vs zero-shot; when examples beat instructions","Chain-of-thought: 'think step by step' � pros/cons and token cost","Delimiters & instruction/data separation (prevents prompt injection)","Structured outputs: JSON schema mode, pydantic validation, retry-on-invalid","Lab: build 4 reusable prompt templates (classify / extract / summarize / rewrite) with typed JSON outputs"],
  // Day 3
  ["Tool calling end-to-end: declare name + description + JSON schema ? model emits structured call ? your code executes ? result returns to model","Designing tool descriptions the model can actually choose correctly (verbs, when-to-use hints)","Argument validation & malformed-call handling; unknown tool names","Token cost of tool schemas in context","Lab: calculator + web search tools wired to a chat loop; log every call"],
  // Day 4
  ["Conversation memory patterns: sliding window, summarization, SQLite persistence","CLI UX: commands, /help, graceful exit, colored output","Error handling: rate limits, retries with backoff, timeouts","Streaming display in a terminal","Lab: ship the CLI chatbot; write README with setup steps; record 60s demo"],
  // Day 5
  ["Embeddings: what a vector is; cosine similarity vs dot product; dimensions (384/768/1536)","Embedding model tradeoffs: OpenAI text-embedding-3 vs open (BGE, E5)","Vector DBs: Chroma (local) vs pgvector (Postgres) vs Pinecone (managed) � when each","Indexing: HNSW intuition; metadata filtering; persistence","Lab: embed 100 docs, query them, compare top-5 for related vs unrelated queries"],
  // Day 6
  ["Retrieval-augmented generation: the full loop (query ? embed ? search ? stuff context ? generate)","Chunking: fixed, recursive (paragraph?sentence), semantic; overlap tradeoffs","Prompt assembly for RAG: instruction + retrieved chunks + question; citation instructions","Measuring: which chunking won on your 5 test queries � write the comparison table","Lab: bolt retrieval onto Day-4 chatbot ? working RAG v0"],
  // Day 7
  ["Consolidation week: re-do your weakest topic � no new material today","Learning log method: learned / built / stuck / next � 5 minutes, every Sunday","FDE landscape: the 5 FDE jobs (production builder, pre-sales, strategist, domain expert, field engineer)","Resume headline + GitHub profile refresh","Mock: 5-minute self-intro out loud, recorded"],
  // Day 8
  ["Naive vs advanced RAG: HyDE, query rewriting, multi-query, step-back prompting","Pipeline design doc: ingest ? clean ? chunk ? embed ? store ? retrieve ? re-rank ? generate ? cite","When RAG fails: stale data (? re-index pipeline), wrong chunks (? better retrieval), hallucination (? grounding)","Token budget: how much context to stuff and why more ? better","Deliverable: RAG design document committed to repo"],
  // Day 9
  ["Vector DB operations: upsert, query, metadata filter (where clauses), persistence, namespaces","Hybrid indexing: dense (semantic) + sparse (BM25 keywords) � why each catches what the other misses","Benchmarking methodology: same 20 queries � 3 chunking strategies ? recall@k table","pgvector vs Chroma: install, inspect with psql or chroma cli","Security note: where embeddings can leak content (membership inference) � know the risk"],
  // Day 10
  ["BM25Okapi intuition: term frequency � inverse document frequency; why keywords still matter","Re-rankers: bi-encoder (fast, retrieval) vs cross-encoder (slow, precise) � two-stage retrieval","Fusion: reciprocal rank fusion (RRF) for combining dense+sparse","Cohere Rerank free tier or local cross-encoder (ms-marco-MiniLM)","Measure: same 10 queries before/after re-ranking � table the latency vs quality win"],
  // Day 11
  ["Document ingestion of messy real PDFs: PyMuPDF/pdfplumber, OCR for scans (Tesseract), table extraction","Handling bad text: encoding issues, headers/footers, multi-column layouts","Citations: chunk ? source page mapping; 'according to [doc, p.3]' format","No-answer handling: similarity threshold + 'I don't know' instruction","Deliverable: RAG v1 answering questions over YOUR documents with verifiable citations"],
  // Day 12
  ["Retrieval tuning knobs: top-k, chunk overlap, rerank depth, score threshold � one variable at a time","Grounding & faithfulness: 'answer ONLY from context' + citation verification pass","Failure taxonomy: wrong chunk / missing context / hallucination / stale data � log each with examples","Prompt iteration discipline: change one thing, re-run the same 10 queries, keep the winner","Deliverable: before/after metrics table on your golden 10"],
  // Day 13
  ["Golden set construction: 20 Q/A from real docs incl. unanswerable cases; leakage check","Metrics: recall@k (retrieval) vs faithfulness/relevance (generation) � know what each proves","LLM-as-judge basics: pairwise vs absolute scoring; why you must spot-check the judge","Eval harness structure: run_eval.py ? JSON report ? tracked pass-rate","Deliverable: baseline vs tuned comparison committed to repo"],
  // Day 14
  ["Review week 2 � no new material","RAG design doc polish: architecture diagram + metrics + failure modes","FDE sim: 15-min mock discovery call � record yourself asking: problem, data, users, success metric, timeline, stakeholders","Debrief framework: what did I ask, what did I miss, what would I ask differently","Mock DSA #1: 45 minutes, timed, then honest review"],
  // Day 15
  ["Agent loop anatomy: observation ? reasoning ? action (ReAct pattern)","LangGraph core: State (TypedDict), nodes, edges, conditional edges, cycles","Why state machines > prompt chains: inspectability, resumability, testability","Minimal ReAct agent from scratch, then the same thing in LangGraph","When agents are the wrong tool (single-shot tasks, deterministic pipelines)"],
  // Day 16
  ["Tool schema design: name, description, parameters (JSON Schema) � the model reads these to choose","MCP (Model Context Protocol): what it solves � one tool server, any agent (USB-C analogy)","MCP architecture: host ? client ? server; tools/resources/prompts primitives","Run an MCP server (filesystem or GitHub) and connect it to your agent","Security: MCP servers have your permissions � treat them as trusted code"],
  // Day 17
  ["Multi-step agent design: planner ? executor ? verifier","Loop control: max_iterations, token budget, timeout, stop conditions","State management: what goes in State vs external store","Full trace capture: every step logged (input/output/tokens/latency)","Lab: research agent (search ? read ? synthesize ? cite) with all guardrails on"],
  // Day 18
  ["Retry patterns: exponential backoff + jitter; fallback model routing","Idempotency: why 'create_ticket' must be safe to retry (idempotency keys)","Prompt injection: 3 attack classes (ignore-instructions, exfiltration, tool hijack) + defenses","Sandboxing tool execution; allow-list actions; deny-list patterns","Circuit breakers: stop after N consecutive failures, alert a human"],
  // Day 19
  ["Human-in-the-loop: interrupt_before / approval gates for side-effecting tools","Autonomy ladder design: suggest ? draft ? approve ? act � and when to graduate a stage","State persistence: checkpointers (SQLite); resume after crash/interrupt","Audit logging: who approved what, when, with what context","Escalation design: when the agent is stuck ? hand off with full context, not a shrug"],
  // Day 20
  ["Agent trajectory evals: golden tool-call sequences; step-level scoring","Trace analysis workflow: find the top failure ? fix ? re-run eval suite","Cost report: $ per completed task, tokens per step � know your unit economics","Determinism tactics: temperature 0 for tool-choosing, seed prompts for tests","Deliverable: hardened agent v2 + eval results + cost table"],
  // Day 21
  ["Review week 3 � no new material","Agent architecture diagram: nodes, edges, state, guardrails, HITL points","FDE sim: discovery call #2 on the 'claims adjusters' brief � scope a 6-week POC out loud, recorded","Feedback loop: play it back, note the 3 weakest moments","Mock DSA #2 + mock: 'Design an agent for X workflow'"],
  // Day 22
  ["Golden sets at scale: 30+ cases; stratified by task type and difficulty; unanswerables included","Eval harness design: dataset ? runner ? judge ? report ? threshold gate","Classification of evals: exact-match, contains, regex, semantic/LLM-judge","Regression tracking: pass-rate over time; per-category breakdowns","Deliverable: automated offline eval for RAG + agent"],
  // Day 23
  ["LLM-as-judge: absolute rubric scoring vs pairwise comparison � when to use which","Rubric design: dimensions (correctness, groundedness, completeness, format) with score anchors 1�5","Calibration: judge vs 10 human-labeled cases; Cohen's agreement; iterate the rubric","Bias awareness: position bias, verbosity bias, self-preference","Deliverable: calibrated judge wired into CI"],
  // Day 24
  ["Tracing: what to capture (prompts, context, tool I/O, tokens, latency, errors)","Phoenix (open source) vs LangSmith (managed) � instrumentation in ~10 lines","Dashboards: latency p50/p95, cost/run, error rate, eval pass-rate, tool success rate","Alerting: p95 latency breach, error spike, eval regression","Deliverable: live dashboard + one alert rule + on-call thinking"],
  // Day 25
  ["Semantic caching: cache by embedding similarity of queries; invalidation","Model routing: cheap tier first (gpt-4o-mini/Haiku), escalate on judge failure","Context engineering cost cuts: retrieved chunks trimming, prompt compression","Budget enforcement: hard cap per request + daily cap + alerts","Measure & document: $/query before vs after � target = $0.01"],
  // Day 26
  ["Prompt injection defense-in-depth: delimiters, instruction hierarchy, output validation, tool allow-lists","10-case injection test suite: ignore-previous, system-prompt-leak, tool-misuse, data-exfiltration","PII/secret detection in outputs (regex + Presidio); redaction before logging","Sandboxed tools: least privilege, separate credentials, audit trail","Output policy: length/format validators; brand-safety classifiers for customer-facing agents"],
  // Day 27
  ["CI for AI: GitHub Actions running the eval suite on PR; fail on regression (e.g., pass-rate drops >2%)","Artifacts & history: store eval reports per commit; trend line in README badge","Gating strategy: block merge vs warn � calibrate to eval confidence","Rollout plan: pilot ? canary (10%) ? full; rollback criteria written in advance","Deliverable: green CI badge backed by real evals"],
  // Day 28
  ["Week 4 review + exec sim","Final eval report: before/after, methodology, caveats � one page","Exec update recording: problem ? what shipped ? the number ? the ask (10 min)","Backup plan: what breaks live, what you say, what the fallback demo is","Mock DSA #3 + STAR story: 'an FDE project failed'"],
  // Day 29
  ["Choosing the flagship domain: contracts / support / research / finance ops � pick where YOU have context","Spec like a PM + FDE: users, jobs-to-be-done, tools, data sources, success metric, out-of-scope","SOW-style one-pager: objective, scope, out-of-scope, acceptance eval, timeline, risks, assumptions","Success metric written BEFORE building: e.g., '=85% faithfulness on 30-case golden set, =$0.01/query'","Repo scaffold: README skeleton, CI, .env.example, architecture stub"],
  // Day 30
  ["Ingestion at volume: batch pipeline, progress tracking, retry failed docs, idempotent loads","Messy real-world data: scans (OCR), tables, mixed languages, duplicates","Agent layer: tools for search/calc/API; guardrails from Day 17�19 wired in","Tracing on from the first commit � never 'add observability later'","Milestone: end-to-end happy path works on 5 real queries"],
  // Day 31
  ["Golden set for the flagship: 30 cases incl. adversarial and unanswerable","CI eval gate (Day 27 pattern) applied to the flagship repo","Baseline vs tuned: one improvement iteration documented with numbers","Acceptance doc: the table the customer would sign � eval results + criteria","Deliverable: CI badge + acceptance.md in repo"],
  // Day 32
  ["Docker: multi-stage builds, .dockerignore, env injection, health checks","Deploy to Render/Fly.io free tier or a VPS; persistent disk for SQLite/vector store","HTTPS + auth on the demo (even basic auth) � you don't ship open endpoints","Smoke tests post-deploy; restart policy; logs","Customer-VPC runbook: prerequisites, install, config, verify, rollback � zero access assumed"],
  // Day 33
  ["Production tracing in the deployed app: spans per step, user-visible latency","Cost report per workflow: tokens in/out, $ per completed task, monthly projection","Runbook: top-5 failures with diagnosis + fix + escalation","SLOs: set p95 latency + error-rate + eval-score targets for your own app","Deliverable: runbook.md + cost-report.md committed"],
  // Day 34
  ["README structure: problem ? architecture (diagram) ? quickstart ? evals (table) ? demo GIF ? limitations","Architecture diagram in Excalidraw: components, data flow, trust boundaries","Demo video: 5 min � problem, 60s live demo, eval numbers, what's next","Two READMEs: engineer deep-dive + exec one-pager with outcome metrics","Pin the repo; clean commit history; tag v1.0"],
  // Day 35
  ["Week 5 retro: what broke, what you'd redo, top lesson � write it publicly","Pin + post: flagship on GitHub; case study post on LinkedIn with #AppliedAI","Resume update: flagship metrics quoted (eval pass-rate, cost/run, latency)","Target list: 20 roles � AI Engineer, Agentic Engineer, FDE at product cos + labs + services","Full mock: DSA + explain-aloud; update application tracker"],
  // Day 36
  ["Resume, FDE variant: same projects, outcome framing (numbers, adoption, rollout) not tech-stack listing","Resume, AI Engineer variant: depth framing (architecture, evals, cost, scale)","ATS pass: LLM, RAG, agents, MCP, LangGraph, evals, Python, cloud keywords","GitHub profile README + pinned flagship; LinkedIn headline + featured section","Tailor rule: 3 bullets rewritten per JD � never spray the same resume"],
  // Day 37
  ["Volume strategy: 10�15 tailored applications/day beats 50 generic","Referrals: find 1st/2nd degree at target cos; specific ask ('15 min on your AI platform team?')","Tracker: role, company, date, contact, stage, follow-up � Notion/Sheet","LinkedIn post cadence: 2�3/week � your learning log is content","Pipeline math: ~20% screen ? ~30% onsite ? 1 offer per 50 applications is normal"],
  // Day 38
  ["Design: enterprise RAG � 1M docs, RBAC, freshness/re-indexing, multi-tenant, audit","Design: agent platform � tool registry, guardrails, evals-as-a-service, billing per run","Framework: requirements ? data model ? components ? failure modes ? scale/cost ? rollout","Whiteboard discipline: clarify first (5 min), high-level ? deep-dives ? bottlenecks","Deliverable: both designs whiteboarded + recorded once each"],
  // Day 39
  ["Design: LLM gateway � routing, caching, fallback, cost caps, PII scrubbing","Design: eval infrastructure � golden sets, judge service, CI gates, drift alerts","Tradeoff vocabulary: consistency vs availability vs latency vs cost vs safety � say the tradeoff out loud for every decision","When NOT to use an LLM: deterministic parsing, rules, search � and say this first","Deliverable: tradeoff memo for one design � customers/interviewers both respect this"],
  // Day 40
  ["STAR method: Situation�Task�Action�Result; Result must be quantified","The 8 stories every AI candidate needs: flagship, conflict, failure, ambiguity, customer, scale, learning, leadership","FDE variants: difficult stakeholder, scope creep, prod incident at customer, saying no","Delivery: 90-second answers, spoken � not written; record 3 and grade yourself","'Why this role / why us' � research 3 companies, one genuinely specific sentence each"],
  // Day 41
  ["Full loop simulation: DSA 45m timed + LLM system design 45m + flagship deep-dive 30m","Self-scoring rubric: communication, approach, correctness, recovery from hints","Fix the 3 weakest points immediately � don't 'practice more generally'","FDE round: scope a POC from a messy brief out loud, 10 minutes, recorded","Recovery plan: how you'll handle each interview bomb the next day"],
  // Day 42
  ["Rapid-fire drill: 15 eval/agent/RAG questions, 30 seconds each � train instant recall","Live-coding-with-LLM round: build a tool-calling function under observation � narrate tradeoffs","Negotiation fundamentals: base, equity, bonus, level, travel %, on-call, signing","Offer evaluation framework: comp � growth � manager � team's AI maturity","Salary research: 3 data points for your market � floor, target, stretch"],
  // Day 43
  ["Final review � NO new learning; consolidation only","Re-read flagship README, eval report, cost report � you'll be asked to defend every number","Skim MCP + LangGraph docs once more � vocabulary currency matters","DSA warm-up only: 1 easy per pattern; then stop � resting beats cramming","Logistics: quiet room, IDE/setup tested, timer, water, phone away"],
  // Day 44
  ["Offer-stage negotiation scripts: 'Is there flexibility on base?' / 'What does leveling look like?' / 'How do you measure success in 90 days?'","Compare two offers out loud (AI Engineer vs FDE): comp, learning, mentorship, travel, scope","Thank-you emails within 24h: one specific callback + one piece of new thinking","Rapid-fire eval questions � still sharp; flagship deep-dive until flawless","Mindset: interviews are a skill; your reps are done � trust the preparation"],
  // Day 45
  ["Interview day execution: warm-up pitch out loud �3; arrive early; breathe","Ask THEM: evals? on-call? customer load? success metric for first 90 days? team's biggest failure?","If customer-judgment probed: lead with numbers from your case study, not opinions","Debrief within 10 min of every round: questions asked, what landed, one fix for next round","After the offer: celebrate, then update this tracker � you did the thing"]
];

window.SPRINT_DATA.SYLLABUS = SYLLABUS;
