import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <p className="fs-6">{this.props.displayFlag}</p>
        <div className="card-body">
          <p className="card-title">Country : {this.props.countryName}</p>
          <p>Capital : {this.props.capitalName}</p>
          <p>Continent : {this.props.regionName}</p>
          <p>Population : {this.props.populationNum} habitants</p>
        </div>
      </div>
    );
  }
}

export default Card;
