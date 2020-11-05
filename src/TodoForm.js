import React from 'react';


class TodoForm extends React.Component {

  constructor() {
    super();
  
    this.state = {
      title: "",
      content: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.formSubmit(this.state)
    this.setState({ title: "", content: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Title
            <input id="title" name="title" type="text" onChange={this.handleChange} value={this.state.title} />
          </label>
        </div>
        <div>
          <label>
            Content
            <input id="content" name="content" type="text" onChange={this.handleChange} value={this.state.content} />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}


export default TodoForm;
