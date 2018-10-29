import React from 'react';

class AddForm extends React.Component {
  state = {
    bookName: ''
  };
  handleChange = e => {
    this.setState({
      bookName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dataManager, updateBooks } = this.props;
    dataManager.add(this.state.bookName);
    updateBooks();
  };
  render() {
    const { bookName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="bookname" style={{ paddingRight: '10px' }}>
          Add new book
        </label>
        <input
          onChange={this.handleChange}
          value={bookName}
          id="bookname"
          type="text"
        />
        <input data-testid="submit" type="submit" />
      </form>
    );
  }
}

export default AddForm;
