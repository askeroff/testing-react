import React from 'react';

class BooksList extends React.Component {
  listBooks() {
    return this.props.books.map((book, index) => {
      const key = `book-${index}`;
      return (
        <li data-testid={key} key={key}>
          {book.name}
        </li>
      );
    });
  }
  render() {
    return <ul>{this.listBooks()}</ul>;
  }
}

export default BooksList;
