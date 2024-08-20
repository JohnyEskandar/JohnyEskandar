import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

function App() {

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-t from-slate-600 to-slate-950 text-white text-sm sm:text-base '>
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
    </main>
  )
}

export default App
