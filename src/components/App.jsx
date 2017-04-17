import React from 'react';
import Header from './Header.jsx';
import ContestList from './ContestList.jsx';
import Contest from './COntest.jsx';
import * as api from '../api.js';
const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.initialData;

    this.fetchContest = this.fetchContest.bind(this);
  }
  
  componentDidMount(){

  }
  pageHeader(){
    if (this.state.currentContestId){
      return this.currentContest().contestName;
    } else {
      return 'Naming Contests';
    }
  }
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId}, 
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  };
  
  fetchContestList = () => {
    pushState(
      {currentContestId: null}, 
      '/'
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  };

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  currentContent() {
    if (this.state.currentContestId){
      return <Contest 
                contestListClick={this.fetchContestList}
                {...this.currentContest()}/>;
    } else {
      return <ContestList 
              contests={this.state.contests}
              onContestClick={this.fetchContest} />;
    }
  }
  render() {
    return (
      <div className="App container-fluid">
          <Header message={this.pageHeader()} />
          {this.currentContent()}
      </div>
    );
  }
}

App.propTypes = {
  initialData: React.PropTypes.object.isRequired
};

export default App;