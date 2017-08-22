import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    return (
      <p>{this.props.list}</p>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps)(List)
