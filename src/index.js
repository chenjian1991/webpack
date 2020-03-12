/* jshint esversion: 6 */ 

  import _ from 'lodash';
  function component(){
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['hello','world'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
   // of loading would need to be shown in a production-level site/app.
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
      var print = module.default;
      print();
    });
    return element;
  }

  document.body.appendChild(component());











  // async function getComponent(){
  //     var element = document.createElement('div');
  //     const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
  //     element.innerHTML = _.join(['hello','webpack'],'');
  //     return element;
  //   }
  //   getComponent().then(component => {
  //     document.body.appendChild(component);
  //   })