import React from 'react';

class ContestPreview extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick ()  {
    console.log(this.props.contest.contestName);
  };
  render() {
    return (
      <div className="link ContestPreview" onClick={this.handleClick}>
        <div className="category-name">
          {this.props.contest.categoryName}
        </div>
        <div className="contest-name">
          {this.props.contest.contestName}
        </div>
      </div>
    );
  }
}

// ContestPreview.propTypes = {
//   categoryName: React.PropTypes.string.isrequired,
//   contestName: React.PropTypes.string.isrequired
// };

export default ContestPreview;
