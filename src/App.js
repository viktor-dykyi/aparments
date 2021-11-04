import React from "react";
import "./App.css"
import { Cities } from "./components/Cities/Cities";
import { Explorer } from "./components/Explorer/Explorer";
import { Footer } from "./components/Footer/Footer";
import { Greetings } from "./components/Greetings/Greetings";
import { Header } from "./components/Header/Header";
import { LandingFurnished } from "./components/LandingFurnished/LandingFurnished";
import { LandingInklydes } from "./components/LaningInkludes/LandingInklydes";
import { Opportunities } from "./components/Opportunities/Opportunities";
import { OurMembers } from "./components/OurMembers/OurMembers";

function App() {
  return (
    <div className="app">
      <Header/>
      <Greetings/>
      <Opportunities/> 
      <Explorer/>
      <LandingFurnished/>
      <LandingInklydes/>
      <OurMembers/>
      <Cities/>
      <Footer/>
    </div>
  );
}

export default App;
