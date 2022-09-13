import { Route, useParams} from "react-router-dom"
import { Link } from "react-router-dom"

// nested routes
import Offers from "./Offers"

export default function ProductDetails() {
  const { id } = useParams()
 // const { path } = useRouteMatch()
 
 

  return (
    <div className="content">
      <div className="product">
        
        <div className="details">
          <h2>Pick a time</h2>
        
           
        </div>     
<select className="select">
  <option>13:00</option>
  <option>15:00</option>
  <option>19:00</option>
  <option>21:00</option>
</select>
      </div>
<Link to={`/seatpick`}>
<button className="but">Submit</button>
</Link>



     {/* <Route path={`${path}/offers`}>
        <Offers />
  </Route>*/}
    </div>
  )
}
