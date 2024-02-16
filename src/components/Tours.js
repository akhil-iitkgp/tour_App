import { useState } from "react";
import data from "./data";
import Card from "./Card";
function Tours() {
  let [tours, setTours] = useState(data);
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  return (
    <div>
      <div>
        <h2>Plan With Love</h2>
      </div>

      <div>
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}
export default Tours;
