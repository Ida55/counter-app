import React, { Component } from 'react';

class Counter extends Component {
    // Stateless (controlled) component that relies on props to receive its needed data -> we've passed the state of the counters component to the counter component as props
    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} 
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
        let classes = "badge m-2 badge";
        classes += (this.props.counter.value === 0) ? "-warning" : "-primary"; // to which we add the color blue or yellow depending on the state of the value property 
        // let classes = (this.state.count === 0) ? "badge badge-warning m-2" : "badge badge-primary m-2";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter // Object destructuring : picking the 'value' property of the state object & storing it into a constant then setting it to the current state object (-> this.state)
        return value === 0 ? 'Zero' : value;
    }

}
 
export default Counter;