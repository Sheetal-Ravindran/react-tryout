//Import React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';
import Counter from './counter';

class App extends React.Component {
  
    render() {
      return<div>
          <Counter/> 
          <h1>Hello</h1>
      </div>
    }
  }
  

//Take the react companenet and show it to the screen
ReactDom.render(<App/>,document.querySelector('#root'));