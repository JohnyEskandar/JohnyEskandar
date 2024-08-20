import React from 'react'

export default function ContactMe() {
  return (
    <div className='flex flex-col justify-center text-center items-center gap-10 w-full mx-auto p-4 bg-slate-600'>
      <div className='text-white'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block border-b-2 my-4'>
          Get in touch
        </h1>
        <div className='sm:text-lg md:text-xl lg:text-2xl max-w-[800px]'>
            <p className='w-full mx-auto p-4'>
            Contact Details:
          </p>
          <p className='w-full mx-auto p-4'>
            e.johny@wustl.edu | +1 (562)-475-6014 
          </p>
          <div className='text-5xl mx-auto'>
            <button onClick={() => {
                return (
                    window.location.href = "mailto:e.johny@wustl.edu"
                )
            }} className='py-2 px-5 hover:opacity-50 text-white duration-300'>
                    <i class="fa-solid fa-envelope"></i>
            </button>
            <button onClick={() => {
                return (
                    window.location.href = "https://www.linkedin.com/in/johny-eskandar528/"
                )
            }} className='py-2 px-5 hover:opacity-50 text-white duration-300'>
                    <i class="fa-brands fa-linkedin"></i>
            </button>
            <button onClick={() => {
                return (
                    window.location.href = "https://github.com/JohnyEskandar"
                )
            }} className='py-2 px-5 hover:opacity-50 text-white duration-300'>
                    <i class="fa-brands fa-github"></i>
            </button>
          </div>  
        </div>
      </div>
    </div>
  )
}
