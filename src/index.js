import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const firstInitialState = 0;

// put your reducer here!
const firstReducer = (state= firstInitialState, action) => {
    console.log('in firstReducer', 'state:', state, 'action:', action);
    if( action.type === 'increase' ){
      console.log( 'increase speed', action.payload );
      return state + action.payload;
    }
    else if( action.type === 'decrease'){
      console.log( 'dropping', action.payload );
      return state - action.payload;
    }
    return state; 
} // end firstReducer

// use reducer in store
const storeInstance = createStore( firstReducer );

ReactDOM.render(
    <Provider store={storeInstance}>
    <App />
    </Provider>, 
    document.getElementById('root'));
