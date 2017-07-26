import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookList from "./BookList";
import "./App.css";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    allBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ allBooks: books });
    });
  }

  updateShelf = (book, newShelf) => {
    const bookId = book.id;
    const newAllBooks = this.state.allBooks.map(bk => {
      if (bk.id === bookId) {
        bk.shelf = newShelf;
      }
      return bk;
    });
    this.setState({ allBooks: newAllBooks });
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
                books={this.state.allBooks}
                handleShelfChange={this.handleShelfChange}
              />}
          />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
