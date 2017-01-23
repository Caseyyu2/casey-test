import React, { Component } from 'react';
import Header from '../components/Header';
import ColoredCube from '../container/ColoredCube';
// import {style, getRandomColorsInRange} from '../components/styles';
import ColorFiller from '../container/ColorFiller';
import ColorFilter from '../container/ColorFilter'


class App extends Component {
  
  getCubes() {
    const rowStyle = {
        display: 'flex',
        flexDirection: 'row'
      }
      
    const columnStyle = {
        display: 'flex',
        flexDirection: 'column'
    }
    
    const rows=[]; 
    for (let i=0; i<3; i++){
        const columns=[];
        for (let j=0;j<3;j++){
          const cubeId = j + i;
          columns.push(<ColoredCube key={j} cubeId={cubeId}/> )
        }
      rows.push(<div key={i}>{columns}</div>)
    }
    
    return (<div style={rowStyle}>
              {rows}
            </div>)
  }
  
  render() {
    return (
      <div>
          <Header />
          <ColorFiller>Fill Color</ColorFiller>
          <ColorFilter filterColorValue='yellow'>Yellow</ColorFilter>
          <ColorFilter filterColorValue='blue'>Blue</ColorFilter>
          {this.getCubes()}
      </div>
    );
  }
}

export default App;
