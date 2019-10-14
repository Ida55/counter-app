import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }
    render() { 
        
        return (
        <div>
            <span>{this.formatCount()}</span>
            <button>Increment</button>
        </div>);
    }

    formatCount() {
        const {count} = this.state // Object destructuring : picking the 'count' property of the state object & storing it into a constant and setting it to the current state object (-> this.state)
        return count === 0 ? 'Zero' : count;
    }

}
 
export default Counter;