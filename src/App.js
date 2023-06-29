import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./main/mainPage";
// import CardImage from "./card/cardImage";
import CardImage from "./card/cardImage";
import PageTwo from "./pageTwo/pageTwo";
import PageThree from "./pageThree/pageThree";
import PageFour from "./pageFour/pageFour";
import PageFive from "./pageFive/pageFive";
import PageSix from "./pageSix/pageSix";
import { Data4 } from "./util/sample.js";

function App() {
  return (
    <div className="App">
      <header></header>
      <MainPage />
      <CardImage />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
      <footer className="Main-footer">

        {Data4.map(({ title, para1, para2, para3, para4 }) => {
          return <ul className="ul-footer">
            <h5>{title}</h5>
            <li>{para1}</li>
            <li>{para2}</li>
            <li>{para3}</li>
            <li>{para4}</li>
          </ul>
        }
        )}
        <p>Made With Love By Figmaland All Right Reserved </p>
      </footer>
    </div>
  );
}

export default App;
