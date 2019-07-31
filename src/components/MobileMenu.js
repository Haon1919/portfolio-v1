import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class MobileMenu extends Component {
    constructor(){
       super(); 
        this.state = {
            toggled: false
        }           
    }

    handleClick(){
        this.setState({
            toggled: !this.state.toggled
        });
    }

    render() {
        let toggle = this.state.toggled ? ' transform' : '';
        return (
            <div className={toggle} id={"mobile-container"}>
                    <div  onClick={()=>this.handleClick()} className={'arrow' + toggle}>
                    <div className={'inner-arrow' + toggle}></div>
                </div>
                <div className={toggle} id={'mobile-menu-body'}>
                    <Link to={{pathname: '/'}}>Home</Link>
                    <Link to={{pathname: '/'}}>About Me</Link>
                    <Link to={{pathname: '/'}}>Experience</Link>
                    <Link to={{pathname: '/'}}>Contact Me</Link>
                </div>
            </div>
        );
    }
}

