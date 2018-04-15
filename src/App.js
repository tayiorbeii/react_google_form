import React, { Component } from 'react';
import axios from 'axios'

// Directions here: https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
// Google Form URL
// https://script.google.com/macros/s/AKfycbzPrz7PNhuWup2MH-8BaKB-errFJWmM8xGjdbY6zqqFncKY_DHr/exec

class App extends Component {
  state = { submitted: false }

  handleSubmit = (e) => {
    e.preventDefault()
    const formUrl = 'https://script.google.com/macros/s/AKfycbzPrz7PNhuWup2MH-8BaKB-errFJWmM8xGjdbY6zqqFncKY_DHr/exec'
    const name = encodeURIComponent(this.inputName.value)
    const email = encodeURIComponent(this.inputEmail.value)

    axios({
      method: 'get',
      url: `${formUrl}?name=${name}&email=${email}`
    })

    this.setState({submitted: true})
  }

  render() {
    const { submitted } = this.state

    const NameAndEmailForm = () => (
      <form onSubmit={this.handleSubmit}>
        <label>Name
        <input type='text' name='name' ref={node => this.inputName = node} />
        </label>

        <label>Email
        <input type='text' name='email' ref={node => this.inputEmail = node} />
        </label>
        
        <button type='submit'>Submit</button>

      </form>
    )

    const ThankYou = () => <div>Thank You!</div>

    return (
      <div>
        {submitted
          ? <ThankYou />
          : <NameAndEmailForm />
        }
      </div>
    );
  }
}

export default App;
