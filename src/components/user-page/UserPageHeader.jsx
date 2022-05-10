import React from "react";


const UserPageHeader = (props) => {
    const userProfilePhoto = props.userProfilePhoto
    const followers = props.followers
    const following = props.following
    const posts = props.posts
    return (
        <div className="d-flex flex-column position-relative mb-5">
            <img className="w-100" src={require("../../assets/imgs/account-page-photo.png")} alt="" />
            <div className="d-flex flex-column  w-100 align-items-center position-absolute my-vertical-align">
                <img src={require("../../assets/imgs/user-account-photo.png")} alt="" />
                <p className="text-dark my-font display-3">Emma Stone</p>
                <div className="d-flex">
                    <div className="d-flex flex-column  m-2 align-items-center">
                        <p className="my-font display-5">{followers}</p>
                        <p className="my-font display-5">Takipçi</p>
                    </div>

                    <div className="d-flex flex-column  m-2 align-items-center">
                        <p className="my-font display-5">{following}</p>
                        <p className="my-font display-5">Takip</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPageHeader