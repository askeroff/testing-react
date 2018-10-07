import React from 'react';
import ListItem from './list-item';

class BooksList extends React.Component {
  listBooks() {
    return this.props.books.map((book, index) => {
      return (
        <ListItem checked={book.read} name={book.name} id={index} key={index} />
      );
    });
  }
  render() {
    return <ul>{this.listBooks()}</ul>;
  }
}

export default BooksList;
