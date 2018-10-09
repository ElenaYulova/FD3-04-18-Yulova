import React  from 'react';
import PropTypes from 'prop-types';
import NewGoodFileld from './NewGoodFileld';
import './NewGood.css';

class NewGood extends React.Component {
    static propTypes = {
        good: PropTypes.shape({
                    code: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    price: PropTypes.number.isRequired,
                    url: PropTypes.string.isRequired,
                    quantity: PropTypes.number.isRequired,
                }).isRequired,
        lastGood: PropTypes.number.isRequired,
        }

    constructor (props) {
        super(props);
        good: this.props.good;
        this.state = {
            submiting: props.good ? 'Save' : 'Add',
            heading: props.good ? 'Edit existing good' : 'Add new good',          
        }
    }
   validateText = (text)=> {
       return (typeof text != "string" || text == "")?false: true;
         
    }
    validateNumber

    validation = (EO) => {
        EO = EO || window.event;
        var ok = true;
        ok = ok && validateName(ok);
        ok = ok && validatePrice(ok);
        ok = ok && validateUrl(ok);
        ok = ok && validateQuantity(ok);
        if (!ok) {
            EO.preventDefault();
            validate();       
        }
    }
    validate = () =>{
        validateName();
        validatePrice();
        validateUrl();
        validateQuantity();       
    }

   

}
export default NewGood;