import React, { Component } from "react";
import BooksGrid from "./BooksGrid";

class Bookshelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.title}
        </h2>
        <div className="bookshelf-books">
          <BooksGrid books={this.props.books} handleShelfChange={this.props.handleShelfChange} />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
