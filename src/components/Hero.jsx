import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex items-center justify-center relative'>
        <div className='flex flex-col gap-10 justify-center text-center max-w-[800px] mx-auto p-4'>
            <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                Hello and welcome to my website!
            </h1>
            <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                My name is <span className='text-cyan-400'>Johny Eskandar</span>
            </h1>
            <button className='bg-emerald-400 py-4 px-8 border border-solid rounded-md border-slate-600 text-xl w-auto hover:opacity-75 duration-300' onClick={() => {
            window.location.href ='#aboutme'
        }}>
                Let's Go!
            </button>
        </div>
        <div className='fixed top-100 right-2 flex flex-col p-4 text-3xl'>
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
        </div>
    </div>
  )
}
