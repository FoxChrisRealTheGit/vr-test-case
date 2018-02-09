import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity } from 'aframe-react';

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placement: props.position || '0 2 -5',
            color: props.color || 'black',
            childs: props.childs,
        }
    }
    ComponentWillMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }

    render() {
        return (
            <a-text color={this.state.color} side='double' value={this.state.childs[0]} position={this.state.placement}></a-text>
        )
    }
}

export class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: props.childs,
            position: props.position,
            rotate: props.rotation,
            move: props.move,
        }
    }
    render() {
        const nav = this.state.childs.map((x, i, arr)=>{
            return  <a-link href={this.state.childs[i]} position={this.state.position + i} rotation={this.state.rotate}></a-link>
        })
        return (
               nav
        )
    }
}