import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../../actions/fetchWeather";
import moment from "moment";

class ConnectedWeather extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWeather());
    this.interval = setInterval(() => {
      console.log("refetching Weather");
      this.props.dispatch(fetchWeather());
    }, 1800000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderWeather() {
    const results = this.props.weather;
    if (this.props.loading === true || results.length === 0) {
      return <h1>Loading</h1>;
    } else {
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
          <div className="flex-row">
            <div className="flex-cell center-items updated">
              {"Last update at " + moment().format("HH:mm D.MM.YYYY")}
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
  return {
    weather: state.weather,
    loading: state.loading
  };
};

const Weather = connect(mapStateToProps)(ConnectedWeather);

export default Weather;
