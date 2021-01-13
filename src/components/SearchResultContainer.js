import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
let counter = 0;
class SearchResultContainer extends Component {
  state = {
    results: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    fetch("https://randomuser.me/api/?nat=us&results=200")
      .then((response) => response.json())
      .then((data) => this.setState({ results: data.results }));
  }

  // searchUser = () => {
  //   API.search(query)
  //     .then((res) => this.setState({ results: res.data.data }))
  //     .catch((err) => console.log(err));
  // };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    // this.setState({
    //   [name]: value,

    // });
  };

  // When the Name Table Header is clicked, the table is sorted alphabetically or reversed if already sorted.
  handleFormSubmit = (event) => {
    counter = counter + 1;
    let sorted = this.state.results;
    sorted.sort((a, b) => (a.email > b.email ? 1 : b.email > a.email ? -1 : 0));
    if (counter % 2 === 0) {
      sorted.reverse();
    }
    this.setState({ results: sorted });
  };

  render() {
    return (
      <div>
        <p className="text-center font-weight-bolder">User Directory</p>

        <SearchForm handleInputChange={this.handleInputChange} />
        <ResultList
          handleFormSubmit={this.handleFormSubmit}
          results={this.state.results}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
