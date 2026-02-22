import ubcLogo from "../../logos/UBC.png";
import utLogo from "../../logos/UT.png";

const coursesData = [
  {
    school: "University of British Columbia",
    program: "B.A.Sc. in Electrical and Computer Engineering",
    period: "2020 - 2024",
    logo: ubcLogo,
    terms: [
      {
        name: "Winter 2023-2024",
        courses: [
          {
            code: "CPEN 455",
            name: "Deep Learning",
            description:
              "Neural network fundamentals, modern architectures, optimization, and practical deployment concerns."
          },
          {
            code: "CPEN 411",
            name: "Computer Architecture",
            description:
              "Pipelining, memory hierarchy, and hardware structures for modern CPU performance."
          },
          {
            code: "CPEN 355",
            name: "Machine Learning with Engineering Applications",
            description:
              "Core ML methods with model evaluation and engineering-oriented implementation."
          },
          {
            code: "APSC 450",
            name: "Professional Engineering Practice",
            description:
              "Engineering ethics, legislation, and professional responsibilities in technical organizations."
          }
        ]
      },
      {
        name: "Winter 2022-2023",
        courses: [
          {
            code: "CPEN 331",
            name: "Operating Systems",
            description:
              "Process/thread scheduling, synchronization, memory management, and file systems."
          },
          {
            code: "CPEN 322",
            name: "Software Construction II",
            description:
              "Client-server architecture, security basics, scalability, and deployment models."
          },
          {
            code: "CPEN 311",
            name: "Digital Systems Design",
            description:
              "HDL-based digital design, simulation, FPGA workflows, and integration."
          },
          {
            code: "CPSC 320",
            name: "Intermediate Algorithm Design and Analysis",
            description:
              "Dynamic programming, greedy and divide-and-conquer techniques, and complexity analysis."
          },
          {
            code: "CPSC 304",
            name: "Introduction to Relational Databases",
            description:
              "Relational modeling, SQL query design, and application-facing database architecture."
          },
          {
            code: "ELEC 331",
            name: "Computer Communications",
            description:
              "Networking principles, TCP/IP stack behavior, and reliability in data transport."
          }
        ]
      },
      {
        name: "Winter 2021-2022",
        courses: [
          {
            code: "CPEN 212",
            name: "Computing Systems II",
            description:
              "Hardware-software interface, virtual memory, threading, and systems-level performance."
          },
          {
            code: "CPEN 221",
            name: "Software Construction I",
            description:
              "Abstraction, specification, testing, and object-oriented design patterns."
          },
          {
            code: "CPEN 211",
            name: "Introduction to Microcomputers",
            description:
              "Digital logic, ISA fundamentals, assembly-level programming, and IO interaction."
          },
          {
            code: "CPSC 221",
            name: "Basic Algorithms and Data Structures",
            description:
              "Design and analysis of data structures with time and space complexity tradeoffs."
          },
          {
            code: "MATH 256",
            name: "Differential Equations",
            description:
              "Linear ODEs, transforms, and analytical methods applied to engineering systems."
          }
        ]
      },
      {
        name: "Foundation and Breadth",
        courses: [
          {
            code: "APSC 160",
            name: "Introduction to Computation in Engineering Design",
            description:
              "Programming and simulation basics for measurement, data processing, and engineering design."
          },
          {
            code: "MATH 253",
            name: "Multivariable Calculus",
            description:
              "Partial derivatives, constrained optimization, and multivariate integration."
          },
          {
            code: "STAT 251",
            name: "Elementary Statistics",
            description:
              "Statistical inference fundamentals, estimation, and hypothesis testing."
          },
          {
            code: "CIVL 250",
            name: "Engineering and Sustainable Development",
            description:
              "Sustainability principles for engineering decisions and long-term system design."
          },
          {
            code: "PHIL 220",
            name: "Symbolic Logic",
            description:
              "Formal logic representation, proof techniques, and reasoning rigor."
          }
        ]
      }
    ]
  },
  {
    school: "University of Toronto",
    program: "M.Eng. in Electrical and Computer Engineering",
    period: "2024 - 2026",
    logo: utLogo,
    terms: [
      {
        name: "2026 Winter",
        courses: [
          {
            code: "APS1053H",
            name: "Case Studies in AI in Finance",
            description:
              "Applied case studies on model selection, risk, and responsible evaluation in finance."
          },
          {
            code: "ECE1724H",
            name: "Special Topics in Software Engineering (React Ecosystem)",
            description:
              "Modern frontend architecture, component systems, and production engineering practices."
          }
        ]
      },
      {
        name: "2025 Summer and Fall",
        courses: [
          {
            code: "APS1050H",
            name: "Blockchain Technologies and Cryptocurrencies",
            description:
              "Consensus models, cryptographic assumptions, and distributed system tradeoffs."
          },
          {
            code: "APS1052H",
            name: "AI in Finance: Neural Networks to Deep Learning",
            description:
              "ML and deep learning workflows tailored to financial prediction and decision support."
          },
          {
            code: "ECE1778H",
            name: "Creative Applications for Mobile Devices",
            description:
              "Interactive mobile applications with sensor-driven user experiences."
          }
        ]
      },
      {
        name: "2025 Winter",
        courses: [
          {
            code: "ECE1508H",
            name: "Applied Deep Learning",
            description:
              "Practical deep learning experiments with modern training and evaluation strategies."
          },
          {
            code: "MIE1628H",
            name: "Cloud-Based Data Analytics",
            description:
              "Scalable analytics pipelines across cloud storage and distributed compute."
          }
        ]
      },
      {
        name: "2024 Fall",
        courses: [
          {
            code: "ECE1513H",
            name: "Introduction to Machine Learning",
            description:
              "Supervised and unsupervised learning with regularization and model validation."
          },
          {
            code: "ECE1724H",
            name: "Special Topics in Software Engineering (Wearable AI)",
            description:
              "Seminar-style study of software engineering practices for wearable and AI-driven systems."
          },
          {
            code: "ECE1779H",
            name: "Introduction to Cloud Computing",
            description:
              "Cloud-native architecture, distributed reliability, and deployment operations."
          }
        ]
      }
    ]
  }
];

export default coursesData;
