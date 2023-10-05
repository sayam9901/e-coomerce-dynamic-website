import React from "react";
import "./hero.css"
import { Navbar } from "../components/navbar";

const Data = [
  {
    date: "AUG 3",
    city: "mumbai",
    place: "garden",
  },
  { date: "AUG 3", city: "mumbai", place: "garden" },
  { date: "AUG 3", city: "mumbai", place: "garden" },
  { date: "AUG 3", city: "mumbai", place: "garden" },
  { date: "AUG 3", city: "mumbai", place: "garden" },
];

export const Hero = () => {
  return (
    <div><Navbar/>
    <div className="container">
      <div>
        <h1>GET OUR LATEST ALBUM</h1>
        <button>PLAY</button>
      </div>
      <div>TOURS</div>
      <ul>
        {Data.map((item, index) => (
          <li key={index}>
            <strong>Date:</strong> {item.date}, <strong>City:</strong> {item.city}, <strong>Place:</strong> {item.place}
            <button>BUY TICKETS</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};
