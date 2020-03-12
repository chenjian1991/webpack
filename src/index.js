/* jshint esversion: 6 */ 
// import _ from 'lodash';
import printMe from './print.js';
import { cube } from './main.js';
if (process.env.NODE_ENV !== 'production') {
     console.log('Looks like we are in development mode!');
    }
// import './style.css';
function component() {
    var element = document.createElement('pre');
   //  var btn = document.createElement('button');
   //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.innerHTML = [
      'hello webpack 12',
      '5 cubed is equal to ' + cube(5)
   ].join('\n\n');
  
    return element;
  }
  
  document.body.appendChild(component());

  if (module.hot) {
      module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
      });
    }