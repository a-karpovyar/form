import React from 'react';

// don't change the Component name "App"
export default class FormWithRef extends React.Component {

    constructor() {
        super();
        this.cardRef = React.createRef();
        this.emailRef = React.createRef();

    }


    // handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value }, () => {
    //         if (this.state.card.length === 16)
    //             this.emailRef.current.focus();

    //     });
    // }

    // componentDidMount() {
    //     this.cardRef.current.focus();
    // }

    hadleSubmit= (event) =>{
        event.preventDefault();
        if(this.cardRef.current.value.length <16){
            alert('invalid numde r')
            return;
        }
//about email 
this.cardRef.current.value='';
this.emailRef.current.value='';
    }

    render() {

        return (
            <form onSubmit={this.hadleSubmit}>
                <input
                    type="text"
                    name="card"
                    placeholder="card"
                    ref={this.cardRef}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    ref={this.emailRef}
                />
                <button>Send</button>
            </form>
        );
    }
}