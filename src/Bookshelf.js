import React, { Component } from "react";
import BooksGrid from "./BooksGrid";

class Bookshelf extends Component {
  render() {
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">
            {this.props.shelf}
          </h2>
          <div className="bookshelf-books">
            <BooksGrid books={this.props.books} handleShelfChange={this.props.handleShelfChange} />
            <BooksGrid
                books={shelfBooks.filter(book => book.shelf === "read")}
                handleShelfChange={handleShelfChange}
            />
          </div>
        </div>
    );
  }
}

export default Bookshelf;