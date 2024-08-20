import React from 'react'

export default function ProjectCard(props) {

    const {children, name, year, tools, gitLink, webLink} = props
  return (
    <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap'>
        <div className='flex flex-col gap-x-4'>
            <a href= {webLink} className='hover:opacity-70 duration-300 capitalize text-xl sm:text-2xl md:text-3xl flex-1 sm:text-center'>
                {name}
            </a>
            <h2 className='capitalize text-xl sm:text-2xl md:text-3xl flex-1 sm:text-center text-slate-300'>
                ({year})
            </h2>
        </div>
        <div className='flex flex-col gap-y-4'>
            <p className='text-sm text-slate-400'>
                {children}
            </p>
            <p className='text-sm text-slate-300'>
                Made Using:
            </p>
            <p>{tools}</p>
        </div>
        <button onClick={() => {
                    return (
                        window.location.href = `https://github.com/${gitLink}`
                    )
                }} className='py-2 px-1 hover:opacity-50 text-white duration-300 text-3xl'>
                    <i class="fa-brands fa-github"></i>
            </button>
    </div>
  )
}
