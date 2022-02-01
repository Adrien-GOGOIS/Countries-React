import React from "react";

class Search extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          name="countrySearch"
          id="countrySearch"
          onChange={this.props.onChange}
        />
      </form>
    );
  }
}

export default Search;
