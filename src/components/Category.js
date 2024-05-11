import React from 'react'
import Header from './Head'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from './Blogs'

const Category = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/').at(-1).replace("-"," ")
  return (
    <>
    <Header/>
    
    <div className='container  max-w-3xl md:px-20 mx-auto mb-24 mt-8 '>
    <div className='flex gap-3 mb-5 items-center ' >
        <button className='border-2 border-gray-300 py-1 px-4 rounded-md'
        onClick={()=>
          navigate(-1)
        }>Back</button>
        <h2 className='text-lg font-semibold mb-0'>{category}</h2>
      </div>
     <Blogs/>
    </div>
    </>
  )
}

export default Category