import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookList from "./BookList";
import "./App.css";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    shelfBooks: []
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ shelfBooks: books });
    });
  };

  updateShelf = (book, newShelf) => {
    // Update shelf locally.
    const bookId = book.id;
    const newAllBooks = this.state.shelfBooks.map(bk => {
      if (bk.id === bookId) {
        bk.shelf = newShelf;
      }
      return bk;
    });
    this.setState({ shelfBooks: newAllBooks });
    // Update shelf using remote API.
    // Call getAllBooks to ensure shelfBooks is up to date when
    // following link from Search page. Don't like this, as it
    // causes jump of book within a shelf when re-rendered, but
    // can't see how else to make it work. And not sure why it's
    // needed. Any pointers much appreciated!
    BooksAPI.update(book, newShelf).then(() => this.getAllBooks());
  };

  handleShelfChange = (event, book) => {
    const selectedShelf = event.target.value;
    this.updateShelf(book, selectedShelf);
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={() =>
              <BookList
                shelfBooks={this.state.shelfBooks}
                handleShelfChange={this.handleShelfChange}
              />}
          />
          <Route
            path="/search"
            render={() =>
              <Search
                shelfBooks={this.state.shelfBooks}
                handleShelfChange={this.handleShelfChange}
              />}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
