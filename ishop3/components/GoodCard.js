import React  from 'react';
import PropTypes from 'prop-types';
import './GoodCard.css';

class GoodCard extends React.Component{
    static propTypes = {
        good: PropTypes.shape({
                    code: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    price: PropTypes.number.isRequired,
                    url: PropTypes.string.isRequired,
                    quantity: PropTypes.number.isRequired,
                }).isRequired,
        }
    render () {
        var goodName = this.props.name;
        var price = this.props.price;
        var url = this.props.url;
        var quantity = this.props.quantity;

        return <div clasName="good-card">
        <p>Name: {goodName}</p>
        <p>Price: {price}</p>
        <p>URL: {url}</p>
        <p>Left: {quantity}</p>
        </div>
        
    }
};

export default GoodCard;