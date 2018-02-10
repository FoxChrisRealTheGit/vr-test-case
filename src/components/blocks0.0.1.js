import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity } from 'aframe-react';
import position from './Position';
import rotation from './Rotation';

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placement: position(props.position),
            rotation: rotation(props.rotate),
            color: props.color || 'black',
            childs: props.childs,
        }

    }
    render() {
        return (

            <a-text color={this.state.color} side='double' value={this.state.childs[0]} position={this.state.placement} rotation={this.state.rotation}></a-text>
        )
    }
}

export class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: props.childs,
            placement: position(props.position),
            placeTwo: position((((+props.position * 1000) + (0.2 * 1000)) / 1000) + ''),
            placeThree: position((((+props.position * 1000) + (0.4 * 1000)) / 1000) + ''),
            placeFour: position((((+props.position * 1000) + (0.6 * 1000)) / 1000) + ''),
            placeFive: position((((+props.position * 1000) + (0.8 * 1000)) / 1000) + ''),
            placeSix: position((((+props.position * 1000) + (0.10 * 1000)) / 1000) + ''),
            placeSeven: position((((+props.position * 1000) + (0.2 * 1000)) / 1000) + ''),
            rotation: rotation(props.rotate),
            move: props.move,
        }

    }

    render() {
        const nav = [<a-link href={this.state.childs[0]} position={this.state.placement} rotation={this.state.rotate} ></a-link>,
        <a-link href={this.state.childs[1]} position={this.state.placeTwo} rotation={this.state.rotate} peek={true} ></a-link>,
        <a-link href={this.state.childs[2]} position={this.state.placeThree} rotation={this.state.rotate} ></a-link>,
        <a-link href={this.state.childs[3]} position={this.state.placeFour} rotation={this.state.rotate} ></a-link>,
        <a-link href={this.state.childs[4]} position={this.state.placeFive} rotation={this.state.rotate} ></a-link>,
        <a-link href={this.state.childs[5]} position={this.state.placeSix} rotation={this.state.rotate} ></a-link>,
        <a-link href={this.state.childs[6]} position={this.state.placeSeven} rotation={this.state.rotate} ></a-link>,]
        return (
            nav
        )
    }
}