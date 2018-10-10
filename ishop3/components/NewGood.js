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
    validateText = (text)=> (typeof text != "string" || text == "")?false: true;         
    validateNumber = (val)=> (typeof val != "number" || val == "")?false: true; 

    validateName = (toFocus) => {
        var ok = true;
        var goodName = this.props.good.name;
        ok = validateText(goodName.value);
        this.setState(nameValid) = true;
        if (toFocus) goodName.focus();
        return ok;
    } 
    validatePrice = (toFocus) => {
        var ok = true;
        var price = this.props.good.price;
        ok = validateNumber(price.value);
        this.setState(priceValid) = true;
        if (toFocus) price.focus();
        return ok;
    }
    validateUrl = (toFocus) => {
        var ok = true;
        var url = this.props.good.url;
        ok = validateText(url.value);
        this.setState(urlValid) = true;
        if (toFocus) url.focus();
        return ok;
    }
    validateQuantity = (toFocus) => {
        var ok = true;
        var quantity = this.props.good.quantity;
        ok = validateNumber(quantity.value);
        this.setState(quantityValid) = true;
        if (toFocus) quantity.focus();
        return ok;
    }
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
    render() {
        return <form></form>
    }
   

}
export default NewGood;