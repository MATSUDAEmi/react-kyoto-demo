import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Rect extends Component {
  // initializeしてpropsをrenderに反映
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      x: this.props.rectProps.cx,
      y: this.props.rectProps.cy,
      color: 'rgb(100,100,100)'
    }
  }
  //componentWillReceivePropsで受け取る

  render(){
    const rectProps = this.props.rectProps;
    return (
      <rect cx={this.state.x} cy={this.state.y} width={rectProps.width} height={rectProps.height} fill={this.state.color} stroke='red' />
    )
  }
}

class Svg extends Component {
  // initializeしてpropsをrenderに反映
  constructor(props) {
    super(props);// propsはいまんとこ必要ないかなー
    this.state = {
      rectProps: {
        cx: 100,
        cy: 100,
        width: 100,
        height: 100
      },
      mousePos: {
        x: 0,
        y: 0
      }
    };
  };

  // mouseEventを取得してRectのpropsへ移譲する

  render(){
    return (
      <svg onMouseMove={this.checkMousePos} width={this.props.width? this.props.width : 600} height={this.props.height? this.props.height : 600}>
        <Rect rectProps={this.state.rectProps} />
      </svg>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Svg width='1200' height='800' />
      </div>
    );
  }
}

export default App;
