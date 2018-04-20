import React, { Component } from "react";
import "./App.css";
import Calendar from "rc-calendar";
import Clock from "react-live-clock";
import Weather from "./components/Weather";
import News from "./components/News";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: []
    };
  }

  fetchData() {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=a30f70eec1e3c0df56e4cf777944dd52&units=metric";

    fetch(url, {
      method: "GET"
    })
      .then(result => result.json())
      .then(result => {
        console.log("Fetched weatherData");
        this.setState({
          weatherData: result
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
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
              <Weather weather={this.state.weatherData} />
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-cell center-items">
              <News news="UUTISIA SAMI?" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
