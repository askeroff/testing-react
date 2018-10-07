import React from 'react';

class Checkbox extends React.Component {
  render() {
    return (
      <input
        type="checkbox"
        id={`checkbox-${this.props.id}`}
        onChange={this.props.onChange}
        checked={this.props.checked}
      />
    );
  }
}

export default Checkbox;
