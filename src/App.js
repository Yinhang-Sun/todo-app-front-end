import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourComponent></FourComponent>
      
    </div>
  );
}

function FirstComponent() {
  return (
    <div className='FirstComponent'>First Component</div>
    
  )
}

function SecondComponent() {
  return (
    <div className='SecondComponent'>Second Component</div>
  )
}

class ThirdComponent extends Component{
  render() {
    return (
      <div className='ThirdComponent'>Third Component</div>
    )
  }
}

class FourComponent extends Component {
  render() {
    return (
      <div className='FourComponent'>Four Component</div>
    )
  }
}

export default App;
