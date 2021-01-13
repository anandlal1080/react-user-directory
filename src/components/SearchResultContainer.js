import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
let counter = 0;
class SearchResultContainer extends Component {
  state = {
    input: "",
    results: [],
    hresults: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    fetch("https://randomuser.me/api/?nat=us&results=200")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ results: data.results, hresults: data.results })
      );
  }

  handleInputChange = (event) => {
    this.setState(
      {
        input: event.target.value,
      },
      this.filterHandler
    );
  };

  filterHandler = () => {
    const { input, results } = this.state;
    const lowercasedInput = input.toLowerCase();
    console.log(input);
    const filteredData = results.filter((item) => {
      return item.email.toLowerCase().includes(lowercasedInput);
    });

    this.setState({
      hresults: filteredData,
    });
  };

  // When the Name Table Header is clicked, the table is sorted alphabetically or reversed if already sorted.
  handleFormSubmit = (event) => {
    counter = counter + 1;
    let sorted = this.state.results;
    sorted.sort((a, b) => (a.email > b.email ? 1 : b.email > a.email ? -1 : 0));
    if (counter % 2 === 0) {
      sorted.reverse();
    }
    this.setState({ hresults: sorted });
  };

  render() {
    return (
      <div>
        <p className="text-center font-weight-bolder">User Directory</p>

        <SearchForm handleInputChange={this.handleInputChange} />
        <ResultList
          handleFormSubmit={this.handleFormSubmit}
          hresults={this.state.hresults}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
