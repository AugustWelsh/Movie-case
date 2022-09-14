import { Route } from "react-router-dom"

// nested routes
import Offers from "./Offers"

export default function About() {
  return (
    <div className="content">
      <h2>Pick Seat</h2>
        <div>Section E</div>
      <div className="seating">
       {[0,1,2,3,4,5,6,7,8,9].map(p => (
          <div key={p}>
           
             <div className="seats"></div>
            
          </div>
        ))}
      </div>
      <div>Section D</div>
      <div className="seating">
        {[0,1,2,3,4,5,6,7,8,9].map(p => (
          <div key={p}>
           
             <div className="seats"></div>
            
          </div>
        ))}
      </div>
      <div>Section C</div>
      <div className="seating">
        {[0,1,2,3,4,5,6,7,8,9].map(p => (
          <div key={p}>
           
             <div className="seats"></div>
            
          </div>
        ))}
      </div>
      <div>Section B</div>
      <div className="seating">
        {[0,1,2,3,4,5,6,7,8,9].map(p => (
          <div key={p}>
           
             <div className="seats"></div>
            
          </div>
        ))}
      </div>
      <div>Section A</div>
      <div className="seating">
        {[0,1,2,3,4,5,6,7,8,9].map(p => (
          <div key={p}>
           
             <div className="seats"></div>
            
          </div>
        ))}
      </div>

      <div>Screen</div>
      <div className="screen">

      </div>
      
      
     {/* <Route path="/about/offers">
        <Offers />
  </Route> */}
    </div>


 
  )
}
