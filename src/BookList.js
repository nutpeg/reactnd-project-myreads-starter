import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";

class BookList extends Component {
  state = {
    allBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ allBooks: books });
    });
  }

  render() {
    const { allBooks } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              books={allBooks.filter(book => book.shelf === "currentlyReading")}
            />
            <Bookshelf
              title="Want to Read"
              books={allBooks.filter(book => book.shelf === "wantToRead")}
            />
            <Bookshelf
              title="Read"
              books={allBooks.filter(book => book.shelf === "read")}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookList;
