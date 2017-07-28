import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BooksGrid from "./BooksGrid";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    searchTerm: "",
    searchResults: [],
    showSearchError: false
  };

  static propTypes = {
    handleShelfChange: PropTypes.func.isRequired
  };

  removeDuplicates = books => {
    return books
      .map(book => book.id)
      .reduce((x, y) => (x.includes(y) ? x : [...x, y]), [])
      .map(id => books.find(book => book.id === id));
  };

  getShelf = id => {
    const bk = this.props.shelfBooks.find(book => book.id === id);
    return bk ? bk.shelf : "none";
  };

  normalizeShelves = books => {
    return books.map(book => {
      book.shelf = this.getShelf(book.id);
      return book;
    });
  };

  onSearchTermChange = searchTerm => {
    this.setState({
      showSearchError: false,
      searchTerm: searchTerm.trim()
    });
    BooksAPI.search(searchTerm, 20)
      .then(searchResults => {
        let books = this.removeDuplicates(searchResults);
        books = this.normalizeShelves(books);
        this.setState(state => ({ searchResults: books }));
      })
      .catch(error => {
        console.log(error.message);
        let showError = searchTerm !== "";
        // Seems that a previous search API call will sometimes
        // render its results AFTER the following empty results
        // have rendered. Happens when search terms are deleted
        // quickly via backspace. Not sure how to fix this
        // without making promise from API call cancelable.
        // Is there a simpler solution?
        this.setState(state => ({
          showSearchError: showError,
          searchResults: []
        }));
      });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { searchTerm, searchResults } = this.state;
    const { handleShelfChange } = this.props;
    let resultsPane;
    if (this.state.showSearchError) {
      resultsPane = (
        <div>
          <h2>No search results</h2>
          <p>Please try another search term</p>
        </div>
      );
    } else {
      resultsPane = (
        <BooksGrid
          books={searchResults}
          handleShelfChange={handleShelfChange}
        />
      );
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <form onSubmit={event => this.handleSubmit(event)}>
              <input
                type="text"
                name="searchTerm"
                placeholder="Search by title or author"
                value={searchTerm}
                onChange={event => this.onSearchTermChange(event.target.value)}
                autoFocus
              />
            </form>
          </div>
        </div>
        <div className="search-books-results">
          {resultsPane}
        </div>
      </div>
    );
  }
}

export default Search;
