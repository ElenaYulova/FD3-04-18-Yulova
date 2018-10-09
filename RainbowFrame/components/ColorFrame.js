import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  static propTypes = {
    color: PropTypes.string.isRequired,
  };
  
  render() {
    return (
      <div style={{border:"solid 5px "+this.props.color,padding:"0",margin:"0"}}>
        {this.props.children}
      </div>
    );
  }

}

export default ColorFrame;
