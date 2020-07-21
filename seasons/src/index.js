//Import React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';

//Create react component
class App extends React.Component{
    constructor (props)
    {
       super (props);

       //this is the only time we do direct assignment to this.state
        this.state= {lat : null, errorMessage : ''};                

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat : position.coords.latitude});

                //never do this
                //this.state.lat = position.coords.latitude
            },
            err => {
                this.setState({errorMessage : err.message});
            }

        );
 
    }
    render(){
     
        if (!this.state.lat && this.state.errorMessage) {
            
             return <div>Error: {this.state.errorMessage} </div>;
         }

         if (this.state.lat && !this.state.errorMessage) {
             return <div>Latitude: {this.state.lat} </div>;
         }

        return <div>Loading..</div>;
    }
}
//Take the react companenet and show it to the screen
ReactDom.render(<App/>,document.querySelector('#root'));