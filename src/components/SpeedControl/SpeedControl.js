import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

  state={
    speed: 0
  }

  componentDidMount(){
    console.log( this.props );
  }

  handleClick = ( event, property ) =>{
    console.log( 'in clickHandler:', event, property );
    if( property === 'increase' ){
        this.setState({
            speed: this.state.speed + 1
        })
        this.props.dispatch( { type: 'increase', payload: 1 } );
    }
    else if( property === 'decrease' ){
        this.setState({
            speed: this.state.speed - 1
        })
        this.props.dispatch( { type: 'decrease', payload: 1 } );
    } 
  } // end handleClick


  render() {
    return (
      <div>
        <h2>Speed Control</h2>
        <button onClick={ ( event )=> this.handleClick( event, 'increase' )}>Increase Speed</button>
          <p>SPEED: {this.state.speed}</p> 
          {/* this.reduxState.speed this.reduState */}
        <button onClick={ ( event )=> this.handleClick( event, 'decrease' )}>Decrease Speed</button>
      </div>
    )
  }
}

export default SpeedControl;