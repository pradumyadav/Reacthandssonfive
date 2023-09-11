import React, {  PureComponent } from 'react'
import RegComp from './RegComp'
import Purecompo from './Purecompo'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Pradum"
      }
    }

    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name:"Pradum"
            })
        },2000)
    }
  render() {
    console.log("************Parent Comp render********8")
    return (
      <div>
        <h3>
        Parent Component
        <RegComp name={this.state.name}></RegComp>
        <Purecompo name={this.state.name}></Purecompo>
        </h3>
      </div>
    )
  }
}

export default ParentComp