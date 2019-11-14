import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { sudoku } from './sudoku-backend.js';

$(document).ready(function(){
  var result = sudoku();
  console.log("Hello");
  console.log(result);
  console.log(sudoku());

});
