import React from 'react'

import Blogs from './Blogs';
import Header from './Head';

const Bloglist = () => {

  return (
    <>
    <Header/>
    <div className='container  max-w-3xl md:px-20 mx-auto mb-24 mt-8 '>
     <Blogs/>
    </div>
    </>
  )
}

export default Bloglist