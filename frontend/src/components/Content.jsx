import React from "react";
import Calendar from "rc-calendar";
import Clock from "react-live-clock";
import Weather from "./content/Weather";
import News from "./content/News";

const Content = () => {
  return (
    <div className="App">
      <div className="flex-column center-items">
        <div className="flex-row">
          <div className="flex-cell clock">
            <Clock format={"HH:mm:ss"} ticking={true} />
          </div>
          <div className="flex-cell center-items">
            <Calendar style={{ margin: "10px" }} />
          </div>
          <div className="flex-cell center-items weather">
            <Weather />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-cell center-items news">
            <News />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
