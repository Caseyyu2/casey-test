import React, { Component } from 'react';
import Header from '../components/Header';
import Cube from '../components/Cube';
import style from './components/styles';

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
          columns.push(<Cube style={Object.assing(columnStyle, style.cubeStyle)}/>)
        }
      rows.push(<div style={columnStyle}>{columns}</div>)
    }
    
    return (<div style={rowStyle}>
              {rows}
            </div>)
  }
  
  render() {
    return (
      <div>
          <Header />
          {this.getCubes()}
      </div>
    );
  }
}

export default App;
