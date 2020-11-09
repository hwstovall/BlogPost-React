import React, { Fragment, useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as ROUTES from './routes';

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <Fragment>
            <Card className="auth" style={{maxWidth: "400px"}}>
                <Card.Body className="w-100">
                        <h2 className="text-center mb-4">Sign Up</h2>     
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} />
                        </Form.Group>
                        <Form.Group id="paswword-confirm">
                            <Form.Label>password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Button className="w-100" type="submit" style={{backgroundColor: "#00cc00", borderRadius: "15px"}}>Sign Up</Button>

                    </Form>
                </Card.Body>
                    <div className="w-100 text-center mt-2 mb-4">
                        Already have an account ? <Link to={ROUTES.SIGN_IN}><span>Sign In</span></Link>
                    </div>
                </Card>        
        </Fragment>
    )
}

export default SignUp;
 
