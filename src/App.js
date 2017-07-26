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
    BooksAPI.getAll().then(books => {
      this.setState({ shelfBooks: books });
    });
  }

  updateShelf = (book, newShelf) => {
    const bookId = book.id;
    const newAllBooks = this.state.shelfBooks.map(bk => {
      if (bk.id === bookId) {
        bk.shelf = newShelf;
      }
      return bk;
    });
    this.setState({ shelfBooks: newAllBooks });
    BooksAPI.update(book, newShelf);
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
