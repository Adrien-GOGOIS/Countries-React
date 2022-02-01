import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

// COMPONENTS
import Button from "./components/Button";
import Card from "./components/Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      selectedCountry: "",
    };

    this.getCountry = this.getCountry.bind(this);
  }

  componentDidMount() {
    fetch(`https://restcountries.com/v3.1/name/france`)
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

  getCountry(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
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

  render() {
    return (
      <div>
        <div>
          <Button onClick={() => this.getCountry("france")}>France</Button>
          <Button onClick={() => this.getCountry("brazil")}>Brazil</Button>
          <Button onClick={() => this.getCountry("croatia")}>Croatia</Button>
        </div>
        <Card
          displayFlag={this.state.flag}
          countryName={this.state.name}
          capitalName={this.state.capital}
          regionName={this.state.region}
          populationNum={this.state.population}
        />
      </div>
    );
  }
}

export default App;
