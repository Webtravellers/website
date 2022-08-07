import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import PostService from "../services/postService";
import NewCommentModal from "./comments/NewCommentModal";

const IndividualPost = (props) => {
    const postPhoto = props.postPhoto
    const postDate = props.postDate ? new Date(props.postDate).toLocaleString() : null
    const postText = props.postText
    const likes = props.likes
    const comments = props.comments
    const postId = props.postId
    const setLoading = props.anchor
    const postService = new PostService()
    const { user } = useSelector((state) => state.auth);
    const [newComment, setNewComment] = useState(false)

    const handleLikeEvent = () => {
        postService.handleLikeEvent(postId, user._id).then(() => {
            setLoading(p => !p)
        })
    }

    return (
        <div className="d-flex flex-column justify-content-center my-5 ">
            <div className="carousels">
                <img className="post-photo p-3 " src={postPhoto} alt="" />
            </div>
            <div className="d-flex mt-2 position-relative pl-3 align-items-center">
                <div className="d-flex flex-column align-items-center m-2">
                    <p>{likes}</p>
                    <Button onClick={() => handleLikeEvent()}>
                        <i className="fa fa-heart text-danger"></i>
                    </Button>
                </div>

                <div className="d-flex flex-column align-items-center m-2">
                    <p>{comments?.lenght ? comments.lenght : 0}</p>
                    <Button onClick={() => setNewComment(true)}>
                        <i className="fa fa-comment"></i>
                    </Button>
                    <NewCommentModal newComment={newComment} setNewComment={setNewComment}></NewCommentModal>
                </div>
                <p className="my-justify-self-end pr-3">{postDate}</p>
            </div>
            <div className="d-flex justify-content-start">
                <img className="usrImgInPost" src={user.photo} alt="" />
                <p className="p-3">{postText}</p>
            </div>
        </div>
    )
}

export default IndividualPost