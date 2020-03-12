/* jshint esversion: 6 */ 
import _ from 'lodash';
import printMe from './print.js';
import './style.css';
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    return element;
  }
  
  document.body.appendChild(component());

  if (module.hot) {
      module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
      });
    }