import React, { Component } from 'react';
import axios from 'axios'
import validator from 'email-validator'

// Directions here: https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
// Google Form URL
// https://script.google.com/macros/s/AKfycbzPrz7PNhuWup2MH-8BaKB-errFJWmM8xGjdbY6zqqFncKY_DHr/exec

const formUrl = 'https://script.google.com/macros/s/AKfycbzPrz7PNhuWup2MH-8BaKB-errFJWmM8xGjdbY6zqqFncKY_DHr/exec'
const ThankYou = () => <div>Thank You!</div>

class FormTwo extends Component {
  render() {
    const showEmailError = this.emailNode && !this.props.emailIsValid
    return (
      <form
        onChange={this.props.onChange}
        onSubmit={this.props.onSubmit}
      >
        <label>
          Name <input type='text' name='name' />
        </label>

        <label>
          Email <input type='text' name='email' ref={node => (this.emailNode = node)}/>
        </label>

        <button disabled={!this.props.emailIsValid}>
          Submit
        </button>

        {showEmailError ? <div>Invalid Email</div> : ''}

      </form>
    )
  }
}

class App extends Component {
  state = {
    name: '',
    email: '',
    emailIsValid: false,
    submitted: false
  }

  validateEmail = () => {
    this.setState({emailIsValid: validator.validate(this.state.email)})
  }

  updateValues = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
    this.validateEmail()
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, email } = this.state

    axios({
      method: 'get',
      url: `${formUrl}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`
    })

    this.setState({submitted: true})
  }

  render() {
    const { submitted } = this.state

    return (
      <div>
        {submitted
          ? <ThankYou />
          : <FormTwo
              onChange={this.updateValues}
              onSubmit={this.handleSubmit}
              emailIsValid={this.state.emailIsValid}
            />
        }
      </div>
    );
  }
}

export default App;
