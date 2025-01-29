import React from 'react';

// don't change the Component name "App"
export default class Form extends React.Component {
  constructor() {
    super();
      this.state = {
        email: '',
        isAgreeWithTerms: false,
    };
  }

  handleEmail =(event) =>{
    this.setState({email:event.target.value});
  }

  handleCheck =(event) =>{
    this.setState({isAgreeWithTerms:event.target.checked});
  }
  handleSubmit =() => {
    if(!this.isValidEmail(this.state.email)){
        alert('Bad email');
        return;
    }
    if(!this.state.isAgreeWithTerms){
        alert('You dont agree');
        return;
    }
    this.setState({isAgreeWithTerms:false,email:''});

    alert('Good');
  }

    isValidEmail(email) {

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/.test(email)) {

            return false

        } return true

    }
  render() {
    // TODO: implement component
    const { email, isAgreeWithTerms } = this.state;

        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleEmail}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.handleCheck}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        );
  }
}