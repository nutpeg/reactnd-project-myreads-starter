import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BooksGrid = ({ books, handleShelfChange }) => {
  return (
    <ol className="books-grid">
      {books.map(book =>
        <li key={book.id}>
          <Book book={book} handleShelfChange={handleShelfChange} />
        </li>
      )}
    </ol>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BooksGrid;
