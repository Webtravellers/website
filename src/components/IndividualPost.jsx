import React from "react";
import { Button } from "reactstrap";

const IndividualPost = (props) => {
    const postPhoto = "../assets/imgs/post-image.png"
    const userPhoto = "../assets/imgs/user-photo.png"
    const postDate = props.postDate
    const postText = props.postText

    return (
        <div className="d-flex flex-column justify-content-center my-5">
            <div>
                <img className="post-photo p-3" src={require("../assets/imgs/post-image.png")} alt="" />
            </div>
            <div className="d-flex mt-2 position-relative pl-3 ">
                <Button className="">
                    <i className="fa fa-heart text-danger"></i>
                </Button>
                <Button>
                    <i className="fa fa-comment"></i>
                </Button>
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