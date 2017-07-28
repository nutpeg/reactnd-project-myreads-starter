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
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      this.setState(state => ({
        shelfBooks: state.shelfBooks
          .filter(b => b.id !== book.id)
          .concat([book])
      }));
    });
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
