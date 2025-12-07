export const personalInfo = {
  name: "Alihan BAKIR",
  title: "Robotics Engineer",
  summary: "Full-stack engineer with 8+ years of experience building scalable web applications and distributed systems. Passionate about clean architecture, developer experience, and mentoring teams. Currently focused on cloud-native solutions and modern frontend frameworks.",
  email: "alihan.bakir@epfl.ch",
  location: "Lausanne, CH",
  github: "https://github.com/AlihanBakir",
  linkedin: "https://www.linkedin.com/in/alihanbakir/",
};

export const skills = {
  languages: ["TypeScript", "Python", "Go", "Rust", "SQL"],
  frontend: ["React", "Next.js", "Vue", "Tailwind CSS", "GraphQL"],
  backend: ["Node.js", "FastAPI", "PostgreSQL", "Redis", "gRPC"],
  infrastructure: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
  practices: ["System Design", "Testing", "Agile", "Code Review", "Documentation"],
};

export const experience = [
  {
    id: 1,
    company: "TechCorp Inc.",
    role: "Senior Software Engineer",
    period: "2021 – Present",
    location: "San Francisco, CA",
    description: "Leading the platform team responsible for core infrastructure and developer tooling. Architected and delivered a new microservices framework that reduced deployment time by 60%.",
    highlights: [
      "Designed event-driven architecture handling 10M+ events/day",
      "Mentored 5 junior engineers and established code review practices",
      "Reduced infrastructure costs by 40% through optimization",
    ],
    tech: ["Go", "Kubernetes", "PostgreSQL", "gRPC", "AWS"],
  },
  {
    id: 2,
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    period: "2018 – 2021",
    location: "Remote",
    description: "Early engineer at a Series A startup. Built the core product from MVP to serving 100K+ users. Owned the entire frontend architecture and contributed heavily to backend services.",
    highlights: [
      "Built real-time collaboration features using WebSockets",
      "Implemented comprehensive testing strategy (95% coverage)",
      "Led migration from monolith to microservices",
    ],
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "Redis"],
  },
  {
    id: 3,
    company: "BigTech Co.",
    role: "Software Engineer",
    period: "2016 – 2018",
    location: "Seattle, WA",
    description: "Worked on the ads platform team, building tools for campaign management and analytics. Collaborated with cross-functional teams to deliver features impacting millions of users.",
    highlights: [
      "Optimized ad serving latency by 30%",
      "Built internal dashboards used by 500+ employees",
      "Contributed to open-source developer tools",
    ],
    tech: ["Java", "Python", "React", "Kafka", "Spark"],
  },
];

export const education = [
  {
    institution: "University of California, Berkeley",
    degree: "B.S. Computer Science",
    period: "2012 – 2016",
    notes: "Dean's List, Teaching Assistant for Data Structures",
  },
];

