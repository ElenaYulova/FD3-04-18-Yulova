"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock from './components/VotesBlock';

let questionText='Как вы относитесь к программированию?';
let answersArr=require('./answers.json');
let defaultFreeAnswerText="???";
let colorsArr = require('./colors.json');

ReactDOM.render(
  <VotesBlock 
    question={questionText}
    answers={answersArr}
    deffreeanswertext={defaultFreeAnswerText}
    startWorkMode={1}
    colors={colorsArr}
  />
  , document.getElementById('container') 
);

