import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/constant'
import { useLocation, useNavigate, useParams, useSearchParams ,Link} from 'react-router-dom'
import Loader from './Loader';
import BlogCard from './BlogCard';
// import { Link } from 'react-router-dom';

const Blogdetail = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const blog = location.pathname.split('/').at(-1).replace("-", " ")
  console.log(blog)

  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(false)
  const [related, setRelated] = useState([])

  async function fetchDetail(blog) {
    setLoading(true);
    const blogurl = "https://codehelp-apis.vercel.app/api/get-blog?blogId=" + blog;
    try {
      const data = await fetch(blogurl);
      const result = await data.json();
      setDetail(result?.blog)
      setRelated(result?.relatedBlogs)
    }
    catch (error) {
      console.error('Error fetching data', error);
      throw error
    }
    setLoading(false);
    return detail;
  }

  useEffect(() => {
    fetchDetail(blog)
  }, [location.pathname])

  return (loading)? <Loader/>:
    (
      detail  &&
    <div>
      <div className="container  max-w-3xl md:px-20 mx-auto mb-24 mt-8 ">
        <div className='flex flex-col gap-3'>
          <button className='border-2 border-gray-300 py-1 px-4 rounded-md mt-4'
            onClick={() =>
              navigate(-1)
            }>Back</button>
            <BlogCard data= {detail}/>
            <h2 className='text-2xl mt-7 font-bold '>Related Blogs</h2>
            <div className=' bg-slate-400 h-1 mb-6 w-10 inline-block'></div>
            {related.map(function(item){
             return <BlogCard data = {item} key={item.id}/>
            })}
          {/* <div className="w-full mx-auto">
            <p className="font-bold text-lg hover:text-blue-800">
          {detail.title}  </p>
            <p className="text-sm my-1">By
              <span className="italic">{detail.author}</span> on{" "}
              <span className="font-semibold underline cursor-pointer"><Link to={"/category/" + detail.category}>{detail.category}</Link></span>
            </p>
            <p className="text-sm">Posted On {detail.date}</p>
            <p className="mt-4 mb-2">
              {detail.content}
            </p>
            <div className="flex flex-wrap gap-x-2 items-center">
              {detail.tags.map(function (tag, index) {
                return (<span className="text-xs font-semibold underline text-blue-700 cursor-pointer" key={"tag" + index}><Link to={"/tag/" + tag}>{tag}</Link>
                </span>)
              })}
            </div>
          </div> */}

        </div>
      </div>

    </div>
  )
}

export default Blogdetail