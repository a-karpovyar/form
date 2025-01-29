import React from 'react';

// don't change the Component name "App"
export default class FormWithRef extends React.Component {

    constructor() {
        super();
        this.state = {
            card: '',
            email: '',
        };
        this.firstNameRef = React.createRef();
        this.emailRef = React.createRef();

    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            if (this.state.card.length === 16)
                this.emailRef.current.focus();

        });
    }

    componentDidMount() {
        this.firstNameRef.current.focus();
    }

    render() {
        // TODO: implement component
        const { email, card } = this.state;

        return (
            <div>
                <input
                    type="text"
                    name="card"
                    placeholder="card"
                    value={card}
                    onChange={this.handleChange}
                    ref={this.firstNameRef}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                    ref={this.emailRef}
                />

            </div>
        );
    }
}