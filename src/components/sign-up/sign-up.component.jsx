import React from 'react'; 
import FormInput from '../form-input/form-input.component';
import ButtonLink from '../custom-link/custom-link.component';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name : "",
            displayName : "",
            password : "",
            confirmPassword : ""
        }
    }
    
    handleSubmit = e => {
        const {name , displayName , password , confirmPassword} = this.state;
        if( password !== confirmPassword) {
            console.log("plese try again")
        }
    }

    handleChange = e => {
        const {name , value} = e.target;
        this.setState({ [name] : value })
    }
    render() {
        const { name , displayName , password , confirmPassword} = this.state;
        return (
            <div>
                <h2 className = "md-md">Do You Not Have Account ? </h2>
                <form className = "d-right__form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type ="email"
                        placeholder = "Your email"
                        name = "email"
                        value = {name}
                        handleChange = {this.handleChange}
                        required
                    />
                    <br/>
                    <FormInput 
                        type = "text"
                        placeholder = "Display Name"
                        name = "displayName"
                        value = {displayName}
                        handleChange  = {this.handleChange}
                        required
                    />
                    <br/>

                    <FormInput
                        type = "password"
                        placeholder = "Your password"
                        name = "password"
                        value = {password}
                        handleChange = {this.handleChange}
                        required
                    />
                    <br/>

                    <FormInput 
                        type = "password"
                        placeholder = "Confirm Password"
                        className = "mb-sm"
                        name = "confirmPassword"
                        value = {confirmPassword}
                        handleChange = {this.handleChange}
                        required
                    />

                    <ButtonLink as="button" sign ="true" type="submit" >Sign Up</ButtonLink>
                </form>
            </div>
        )
    }
}

export default SignUp;