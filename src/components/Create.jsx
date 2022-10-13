import React from "react"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Create(){
   const [title,setTitle] = useState("")
   const [body,setBody] = useState("")
   const [author,setAuthor] =useState("mario")
   const [isloading,setLoading] = useState(true)
   const navigate = useNavigate()

   const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(false)
    const blog = {title,body,author}
    console.log(blog)

    fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(blog)
    }).then( () => {
      console.log('new blog added')
      setLoading(true)
      navigate("/")
    })
  }
   

  return(
    <div className="create">
      <h2>Add a new blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          onChange={ (e) => {
            setTitle(e.target.value)
          }}
          type="text"
          required
          value={title}
         />
         <label>Blog body:</label>
         <textarea
         onChange={ (e) => {
            setBody(e.target.value)
          }}
            type="text"
            value={body}
            required
         >
         </textarea>
         <label>Blog author:</label>
         <select
          onChange={ (e) => {
            setAuthor(e.target.value)
          }}
          value={author}
          required  
         >
           <option value="mario">mario</option>
           <option value="yoshi"> yoshi </option>
         </select>

       { isloading && <button >Add a blog</button>}
       { !isloading &&  <button disabled>Adding new blog ...</button>}
      </form>
    </div>
  )
}

export default Create