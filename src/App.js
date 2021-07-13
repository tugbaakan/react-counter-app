import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component{
  state = { 
    counterEntities : [
        {id:1, value:'7'},
        {id:2, value:'9'},
        {id:3, value:'10'} 
    ]
 }

 handleReset = () => {
     const countersNew = this.state.counterEntities.map( c => {
        c.value = 0;
        return c;
    } );
     this.setState({ counterEntities : countersNew});
 }
handleIncrement = (counter) => {
    const countersNew = [...this.state.counterEntities];
    const index = countersNew.indexOf(counter);
    countersNew[index] = {...counter};
    countersNew[index].value++;
    this.setState({counterEntities : countersNew});
}
handleDecrement = (counter) => {
    const countersNew = [...this.state.counterEntities];
    const index = countersNew.indexOf(counter);
    countersNew[index] = {...counter};
    countersNew[index].value--;
    this.setState({counterEntities : countersNew});
}
handleDelete = (counterId) => {
    const counterEntities = this.state.counterEntities.filter(x => x.id !== counterId)
    this.setState({counterEntities});
 }

  render(){
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counterEntities.filter(c=>c.value>0).length} /> 
        <main className="container">
          <Counters
            counters={this.state.counterEntities}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main> 
      </React.Fragment>
    );
  }
}
export default App;
