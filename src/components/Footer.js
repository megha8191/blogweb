import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'

const Footer = () => {
  const {totalPages,currentPage,setCurrentPage} = useContext(AppContext);
  return (
    <footer className='fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300' >
        <div className='container  max-w-3xl md:px-20 mx-auto '>
            <div className='grid-cols-2 grid items-center'>
              <div className='flex gap-2'>
                {(currentPage>1)&& <button type='button' className='border-2 border-gray-300 py-1 px-4 rounded-md' 
                    onClick={()=>{
                      if(currentPage>1)
                      setCurrentPage(currentPage-1)}
                    }
                  >Prev</button>}
                {(currentPage<totalPages) &&  <button type='button' className='border-2 border-gray-300 py-1 px-4 rounded-md'   
                    onClick={()=>{
                      if(currentPage<totalPages)
                      setCurrentPage(currentPage+1)
                    }
                    }
                >Next</button>}
              </div>
                <p className='text-right w-50'>Page {currentPage} of {totalPages}</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer