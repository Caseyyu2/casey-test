import { connect } from 'react-redux'
import fillColor from '../actions/fillColor'
import filterColor from '../actions/filterColor'
import React, {Component} from 'react'
import { connect as felaConnect } from 'react-fela'
import getStyle from '../components/getStyle'


class InnerColorLink extends Component {
    render() {
        return <a href="" className={this.props.styles} onClick={(e)=> {
            e.preventDefault()
            this.props.onClick()
        }}>{this.props.children}</a>
    }
}

InnerColorLink.PropTypes = {
    colorValue: React.PropTypes.string,
    onClick: React.PropTypes.func,
    filterColorValue: React.PropTypes.string,
    isFilterColor: React.PropTypes.boolean
}


const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
      if (ownProps.isFilterColor){
          dispatch(filterColor({colorValue:ownProps.filterColorValue, isFiltered: true}))
      }
      else {
          dispatch(fillColor())
      }
  }
})

const ColorLinkInter = connect(null, mapDispatchToProps)(InnerColorLink)

const mapStylesToProps = props => renderer => renderer.renderRule(getStyle, props)
const ColorLink = felaConnect(mapStylesToProps)(ColorLinkInter)

export default ColorLink