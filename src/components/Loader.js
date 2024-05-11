import React from 'react'

const Loader = () => {
  return (
    <div className='min-h-[70vh] absolute max-w-full text-center left-0 right-0 flex items-center justify-center '>
        <span className="relative flex h-3 w-3 mr-3 mt-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-500"></span>
            </span>
        <span>Loading....</span>
    </div>
  )
}

export default Loader