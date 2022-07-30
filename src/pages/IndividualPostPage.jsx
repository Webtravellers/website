import React, { useEffect, useState } from "react";
import IndividualPost from "../components/IndividualPost";
import PostComment from "../components/comments/PostComment"
import { useTranslation } from "react-i18next";
import PostService from "../services/postService";
import { useParams } from "react-router";


const IndividualPostPage = () => {
    const { t, i18n } = useTranslation();
    const { postid } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        const postService = new PostService()
        postService.getPostsByPostID(postid).then(res => {
            setPost(res.data.data)
        })
    }, [])
    console.log(post);
    return (
        <div className="w-100 d-flex flex-column align-items-center ">
            <div className="w-75 ">
                <IndividualPost
                    postPhoto={post.photo}
                    userPhoto=""
                    likes={post?.likes}
                    comments={post?.comments}
                    postDate={post?.createdAt?.slice(0, 10)}
                    postText={post?.caption}
                />
            </div>
            <div className="w-75 p-3">
                <h3>{t("individual-post-page.comments")}</h3>
                <PostComment
                    firstname="Marry"
                    lastname="Harry"
                    time="13 m"
                    comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea repudiandae perspiciatis ad officia dolorum consequuntur"
                />
                <PostComment
                    firstname="Marry"
                    lastname="Harry"
                    time="13 m"
                    comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea repudiandae perspiciatis ad officia dolorum consequuntur"
                />
                <PostComment
                    firstname="Marry"
                    lastname="Harry"
                    time="13 m"
                    comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea repudiandae perspiciatis ad officia dolorum consequuntur"
                />
                <PostComment
                    firstname="Marry"
                    lastname="Harry"
                    time="13 m"
                    comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea repudiandae perspiciatis ad officia dolorum consequuntur"
                />
            </div>
        </div>
    )
}


export default IndividualPostPage