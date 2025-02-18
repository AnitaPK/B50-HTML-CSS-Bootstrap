import React from "react";
import data from "../../data.js";
import {Link} from 'react-router-dom'

const Cards = () => {
  return (
    <>
      <div className="container">
          {data.map((card, index) => (
            <>
        <div className="row">

              <div className="col">
                <div class="card" style={{ width: "18rem" }} key={index}>
                    <Link to={`/card/${card.id}`}>
                  <img src={card.image} class="card-img-top" alt="..." />
                  {/* <div class="card-body">
                    <h5 class="card-title">{card.name}</h5>
                    <p class="card-text">{card.info}</p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div> */}
                  </Link>
                </div>
              </div>
        </div>

            </>
          ))}
      </div>
    </>
  );
};

export default Cards;
