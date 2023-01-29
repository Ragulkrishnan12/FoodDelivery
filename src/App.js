import React from "react";
import HomePage from "./home/homePage";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./main/mainPage";
import DataPage from "./fetchdata/data";
import Listindex from "./list/listindex";
import Cardpg from "./card/cardpg";

function App() {
  return (
    <div>
      <HomePage />
      <Listindex />
      {/* <MainPage /> */}
      {/* <DataPage /> */}
      <Cardpg />
    </div>
  );
}

export default App;
