import React, { useState } from "react";
import { Formik } from "formik";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Form,
    Input,
    Container,
    Row,
    Col,
    FormGroup,
    InputGroup,
    InputGroupText
} from "reactstrap";
import * as Yup from "yup"
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const Signin = () => {

    const [loading, setLoading] = useState(false)

    const initialFormValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Not valid email"),
        password: Yup.string().required("Password is required"),
    })

    const handleSignin = (values) => {
        setLoading(true) // to do later auth
        /* useAuth(values, ()=>{
            setLoading(false)
        }) */
    }
    return (
        <>
            <Container className=" d-flex flex-column justify-content-center  mt-5">
                <Card className="d-flex align-self-center bg-transparent border-0 mt-5">
                    <CardHeader className="text-center signup-header border-0 bg-transparent mt-5">
                        <p className="display-3">Sign In</p>
                    </CardHeader>
                    <CardBody>
                        <Formik
                            initialValues={initialFormValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSignin}
                        >
                            {props => (


                                <Form role="form">
                                    <FormGroup >
                                        <InputGroup className="m-1">
                                            <InputGroupText className="input-text-item">
                                                <span>E-mail</span>
                                            </InputGroupText>
                                            <Input className="input-item" name="email" onChange={props.handleChange} placeholder="e-mail" type="email"></Input>
                                        </InputGroup>

                                        <InputGroup className="m-1">
                                            <InputGroupText className="input-text-item">
                                                <span>Password</span>
                                            </InputGroupText>
                                            <Input className="input-item" name="password" onChange={props.handleChange} placeholder="******" type="password"></Input>
                                        </InputGroup>
                                    </FormGroup>
                                    <div className='text-danger error-messages'>
                                        <p>{props.errors.email}</p>
                                        <p>{props.errors.password}</p>
                                    </div>
                                    <div className="text-center">
                                        <Button
                                            className="mt-3 bg-dark text-light border-0 "
                                            color="secondary"
                                            type="button"
                                            onClick={props.handleSubmit}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </Form>
                            )}

                        </Formik>
                        <p className='mt-4 text-dark ml-3'>
                            Don't have an acoount? <Link to="/users/signup">Signup right now!</Link>
                        </p>
                    </CardBody>

                </Card>
            </Container>
        </>
    )
}

export default React.memo(Signin)