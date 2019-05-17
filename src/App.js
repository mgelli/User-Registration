import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component{
  render(){
    return (
  <div className='container'>
    <div className='row'>
      <div className='col-sm-12'>
        <hr />
        <Form />
      </div>
    </div>
  </div>
);

  }
}

export default App;
