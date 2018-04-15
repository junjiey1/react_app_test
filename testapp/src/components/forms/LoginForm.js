import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Validator from "validator"
import InlineError from "../messages/InlineError";

class LoginForm extends React.component{
    state = {
         data: {
             email: '',
             password: ''
         },
         loading: false,
         errors: {}
    }
    onChange = e =>
    this.setstate({
        data: {...this.state.data, [e.target.name]: e.target.value}
    })
    
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }
    }
    
    validate =(data) =>{
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if(!data.password)errors.password = "Can't be blank";
        return errors;
    }
    
    render(){
        const { data, errors } = this.state;
        
        return (
            <Form onSubmit={this.onSubmit}>
   //Form.Field error={!!error.email}>         
            <label htmlFor="email">Email</label>
            <input type="email"
                   id="email" 
                   name="email" 
                   placeholder="example@example.com"
                   value ={this.state.date.email}
                   onchange= {this.onChange}
                   />
                   {errors.email && <InlineError text={errors.email}/>}
    ///Form.Field>  
    //Form.Field error={!!error.password}>         
            <label htmlFor="password">Password</label>
            <input type="password"
                   id="password" 
                   name="password" 
                   placeholder="Make it secure"
                   value ={this.state.date.password}
                   onchange= {this.onChange}
                   />
                    {errors.password && <InlineError text={errors.password}/>}
    ///Form.Field>  
                <Button primary>Login</Button>
            </Form>
            );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;