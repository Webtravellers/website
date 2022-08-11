import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserService from "../services/userServices";

const PostInFeed = (props) => {
  const postPhoto = props.postPhoto;
  const postId = props.postId
  const caption = props.caption;
  const likes = props.likes;
  const postDate = new Date(props.postDate).toLocaleDateString()
  const id = props.postedBy._id;
  const userService = new UserService();
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate()
  console.log(postId);

  useEffect(() => {
    userService.getUserById(id).then((res) => {
      setCurrentUser(res.data.data);
    });
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <div class="post d-flex flex-column justify-content-center align-items-center">
        <div class="info">
          <div class="user d-flex">
            <div onClick={() => navigate(`/bi/${id}`)} class="profile-pic flex-column justify-content-center">
              <img src={currentUser.photo} alt="profile pic" />
            </div>
            <div className="username flex-column justify-content-center">
              {currentUser.username ?? currentUser.name}
            </div>
          </div>
        </div>
        <img onClick={() => navigate(`/bi/${id}/posts/${postId}`)} src={postPhoto} class="post-image" alt="cover" />
        <div class="post-content">
          <p class="likes">{likes.length} Likes</p>
          <p class="description">{caption}</p>
          <p class="post-time">{postDate}</p>
        </div>
      </div>
    </div>
    // <div className="d-flex flex-column justify-content-center align-items-center card shadow-sm bg-neutral text-accent-content mx-8 md:mx-36 lg:mx-80 mb-28">
    //     <figure>
    //         <img className="posts-in-profile" src={photo} alt="Post" />
    //     </figure>
    //     <div className="mx-4 my-3">
    //         <p>
    //             <span className="font-bold">hello</span>
    //             <span className="ml-2 text-sm">{caption}</span>
    //         </p>
    //     </div>
    //     <div className="flex my-3">
    //         <div className="avatar">
    //             <div className="mx-4 rounded-full w-12 h-12">
    //                 <img src={""} alt="avatar" />
    //             </div>
    //         </div>
    //         <div className="self-center font-bold">hello</div>
    //     </div>
    // </div>
  );
};

export default PostInFeed;
