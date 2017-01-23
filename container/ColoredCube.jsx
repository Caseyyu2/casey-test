import { connect } from 'react-redux'
import React, {Component} from 'react'
import Cube from '../components/Cube'
import {style, getRandomColorsInRange} from '../components/styles';

const mapStateToProps = (state, ownProps) => ({
    style: Object.assign({}, style.cubeStyle, (state && state[ownProps.cubeId]) ? {backgroundColor: state[ownProps.cubeId].color} : {backgroundColor: state.color})   
})

class InnerColoredCube extends Component {
    render() {
        return <Cube style={this.props.style}></Cube>
    }
}

InnerColoredCube.PropTypes = {
    style: React.PropTypes.object
}

const ColoredCube = connect(mapStateToProps, null)(InnerColoredCube)

export default ColoredCube