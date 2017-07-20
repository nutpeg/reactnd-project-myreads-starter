import React from "react";
import * as BooksAPI from "./BooksAPI";
import BookList from './BookList';
import "./App.css";

class BooksApp extends React.Component {
  // state = {
  //   contacts: [],
  // }
  //
  // componentDidMount() {
  //   ContactsAPI.getAll().then(contacts => {
  //     this.setState({ contacts })
  //   })
  // }
  //
  // removeContact = (contact) => {
  //   this.setState((state) => ({
  //     contacts: state.contacts.filter((item) => item.id !== contact.id)
  //   }))
  //
  //   ContactsAPI.remove(contact)
  // }
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  };

  render() {
    return (
        <div className="app">
          {this.state.showSearchPage
              ? <div className="search-books">
                <div className="search-books-bar">
                  <a
                      className="close-search"
                      onClick={() => this.setState({ showSearchPage: false })}
                  >
                    Close
                  </a>
                  <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid"/>
                </div>
              </div>
              : <BookList/>}
        </div>
    );
  }
}

export default BooksApp;
