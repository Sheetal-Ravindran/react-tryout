//Import React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';

//Create react component
class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
            );
     
        return <div>Latitude: </div>
    };
}
//Take the react companenet and show it to the screen
ReactDom.render(<App/>,document.querySelector('#root'));