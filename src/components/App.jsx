import React from "react"
import Navbar from "./Navbar"
import Home from "./Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./index.css" 
import Create from "./Create"
import BlogDetails from "./BlogDetails"
import Notfound from "./Notfound"


function App(){
  return(
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<BlogDetails />}/>
        <Route path="*" element = {<Notfound />}/>
      </Routes>
      </div>
    </div> 
    </BrowserRouter>
  )
}

export default App