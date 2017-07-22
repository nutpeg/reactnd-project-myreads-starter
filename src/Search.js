import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import serializeForm from "form-serialize";
import BooksGrid from "./BooksGrid";

class Search extends Component {
  state = {
    searchTerm: "",
    searchResults: []
  };

  removeDuplicates = books => {
    return books
      .map(book => book.id)
      .reduce((x, y) => (x.includes(y) ? x : [...x, y]), [])
      .map(id => books.find(book => book.id === id))
  };

  handleSearchTermChange = event => {
    let searchTerm = event.target.value;
    this.setState({ searchTerm: searchTerm.trim() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const values = serializeForm(event.target, { hash: true });
    // this.setState({ searchTerm: values.searchTerm });
    BooksAPI.search(values.searchTerm, 5).then(searchResults => {
      this.setState({ searchResults: this.removeDuplicates(searchResults) });
    });
  };

  render() {
    const { searchTerm, searchResults } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="searchTerm"
                placeholder="Search by title or author"
                value={searchTerm}
                onChange={this.handleSearchTermChange}
              />
            </form>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={searchResults} />
        </div>
      </div>
    );
  }
}

export default Search;
