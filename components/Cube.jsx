import React, {Component} from 'react'
import {connect} from 'react-fela'
import getStyle from './getStyle'


class Cube extends Component {
    render() {
        return <div className={this.props.styles}></div>
    }   
}

Cube.PropTypes = {
    colorFilter: React.PropTypes.boolean
}

const mapStylesToProps = props => renderer => renderer.renderRule(getStyle, props)

export default connect(mapStylesToProps)(Cube)
