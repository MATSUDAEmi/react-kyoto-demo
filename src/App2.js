import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Rect extends Component {
  // initializeしてpropsをrenderに反映
  constructor(props) {
    super(props);
    this.state = {}
  }
  //componentWillReceivePropsで受け取る

  render(){
    return (
      <rect cx='200' cy='200' width='200' height='200' fill='gray' stroke='red' />
    )
  }
}

class Svg extends Component {
  // initializeしてpropsをrenderに反映
  constructor(props) {
    super(props);// propsはいまんとこ必要ないかなー
    this.state = {}
  }

  // mouseEventを取得してRectのpropsへ移譲する

  render(){
    return (
      <svg width={this.props.width? this.props.width : 600} height={this.props.height? this.props.height : 600} >
        <Rect />
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
