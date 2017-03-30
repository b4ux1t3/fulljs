import React from 'react';
import Header from './Header.jsx';
import ContestList from './ContestList.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headerMessage: 'Everything is going as planned.',
      contests: this.props.initialContests
    };
  }

  componentDidMount(){

  }
  
  render() {
    return (
      <div className="App container-fluid">
          <Header message={this.state.headerMessage} />
          <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

export default App;