import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import PropTypes from "prop-types";

const BookList = ({ shelfBooks, handleShelfChange }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div className="list-books-content">
          <div>
            <Bookshelf
              shelf="Currently Reading"
              books={shelfBooks.filter(
                book => book.shelf === "currentlyReading"
              )}
              handleShelfChange={handleShelfChange}
            />
            <Bookshelf
              shelf="Want to Read"
              books={shelfBooks.filter(book => book.shelf === "wantToRead")}
              handleShelfChange={handleShelfChange}
            />
            <Bookshelf
              shelf="Read"
              books={shelfBooks.filter(book => book.shelf === "read")}
              handleShelfChange={handleShelfChange}
            />
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

BookList.propTypes = {
  shelfBooks: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BookList;
