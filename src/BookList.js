import React, { Component } from "react";
import { Link } from "react-router-dom";
import BooksGrid from "./BooksGrid";
import PropTypes from "prop-types";

class BookList extends Component {
  render() {
    const { shelfBooks, handleShelfChange } = this.props;
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
                  books={shelfBooks.filter(
                    book => book.shelf === "currentlyReading"
                  )}
                  handleShelfChange={handleShelfChange}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <BooksGrid
                  books={shelfBooks.filter(book => book.shelf === "wantToRead")}
                  handleShelfChange={handleShelfChange}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BooksGrid
                  books={shelfBooks.filter(book => book.shelf === "read")}
                  handleShelfChange={handleShelfChange}
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

BookList.propTypes = {
  shelfBooks: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BookList;
