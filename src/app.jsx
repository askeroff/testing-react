import React from 'react';
import AddForm from './add-form';
import BooksList from './books-list';
import DataManager from './data-manager';

export default class App extends React.Component {
  dataManager = new DataManager();

  state = {
    books: []
  };

  async componentDidMount() {
    const books = await this.dataManager.loadBooks();
    this.setState({ books });
  }

  render() {
    if (this.state.books.length === 0) {
      return <div>...loading</div>;
    }
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
