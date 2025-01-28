import React from "react";

class Form extends React.Component {

    state = {
        firstName: '',
        email: '',
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return <div>
            <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
            />
            <input
                type="text"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
            />
        </div>
    }
}

export { Form };