//import React from 'react';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';


class App extends Component {
 /*1st the state & methods were inside the counters component (which was parent to the Counter component) 
  then we moved all this to the App component in order to have both the Counters & the NavBar component 
  be in sync by having the same parent & receiving data from it via props */
  state = { 
    counters: [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},
    ]
 };

 //METHODS THAT MODIFY/MUTATE THE STATE
 handleIncrement = counter => {
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index] = {...counter};
   counters[index].value++;
   this.setState({ counters });
}; // Using the spread operator in order to clone the counters object within the state

handleDecrement = counter2 => {
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter2);
   counters[index] = {...counter2};
   counters[index].value--;
   this.setState({ counters });
};

 // map method to get each counter & reset its value -> we get the existing counters w. the map method to get each counter & reset its value to 0
 handleReset = () => {
   const counters =  this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
 };

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
};
  render() { 
    return ( 
    <React.Fragment> 
    <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
    <main className="container">
    <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onDelete={this.handleDelete} 
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
    />
   </main>
   </React.Fragment> 
     );
  }
}
 
export default App;


