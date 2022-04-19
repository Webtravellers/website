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

const Signup = () => {

    const [loading, setLoading] = useState(false)

    const initialFormValues = {
        name: "",
        lastname: "",
        email: "",
        password: "",
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Not valid email"),
        password: Yup.string().required("Password is required").min(6, "Password should be consist of least 6 chracters"),
        name: Yup.string().required("Name is required").min(3, "Minumum character limit is 3").max(16, "Maximum chracter limit for name is 16"),
        lastname: Yup.string().required("Lastname is required").min(3, "Minumum character limit is 3").max(16, "Maximum chracter limit for name is 16")
    })

    const handleSignup = (values) => {
        setLoading(true) //to do later authService 
        /* authService.signup(values).then(res => {
            Swal.fire({
                title: "Successfull",
                text: res.data.message,
                icon: "success",
            })
        }).catch(err => {
            Swal.fire({
                title: "Error",
                text: err.response.data.message,
                icon: "error",
            })
        }).finally(() => {
            setLoading(false)
        }) */
    }

    return (
        <Container className=" d-flex flex-column justify-content-center mt-5 ">
            <Card className="d-flex align-self-center bg-transparent border-0 mt-5 ">
                <CardHeader className="text-center signup-header border-0 bg-transparent mt-5">
                    <p className="display-3">Sign Up</p>
                </CardHeader>
                <CardBody>
                    <Formik
                        initialValues={initialFormValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSignup}
                    >
                        {props => (
                            <Form role="form">
                                <FormGroup >
                                    <InputGroup className="m-1">
                                        <InputGroupText className="input-text-item">
                                            <span>Name</span>
                                        </InputGroupText>
                                        <Input className="input-item" name="name" onChange={props.handleChange} placeholder="name" type="text"></Input>
                                    </InputGroup>

                                    <InputGroup className="m-1">
                                        <InputGroupText className="input-text-item">
                                            <span>Lastname</span>
                                        </InputGroupText>
                                        <Input className="input-item" name="lastname" onChange={props.handleChange} placeholder="lastname" type="text"></Input>
                                    </InputGroup>

                                    <InputGroup className="m-1">
                                        <InputGroupText className="input-text-item">
                                            <span>E-mail</span>
                                        </InputGroupText>
                                        <Input className="input-item" name="email" onChange={props.handleChange} placeholder="blabla@mail.com" type="email"></Input>
                                    </InputGroup>

                                    <InputGroup className="m-1">
                                        <InputGroupText className="input-text-item">
                                            <span>Password</span>
                                        </InputGroupText>
                                        <Input className="input-item" name="password" onChange={props.handleChange} placeholder="******" type="password"></Input>
                                    </InputGroup>
                                </FormGroup>
                                <div className='text-danger error-messages'>
                                    <p>{props.errors.name}</p>
                                    <p>{props.errors.lastname}</p>
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
                                        {!loading ? "Create Account" : "Creating Account..."}
                                    </Button>
                                </div>
                            </Form>
                        )}

                    </Formik>
                    <p className='mt-4 ml-3 text-dark'>
                        Already have an acoount? <Link to="/users/signin">Then sign in</Link>
                    </p>
                </CardBody>

            </Card>
        </Container>
    )
}


export default React.memo(Signup)