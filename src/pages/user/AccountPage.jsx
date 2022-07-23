import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import UserPageHeader from "../../components/user-page/UserPageHeader";
import { useNavigate } from "react-router";
import NewPost from "../../components/user-page/NewPost";
import { useSelector } from "react-redux";
import UserService from "../../services/users";
import PostService from "../../services/postService";
const AccountPage = () => {
    const navigate = useNavigate()
    const [newPost, setNewPost] = useState(false)
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})
    const { id: userId } = useSelector((state) => state.auth);

    useEffect(() => {
        const userService = new UserService()
        const postService = new PostService()
        userService.getUserById(String(userId)).then(res => {
            setUser(res.data.data)
        })

        postService.getPostsByUser(String(userId)).then(res => {
            setPosts(res.data.data)
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
            <div className="d-flex justify-content-center my-margin300">
                <div className="d-flex flex-column justify-content-center align-items-center w-75">
                    <Button onClick={() => setNewPost(true)} className="bg-dark text-light">Gönderi Paylaş</Button>
                    <NewPost newPost={newPost} setNewPost={setNewPost} userId={userId} />
                    <div className="my-grid-cols-2 my-4 mb-8 text-center">
                        {
                            posts.map(post => (
                                <div className="d-flex ">
                                    <img onClick={() => { navigate('/') }} className="p-1  cursor-pointer posts-in-profile" src={post.photo} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div >
        </div>
    )
}

export default AccountPage