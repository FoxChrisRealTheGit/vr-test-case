import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Scene } from 'aframe-react';

export default class Container1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: props.childs,
        }
    }
    ComponentWillMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
// <a-plane color='lightgray' width="30" height="30"></a-plane>
    render() {
        return (
            <Scene>
                <a-camera>
                    <a-cursor></a-cursor>
                    <a-entity camera look-controls wasd-controls></a-entity>
                </a-camera>
                {this.state.childs}
                
            </Scene>
        )
    }
}