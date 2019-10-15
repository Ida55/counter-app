import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
    };

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    }
    
    handleDecrement = () => {
        this.setState({ value: this.state.value - 1 })
    }

    render() { 
        
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button onClick={this.handleDecrement} 
                    className="btn btn-secondary btn-sm m-2">
                    Decrement
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge"; // in all cases we want to have a badge with a margin of 2 
        classes += (this.state.value === 0) ? "-warning" : "-primary"; // to which we add the color blue or yellow depending on the state of the count property 
        // let classes = (this.state.count === 0) ? "badge badge-warning m-2" : "badge badge-primary m-2";
        return classes;
    }

    formatCount() {
        const {value} = this.state // Object destructuring : picking the 'count' property of the state object & storing it into a constant and setting it to the current state object (-> this.state)
        return value === 0 ? 'Zero' : value;
    }

}
 
export default Counter;