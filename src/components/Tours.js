import { useState } from "react";
import data from "./data";
import Card from "./Card";
function Tours() {
  let [tours, setTours] = useState(data);

  const original_length= data.length;
  


  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length===0){
    return(
        <div className="refresh">
            <h2>NO TOUR LEFT</h2>
            <button className="btn-white " onClick={()=>setTours(data)}>Refresh</button>
        </div>

    );
  }

  if(tours.length!==original_length){
    return(
      <div className="container">
      <div>
        <h2 className="title">ExploreMore Travel Company</h2>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>

      
        <div className="ref">
          <button className="not-int" onClick={()=>setTours(data)}>Refresh for all tours</button>
        </div>
      
    </div>
  );
  }


  return (
    <div className="container">
      <div>
        <h2 className="title">ExploreMore Travel Company</h2>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>

      
    </div>
  );
}


export default Tours;
