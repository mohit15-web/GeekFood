import React from 'react'

function Content() {
  return (
    <div className='w-[100%] flex my-20 px-20 relative flex-col 2xl:flex-row'> 
        <div className='w-5/12'>      
        <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='absolute w-[50%] mt-20'/>
        </div>
        <div className='w-7/12 h-[90vh] bg-[#F3F5F7] flex flex-col justify-center items-start pl-60'>
    <h1 className='text-4xl font-bold mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
    <p className='text-gray-500 w-[90%] mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
    <button
        type="button"
        className="rounded-sm bg-[#4F47E4] px-12 py-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      > 
        Get In Touch
      </button>
        </div>
    </div>
  )
}

export default Content