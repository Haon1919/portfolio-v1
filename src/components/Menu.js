import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    constructor(){
       super(); 
        this.state = {
            toggled: false
        }           
    }

    handleClick(){
        this.setState({
            toggled: !this.state.toggled
        }, ()=>this.props.triggerScreenShift());
    }

    render() {
        let toggle = this.state.toggled ? '-transform' : '';
        return (
            <div className={"menu-container" } onClick={()=>this.handleClick()}>
                <div className={'b1' + toggle}></div>
                <div className={'b2' + toggle}></div>
                <div className={'b3' + toggle}></div>
                <div className={'menu-body' + toggle}>
                    <Link to='/'>Home</Link>
                    <Link to='/About'>About Me</Link>
                    <Link to='/Projects'>Projects</Link>
                </div>
            </div>
        );
    }
}

