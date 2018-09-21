import React from 'react';
import { render } from 'react-dom';
import AddForm from './add-form';
import DataManager from './data-manager';
class App extends React.Component {
  dataManager = new DataManager();
  render() {
    return (
      <div>
        <div style={{ width: '600px', margin: 'auto' }}>
          <h2>Books to read</h2>
          <AddForm dataManager={this.dataManager} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
