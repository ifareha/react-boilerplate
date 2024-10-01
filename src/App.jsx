import React from 'react'

export default function App() {
  return (
    <div className='w-full relative h-screen text-white flex items-center justify-center bg-red-500'>
      <div className='w-[35%] h-full bg-black'>
        <div className='flex items-center justify-center h-[9%]'>
          <h1 className='text-[1.4vw] font-semibold '>PROTOFILO.</h1>
        </div>
        <div className='absolute top-[65%] left-[16%]'>
          <h1 className='text-[3vw] leading-[0.1]'>MY NAME IS</h1>
          <h1 className='font-bold text-[3.5vw] tracking-wide '>ABDULREHMAN</h1>
          <button className='bg-yellow-500 py-1 px-7 text-[2vw] tracking-tighter text-black font-bold'>I'M A UI DEVELOPER</button>
        </div>
      </div>
      <div className='w-[65%] h-full'>
      <div className='flex items-center z-[22] font-semibold justify-center gap-9 h-[9%] bg-zinc-800 tracking-wide'>
          <h1 className='text-[1vw] font-semibold underline decoration-2'>HOME</h1>
          <h1 className='text-[1vw] font-semibold '>About</h1>
          <h1 className='text-[1vw] font-semibold '>WORKS</h1>
          <h1 className='text-[1vw] font-semibold '>BLOG</h1>
          <h1 className='text-[1vw] font-semibold '>CONTACT</h1>
        </div>
        <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZD0wF9u6XzIrzQaRd14zlPDZkvMEqUJJ1g&s" alt="" />
      </div>
      <div></div>
    </div>
  )
}
