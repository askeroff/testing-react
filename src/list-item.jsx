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
    const { id } = this.props;
    const decorated = checked ? 'line-through' : 'unset';
    const key = `book-${id}`;
    return (
      <li style={{ textDecoration: decorated }} data-testid={key}>
        <Checkbox onChange={e => this.handleChange(e, id)} checked={checked} />
        {this.props.name}
      </li>
    );
  }
}

export default ListItem;
