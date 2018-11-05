import React from 'react';
import Checkbox from './checkbox';
import DataManager from './data-manager';

class ListItem extends React.Component {
  state = {
    checked: this.props.checked
  };

  handleChange = (e, id) => {
    const dataManager = new DataManager();
    dataManager.changeBook('read', e.target.checked, id);
    this.setState({
      checked: e.target.checked
    });
  };

  render() {
    const { checked } = this.state;
    const { id, deleteBook } = this.props;
    const decorated = checked ? 'line-through' : 'unset';
    const checkboxId = `checkbox-${id}`;
    const buttonId = `button-${id}`;
    return (
      <li
        style={{ textDecoration: decorated, marginBottom: '10px' }}
        data-testid={'book'}
      >
        <label data-testid={checkboxId} htmlFor={checkboxId}>
          <Checkbox
            id={checkboxId}
            onChange={e => this.handleChange(e, id)}
            checked={checked}
          />
          {this.props.name}
        </label>
        <label
          data-testid={buttonId}
          style={{ marginLeft: '10px' }}
          htmlFor={buttonId}
        >
          <button id={buttonId} onClick={() => deleteBook(id)}>
            X
          </button>
        </label>
      </li>
    );
  }
}

export default ListItem;
