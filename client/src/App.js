import React from "react";
import axios from "axios";
import "./App.css";

import DataCard from "./components/dataCard";
import NavBar from "./components/navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initialData: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({ initialData: res.data });
      })
      .catch(err => {
        console.log(`error`, err);
      });
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.initialData.map(item => {
          return (
            <DataCard name={item.name} id={item.id} country={item.country} />
          );
        })}
      </div>
    );
  }
}

export default App;
