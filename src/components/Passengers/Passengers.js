import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

  // state={
  //   nameList: []
  // }

  // handleClick = ( event, property ) =>{
  //   console.log( 'in clickHandler:', event, property );
  //   if( property === 'name' ){
  //       this.setState({
  //           nameList: this.state.nameList.push()
  //       })
  //       // this.props.dispatch( { type: 'name', payload: this.state.name } );
  //     }
  //   }

  state = {
    name: []
  }

  handleChange(event) {
    console.log('name handleChange: ')
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    console.log('name was submitted: ');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" placeholder="Enter Name" name="name" onChange={this.handleChange}/>
        <button onClick={ ( event )=> this.handleSubmit( event, 'name' )}>Add Passenger</button>

        <ul>PASSENGER LIST: GOES HERE</ul>

      </div>
    )
  }
}

export default Passengers;