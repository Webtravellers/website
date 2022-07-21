import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import UserPageHeader from "../../components/user-page/UserPageHeader";
import { useNavigate } from "react-router";
import NewPost from "../../components/user-page/NewPost";
import { useSelector } from "react-redux";
import UserService from "../../services/users";
const AccountPage = () => {
    const navigate = useNavigate()
    const [newPost, setNewPost] = useState(false)
    const [user, setUser] = useState({})
    const { id: userId } = useSelector((state) => state.auth);
    console.log(userId);

    useEffect(() => {
        const userService = new UserService()

        userService.getUserById(String(userId)).then(res => {
            setUser(res.data.data)
            console.log(res.data.data);
        })

    }, [])


    return (
        <div>
            <UserPageHeader
                userProfilePhoto={user?.photo}
                userFullName={`${user.name} ${user.lastname}`}
                followers={user?.followers?.length}
                following={user?.following?.length}

            />
            <div className="w-100 d-flex justify-content-center my-margin300">
                <div className="d-flex flex-column justify-content-center align-items-center w-75">
                    <Button onClick={() => setNewPost(true)} className="bg-dark text-light">Gönderi Paylaş</Button>
                    <NewPost newPost={newPost} setNewPost={setNewPost} userId={userId} />
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