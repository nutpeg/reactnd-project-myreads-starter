import React, { Component } from "react";
import Book from "./Book";

class BooksGrid extends Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(book =>
          <li key={book.id}>
            <Book
              title={book.title}
              imageLink={book.imageLinks ? book.imageLinks.thumbnail : undefined}
              authors={book.authors}
            />
          </li>
        )}
      </ol>
    );
  }
}

export default BooksGrid;
