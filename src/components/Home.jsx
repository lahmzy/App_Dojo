import React from "react";
import Blogpost from "./Blogpost";
import useFetch from "./useFetch";

const Home = () => {

  
 
  const {error,data:blogs,isLoading} = useFetch("http://localhost:8000/blogs")



  return ( 
    <div className="home">
     { error && <div>{error}</div>}
     {isLoading && <div> Now loading...</div>}
     { blogs && <Blogpost blog={blogs} title="Another Bangrr"/> }
    </div>
   );
}
 
export default Home;