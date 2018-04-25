import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../../actions/fetchWeather";

class ConnectedWeather extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWeather());
  }

  renderWeather() {
    const results = this.props.weather;
    if (this.props.loading === true || results.length === 0) {
      console.log("Loading");
      return <h1>Loading</h1>;
    } else {
      console.log("INCOMING!!!");
      return (
        <div className="flex-column center-items">
          <div className="flex-row">
            <div className="flex-cell center-items">
              {this.props.weather.name}
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-cell center-items">
              <div className="flex-column">
                <div className="flex-row">
                  <img
                    src={
                      "http://openweathermap.org/img/w/" +
                      this.props.weather.weather[0].icon +
                      ".png"
                    }
                    alt={this.props.weather.weather[0].description}
                  />
                </div>
                <div className="flex-row">
                  {this.props.weather.weather[0].main}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-cell center-items">
              {this.props.weather.main.temp}&deg;C
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderWeather()}</div>;
  }
}

const mapStateToProps = state => {
  console.log("state in mapStateToProps", state);
  return {
    weather: state.weather,
    loading: state.loading
  };
};

const Weather = connect(mapStateToProps)(ConnectedWeather);

export default Weather;
