import React from "react";
import * as BooksAPI from "./BooksAPI";
import BookList from './BookList';
import "./App.css";
import Search from "./Search";

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
          {this.state.showSearchPage ? <Search/> : <BookList/>}
        </div>
    );
  }
}

export default BooksApp;
