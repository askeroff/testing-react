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
  render() {
    const { bookName } = this.state;
    return (
      <form>
        <label htmlFor="bookname" style={{ paddingRight: '10px' }}>
          Add new book
        </label>
        <input
          onChange={this.handleChange}
          value={bookName}
          id="bookname"
          type="text"
        />
        <input type="submit" />
      </form>
    );
  }
}

export default AddForm;
