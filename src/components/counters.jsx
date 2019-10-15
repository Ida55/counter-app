import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0},
        ]
     };

     handleIncrement = counter => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = {...counter};
       counters[index].value++;
       this.setState({ counters });
    } // Using the spread operator in order to clone the counters object within the state
    
    handleDecrement = counter2 => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter2);
       counters[index] = {...counter2};
       counters[index].value--;
       this.setState({ counters });
    }

     // map method to get each counter and reset its value -> we get the existing counters w. the map method to get each counter & reset its value to 0
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
        <div >
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter => ( 
                <Counter 
                key={counter.id} 
                onDelete={this.handleDelete} 
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                counter={counter}
                />
                ))}
        </div> 
        );
    }
}
 
export default Counters;