import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.displayFlag}</p>
        <p>Country : {this.props.countryName}</p>
        <p>Capital : {this.props.capitalName}</p>
        <p>Continent : {this.props.regionName}</p>
        <p>Population : {this.props.populationNum} habitants</p>
      </div>
    );
  }
}

export default Card;
