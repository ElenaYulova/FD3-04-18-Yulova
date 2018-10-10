import React from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

class Br2jsx extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      text: this.brReplacer(props.text),
    }
  }

  brReplacer = (text) =>{ 
    text = text.split(/<br>|<br\/\>|<br \/\>/);
    return text.map((part, i) => <p className="part" key={i}>{part}</p> );
  }
  

  render() {

    return (
      <p>
        {this.state.text}
      </p>
    );

  }

}

export default Br2jsx;