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
import { useTranslation } from "react-i18next";

const SignupPage = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const initialFormValues = {
        name: "",
        lastname: "",
        email: "",
        password: "",
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().required(`${t("sign-up-page.email-is-required")}`).email(`${t("sign-up-page.not-valid-email")}`),
        password: Yup.string().required(`${t("sign-up-page.password-is-required")}`).min(6, `${t("sign-up-page.password-min-6")}`),
        name: Yup.string().required(`${t("sign-up-page.is-mandatory")}`).min(3, `${t("sign-up-page.min-3-word")}`).max(16, `${t("sign-up-page.max-16-word")}`),
        lastname: Yup.string().required(`${t("sign-up-page.is-mandatory")}`).min(3, `${t("sign-up-page.min-3-word")}`).max(16, `${t("sign-up-page.max-16-word")}`)
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
                    <h1>{t("sign-up-page.sign-up")}</h1>
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
                                    <span className="ml-2 my-2 text-dark">{t("sign-up-page.name")}</span>
                                    <InputGroup className="m-1">
                                        <Input className="auth-input" name="name" onChange={props.handleChange} placeholder={t("sign-up-page.name-example")} type="text"></Input>
                                    </InputGroup>
                                    <p className='text-danger error-messages ml-2'>{props.errors.name}</p>
                                    <span className="ml-2 my-2 text-dark">{t("sign-up-page.surname")}</span>
                                    <InputGroup className="m-1">
                                        <Input className="auth-input" name="lastname" onChange={props.handleChange} placeholder={t("sign-up-page.surname-example")} type="text"></Input>
                                    </InputGroup>
                                    <p className='text-danger error-messages ml-2'>{props.errors.lastname}</p>
                                    <span className="ml-2 my-2 text-dark">{t("sign-up-page.email")}</span>
                                    <InputGroup className="m-1">
                                        <Input className="auth-input" name="email" onChange={props.handleChange} placeholder="blabla@gmail.com" type="email"></Input>
                                    </InputGroup>
                                    <p className='text-danger error-messages ml-2'>{props.errors.email}</p>
                                    <span className="ml-2 my-2 text-dark">{t("sign-up-page.password")}</span>
                                    <InputGroup className="m-1">
                                        <Input className="auth-input" name="password" onChange={props.handleChange} placeholder="******" type="password"></Input>
                                    </InputGroup>
                                    <p className='text-danger error-messages ml-2'>{props.errors.password}</p>
                                    <span className="ml-2 my-2 text-dark">{t("sign-up-page.password-again")}</span>
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
                                        {!loading ? `${t("sign-up-page.sign-up-button")}` : `${t("sign-up-page.signing-up")}`}
                                    </Button>
                                </div>
                            </Form>
                        )}

                    </Formik>
                    <p className='mt-4 ml-3 text-dark'>
                        {t("sign-up-page.have-an-account")} <Link to="/users/signin "> <span className="text-orange"> {t("sign-up-page.login-now")}</span></Link>
                    </p>
                </CardBody>

            </Card>
        </Container>
    )
}


export default React.memo(SignupPage) 