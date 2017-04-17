import React from 'react';

class Contest extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Contest">
        <div className="contest-description">
          {this.props.description}
        </div>
        <div 
            className="home-link link"
            onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  description: React.PropTypes.string.isRequired,
  contestListClick: React.PropTypes.func.isRequired
}

export default Contest;