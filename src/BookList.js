import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BooksGrid from "./BooksGrid";

class BookList extends Component {
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
    const { allBooks } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <BooksGrid
                  books={allBooks.filter(
                    book => book.shelf === "currentlyReading"
                  )}
                  handleShelfChange={this.handleShelfChange}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <BooksGrid
                  books={allBooks.filter(book => book.shelf === "wantToRead")}
                  handleShelfChange={this.handleShelfChange}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BooksGrid
                  books={allBooks.filter(book => book.shelf === "read")}
                  handleShelfChange={this.handleShelfChange}
                />
              </div>
            </div>
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
