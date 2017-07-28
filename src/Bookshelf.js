import React from "react";
import BooksGrid from "./BooksGrid";
import PropTypes from "prop-types";

const Bookshelf = ({ books, shelf, handleShelfChange}) => {
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">
            {shelf}
          </h2>
          <div className="bookshelf-books">
            <BooksGrid books={books} handleShelfChange={handleShelfChange} />
          </div>
        </div>
    );
};

Bookshelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default Bookshelf;