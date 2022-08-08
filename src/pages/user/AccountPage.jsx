import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import UserPageHeader from "../../components/user-page/UserPageHeader";
import { useNavigate } from "react-router";
import NewPost from "../../components/user-page/NewPost";
import { useSelector } from "react-redux";
import UserService from "../../services/userServices";
import PostService from "../../services/postService";
import { useTranslation } from "react-i18next";
import ClipLoader from "react-spinners/ClipLoader";


const AccountPage = () => {
  const [loading, setLoading] = useState(false)
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const {
    user: { _id: userId },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    setLoading(true)
    const userService = new UserService();
    const postService = new PostService();

    userService.getUserById(String(userId)).then((res) => {
      setUser(res.data.data);
      console.log(user);
    });
    postService.getPostsByUser(String(userId)).then((res) => {
      setPosts(res.data.data);
    });
    setLoading(false)
  }, [posts]);
  return (
    <div>
      {
        loading ?
          <ClipLoader id="loader" className="center-text" loading={loading} color={"#FF7426"} size={100} /> :
          <>
            <UserPageHeader
              userProfilePhoto={user?.photo}
              userFullName={`${user.name} ${user.lastname}`}
              followers={user?.followers?.length}
              following={user?.following?.length}
            />
            <div className="d-flex justify-content-center my-margin300">
              <div className="d-flex flex-column justify-content-center align-items-center w-75">
                <div className="flex-row">
                  <Button
                    onClick={() => setNewPost(true)}
                    className="bg-dark text-light"
                  >
                    {t("account-page.posting-button")}
                  </Button>
                  <Button
                    onClick={() => navigate(`/bi/${userId}/update`)}
                    className="text-light"
                    color="info"
                  >
                    {t("account-page.edit-profile")}
                  </Button>
                </div>
                <NewPost newPost={newPost} setNewPost={setNewPost} userId={userId} />
                <Button onClick={() => navigate("trips")}> {t("account-page.trips")} </Button>{" "}
                <div className="my-grid-cols-2 my-4 mb-8 text-center">
                  {posts?.map((post) => (
                    <div className="d-flex pb-5" key={post._id}>
                      <img
                        onClick={() => {
                          navigate(`posts/${post._id}`);
                        }}
                        className="p-1  cursor-pointer posts-in-profile"
                        src={post.photo}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div></>

      }

    </div>
  );
};

export default AccountPage;
