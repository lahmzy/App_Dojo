import {useParams} from "react-router-dom"
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

 const BlogDetails = () => {

  const navigate = useNavigate()
  const{id} = useParams()
  const{data:blog,error,isLoading} = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () =>{
    fetch("http://localhost:8000/blogs/"+ blog.id,{
      method:"DELETE"
    }).then( () =>{
      navigate("/")
    })
    
  }
  
  return ( 
    <div className="blog-details">
     { isLoading  && <div>loading.....</div>}
     { error && <div>{error}</div>}
     { blog && (
      <article>
      <h2>{blog.title}</h2>
      <p>published by {blog.author}</p>
      <p>{blog.body}</p>
      <button onClick={handleDelete}>Delete</button>
      </article>
     )}
    </div>

   );
 }
  
 export default BlogDetails;