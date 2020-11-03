import React, { Component } from 'react'
import Input from '../components/Input'

class Form extends Component {
  state = {
    name: '',
    email: ''
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <h1>This is from the form</h1>
        <Input
          label="name"
          placeholder="your name here"
          func={this.handleChange}
        />

        <Input
          label="email"
          placeholder="your email here"
          func={this.handleChange}
        />
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
      </div>
    )
  }
}

export default Form
