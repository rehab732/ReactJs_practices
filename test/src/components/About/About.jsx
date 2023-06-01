import React, { Component } from 'react';

class About extends Component {

state={
  count:0
}

changeCount=()=>{
  this.setState({count:Math.random()});
}

  render() {
    return (
      <>
        <h1 >About Component</h1>
        <h3>Counter : {this.state.count}</h3>
        <button className='btn btn-info' onClick={this.changeCount}>Change</button>
      </>
    );
  }
}

export default About;
