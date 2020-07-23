//Import React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//Create react component
class App extends React.Component{
    
    //same as the code we did using constructor
    state= {lat : null, errorMessage : ''};  

    componentDidMount()
    {       
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({errorMessage : err.message})
        );
    }
    render()
    {  
        if (!this.state.lat && this.state.errorMessage) {          
             return <div>Error: {this.state.errorMessage} </div>;
         }
         if (this.state.lat && !this.state.errorMessage) {
             return <SeasonDisplay lat={this.state.lat} />;
         }
        return <Spinner/>;
    }
}
//Take the react companenet and show it to the screen
ReactDom.render(<App/>,document.querySelector('#root'));