import React from "react";

const Book = ({ book, handleShelfChange }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          alt={`Cover image for ${book.title}`}
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.imageLinks
              ? `url("${book.imageLinks.thumbnail}")`
              : "none"
          }}
        />
        <div className="book-shelf-changer">
          <select value={book.shelf} onChange={e => handleShelfChange(e, book)}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">
        {book.title}
      </div>
      <div className="book-authors">
        {book.authors ? book.authors.join(", ") : "Unknown"}
      </div>
    </div>
  );
};

export default Book;
