import React, { useEffect, useState } from "react";
import UserService from "../../services/userServices";


const PostComment = (props) => {
    const id = props.id
    const comment = props.comment
    const time = props.time ? new Date(props.time).toLocaleString() : null
    const [user, setUser] = useState({})
    const userService = new UserService()
    useEffect(() => {
        userService.getUserById(id).then(res => {
            setUser(res.data.data)
        })
    }, [])
    return (
        <div className="d-flex  position-relative">
            <div className="d-flex align-items-center">
                <img className="imgInComment" alt="" src={user.photo}></img>
                <div className="d-flex flex-column mt-4 ml-2">
                    <p className="Location-comment">{user.name + " " + user.lastname}</p>
                    <p className="Location-comment">{comment}</p>
                </div>
            </div>
            <div className="justify-self-end mt-4 position-absolute right-0 mx-2">
                <p className="Location-comment">{time} </p>
            </div>

        </div>
    )
}

export default PostComment 