//Import React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';

//Create react component
const App = () => {
    const buttonText = {text: 'Click me'}
    const labelText = 'Enter name : ';
    
return <div>
            <label className="label" for="name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue',color:'white'}}>
                {buttonText.text}
            </button>    
    
    </div>;
};

//Take the react companenet and show it to the screen
ReactDom.render(<App/>,document.querySelector('#root'));