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
      .map(id => books.find(book => book.id === id));
  };

  normalizeShelves = books => {
    //
    return books.map(book => book);
  };

  handleSearchTermChange = event => {
    let searchTerm = event.target.value;
    this.setState({ searchTerm: searchTerm.trim() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const values = serializeForm(event.target, { hash: true });
    BooksAPI.search(values.searchTerm, 1).then(searchResults => {
      let books = this.removeDuplicates(searchResults);
      // books = this.normalizeShelves(books);
      this.setState({ searchResults: books });
    });
  };

  render() {
    const { searchTerm, searchResults } = this.state;
    const { handleShelfChange } = this.props;
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
                autoFocus
              />
            </form>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid
            books={searchResults}
            handleShelfChange={handleShelfChange}
          />
        </div>
      </div>
    );
  }
}

export default Search;
