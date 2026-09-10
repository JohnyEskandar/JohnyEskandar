import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const featuredProjects = [
    {
        title: "Job Application Agent (September 2026)",
        description:
            "A Python agent that takes a job posting link, fills the application form in a real browser from your profile, and hands it back for you to submit. It can't submit, by design. Claude plans what goes in each field, while deterministic Playwright code reads the form through the accessibility tree, fills it, and reads every value back to confirm it stuck. Code-enforced safety rules mean it never makes up facts like work authorization, GPA, or demographics. It has 91 offline tests and has been run against four real applicant tracking systems, including Rippling, Greenhouse, and Workday.",
        tags: ["Python", "Claude API", "Playwright", "Pydantic", "pytest"],
        image: "/projects/none.jpg",
        github: "https://github.com/JohnyEskandar/job-application-agent",
    },
    {
        title: "Nudge (Summer 2026)",
        description:
            "A PWA for keeping track of the people you care about, which sends a real push notification when it's been too long since you talked to someone. Built with React, Vite, and Supabase: magic-link and Google auth, Postgres with row-level security, and a daily pg_cron job that calls an edge function to send VAPID-signed Web Push messages. A service worker delivers them even when the app is closed and the phone is locked. Includes an iOS home-screen install flow and Playwright scripts that verify a real notification arrives end to end.",
        tags: ["React", "Vite", "Supabase", "PostgreSQL", "Web Push", "PWA"],
        image: "/projects/none.jpg",
        github: "https://github.com/JohnyEskandar/nudge",
    },
    {
        title: "Geometry of LLM Refusal (April 2026)",
        description:
            "Independent research (with 3 teammates) investigating whether LLM refusal behavior is mediated by a single direction or a cone in activation space. Extracted refusal directions in PyTorch across 4 harm categories on Qwen-1.8B-Chat using SORRY-Bench prompts, then used activation steering to identify layer 14 as the strongest refusal layer, achieving 84-96% cross-category ablation bypass rates and 0.735-0.892 cosine similarity, supporting a conic subspace framing over a single-direction hypothesis.",
        tags: ["Python", "PyTorch", "Hugging Face", "Activation Steering", "Interpretability"],
        image: "/projects/none.jpg",
        github: "https://github.com/JohnyEskandar/LLM-Refusal-Research",
    },
    {
        title: "Unveil AI (April 13th, 2025)",
        description:
            "Built at Google DevFest WashU 2025, UnveilAI is a full-stack platform that helps developers understand unfamiliar codebases using Google Gemini and Bland AI. Finalist among 42 teams, the app lets users upload GitHub repos, receive line-by-line explanations, ask questions about specific files, and even get a phone call from an AI 'senior engineer' that walks them through their code.",
        tags: ["Next.js", "FastAPI", "Google Gemini", "Bland AI", "TypeScript"],
        image: "/projects/unveil-ai.jpeg",
        github: "https://github.com/UnveilAI",
    },
]

