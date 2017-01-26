import React, { Component } from 'react';
import Header from '../components/Header';
import ColoredCube from '../container/ColoredCube';
import ColorLink from '../container/ColorLink'


class App extends Component {
  
  getCubes() {
    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        padding: "50px"
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
  
  getLinks() {
    
    const linkStyle = {
        padding: "20px",
        textDecoration: "none",
        fontFamily: "Helvetica",
        color: "black"
    }
    
    return <div>
            <ColorLink style={linkStyle}>Fill Color</ColorLink>
            <ColorLink isFilterColor={true} filterColorValue='yellow' style={linkStyle}>Yellow</ColorLink>
            <ColorLink isFilterColor={true} filterColorValue='blue' style={linkStyle}>Blue</ColorLink>
          </div>
  }
  
  render() {
    
    const appContainerStyle = {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      padding: "70px",
    }
    
    return (
      <div style={appContainerStyle}>
          <Header>Welcome to Fela example working with React-Redux</Header>
          {this.getCubes()}
          {this.getLinks()}
      </div>
    );
  }
}

export default App;
