import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Navbar />
      <Banner
        imgURL={require("./Images/cautofototesla-model-y-1.jpg")}
        name="Model Y"
        mainbtn="Custom Order"
        secbtn="Learn More"
      />
      <Banner
        imgURL="https://www.hdcarwallpapers.com/walls/2018_tesla_model_3_4k_3-HD.jpg"
        name="Model X"
        mainbtn="Custom Order"
        secbtn="Learn More"
      />
      <Banner
        imgURL="https://electrek.co/wp-content/uploads/sites/3/2020/05/Tesla-Solar-hero.jpg?quality=82&strip=all"
        name="Tesla Solar Pannels"
        mainbtn="Custom Order"
        secbtn="Learn More"
      />
      <Banner
        imgURL="https://www.tesla.com/sites/default/files/images/charging/hero-destination.jpg?2020201939"
        name="Tesla Charger"
        mainbtn="Custom Order"
        secbtn="Learn More"
      />
    </div>
  );
}

export default App;
