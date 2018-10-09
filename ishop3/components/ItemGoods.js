"use strict";
import React from 'react';
import PropTypes from 'prop-types';

import './ItemGoods.css';

class ItemGoods extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        selected: PropTypes.number,
        
    }
    constructor(props) {
        super(props);
    
      }

    itemDelete = (EO) => {
        if(confirm("Удалить товар?"))
        this.props.cbitemDelete(this.props.code);
    }
    itemClicked = (EO) => {
        this.props.cbitemClicked(this.props.code);
    }
    
    itemEdit = (EO) => {
        this.props.cbitemClicked(this.props.code);
    }
    render =  function() {
    return <tr className ={(this.props.selected == this.props.code)
        ?"selected":null} onClick={this.itemClicked}>
        <td className="">{this.props.name}</td>
        <td className="">{this.props.price}</td>
        <td className="">{this.props.url}</td>
        <td className="">{this.props.quantity}</td>
        <td className=""><button onClick={this.itemEdit}>Edit</button></td>
        <td className=""><button onClick={this.itemDelete}>Delete</button></td>
        </tr>
    
    }
};

export default ItemGoods;