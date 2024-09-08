import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    // <div className='bg-cover h-screen bg-[url("./assets/Designer.jpeg")]'>Projects</div>
    <div className='flex flex-col min-h-screen justify-center text-center items-center mx-auto p-20'>
      <div className='text-white'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block border-b-2 my-8'>
          Projects
        </h1>
        <div className='flex flex-col lg:grid lg:grid-cols-4 gap-4'>
          <ProjectCard name='Personal Website' year='2024' tools='React.js, Vite TailwindCSS, Netlify, JavaScript' gitLink='JohnyEskandar/idk yet' webLink='idk yet'>
          This Website.
          </ProjectCard>
          <ProjectCard name='Ginemenasaurus' year='2024' tools='React.js, Vite, TailwindCSS, Netlify, JavaScript' gitLink='JohnyEskandar/Ginemenasaurus-Gym-App' webLink='https://je-gym.netlify.app/'>
          Introducing <span className='font-bold'>Ginemenasaurus</span>: a fun, meme-inspired tool that customizes workout plans to match your fitness goals. From strength to endurance, it tailors routines that help you get big—really big.
          </ProjectCard>
          <ProjectCard name='Todo List' year='2024' tools='React.js, Netlify, Vite, JavaScript' gitLink='JohnyEskandar/TodoList-Reactjs' webLink='https://je-todolist.netlify.app/'>
          My first React Project. A simple todo list with a input, add, edit, and delete features.
          </ProjectCard>
          <ProjectCard name='Predictive Models' year='2024' tools='Python, Jupyter Notebook' gitLink='CSE217-SP24/hw-11-johnythomas'>
          Analyzed Melbourne housing data (13,580 houses, 21 variables) and found positive correlations between Rooms, Price, and Bathrooms using a heatmap. Compared Linear Regression, KNN, Decision Tree, and Random Forest models, with Random Forest yielding the best performance. Collaborated with Thomas Guo.
          </ProjectCard>
          <ProjectCard name='Snake Game' year='2023' tools='Eclipse, Java' gitLink='CSE-131-Fall-23/assignment-9-JohnyEskandar'>
          Created a snake game with a score counter. The snake moves around the screen with WASD and eats different colored balls, adding to its length. Hitting the edge of the screen results in death.
          </ProjectCard>
        </div>
      </div>
    </div>
  )
}