const otherProjects = [
    {
        title: "Court Vision (April 28th, 2025)",
        description:
            "A real-time sports analytics tool that identifies profitable bets and market inefficiencies using custom statistical models on live odds data. Built with Python and Streamlit, featuring algorithms for win probability and parlay outcome simulation.",
        tags: ["Python", "Streamlit", "The Odds API", "Pandas"],
        image: "/projects/court-vision.jpeg",
        github: "https://github.com/JohnyEskandar/court-vision",
    },
    {
        title: "Blendify (April 23rd, 2025)",
        description:
            "A full-stack Spotify playlist generator that recommends tracks based on a seed song's genre and audio profile. Features OAuth login, real-time search, personalized recommendations, and direct playlist creation in users’ Spotify accounts.",
        tags: ["Next.js", "TypeScript", "Spotify API", "TailwindCSS"],
        image: "/projects/blendify.jpeg",
        github: "https://github.com/JohnyEskandar/Blendify",
    },
    {
        title: "Socket.io Multi-Room Chat App (March 31st, 2025)",
        description:
            "A real-time multi-room chat application with support for private messaging, admin controls (kick, ban, unban), password-protected rooms, and profanity filtering. Built using vanilla JavaScript, Node.js, and Socket.io with a custom room management system and command-based chat bot for the global lobby.",
        tags: ["Node.js", "Socket.io", "JavaScript", "HTML/CSS"],
        image: "/projects/multi-room-chat.jpeg",
    },
    {
        title: "Collaborative Calendar App (March 19th, 2025)",
        description:
            "A secure, full-stack calendar web app that supports user signup, login, event management, and event sharing. Built using vanilla JavaScript (AJAX) and PHP, with robust session handling, CSRF protection, and SQL injection prevention via prepared statements. Users can add, edit, delete, and share events across accounts, all without page reloads.",
        tags: ["JavaScript", "PHP", "MySQL", "AJAX", "HTML/CSS"],
        image: "/projects/ajax-calendar.jpeg",
    },
    {
        title: "JavaScript Calculator (March 5th, 2025)",
        description:
            "A fully client-side calculator built with vanilla JavaScript, HTML, and CSS. Handles real-time arithmetic operations based on user input, with dynamic result rendering and form state updates. Implements radio-button based operator selection and input event listeners for seamless, responsive interaction—demonstrating frontend reactivity without the need for external libraries or frameworks.",
        tags: ["JavaScript", "DOM Manipulation", "Frontend", "HTML/CSS"],
        image: "/projects/calculator.jpeg",
    },
    {
        title: "JavaScript Weather Widget (March 5th, 2025)",
        description:
            "A responsive JavaScript weather widget that fetches real-time data from a public API and displays local conditions, humidity, and multi-day forecasts. Implements dynamic DOM manipulation, image rendering based on weather codes, and modular CSS for a clean, accessible interface. Includes a manual refresh button and asynchronous data handling via `fetch` for a seamless user experience.",
        tags: ["JavaScript", "Fetch API", "DOM Manipulation", "Asynchronous"],
        image: "/projects/weather-widget.jpeg",
    },
    {
        title: "Batting Average Analyzer (February 24th, 2025)",
        description:
            "A command-line Python tool that parses historical baseball box scores and computes batting averages across an entire season. Uses regex to extract structured player stats from unstructured text logs, and applies object-oriented principles to aggregate performance data and output a sorted leaderboard. Built to demonstrate precision in text parsing, CLI design, and statistical computation.",
        tags: ["Python", "Regex", "CLI", "Data Processing"],
        image: "/projects/batting-average-analyzer.jpeg",
    },
    {
        title: "Secure News Website (February 17th, 2025)",
        description:
            "A full-stack PHP web app that enables users to register, post stories, comment, and engage with trending content. Built with session-based authentication, CSRF protection, and SQL prepared statements to guard against common web exploits. Features include story/comment editing and deletion, a dynamic likes system, and a trending posts module ranked by user engagement. Backed by a MySQL database with relational integrity and foreign key constraints.",
        tags: ["PHP", "MySQL", "Sessions", "CSRF", "Web Security"],
        image: "/projects/news-website.jpeg",
    },
    {
        title: "Secure File Sharing System (February 3rd, 2025)",
        description:
            "A multi-user PHP web application for secure file upload, viewing, and deletion. Implements session-based login, per-user storage isolation, and regex validation for file/user safety. Designed with FIEO and basic access control in mind, ensuring users can only interact with their own files. Includes custom account creation, a persistent username registry, and MIME-type enforcement to safely render uploaded content.",
        tags: ["PHP", "Sessions", "File I/O", "Regex", "Access Control"],
        image: "/projects/file-sharing-system.jpeg",
    },
    {
        title: "PHP Calculator (January 27th, 2025)",
        description:
            "A lightweight PHP web app that performs basic arithmetic operations using GET requests. Implements form-based user input and radio button controls for real-time addition, subtraction, multiplication, and division—complete with error handling for edge cases like divide-by-zero. Built as an early exploration of server-side scripting, input validation, and user-driven computation.",
        tags: ["PHP", "Web Forms", "GET Requests", "Input Handling"],
        image: "/projects/php-calculator.jpeg",
    },
    {
        title: "MockOS: C++ File System Simulation (Fall 2024)",
        description:
            "Collaborative C++ static library simulating a basic file system with command-line operations. Implemented design patterns like Visitor, Factory, and Proxy to manage files, enforce access control, and handle commands such as ls, touch, cat, and macro operations.",
        tags: ["C++", "Object-Oriented Programming", "Design Patterns", "CMake"],
        image: "/projects/none.jpg",
    },
    {
        title: "Ginemenasaurus (Summer 2024)",
        description:
            "A full-stack gym workout generator built with React and Tailwind CSS, offering dynamic, science-based workout routines tailored to user-selected goals and muscle groups. Uses a custom-built exercise engine that draws from a structured dataset of compound and accessory movements, with support for rep/tempo/rest schemes. Features a clean, mobile-responsive UI with interactive animations and personalized progression tracking.",
        tags: ["React", "Tailwind CSS", "Vite", "JavaScript"],
        image: "/projects/gym-app.jpeg",
        github: "https://github.com/JohnyEskandar/Ginemenasaurus-Gym-App",
        live: "https://je-gym.netlify.app/",
    },
    {
        title: "Todo List (Summer 2024)",
        description:
            "Responsive web app for task management with localStorage persistence and full CRUD functionality. Built with React and Vite using modular components and custom CSS.",
        tags: ["React", "Vite", "JavaScript", "localStorage"],
        image: "/projects/todo-list.jpeg",
        github: "https://github.com/JohnyEskandar/TodoList-Reactjs",
        live: "https://je-todolist.netlify.app",
    },
    {
        title: "Housing Price Predictor (Spring 2024)",
        description:
            "End-to-end data science project to predict housing prices in Melbourne using 13,000+ real listings. Cleaned and explored the data, engineered new features, and tested multiple models (Linear Regression, KNN, Decision Tree, Random Forest). Tuned hyperparameters with GridSearchCV and evaluated performance using RMSE and R². The best model—Random Forest—achieved strong results (RMSE: $289K, R²: 0.83).",
        tags: ["Python", "scikit-learn", "Machine Learning", "Regression"],
        image: "/projects/housing-price-predictor.jpeg",
    },
]

