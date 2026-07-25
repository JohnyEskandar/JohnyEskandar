import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-poppins font-bold text-5xl sm:text-6xl lg:text-7xl text-slate-50 leading-tight">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Hi, I'm <span className="text-indigo-400">Johny Eskandar</span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  SWE Intern @ LinkedIn • WashU '27 • Business + Computer Science
                </p>
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                  Building fast, data-driven tools—with a creator’s mindset and a competitor’s edge.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors group"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center px-8 py-4 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-slate-50 font-medium rounded-lg transition-colors"
              >
                Download Resume
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/JohnyEskandar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-50 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/e-johny/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-50 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-100 h-120 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/johny.jpg"
                    alt="Johny Eskandar"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
