import React, { useState } from "react";
import { Formik } from "formik";
import {
    Button,
    Card,
    CardBody,
    Form,
    Input,
    Container,
    FormGroup,
    InputGroup,
} from "reactstrap";
import * as Yup from "yup"
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import authService from "../../services/authService";
import { useNavigate } from "react-router";

const SignupPage = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const initialFormValues = {
        name: "",
        lastname: "",
        email: "",
        password: "",
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("E-posta zorunlu").email("Geçersiz E-posta"),
        password: Yup.string().required("Şifre doldurulması zorunlu").min(6, "Şifre en az 6 karakterden oluşmalıdır"),
        name: Yup.string().required("Bu alan doldurulması zorunlu").min(3, "En az 3 karakterden oluşmalı").max(16, "Maksimum karakter sayısı aşıldı (16)"),
        lastname: Yup.string().required("Bu alan doldurulması zorunlu").min(3, "En az 3 karakterden oluşmalı").max(16, "Maksimum karakter sayısı aşıldı (16)")
    })

    const handleSignup = (values) => {
        setLoading(true)
        authService.signup(values).then(res => {
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
            navigate("../signin")
        })
    }

    return (
        <Container className=" d-flex flex-column justify-content-center mt-5">
            <Card className="d-flex align-self-center bg-transparent border-0 ">
                <div className="text-muted text-center">
                    <h1>Kayıt Ol</h1>
                </div>
                <CardBody>
                    <Formik
                        initialValues={initialFormValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSignup}
                    >
                        {props => (
                            <Form role="form">
                                <FormGroup className="d-flex flex-column">
                                    <span className="ml-2 my-2 text-dark">Ad</span>
                                    <InputGroup className="m-1">
                                        <Input className="auth-input" name="name" onChange={props.handleChange} placeholder="name" type="text"></Input>
                                    </InputGroup>
                                    <p className='text-danger error-messages ml-2'>{props.errors.name}</p>
                                    <span className="ml-2 my-2 text-dark">Soyad</span>
                                    <InputGroup className="m-1">
                                        <Input className="auth-input" name="lastname" onChange={props.handleChange} placeholder="lastname" type="text"></Input>
                                    </InputGroup>
                                    <p className='text-danger error-messages ml-2'>{props.errors.lastname}</p>
                                    <span className="ml-2 my-2 text-dark">E-posta</span>
                                    <InputGroup className="m-1">
                                        <Input className="auth-input" name="email" onChange={props.handleChange} placeholder="blabla@mail.com" type="email"></Input>
                                    </InputGroup>
                                    <p className='text-danger error-messages ml-2'>{props.errors.email}</p>
                                    <span className="ml-2 my-2 text-dark">Şifre</span>
                                    <InputGroup className="m-1">
                                        <Input className="auth-input" name="password" onChange={props.handleChange} placeholder="******" type="password"></Input>
                                    </InputGroup>
                                    <p className='text-danger error-messages ml-2'>{props.errors.password}</p>
                                    <span className="ml-2 my-2 text-dark">Şifre tekrar</span>
                                    <InputGroup className="m-1">
                                        <Input className="auth-input" name="password2" onChange={props.handleChange} placeholder="******" type="password"></Input>
                                    </InputGroup>
                                </FormGroup>

                                <div className="text-center">
                                    <Button
                                        className="mt-3 bg-dark text-light border-0 w-100"
                                        color="secondary"
                                        type="button"
                                        onClick={props.handleSubmit}
                                    >
                                        {!loading ? "Hesap Oluştur" : "Hesap Oluşturuluyor..."}
                                    </Button>
                                </div>
                            </Form>
                        )}

                    </Formik>
                    <p className='mt-4 ml-3 text-dark'>
                        Zaten bir hesabın mı var? <Link to="/users/signin "> <span className="text-orange"> Hemen giriş yap!</span></Link>
                    </p>
                </CardBody>

            </Card>
        </Container>
    )
}


export default React.memo(SignupPage) 