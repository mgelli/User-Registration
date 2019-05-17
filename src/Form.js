import React, {Component} from 'react';

class FormValidation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {
                email: '',
                password: ''
            },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    render() {
        return(
            <form>
                <table class="table">
                    <tr>
                        <td colspan="2">
                            <FormErrors formErrors={this.state.formErrors} />
                        </td>
                    </tr>
                    <tr>
                        <td>Email Address</td>
                        <td className={`form-group
                        ${this.errorClass(this.state.formErrors.email)}`}><input 
                            type="email" 
                            name="email" 
                            class="form-control" 
                            placeholder="Emailaddress" 
                            value={this.state.email} 
                            onChange={this.handleUserInput}  
                            required /></td>
                    </tr>
                    <tr><td colspan="2"></td></tr>
                    <tr>
                        <td>Password</td>
                        <td className={`form-group
                        ${this.errorClass(this.state.formErrors.password)}`}><input 
                            type="password" 
                            name="password" 
                            class="form-control" 
                            placeholder="Password" 
                            value={this.state.password} 
                            onChange={this.handleUserInput} 
                            /></td>
                    </tr>
                    <tr><td colspan="2"></td></tr>
                    <tr>
                        <td></td>
                        <td><button type="submit" className="btn btn-info">Sign In</button></td>
                    </tr>
                </table>
            </form>
        )
    }

}
export default FormValidation;