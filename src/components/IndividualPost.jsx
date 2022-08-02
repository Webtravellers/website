import React from "react";
import { Button } from "reactstrap";

const IndividualPost = (props) => {
    const postPhoto = props.postPhoto
    const userPhoto = "../assets/imgs/user-photo.png"
    const postDate = props.postDate
    const postText = props.postText
    const likes = props.likes
    const comments = props.comments
    return (
        <div className="d-flex flex-column justify-content-center my-5 ">
            <div className="carousels">
                <img className="post-photo p-3 " src={postPhoto} alt="" />
            </div>
            <div className="d-flex mt-2 position-relative pl-3 align-items-center">
                <div className="d-flex flex-column align-items-center m-2">
                    <p>{likes?.lenght ? likes.lenght : 0}</p>
                    <Button className="">
                        <i className="fa fa-heart text-danger"></i>
                    </Button>
                </div>

                <div className="d-flex flex-column align-items-center m-2">
                    <p>{comments?.lenght ? comments.lenght : 0}</p>
                    <Button>
                        <i className="fa fa-comment"></i>
                    </Button>
                </div>
                <p className="my-justify-self-end pr-3">{postDate}</p>
            </div>
            <div className="d-flex justify-content-start">
                <img src={require("../assets/imgs/user-photo.png")} alt="" />
                <p className="p-3">{postText}</p>
            </div>
        </div>
    )
}

export default IndividualPost