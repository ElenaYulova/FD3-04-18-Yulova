"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import GoodsTable from './components/GoodsTable';

var goodsArr=require('./goods.json');

ReactDOM.render(
    <GoodsTable goods={goodsArr}></GoodsTable>,
    document.getElementById('container')
);