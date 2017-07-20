import React from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
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

  // title
  // imageLinks.smallThumbnail
  // authors[]

  render() {
    return (
        <Router>
          <div className="app">
            <Route exact path="/" component={BookList}/>
            <Route path="/search" component={Search}/>
          </div>
        </Router>
    );
  }
}

export default BooksApp;
