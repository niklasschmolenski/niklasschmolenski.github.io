import adobeLogo from "@/assets/logos/adobe.svg";
import chariteLogo from "@/assets/logos/charite.svg";
import fraunhoferLogo from "@/assets/logos/fraunhofer.svg";
import maternaLogo from "@/assets/logos/materna.svg";
import moonwatcherLogo from "@/assets/logos/moonwatcher.svg";
import tuBerlinLogo from "@/assets/logos/tu-berlin.svg";

export interface SiteProject {
  title: string;
  subtitle: string;
  description: string;
  contextSentence: string | null;
  tags: string[];
  github: string | null;
  live: string | null;
  anchorText: string;
  linkLabel: string;
}

const projects: SiteProject[] = [
  {
    title: "cvchecked.com",
    subtitle: "Personal Project",
    description:
      "Built and launched a web app for AI-assisted resume checking with ATS-focused feedback and improvement suggestions.",
    contextSentence:
      "This project is a resume checker focused on practical, actionable feedback for job applications.",
    tags: ["AI", "ATS", "Resume Checker"],
    github: null,
    live: "https://cvchecked.com",
    anchorText: "cvchecked.com",
    linkLabel: "Visit cvchecked.com",
  },
  {
    title: "AbiScore",
    subtitle: "Personal Project",
    description:
      "Built and launched an iOS app for Abitur planning that lets students track grades, plan exams, and estimate their final score based on German state-specific rules.",
    contextSentence: null,
    tags: ["iOS App"],
    github: null,
    live: "https://apps.apple.com/de/app/abiscore-abi-rechner/id6759672125",
    anchorText: "AbiScore",
    linkLabel: "View on the App Store",
  },
  {
    title: "Multi-Agent Consensus Platform",
    subtitle: "Hackathon · BaselHack 2025",
    description:
      "Full-stack system to cluster community input using vector embeddings and cosine similarity. Simulated multi-agent debates with CrewAI and implemented automated consensus scoring.",
    contextSentence: null,
    tags: ["FastAPI", "MongoDB", "ChromaDB", "React", "TypeScript", "CrewAI", "Docker"],
    github: "https://github.com/juliuspor/Harmony",
    live: null,
    anchorText: "Multi-Agent Consensus Platform",
    linkLabel: "View project details",
  },
  {
    title: "U-Net from Scratch",
    subtitle: "University Project",
    description:
      "Implemented U-Net from scratch in PyTorch, including data preprocessing and a full training pipeline, and trained the model on GPU.",
    contextSentence: null,
    tags: ["PyTorch", "Computer Vision"],
    github: null,
    live: null,
    anchorText: "U-Net from Scratch",
    linkLabel: "View project details",
  },
  {
    title: "Satellite Super-Resolution",
    subtitle: "University Project",
    description:
      "Evaluated Vision Transformers and diffusion models for satellite image super-resolution, with downstream analysis for bathymetry prediction.",
    contextSentence: null,
    tags: ["ViT", "Diffusion Models", "Remote Sensing"],
    github: null,
    live: null,
    anchorText: "Satellite Super-Resolution",
    linkLabel: "View project details",
  },
];

