import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({data}) => {
    return (
        <div className="w-full mx-auto">
            <p className="font-bold text-lg hover:text-blue-800"> 
            <Link to = {"/blog/" + data.id}>
               {data.title}  </Link> </p>
            <p className="text-sm my-1">By
                <span className="italic">{data.author}</span> on{" "}
                <span className="font-semibold underline cursor-pointer">
                    <Link to={"/category/"+ data.category.replaceAll(" ","-")}>{data.category}</Link></span>
            </p>
            <p className="text-sm">Posted On {data.date}</p>
            <p className="mt-4 mb-2">
                {data.content}
            </p>
            <div className="flex flex-wrap gap-x-2 items-center">
                {data.tags.map(function(tag,index){
                    return ( 
                    <span className="text-xs font-semibold underline text-blue-700 cursor-pointer" key={"tag" + index}>
                        <Link to={"/tag/"+ tag.replaceAll(" ","-")}>{tag}</Link>
                    </span>)
                })}
            
            </div>
        </div>

    )
}

export default BlogCard