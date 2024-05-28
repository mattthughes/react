import React, { Component } from 'react'

export default class ControlledForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      option: 'website',
      comments: '',
    }
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSelectChange = (event) => {
    this.setState({
      option: event.target.value
    })
  }

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Please fill out the form:</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='id-nme'>Your Name:</label>
            <input onChange={this.handleNameChange} value={this.state.name} id='id-name' name='name' type="text" />

          </div>
          <div>
            <label htmlFor='id-category'>Query Category</label>
            <select onChange={this.handleSelectChange} value={this.state.option} id='id-category' name='category'>
              <option value='website'>Website issues</option>
              <option value='order'>Order issues</option>
              <option value='general'>General issues</option>
            </select>
          </div>
          <div>
            <label htmlFor='id-comments'>Comments:</label>
            <textarea onChange={this.handleCommentChange} value={this.state.comments} id='id-comments' name='comments'></textarea>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