export const siteContent = {
  hero: {
    role: "Machine Learning Engineer",
    firstName: "Niklas",
    lastName: "Schmolenski",
    educationLabel: "M.Sc. Computer Science at",
    institution: "TU Berlin",
    previousLabel: "Previously at",
    previousCompanies: ["Adobe", "Fraunhofer HHI"],
    ctaLabel: "View work",
    ctaHref: "#experience",
  },
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Adobe",
      logoSrc: adobeLogo,
      period: "Jul 2025 - Dec 2025",
      location: "Basel, Switzerland",
      highlights: [
        "Applied machine learning to address Site Reliability Engineering (SRE) challenges.",
      ],
    },
    {
      role: "Student Researcher",
      company: "Fraunhofer HHI, XAI Group",
      logoSrc: fraunhoferLogo,
      period: "Jul 2024 - Jun 2025",
      location: "Berlin, Germany",
      highlights: [
        "Contributed to Quanda, an open-source PyTorch library for evaluating data attribution methods.",
        "Co-authored a paper accepted at the NeurIPS 2024 ATTRIB Workshop.",
      ],
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Moonwatcher",
      logoSrc: moonwatcherLogo,
      period: "Mar 2024 - Jun 2024",
      location: "Berlin, Germany",
      highlights: [
        "Contributed to an open-source testing framework for computer vision at an early-stage startup.",
      ],
    },
    {
      role: "Data Science Intern",
      company: "Materna Information & Communications SE",
      logoSrc: maternaLogo,
      period: "Jun 2023 - Feb 2024",
      location: "Berlin, Germany",
      highlights: [
        "Developed web scraping pipelines to automate data collection using Python.",
        "Integrated LLMs, including OpenAI's GPT-3.5, into a web app for document analysis.",
      ],
    },
  ],
  education: [
    {
      degree: "M.Sc. Computer Science",
      institution: "Technical University of Berlin",
      logoSrc: tuBerlinLogo,
      period: "Oct 2023 - Present",
      grade: "Current Grade: 1.1",
      highlights: [
        'Thesis: "Machine Learning in Rare Neurological Diseases Based on MRI Scans of the Brain"',
        "Relevant Coursework: Deep Learning, Machine Learning, Foundations of Data Science",
      ],
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "Technical University of Berlin",
      logoSrc: tuBerlinLogo,
      period: "Oct 2021 - Oct 2023",
      grade: "Final Grade: 1.7",
      highlights: [
        //"Graduated two semesters early",
        'Thesis: "Detecting latent confounders in purely observational data"',
        "Relevant Coursework: Algorithms & Data Structures, Computer Networks & Distributed Systems",
      ],
    },
  ],
  projects,
  skillGroups: [
    {
      label: "Languages",
      items: ["Python", "SQL", "TypeScript"],
    },
    {
      label: "ML & AI",
      items: ["PyTorch", "TensorFlow", "Hugging Face", "Pandas", "NumPy"],
    },
    {
      label: "Backend & Infrastructure",
      items: ["FastAPI", "Docker", "Kubernetes", "CI/CD", "Git"],
    },
  ],
  publications: [
    {
      venue: "NeurIPS ATTRIB Workshop, 2024",
      title: "Quanda: An Interpretability Toolkit for Training Data Attribution Evaluation and Beyond",
      authors: "D. Bareeva, G. U. Yolcu, A. Hedstrom, N. Schmolenski, T. Wiegand, W. Samek, S. Lapuschkin",
      highlightAuthor: "N. Schmolenski",
      link: "https://arxiv.org/abs/2410.07158",
      linkLabel: "Read on arXiv",
    },
  ],
  theses: [
    {
      degree: "M.Sc.",
      title: "Machine Learning in Rare Neurological Diseases Based on MRI Scans of the Brain",
      institution: "Charité – Universitätsmedizin Berlin & TU Berlin",
      institutions: [
        { label: "Charité – Universitätsmedizin Berlin", src: chariteLogo, alt: "Charité logo" },
        { label: "TU Berlin", src: tuBerlinLogo, alt: "TU Berlin logo" },
      ],
      year: "2024",
      description:
        "Training deep learning models for brain age prediction using MRI scans.",
      tags: ["Deep Learning", "Medical Imaging", "Neuroimaging"],
    },
    {
      degree: "B.Sc.",
      title: "Detecting Latent Confounders in Purely Observational Data",
      institution: "TU Berlin",
      institutions: [{ label: "TU Berlin", src: tuBerlinLogo, alt: "TU Berlin logo" }],
      year: "2023",
      description:
        'Implementation and experimentation of the algorithm from "Identifying confounders using additive noise models" by Janzing, Peters, Mooij & Schölkopf (2012).',
      tags: ["Causal Inference", "Statistics", "Additive Noise Models"],
    },
  ],
  contact: {
    eyebrow: "Contact",
    heading: "Let's connect.",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/niklas-schmolenski" },
      { label: "GitHub", href: "https://github.com/aski02" },
    ],
    legalLinks: [
      { label: "Impressum", href: "/impressum.html" },
      { label: "Datenschutz", href: "/datenschutz.html" },
    ],
    footer: {
      copyright: `© ${new Date().getFullYear()} Niklas Schmolenski`,
      location: "Berlin, Germany",
    },
  },
} as const;
