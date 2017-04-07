import ContestPreview from './ContestPreview.jsx';
import React from 'react';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {contests.map(contest =>
      <ContestPreview 
        key={contest.id} 
        {...contest}
        onClick={onContestClick}/>
    )}
  </div>
);

ContestList.propTypes = {
  contests: React.PropTypes.array,
  onContestClick: React.PropTypes.func.isrequired
};

export default ContestList;