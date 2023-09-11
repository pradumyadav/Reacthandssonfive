import React, { Component } from 'react'

 class RegComp extends Component {
  render() {
    console.log("Reg Comp render")
    return (
        
      <div>
        <h3>
        Regular Component{this.props.name}
        </h3>
      </div>
    )
  }
}

export default RegComp