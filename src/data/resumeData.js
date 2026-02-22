import cvPdf from "../../assets/Linfeng-cv.pdf";

const resumeData = {
  basics: {
    name: "Linfeng Gao",
    role: "Software Developer / AI Engineer",
    availabilityRole: "SDE / AI Engineer",
    summary:
      "Incoming new-grad software engineer (M.Eng., ECE, University of Toronto) focused on backend development, AI systems, and production reliability tooling.",
    availability: "Seeking software and AI engineering roles.",
    expectedGraduation: "Expected graduation: June 2026.",
    location: "Toronto, Canada",
    email: "gaolf01@outlook.com",
    github: "https://github.com/Linferr",
    linkedin: "https://www.linkedin.com/in/linfeng-gao-0840b8243/",
    cvUrl: cvPdf
  },
  focus: [
    "Full-stack development: build practical web products with clear APIs and reliable deployment workflows.",
    "AI development: design retrieval, agent, and model-evaluation pipelines that can be measured and iterated.",
    "Testing and reliability: improve system robustness through fuzzing, triage tooling, and failure analysis."
  ],
  experience: [
    {
      company: "Huawei Technologies",
      role: "Software Intern",
      date: "Jul 2025 - Oct 2025",
      location: "Hangzhou, China",
      highlights: [
        "Reworked ArkTS fuzzing generation and mutation logic with context constraints (scope/type/state), reducing invalid sample production in early stages.",
        "Improved valid-case yield by 6.2% and edge coverage by 5.3% under fixed-budget evaluation runs.",
        "Designed JIT-focused scenarios with warm-up loops and optimization triggers, then compared interpreter, optimized, and deopt behaviors.",
        "Built reusable triage workflow to standardize crash signatures and speed up issue handoff to compiler engineers."
      ],
      details: [
        "Work centered on compiler testing infrastructure where stability and reproducibility mattered as much as raw coverage.",
        "The role required balancing deep engine behavior analysis with practical tooling that teammates could run repeatedly."
      ]
    },
    {
      company: "Psychometrics and Responsible AI Lab",
      role: "Research Assistant (LLM Systems)",
      date: "Sep 2024 - Apr 2025",
      location: "Toronto, Canada",
      highlights: [
        "Built a GPT-based RAG workflow for psychometric literature retrieval and questionnaire drafting.",
        "Implemented section-aware and token-window chunking, embedding generation, and FAISS top-k retrieval across 40+ papers per topic.",
        "Created evaluation workflows for retrieval quality (Recall@k, MRR) and generation quality (groundedness, citation coverage, duplication).",
        "Added analysis utilities that made failure modes visible and easier to iterate with researchers."
      ],
      details: [
        "This project combined software engineering with domain collaboration, requiring frequent prompt and retrieval adjustments based on expert feedback.",
        "A key value was converting research needs into concrete, testable quality metrics rather than one-off demo outputs."
      ]
    },
    {
      company: "Ericsson",
      role: "AI Developer Intern",
      date: "May 2024 - Sep 2024",
      location: "Beijing, China",
      highlights: [
        "Built SQL and regex/template-based pipelines to normalize heterogeneous device logs into structured model-ready records.",
        "Implemented dual-path PA-failure detection: LogBERT on sequence windows and XGBoost on engineered statistical features.",
        "Prioritized low miss-detection for risk-sensitive incidents, reaching 96.6% recall (XGBoost) and 95.1% recall (LogBERT) on internal validation.",
        "Delivered workflow outputs for engineers to review high-priority fault candidates with clearer signal and context."
      ],
      details: [
        "The internship focused on translating noisy operational logs into dependable machine-learning inputs at production scale.",
        "A major challenge was aligning model output with real troubleshooting workflows instead of pure benchmark optimization."
      ]
    },
    {
      company: "Southeast University, National Key Laboratory of Millimeter Waves",
      role: "Research Assistant",
      date: "May 2024 - Aug 2024",
      location: "Nanjing, China",
      highlights: [
        "Developed host-side control software in C++/Qt for system control, parameter adjustment, and runtime state monitoring.",
        "Supported control and adaptation circuit optimization to improve resource usage and routing efficiency in array-panel workflows.",
        "Contributed to integration testing and debugging across hardware-control and software-control boundaries.",
        "Mentored undergraduate IoT project work on system integration, implementation, and performance tuning."
      ],
      details: [
        "This RA role emphasized practical systems engineering where software reliability directly affected lab hardware operation quality.",
        "The work built foundational experience in cross-disciplinary collaboration between embedded/control and software teams."
      ]
    }
  ],
  projects: [
    {
      name: "ArcBrief",
      period: "2026 - Present",
      summary:
        "Autonomous research and daily briefing assistant that combines scheduled news ingestion with deep-research report generation.",
      highlights: [
        "Implemented staged pipeline: outline -> search -> summarize -> critique -> reflection -> final report.",
        "Built recurring topic workflows with RSS/Tavily ingestion, clustering, and Discord delivery.",
        "Operated FastAPI + APScheduler backend on Railway with Next.js frontend on Vercel."
      ],
      tech: ["FastAPI", "APScheduler", "LLM agents", "Next.js", "SQLite", "Discord Bot"],
      link: ""
    },
    {
      name: "Curbside Parking Recognition",
      period: "Sept 2023 - May 2024",
      summary:
        "End-to-end curbside parking recognition using YOLOv7 detection with motion analysis and cloud-edge data flow.",
      highlights: [
        "Trained detection models on Compute Canada for accuracy and edge inference efficiency.",
        "Designed cloud-edge architecture with LoRaWAN communication and NoSQL backend ingestion.",
        "Built deployment pipeline for real-world curbside traffic scenarios."
      ],
      tech: ["Python", "YOLOv7", "Computer Vision", "NoSQL", "IoT"],
      link: ""
    },
    {
      name: "Bomberman Game on DE1-SoC",
      period: "Jan 2023 - May 2023",
      summary:
        "A full-stack game system combining web UI, backend APIs, and FPGA deployment for real-time multiplayer gameplay.",
      highlights: [
        "Built game web interface with account features, room discovery, and in-game controls using HTML/CSS/JavaScript.",
        "Implemented Flask-based backend APIs and WebSocket messaging for low-latency game state synchronization.",
        "Deployed on DE1-SoC with Nios II, supporting wireless data transfer and VGA display output.",
        "Added AI opponent behavior and path-planning logic for single-player mode."
      ],
      tech: ["Flask", "WebSocket", "JavaScript", "C", "FPGA", "Nios II"],
      link: ""
    },
    {
      name: "Mobile Community Chat Platform",
      period: "Sept 2022 - Dec 2022",
      summary:
        "Campus social platform with real-time messaging, reporting, and map-driven discovery.",
      highlights: [
        "Built backend services in Node.js + MongoDB with AWS deployment.",
        "Added authentication, input validation, and moderation flows.",
        "Integrated Google APIs for location-aware search."
      ],
      tech: ["Node.js", "MongoDB", "AWS", "WebSocket", "Google APIs"],
      link: ""
    }
  ],
  skills: [
  {
    id: "languages",
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C", "C++", "HTML/CSS"]
  },
  {
    id: "frontend",
    category: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "Next.js"]
  },
  {
    id: "backend",
    category: "Backend & APIs",
    items: ["FastAPI", "Flask", "Node.js", "REST API design", "WebSockets"]
  },
  {
    id: "data",
    category: "Data & Storage",
    items: ["PostgreSQL", "SQLite", "NoSQL (e.g., MongoDB)", "Data modeling", "ETL/Parsing"]
  },
  {
    id: "ml",
    category: "ML & LLM Systems",
    items: [
      "RAG (vector search, reranking)",
      "Embeddings",
      "Agent workflows",
      "Model evaluation (offline metrics, ablations)",
      "XGBoost",
      "LogBERT",
      "YOLOv7"
    ]
  },
  {
    id: "quality",
    category: "Testing & Reliability",
    items: [
      "Fuzzing (Fuzzilli, ArkTS)",
      "Differential testing",
      "Coverage-guided test design",
      "Failure triage & minimization",
      "Debugging & profiling"
    ]
  },
  {
    id: "infra",
    category: "Infra & Cloud",
    items: ["Docker", "AWS", "CI/CD (GitHub Actions)"]
  }
  ],
  education: [
    {
      school: "University of Toronto",
      degree: "M.Eng. in Electrical and Computer Engineering",
      date: "Sep 2024 - Present"
    },
    {
      school: "University of British Columbia",
      degree: "B.A.Sc. in Electrical and Computer Engineering",
      date: "Sep 2020 - Jun 2024"
    }
  ]
};

export default resumeData;
