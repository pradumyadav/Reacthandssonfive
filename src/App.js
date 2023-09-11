import './App.css';
import React ,{Component} from "react"
import ParentComp from './Hoc&Purecompo/ParentComp';



class App extends Component {
  render(){
  return (
    <div className="App">
      <h4 style={{color :"black"}}> Definetion:- 1: A higher-order component (HOC) is an advance technique in react for using component logic.</h4>
      <h4 style={{color :"black"}}>2: They are a pattern that emerges from React's commpositional .</h4>
      <h4 style={{color :"black"}}>3: A higher-order component is a function that takes a component and returns a new component .</h4>
     <h1>Higher Order Component</h1>
     <Hoc Cmp={Simple}/>

     <h1 style={{color :"black"}}>What is Pure Component in React ?</h1>
     <h4 style={{color :"black"}}> Pure component in React are a type of component that onlly re-render when its props or state change .</h4>
     <h4 style={{color :"black"}}>If the value of the previous state or props and the new state or props is the same, the component is not re-rendered. </h4>
     <h4 style={{color :"black"}}>Pure Component restricts the re-rendering ensuring the higher performance of the Component .</h4>
   
    <ParentComp/>
    </div>
  )
  }
}

function Hoc(props){
  

  const Cmp=props.Cmp

  return (
  <h1>
    <Cmp  hocdata=" ...Hello from parent component "/>
  </h1>
  )
}

function Simple (props){
  return (<h1>
    Simple Component {props.hocdata}
    </h1>
  )
}
export default App;
