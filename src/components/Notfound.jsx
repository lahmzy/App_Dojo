import {Link} from "react-router-dom"

const Notfound = () => {
  return (
    <div className="not-found">
      <h2>Ouch</h2>
      <p>page not found</p>
      <button><Link to = "/">Go home</Link></button>
    </div>
  );
}
 
export default Notfound;