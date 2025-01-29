import React from "react";

class Form extends React.Component {

    state = {
        firstName: '',
        email: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    validateName = () => {
       if(this.state.firstName.length < 5) {
        alert('You first name is too short');
       }
    }

    validateEmail = () =>{
       if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.state.email))
       alert('email is not valid');
    }

    render() {
        return <div>
            <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.validateName}
            />
            <input
                type="text"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.validateEmail}
            />
        </div>
    }
}

export { Form };