import React, {Component} from 'react'
import {connect as felaConnect} from 'react-fela'
import { connect } from 'react-redux'


class InnerCube extends Component {
    render() {
        return <div className={this.props.styles}></div>
    }   
}

function filterColorStyle(props) {
    if (props.filteredColor && props.isFiltered) {
        return props.filteredColor!== props.style.backgroundColor ? Object.assign(props.style, {background: "white"}) : props.style
    }
    
    return props.style
}

InnerCube.PropTypes = {
    isFiltered: React.PropTypes.boolean,
    filteredColor: React.PropTypes.string
}

const mapStateToProps = (state, ownProps) => ({
    isFiltered: state.filterColor.isFiltered,
    filteredColor: state.filterColor.colorValue
})

const mapStylesToProps = props => renderer => renderer.renderRule(filterColorStyle, props)
const Cube = felaConnect(mapStylesToProps)(InnerCube)

export default connect(mapStateToProps, null)(Cube)
