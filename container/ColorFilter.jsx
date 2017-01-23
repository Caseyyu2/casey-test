import { connect } from 'react-redux'
import filterColor from '../actions/filterColor'
import React, {Component} from 'react'

class InnerColorFilter extends Component {
    render() {
        return <a href="" onClick={(e)=> {
            e.preventDefault()
            this.props.onClick()
        }}>{this.props.children}</a>
    }
}

InnerColorFilter.PropTypes = {
    //Pass in 
    filterColorValue: React.PropTypes.string,
    //Dispatch
    onClick: React.PropTypes.func
}


const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(filterColor(ownProps.filterColorValue))
  }
})

const ColorFilter = connect(null, mapDispatchToProps)(InnerColorFilter)

export default ColorFilter