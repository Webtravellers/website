import React from "react";
import { Row, Button } from "reactstrap";
import UserPageHeader from "../../components/user-page/UserPageHeader";
import { useNavigate } from "react-router";

const AccountPage = () => {
    const navigate = useNavigate()
    return (
        <div >
            <UserPageHeader
                userProfilePhoto=""
                followers="2341"
                following="1234"

            />
            <div className="w-100 d-flex justify-content-center my-margin300">
                <div className="d-flex flex-column justify-content-center align-items-center w-75">
                    <Button className="bg-dark text-light">Gönderi Paylaş</Button>
                    <div className="my-1 mb-8 text-center">
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default AccountPage