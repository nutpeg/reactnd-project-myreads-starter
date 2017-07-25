import React, { Component } from "react";

class Book extends Component {
  static defaultProps = {
    authors: ["Unknown"],
    imageLink: "none"
  };

  render() {
    const { book, id, title, authors, imageLink, initialShelf, handleShelfChange } = this.props;
    // const { book, handleShelfChange } = this.props;
    let imageUrl;
    if (imageLink !== "none") {
      imageUrl = `url('${imageLink}')`;
    } else {
      imageUrl = imageLink;
    }
    // return (
    //     <div className="book">
    //       <div className="book-top">
    //         <div
    //             className="book-cover"
    //             alt={`Cover image for ${book.title}`}
    //             style={{
    //               width: 128,
    //               height: 193,
    //               backgroundImage: {`${book.imageUrl}`}
    //             }}
    //         />
    //         <div className="book-shelf-changer">
    //           <select value={book.shelf} onChange={(e) => handleShelfChange(e, book)}>
    //             <option value="none" disabled>
    //               Move to...
    //             </option>
    //             <option value="currentlyReading">Currently Reading</option>
    //             <option value="wantToRead">Want to Read</option>
    //             <option value="read">Read</option>
    //             <option value="none">None</option>
    //           </select>
    //         </div>
    //       </div>
    //       <div className="book-title">
    //         {book.title}
    //       </div>
    //       <div className="book-authors">
    //         {book.authors.join(", ")}
    //       </div>
    //     </div>
    // );
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            alt={`Cover image for ${title}`}
            style={{
              width: 128,
              height: 193,
              backgroundImage: `${imageUrl}`
            }}
          />
          <div className="book-shelf-changer">
            <select value={initialShelf} onChange={(e) => handleShelfChange(e, book)}>
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
          {title}
        </div>
        <div className="book-authors">
          {authors.join(", ")}
        </div>
      </div>
    );
  }
}

export default Book;
