import React, {Component, PropTypes} from 'react';

import Header from '../components/shared/Header';

class App extends Component {
  // constructor() {
  //   super();

  //   // initial state
  //   this.state = {
  //     main: {},
  //     campers: {}
  //   };
  // }

  // componentWillMount() {
  //   // runs right before <App> is rendered
  //   // need to get state from data store here
  // }

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
