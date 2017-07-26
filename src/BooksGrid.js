import React from "react";
import Book from "./Book";

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

export default BooksGrid;
