import React from 'react';
import { Button, FormGroup, FormControl, FormLabel, Form } from "react-bootstrap";
import '../../App.css';

class Login extends React.Component {

    validateForm() {
        console.log("Validating");
      }


    render () {
        return (
            <div class="card col-md-6 col-md-offset-4 mx-auto">
                <Form >
                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel class="form-control">Email</FormLabel>
                        <FormControl
                        autoFocus
                        type="email"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel class="form-control">Password</FormLabel>
                        <FormControl
                        type="password"
                        />
                    </FormGroup>
                    <Button
                        class="btn"
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Login;