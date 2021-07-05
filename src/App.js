import logo from "./logo.svg";
import "./App.css";
import { API_KEY } from "./constants/APIKey";
import React, { useEffect, useState } from "react";

function App() {
  const [apod, setApod] = useState();

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setApod(data));
  }, []);

  console.log(apod);
  return (
    <div className="App">
      {apod ? (
        <>
          <p>{apod.copyright}</p>
          <p>{apod.date}</p>
          <h3>{apod.title}</h3>
          <img
            src={apod.hdurl}
            alt="Girl in a jacket"
            width="500"
            height="600"
          ></img>
          <p>{apod.explanation}</p>
        </>
      ) : null}
    </div>
  );
}

export default App;