export const projects = [
  {
    id: "distributed-cache",
    title: "Distributed Cache System",
    summary: "A high-performance, distributed caching solution with consistent hashing and automatic failover capabilities.",
    description: "Built a production-ready distributed cache that handles millions of requests per second across multiple nodes. Features include consistent hashing for even distribution, automatic node discovery, and seamless failover handling.",
    problem: "Existing caching solutions couldn't meet our latency requirements at scale, and commercial options were too expensive for our use case.",
    solution: "Implemented a custom solution using Go with a focus on minimal allocations and zero-copy operations. Used SWIM protocol for cluster membership and gossip-based state synchronization.",
    outcome: "Achieved sub-millisecond p99 latency at 1M+ QPS. Reduced infrastructure costs by 70% compared to commercial alternatives. Now open-sourced with 2K+ GitHub stars.",
    tech: ["Go", "gRPC", "Raft", "Docker"],
    status: "completed" as const,
    year: 2023,
    category: "Infrastructure",
    metrics: [
      { label: "Requests/sec", value: "1M+" },
      { label: "P99 Latency", value: "<1ms" },
      { label: "GitHub Stars", value: "2.4K" },
    ],
    links: {
      github: "https://github.com",
      demo: null,
    },
  },
  {
    id: "realtime-collab",
    title: "Real-time Collaboration Engine",
    summary: "CRDT-based collaboration framework enabling conflict-free real-time editing for any data structure.",
    description: "Developed a flexible collaboration engine that can be integrated into any application requiring real-time sync. Uses CRDTs (Conflict-free Replicated Data Types) to ensure eventual consistency without central coordination.",
    problem: "Building real-time collaboration features from scratch is complex and error-prone. Teams often reinvent the wheel or rely on heavy third-party solutions.",
    solution: "Created a modular TypeScript library with pluggable CRDT implementations for different data types. Includes presence awareness, undo/redo support, and offline-first capabilities.",
    outcome: "Integrated into 3 production applications. Handles 10K+ concurrent users with <100ms sync latency. Published as open-source with active community contributions.",
    tech: ["TypeScript", "WebSocket", "Yjs", "IndexedDB"],
    status: "completed" as const,
    year: 2023,
    category: "Library",
    metrics: [
      { label: "Concurrent Users", value: "10K+" },
      { label: "Sync Latency", value: "<100ms" },
      { label: "npm Downloads", value: "50K/mo" },
    ],
    links: {
      github: "https://github.com",
      demo: "https://demo.example.com",
    },
  },
  {
    id: "ml-pipeline",
    title: "ML Feature Pipeline",
    summary: "Automated feature engineering and serving platform for machine learning models at scale.",
    description: "End-to-end platform for computing, storing, and serving ML features with point-in-time correctness. Supports both batch and streaming feature computation.",
    problem: "Data scientists spent 60% of their time on feature engineering infrastructure instead of model development. Feature serving was a major bottleneck for model deployment.",
    solution: "Built a unified platform using Apache Flink for streaming, dbt for batch processing, and a custom feature store with time-travel capabilities.",
    outcome: "Reduced feature development time by 80%. Enabled real-time features for fraud detection, improving model accuracy by 25%.",
    tech: ["Python", "Apache Flink", "dbt", "Redis", "Kafka"],
    status: "completed" as const,
    year: 2022,
    category: "Data",
    metrics: [
      { label: "Features Computed", value: "10K+" },
      { label: "Daily Events", value: "1B+" },
      { label: "Latency (P99)", value: "<10ms" },
    ],
    links: {
      github: null,
      demo: null,
    },
  },
  {
    id: "dev-portal",
    title: "Developer Portal",
    summary: "Internal developer platform with service catalog, documentation, and self-service infrastructure provisioning.",
    description: "Comprehensive internal developer portal that serves as the single entry point for all engineering resources. Includes service catalog, API documentation, runbooks, and infrastructure provisioning.",
    problem: "Engineers wasted hours navigating between different tools and documentation sources. Onboarding new team members took weeks.",
    solution: "Built a unified portal using Next.js with a plugin architecture for extensibility. Integrated with existing tools (GitHub, PagerDuty, Datadog) via APIs.",
    outcome: "Reduced onboarding time from 2 weeks to 3 days. 95% of engineers use it daily. Became a template for other teams in the organization.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL"],
    status: "ongoing" as const,
    year: 2024,
    category: "Platform",
    metrics: [
      { label: "Daily Active Users", value: "500+" },
      { label: "Services Cataloged", value: "200+" },
      { label: "Time Saved", value: "40hrs/wk" },
    ],
    links: {
      github: null,
      demo: null,
    },
  },
  {
    id: "cli-toolkit",
    title: "CLI Development Toolkit",
    summary: "A batteries-included framework for building beautiful and performant command-line applications.",
    description: "Developer-friendly toolkit for creating CLI applications with built-in support for configuration management, plugin systems, and interactive prompts.",
    problem: "Building production-quality CLI tools requires solving the same problems repeatedly: argument parsing, configuration, output formatting, etc.",
    solution: "Created a composable toolkit in Rust that handles common CLI concerns while remaining lightweight. Includes a test harness for snapshot testing CLI output.",
    outcome: "Used by 50+ internal tools. Published as open source with growing adoption. Featured in 'This Week in Rust' newsletter.",
    tech: ["Rust", "Clap", "Tokio"],
    status: "ongoing" as const,
    year: 2024,
    category: "Developer Tools",
    metrics: [
      { label: "Crates.io Downloads", value: "15K+" },
      { label: "Internal Tools", value: "50+" },
      { label: "Contributors", value: "12" },
    ],
    links: {
      github: "https://github.com",
      demo: null,
    },
  },
];

export type Project = typeof projects[number];
export type Experience = typeof experience[number];
