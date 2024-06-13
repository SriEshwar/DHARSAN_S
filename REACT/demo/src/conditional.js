import React, { Component } from 'react';

export  class Conditional extends Component {
    render(){
        let value = 1
        let layout = null
        if(value==0){
            layout =<div style={{'color':'White','background':'Blue'}}>This is the layout</div>
        }else{
            layout = <div style={{'color':'Red','background':'Green'}}>New to World</div>
        }return layout
    }
}


export default Conditional
