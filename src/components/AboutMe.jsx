import React from 'react'

export default function AboutMe() {
  return (
    <div id='aboutme' className='flex flex-col min-h-screen justify-center text-center items-center gap-10 w-full mx-auto p-4'>
      <div className='text-white'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block border-b-2 my-4'>
          About Me
        </h1>
        <div className='sm:text-lg md:text-xl lg:text-2xl max-w-[800px]'>
          {/* <img src="/WashU logo.jpg" className=' h-40 w-40 flex items-center justify-center object-center'></img> */}
          <p className='w-full mx-auto p-4'>
            Originally from Orange County, California, I am an undergraduate student at Washington University in St. Louis, majoring in Business and Computer Science with a focus on Data Science and AI. 
          </p>
          <p className='w-full mx-auto p-4'>
            I am proficient in Java, JavaScript, Python, React.js, Netlify, HTML, CSS, and TailwindCSS. Currently, I am learning C++, Next.js, and SQL.
          </p>
          <p className='w-full mx-auto p-4'>
            In my free time I love playing Basketball, lifting weights, playing chess and listening to music. 
          </p>
          {/*<p className='w-full mx-auto p-4'>
            Contact Me: 
          </p>
           <div className='text-3xl mx-auto'>
            <button onClick={() => {
                return (
                    window.location.href = "https://www.linkedin.com/in/johny-eskandar528/"
                )
            }} className='py-2 px-1 hover:opacity-50 text-white duration-300'>
                    <i class="fa-brands fa-linkedin"></i>
            </button>
            <button onClick={() => {
                return (
                    window.location.href = "https://github.com/JohnyEskandar"
                )
            }} className='py-2 px-1 hover:opacity-50 text-white duration-300'>
                    <i class="fa-brands fa-github"></i>
            </button>
            <button onClick={() => {
                return (
                    window.location.href = "mailto:e.johny@wustl.edu"
                )
            }} className='py-2 px-1 hover:opacity-50 text-white duration-300'>
                    <i class="fa-solid fa-envelope"></i>
            </button>
          </div> */}
          {/* <h4 className='sm:text-xl md:text-2xl lg:text-3xl gap-10 w-full mx-auto p-4'>Other Interests:</h4>
          <p className='gap-10 w-full mx-auto p-4'>
            Optimization, Fantasy Basketball, Christianity.
          </p> */}
          {/* <h4 className='sm:text-xl md:text-2xl lg:text-3xl gap-10 w-full mx-auto p-4'>Languages:</h4> */}
          
        </div>
      </div>
    </div>
  )
}
