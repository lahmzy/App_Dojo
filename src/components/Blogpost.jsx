import React from "react";
import {Link} from "react-router-dom"

const Blogpost = ({blog,title,}) => {

  
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blog.map( blog => {
      return  <div className="blog-preview" key={blog.id}>
      <Link to={`/blogs/${blog.id}`}>
        <h2>{blog.title}</h2>
        <p>published by  {blog.author}</p>
      </Link>
      </div>
    }
    )}
    </div>
   );
}
 
export default Blogpost;