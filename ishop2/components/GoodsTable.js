"use strict";
import React from 'react';
import PropTypes from 'prop-types';

import ItemGoods from './ItemGoods';
import './GoodsTable.css';


class GoodsTable extends React.Component {
    static propTypes = {
        goods: 
            PropTypes.arrayOf(
                PropTypes.shape({
                    code: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    price: PropTypes.number.isRequired,
                    url: PropTypes.string.isRequired,
                    quantity: PropTypes.number.isRequired,
                })
              ),
        }
       constructor (props) {
           super(props);
           this.state = {
               selected: null,
               goods: this.props.goods
           }
           this.cbitemClicked = this.cbitemClicked.bind(this);
           this.cbitemDelete = this.cbitemDelete.bind(this);
       }
       cbitemDelete = (code) => {
        this.setState({goods: this.state.goods.filter(good => good.code != code)} );
       }
       cbitemClicked = (code) => {
        this.setState({selected: code});
       }

       render (){
            var goodsList = this.state.goods.map((item) =>
            <ItemGoods 
                name = {name}
                key = {item.code}
                code = {item.code}
                url = {item.url}
                price = {item.price}
                quantity = {item.quantity}
                selected={this.state.selected}
                cbitemDelete={this.cbitemDelete}
                cbitemClicked={this.cbitemClicked}
            />

            );

            return (
                <table className="goodsTable">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>URL</td>
                        <td>Quantity</td>
                        <td>Control</td>
                    </tr>
                </thead>
                <tbody>
                    {goodsList}
                </tbody>
                </table>
            );
       }

    };


export default GoodsTable;