type Project = {
    title: string
    description: string
    tags: string[]
    image: string
    github?: string
    live?: string
    slide?: string
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:border-indigo-400/50 transition-all duration-300 animate-fade-in">
            <div className="relative overflow-hidden">
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3 text-slate-50 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <ProjectTags tags={project.tags} />
                <ProjectLinks project={project} />
            </div>
        </div>
    )
}

function CompactProjectCard({ project }: { project: Project }) {
    return (
        <div className="group flex flex-col bg-white/5 rounded-lg border border-white/10 p-5 hover:border-indigo-400/50 transition-all duration-300 animate-fade-in">
            <h3 className="text-lg font-poppins font-semibold mb-2 text-slate-50 group-hover:text-indigo-400 transition-colors">
                {project.title}
            </h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
            <div className="mt-auto">
                <ProjectTags tags={project.tags} />
                <ProjectLinks project={project} />
            </div>
        </div>
    )
}

function ProjectTags({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full">
                    {tag}
                </span>
            ))}
        </div>
    )
}

function ProjectLinks({ project }: { project: Project }) {
    return (
        <div className="flex space-x-3">
            {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors">
                    <Github className="h-4 w-4 mr-1" /> Code
                </a>
            )}
            {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors">
                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                </a>
            )}
            {project.slide && (
                <a href={project.slide} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors">
                    <ExternalLink className="h-4 w-4 mr-1" /> Slide Deck
                </a>
            )}
        </div>
    )
}

export default function Projects() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-slate-50 mb-6">Projects</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        A curated collection of technical and consulting work that reflects how I solve problems and ship value
                    </p>
                </div>

                {/* Featured Projects */}
                <h2 className="text-3xl font-poppins font-semibold text-slate-50 mb-8">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                {/* Other Projects */}
                <h2 className="text-3xl font-poppins font-semibold text-slate-50 mb-8">Other Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <CompactProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}
