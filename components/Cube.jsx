import React, {Component} from 'react'
import {connect} from 'react-fela'

const randomPickableColors = ['red', 'yellow']

const cubeStyle = (props) => (
    return props.style;
)



function getRandomColorsInRange(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    const color = randomPickableColors[number]
    console.log(color)
    
    return color
}

class Cube extends Component {
    render() { 
        return (
            <div className={this.props.styles}>
            </div>
        )
    }   
}

Cute.propTypes = {
    style: React.PropTypes.Object
}

const mapStylesToProps = props => renderer => renderer.renderRule(cubeStyle, this.props)

export default connect(mapStylesToProps)(Cube)
