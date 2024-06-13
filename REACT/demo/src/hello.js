import React, { Component } from 'react';

class Hello extends Component{
    render(){
    return (
        <div>
        <h1 style={{color:this.props.color}}>Hi New to React</h1>
        <h2>Hello {this.props.name}</h2>
        </div>
    );
    }
}

export default Hello;