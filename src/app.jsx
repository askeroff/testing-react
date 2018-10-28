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
    const books = this.dataManager.getBooks();
    this.setState({ books });
  }

  render() {
    return (
      <div>
        <div style={{ width: '600px', margin: 'auto' }}>
          <h2 className="title">Books to read</h2>
          <AddForm dataManager={this.dataManager} />

          <BooksList books={this.state.books} />
        </div>
      </div>
    );
  }
}
