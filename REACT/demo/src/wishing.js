import React, { Component } from 'react';

export default class Wishing extends Component {
    constructor(props){
        super(props)

        this.state = {
            username :"Dharsan"
        }
    }
    ChangeName(event){
        this.setState({
            username:event.target.value
        })
    }
    render() {
        return (
            <div>Wishing
                 <h1>hi {this.state.username} Welcome</h1>
                 Enter Your Name : <input type='text' name='username' value={this.state.username}
                 onChange = {(event)=>this.ChangeName(event)}/>
            </div>
        );
    }
}



