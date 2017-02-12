import React, { Component } from 'react'

class FormValidation extends Component {
  constructor(props) {
    super(props)

    this.state = {}

  }
  
  handleFormInput = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    })
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    alert('see console')
    console.log(this.state)
  }

  render() {
    const stateNow = JSON.stringify(this.state)
    return (
      <div className="ui form container" >
        <form onSubmit={this.handleSubmitForm}>
          <h1>My Form</h1>
          <div className="field">
            <label htmlFor="">Full Name</label>
            <input type="text" name="fullName" defaultValue={this.state.fullName} onChange={this.handleFormInput}/>
          </div>
          <div className="field">
            <label htmlFor="">Password</label>
            <input type="password" name="password" defaultValue={this.state.password} onChange={this.handleFormInput}/>
          </div>
          <div className="field">
            <label htmlFor="">email</label>
            <input type="email" name="email" defaultValue={this.state.email} onChange={this.handleFormInput}/>
          </div>
          <div className="field">
            <label htmlFor="">Number</label>
            <input type="number" step="0.01" name="randomNumber" defaultValue={this.state.randomNumber} onChange={this.handleFormInput}/>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
        
        <pre>
          {stateNow}
        </pre>
      </div>
    )   
  }
}

export default FormValidation