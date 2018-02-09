import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Scene } from 'aframe-react';
import Text, {Navbar1} from './components/blocks0.0.1'
import Container1 from './components/containers0.0.1';
class App extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  render() {
    const stuff =<Text childs={["Hello World!", "Or not"]} position="0 2 -15" />
    const More = <Text childs={["Hello World!", "Or not"]} position="2 2 -15" />
    const nav = <Navbar1 childs={['/', '/', '/']} position="-15 2 0" rotation="0 90 0" move="0 2 0" />
    return (
      <Container1
      childs={[stuff,More, nav]} />

    );
  }
}

export default App;
