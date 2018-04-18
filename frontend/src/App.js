import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import Calendar from "rc-calendar";
import Clock from "react-live-clock";
import Loading from "./components/Loading";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  fetchData() {
    const url =
      "http://192.168.1.104:5984/sami_books/_design/bookDesignDocs/_view/getBooks?descending=true";

    fetch(url, {
      method: "GET"
    })
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
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
        <div className="container is-fluid">
          <div className="columns is-multiline is-mobile">
            <div className="column has-text-centered is-one-quarter is-warning clock">
              <Clock className="title" format={"HH:mm:ss"} ticking={true} />
            </div>
            <div className="column is-one-quarter is-primary">
              <Calendar style={{ margin: "10px" }} />
            </div>
            <div className="column is-half is-danger">UUTISIA :D</div>
            <div className="column is-half is-success">HUUTISTA</div>
            <div className="column is-one-quarter">YRJISTÄ :D</div>
            <div className="column is-one-quarter">KAATISTA :D</div>
            <div className="column is-one-quarter">
              <code>is-one-quarter</code>
            </div>
            <div className="column">Auto</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
