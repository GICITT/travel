import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check out thes EPIC destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="img/img-2.jpg"
              text="Explore he hidden waterfall deep inside the Machu Pichu"
              label="Advenure"
              paht="services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="img/img-3.jpg"
              text="Explore he hidden waterfall deep inside the Machu Pichu"
              label="Advenure"
              paht="services"
            />
            <CardItems
              src="img/img-4.jpg"
              text="Explore he hidden waterfall deep inside the Machu Pichu"
              label="Advenure"
              paht="services"
            />
            <CardItems
              src="img/img-4.jpg"
              text="Explore he hidden waterfall deep inside the Machu Pichu"
              label="Advenure"
              paht="services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
