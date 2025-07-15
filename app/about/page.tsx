import {
  Code,
  GraduationCapIcon as Graduation,
  Target,
  Music,
  Video,
  Heart,
} from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-slate-50 mb-6">
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Summary */}
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-indigo-400 mr-3" />
              <h2 className="font-poppins font-semibold text-2xl text-slate-50">Professional</h2>
            </div>

            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I'm a software engineer and student passionate about building scalable, impactful solutions. I specialize in frontend development and working with data, with experience in tools like React, Next.js, and TypeScript.
              </p>
              <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I'm currently interning at Mastercard, where I’m helping launch a chatbot for enterprise clients using insights from over 550 million transactions a day. I’ve also shipped real product strategy, dashboards, and automation tools across product and data roles.
              </p>
              <p>
                I’m actively pursuing roles in software engineering, product, and quantitative teams at top-tier companies, where I can apply my obsession with optimization and love for competitive problem solving.
              </p>

              <div className="pt-4 space-y-2">
                <div className="flex items-center">
                  <Graduation className="h-5 w-5 text-indigo-400 mr-2" />
                  <span className="font-medium">Business + Computer Science @ WashU</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-indigo-400 mr-2" />
                  <span className="font-medium">Targeting FAANG, quant, and high-growth startups</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Snapshot */}
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-indigo-400 mr-3" />
              <h2 className="font-poppins font-semibold text-2xl text-slate-50">Personal</h2>
            </div>

            <div className="text-slate-300 space-y-4 leading-relaxed">
                <p>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Beyond coding, I'm passionate about creativity and self-expression. I enjoy exploring music, creating video content, and designing cool websites(just like this one). I also love playing basketball—it's my favorite way to disconnect, stay competitive, and reset mentally.

                </p>
                <p>
                    I’m inspired by creators like Jared McCain who lead with personality and positivity. Capturing candid moments is my favorite part of vlogging—it’s how I connect with people and share energy, not just content.
                </p>
                <p>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I believe that diverse interests fuel better problem-solving and bring fresh perspectives to technical challenges. Whether it's discovering new music, editing videos, or playing ball, I'm always looking for ways to grow and learn.
                </p>
                
              <div className="pt-4 space-y-3">
                <div className="flex items-center">
                  <Music className="h-5 w-5 text-indigo-400 mr-2" />
                  <span className="font-medium">Music Enthusiast</span>
                </div>
                <div className="flex items-center">
                  <Video className="h-5 w-5 text-indigo-400 mr-2" />
                  <span className="font-medium">Lifestyle Vlogger</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mt-20 animate-slide-up">
          <h2 className="text-2xl font-poppins font-semibold text-slate-50 mb-8">
            Technical Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="font-semibold text-slate-100 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "HTML/CSS"
                  ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="font-semibold text-slate-100 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "FastAPI", "PHP", "MySQL", "APIs"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="font-semibold text-slate-100 mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "BitBucket", "Netlify", "scikit-learn", "GridSearchCV", "AWS", "Vercel"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}