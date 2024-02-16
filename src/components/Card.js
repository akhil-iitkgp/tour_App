import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){
    const[readmore,setReadmore]=useState(false);
    const description = readmore ? info :`${info.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return(
        <div>
            <img src={image} alt="swdd"></img>


            <div>
                <div>
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                    
                </div>

                <div>{description}
                <span onClick={readmoreHandler}>{readmore ? `Show Less` : `Show More`}</span>
                </div>
            </div>

            <button>Not Intrested</button>




        </div>
        
    );

}

export default Card;