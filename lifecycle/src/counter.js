//Import React and ReactDOM libraries
import React from 'react';

export default class Counter extends React.Component {

  constructor(props)
  {
    console.log('Constructor')
    super(props)
    this.state={
      counter:0
    }
  }

  componentDidMount() {
    console.log('ComponentDidMount')
  }

  componentWillUnmount(){
    console.log('ComponentWillUnmount')
  }

  render() {
    console.log('Render')
    return (<div >
      <div className="counter">
        Counter:{this.state.counter}
      </div>
      </div>
    );
  }
}

