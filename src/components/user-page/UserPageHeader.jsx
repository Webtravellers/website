import React from "react";
import { useTranslation } from "react-i18next";


const UserPageHeader = (props) => {
    const { t, i18n } = useTranslation();
    const userProfilePhoto = props.userProfilePhoto
    const followers = props.followers
    const following = props.following
    const userFullName = props.userFullName
    const posts = props.posts
    return (
        <div className="d-flex flex-column position-relative mb-5">
            <img className="w-100" src={"https://picsum.photos/1600/300"} alt="" />
            <div className="d-flex flex-column  w-100 align-items-center position-absolute my-vertical-align">
                <img className="avatar" src={userProfilePhoto} alt="" />
                <p className="text-dark my-font display-3">{userFullName}</p>
                <div className="d-flex">
                    <div className="d-flex flex-column  m-2 align-items-center">
                        <p className="my-font display-5">{followers}</p>
                        <p className="my-font display-5">{t("user-page-header.followers")}</p>
                    </div>

                    <div className="d-flex flex-column  m-2 align-items-center">
                        <p className="my-font display-5">{following}</p>
                        <p className="my-font display-5">{t("user-page-header.following")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPageHeader