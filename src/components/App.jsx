import React from 'react';
import Header from './Header.jsx';
import ContestList from './ContestList.jsx';
import Contest from './COntest.jsx';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headerMessage: 'Everything is going as planned.',
      contests: this.props.initialContests
    };

    this.fetchContest = this.fetchContest.bind(this);
  }

  componentDidMount(){

  }

  fetchContest(contestId) {
    pushState(
      {currentContestId: contestId}, 
      `/contest/${contestId}`
    );
    // lookup contest, change the state to be related to it.
    this.setState({
      headerMessage: this.state.contests[contestId].contestName,
      currentContestId: contestId
    });

  }
  currentContent() {
    if (this.state.currentContestId){
      return <Contest {...this.state.contests[this.state.currentContestId]}/>
    } else {
      return <ContestList 
              contests={this.state.contests}
              onContestClick={this.fetchContest} />
    }
  }
  render() {
    return (
      <div className="App container-fluid">
          <Header message={this.state.headerMessage} />
          {this.currentContent()}
      </div>
    );
  }
}

export default App;