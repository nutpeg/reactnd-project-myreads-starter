import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookList from "./BookList";
import "./App.css";
import Search from "./Search";

class BooksApp extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={BookList} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
