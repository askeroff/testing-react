import React from 'react';
import { render } from 'react-dom';
import AddForm from './add-form';
class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{ width: '600px', margin: 'auto' }}>
          <h2>Books to read</h2>
          <AddForm />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
