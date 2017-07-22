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

  handleShelfChange = (event, id) => {
    console.log(id);
    console.log(event.target.value);
  };

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
              handleShelfChange={this.handleShelfChange}
            />
            <Bookshelf
              title="Want to Read"
              books={allBooks.filter(book => book.shelf === "wantToRead")}
              handleShelfChange={this.handleShelfChange}
            />
            <Bookshelf
              title="Read"
              books={allBooks.filter(book => book.shelf === "read")}
              handleShelfChange={this.handleShelfChange}
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
