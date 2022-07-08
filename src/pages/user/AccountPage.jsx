import React, { useState } from "react";
import { Button } from "reactstrap";
import UserPageHeader from "../../components/user-page/UserPageHeader";
import { useNavigate } from "react-router";
import NewPost from "../../components/user-page/NewPost";
const AccountPage = () => {
    const navigate = useNavigate()
    const [newPost, setNewPost] = useState(false)
    return (
        <div>
            <UserPageHeader
                userProfilePhoto=""
                followers="2341"
                following="1234"

            />
            <div className="w-100 d-flex justify-content-center my-margin300">
                <div className="d-flex flex-column justify-content-center align-items-center w-75">
                    <Button className="bg-dark text-light">Gönderi Paylaş</Button>
                    <NewPost newPost={newPost} setNewPost={setNewPost} />
                    <div className="grid grid-cols-2 gap-1 sm:gap-8 my-1 mb-8 text-center">
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />

                    </div>
                </div>

            </div >
        </div>
    )
}

export default AccountPage