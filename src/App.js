import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

// COMPONENTS
import Button from "./components/Button";
import Card from "./components/Card";
import Search from "./components/Search";

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
    this.onInputChange = this.onInputChange.bind(this);
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

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.selectedCountry !== this.state.selectedCountry) {
      // fetch(`https://restcountries.com/v3.1/name/${this.state.selectedCountry}`)
      //   .then((res) => res.json())
      //   .then((res) => {
      //     this.setState({
      //       name: res[0].name.common,
      //       capital: res[0].capital,
      //       flag: res[0].flag,
      //       population: res[0].population,
      //       region: res[0].region,
      //     });
      //   });

      fetch(`https://restcountries.com/v3.1/name/${this.state.selectedCountry}`)
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
  }

  getCountry(country) {
    this.setState({
      selectedCountry: country,
    });
  }

  onInputChange(e) {
    this.setState({
      selectedCountry: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Country Selector</h1>
        {/* <div>
          <Button onClick={() => this.getCountry("france")}>France</Button>
          <Button onClick={() => this.getCountry("brazil")}>Brazil</Button>
          <Button onClick={() => this.getCountry("croatia")}>Croatia</Button>
        </div> */}
        <Search onChange={this.onInputChange} />
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
