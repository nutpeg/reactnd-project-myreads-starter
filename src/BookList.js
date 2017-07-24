import React, {Component} from "react";
import {Link} from "react-router-dom";
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

  updateShelf = (shelf, id) => {
    const newAllBooks = this.state.allBooks.map(book => {
      if (book.id === id) {
        book.shelf = shelf;
      }
      return book;
    });
    this.setState({ allBooks: newAllBooks });
    // BooksAPI.update(book, shelf);
  };

  handleShelfChange = (event, id) => {
    // find book using ID
    // const i = this.state.allBooks.findIndex(book => book.id === id);
    const selectedShelf = event.target.value;
    // change, no change or removal?
    if (selectedShelf === 'none') {
      console.log("Remove!");
    } else {
      this.updateShelf(selectedShelf, id);
    }
    // if change go through allBooks and change book.shelf
    // if removal remove from allBooks
    // update remote db using API
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
                      books={allBooks.filter(book => book.shelf === "currentlyReading")}
                      handleShelfChange={this.handleShelfChange}
                  />
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <BooksGrid
                      books={allBooks.filter(book => book.shelf === "wantToRead")}
                      handleShelfChange={this.handleShelfChange}
                  />
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
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
