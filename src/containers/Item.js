import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { remove } from '../actions/index'

class Item extends Component {

  constructor(props) {
    super(props)
    this.removeItem = this.removeItem.bind(this)
  }

  removeItem() {
    this.props.remove(this.props.name)
  }

  render() {
    return (
      <li>
        <h3>
          {this.props.name}
          <button onClick={this.removeItem}>delete</button>
        </h3>
      </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ remove: remove }, dispatch)
}

export default connect(null, mapDispatchToProps)(Item)
