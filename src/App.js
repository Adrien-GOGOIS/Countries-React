import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/name/france")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          name: res[0].name.common,
          capital: res[0].capital,
          flag: res[0].flag,
          population: res[0].population,
          region: res[0].region,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.capital}</p>
        <p>{this.state.flag}</p>
        <p>{this.state.population}</p>
        <p>{this.state.region}</p>
      </div>
    );
  }
}

export default App;
