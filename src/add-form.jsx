import React from 'react';

class AddForm extends React.Component {
  render() {
    return (
      <form>
        <label style={{ paddingRight: '10px' }}>Add new book</label>
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
}

export default AddForm;
