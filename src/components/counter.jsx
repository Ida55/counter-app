import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    styles = {
        fontSize : 10,
        fontWeigth: 'bold'
    } // object addedd to the style attribute

    render() { 
        
        return (
        <div>
            <span style={this.styles} className="badge badge-primary m-2" >{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm" >Increment</button>
        </div>);
    }

    formatCount() {
        const {count} = this.state // Object destructuring : picking the 'count' property of the state object & storing it into a constant and setting it to the current state object (-> this.state)
        return count === 0 ? 'Zero' : count;
    }

}
 
export default Counter;