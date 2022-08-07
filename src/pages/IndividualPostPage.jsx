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
    const postService = new PostService()
    const [loading, setLoading] = useState(0)

    useEffect(() => {
        postService.getPostsByPostID(postid).then(res => {
            setPost(res.data.data)
        })
    }, [loading])

    if (post?.likes) {
        var numberOfLikes = post.likes.length
    }


    return (
        <div className="w-100 d-flex flex-column align-items-center ">
            <div className="w-75 ">
                <IndividualPost
                    key={postid}
                    postPhoto={post.photo}
                    likes={numberOfLikes}
                    comments={post?.comments}
                    postDate={post?.createdAt?.slice(0, 10)}
                    postText={post?.caption}
                    postId={postid}
                    anchor={setLoading}
                />
            </div>
            <div className="w-75 p-3">
                <h3>{t("individual-post-page.comments")}</h3>
                {
                    post?.comments?.length != 0 ? post?.comments?.map(comment => (
                        <PostComment
                            key={comment._id}
                            id={comment.user}
                            time={comment.date}
                            comment={comment.comment}
                        />
                    )) : <p>There is no comment for this post yet!</p>

                }
            </div>
        </div>
    )
}


export default IndividualPostPage