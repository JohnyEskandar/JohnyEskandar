import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const technicalProjects = [
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
    {
        title: "Blendify (April 23rd, 2025)",
        description:
            "A full-stack Spotify playlist generator that recommends tracks based on a seed song's genre and audio profile. Features OAuth login, real-time search, personalized recommendations, and direct playlist creation in users’ Spotify accounts.",
        tags: ["Next.js", "TypeScript", "Spotify API", "TailwindCSS"],
        image: "/projects/blendify.jpeg",
        github: "https://github.com/JohnyEskandar/Blendify",
    },
    {
        title: "Court Vision (April 28th, 2025)",
        description:
            "A real-time sports analytics tool that identifies profitable bets and market inefficiencies using custom statistical models on live odds data. Built with Python and Streamlit, featuring algorithms for win probability and parlay outcome simulation.",
        tags: ["Python", "Streamlit", "The Odds API", "Pandas"],
        image: "/projects/court-vision.jpeg",
        github: "https://github.com/JohnyEskandar/court-vision",
    },
    {
        title: "MockOS: C++ File System Simulation (Fall 2024)",
        description:
            "Collaborative C++ static library simulating a basic file system with command-line operations. Implemented design patterns like Visitor, Factory, and Proxy to manage files, enforce access control, and handle commands such as ls, touch, cat, and macro operations.",
        tags: ["C++", "Object-Oriented Programming", "Design Patterns", "CMake"],
        image: "/projects/none.jpg",
        github: "https://github.com/cse332s-fl24-wustl/oop-work-sophiaaarondaniel",
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
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
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
            </div>
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

                {/* Technical Projects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {technicalProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}
