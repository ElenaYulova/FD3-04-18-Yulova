import React  from 'react';
import PropTypes from 'prop-types';

import './NewGoodField.css';

class NewGoodField extends React.Component {
static PropTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    valid: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
}
changedValue = (v) => {
    var key = v.target.value;
    var value = v.target.value;
    this.props.changedValue(key, value);
}
render () {
    var name = this.props.name;
    return <div className="good-field__label">
    <label htmlFor={name} className=""> {name.toUpperCase}</label>
    <input className="" value={this.props.value} type={this.props.type} name={name} id={name} onChange={this.changedValue}/>
    {
        !valid && <span className="good-field__error">{this.props.errorText}</span>
    }
    </div>
}

}
export default NewGoodField;