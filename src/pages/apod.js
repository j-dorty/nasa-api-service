import { API_KEY } from "../constants/APIKey";
import React, { useEffect, useState } from "react";

export default function Apod() {
  const [apod, setApod] = useState();

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setApod(data));
  }, []);

  console.log(apod);
  return (
    <div id="App" className="App">
      {apod ? (
        <div id="page-wrap">
          <p>{apod.copyright}</p>
          <p>{apod.date}</p>
          <h3>{apod.title}</h3>
          <img src={apod.hdurl}></img>
          <p>{apod.explanation}</p>
        </div>
      ) : null}
    </div>
  );
}
