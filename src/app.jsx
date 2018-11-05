import React from 'react';
import AddForm from './add-form';
import BooksList from './books-list';
import DataManager from './data-manager';

export default class App extends React.Component {
  dataManager = new DataManager();

  state = {
    books: []
  };

  componentDidMount() {
    this.setBooks();
  }

  setBooks = () => {
    const books = this.dataManager.getBooks();
    this.setState({ books });
  };

  render() {
    return (
      <div>
        <div style={{ width: '600px', margin: 'auto' }}>
          <h2 className="title">Books to read</h2>
          <AddForm updateBooks={this.setBooks} dataManager={this.dataManager} />

          <BooksList
            dataManager={this.dataManager}
            updateBooks={this.setBooks}
            books={this.state.books}
          />
        </div>
      </div>
    );
  }
}
