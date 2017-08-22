import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add } from '../actions/index'

class ToDoInput extends Component {

  constructor() {
    super()
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInput(event) {
    this.setState({ input: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    this.props.add(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
        placeholder="Enter new to do item"
        onChange={this.handleInput}
        value={this.state.input}
      />
      <input type="submit" />
    </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ add: add }, dispatch)
}

export default connect(null, mapDispatchToProps)(ToDoInput)
