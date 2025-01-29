import React from "react";

class Form extends React.Component {

    state = {
        firstName: '',
        email: '',
        message:'',
        select: '',
        subscription:false,
        gender:'',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleChekbox = (event) => {
        this.setState({ [event.target.name]: event.target.checked })
        
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
            <br />
            <textarea 
                name="message"
                value={this.state.message} 
                onChange={this.handleChange}
            />
            <br />
            <select name="select" value={this.state.select} onChange={this.handleChange}> 
            <option value='' disabled></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <br />
            <label>
            <input type="checkbox" name="subscription" checked={this.state.subscription} onChange={this.handleChekbox}></input>
            Subscription
            </label>
            <br/>
            <input type="radio" name="gender" value='male' onChange={this.handleChange} checked={this.state.gender === 'male'}/> Male
            <input type="radio" name="gender" value='female' onChange={this.handleChange} checked={this.state.gender === 'female'}/>Female
        </div>
    }
}

export { Form };