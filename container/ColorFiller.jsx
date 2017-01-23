import { connect } from 'react-redux'
import fillColor from '../actions/fillColor'
import React, {Component} from 'react'

class InnerColorFiller extends Component {
    render() {
        return <a href="" onClick={(e)=> {
            e.preventDefault()
            this.props.onClick()
        }}>{this.props.children}</a>
    }
}

InnerColorFiller.PropTypes = {
    colorValue: React.PropTypes.string,
    onClick: React.PropTypes.func
}


const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(fillColor())
  }
})

const ColorFiller = connect(null, mapDispatchToProps)(InnerColorFiller)

export default ColorFiller