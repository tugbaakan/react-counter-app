import React, { Component } from 'react'

class Counter extends Component {
    render() {
        return ( 
            <div>
                <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
                <button onClick={ () => this.props.onDecrement(this.props.counter) } className="btn btn-secondary btn-sm m-2" >-</button>    
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm m-2" >+</button>    
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2" >Delete</button>    
            </div> 
        );
    };

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatValue(){
        const { value } = this.props.counter ;
        return value === 0 ? "Zero" : value;
    }


}
 
export default Counter;