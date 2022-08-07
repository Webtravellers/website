import React from "react";

const PostInFeed = (props) => {
    const photo = props.photo
    const caption = props.caption
    const comments = props.comments
    const likes = props.likes

    return (
        <div className="card shadow-sm bg-neutral text-accent-content mx-8 md:mx-36 lg:mx-80 mb-28">
            <div className="flex my-3">
                <div className="avatar">
                    <div className="mx-4 rounded-full w-12 h-12">
                        <img src={""} alt="avatar" />
                    </div>
                </div>
                <div className="self-center font-bold">hello</div>
            </div>
            <figure>
                <img className="posts-in-profile" src={photo} alt="Post" />
            </figure>
            <div className="mx-4 my-3">
                <p>
                    <span className="font-bold">hello</span>
                    <span className="ml-2 text-sm">{caption}</span>
                </p>
            </div>
        </div>
    );
};

export default PostInFeed;