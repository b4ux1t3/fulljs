import React from 'react';
import Header from './Header.jsx';
import ContestList from './ContestList.jsx';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

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

  fetchContest(contestId) {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );
  }
  
  render() {
    return (
      <div className="App container-fluid">
          <Header message={this.state.headerMessage} />
          <ContestList 
              contests={this.state.contests}
              onContestClick={this.fetchContest} />
      </div>
    );
  }
}

export default App;