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
import authService from "../../services/authService";
import useAuth from "../../hooks/useAuth";


const Signin = () => {

    const [loading, setLoading] = useState(false)
    const { handleSignin } = useAuth()
    const initialFormValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Not valid email"),
        password: Yup.string().required("Password is required"),
    })

    const handleSigninClick = (values) => {
        setLoading(true)
        handleSignin(values, () => {
            setLoading(false)
        })
    }
    return (
        <main className="d-flex justify-content-center">
            <div className="w-25 ">
                <Card className="border-0">
                    <div className="text-muted text-center mb-3">
                        <h1>Giriş Yap</h1>
                    </div>
                    <CardBody className="px-lg-5 py-lg-5">
                        <Formik
                            initialValues={initialFormValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSigninClick}
                        >
                            {props => (
                                <Form role="form">
                                    <FormGroup className="d-flex flex-column">
                                        <span className="my-2 ml-2 text-dark">E-mail</span>
                                        <InputGroup >
                                            <Input className="auth-input" name='email' onChange={props.handleChange} placeholder="Kullanıcı Adı" type="text" max={16} min={6} />
                                        </InputGroup>
                                        <span className="my-2 ml-2 text-dark">Şifre</span>
                                        <InputGroup>

                                            <Input className="auth-input" name="password" onChange={props.handleChange} placeholder="Şifre" type="password" />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className='text-danger error-messages'>
                                        <p>{props.errors.email}</p>
                                        <p>{props.errors.password}</p>
                                    </div>

                                    <div className="text-center">
                                        <Link to="/auth/signup" className="text-orange">Şifreni mi unuttun?</Link>
                                        <Button
                                            className="mt-4 w-100 bg-dark"
                                            color="primary"
                                            type="button"
                                            onClick={props.handleSubmit}
                                        >
                                            {!loading ? "Giriş yap" : "Giriş yapılıyor..."}
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <p className='mt-4 text-center'>
                            <Link to="/users/signup" className="text-orange">Üye ol</Link>
                        </p>
                    </CardBody>
                </Card>
            </div>
        </main>
    )
}

export default React.memo(Signin)