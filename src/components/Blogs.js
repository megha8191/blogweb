import React,{useContext} from 'react'
import { AppContext } from '../utils/AppContext'
import Loader from './Loader'
import BlogCard from './BlogCard';

const Blogs = () => {
    const {loading, postList} = useContext(AppContext);

  return (
    loading?<Loader/>:(<div className='gap-y-10 flex flex-wrap'>
    {postList && postList.map(function(post){
     return <BlogCard data={post} key={post.id}/>
    })}
  </div>)
  )
}

export default Blogs