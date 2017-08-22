import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item'

class List extends Component {

  constructor(props) {
    super(props)
    this.renderList = this.renderList.bind(this)
  }

  renderList(items) {
    return items.map((item, i) => <Item key={i} name={item} />)
  }

  render() {
    return (
      <ul>
        {this.renderList(this.props.list)}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps)(List)
