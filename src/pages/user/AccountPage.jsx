import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import UserPageHeader from "../../components/user-page/UserPageHeader";
import { useNavigate } from "react-router";
import NewPost from "../../components/user-page/NewPost";
import { useSelector } from "react-redux";
import UserService from "../../services/users";
import PostService from "../../services/postService";
import { useTranslation } from "react-i18next";

const AccountPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const {
    user: { _id: userId },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    const userService = new UserService();
    const postService = new PostService();
    
    userService.getUserById(String(userId)).then((res) => {
      setUser(res.data.data);
    });
    postService.getPostsByUser(String(userId)).then((res) => {
      setPosts(res.data.data);
    });
  }, [posts]);
  return (
    <div>
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
              Profili Düzenle
            </Button>
          </div>
          <NewPost newPost={newPost} setNewPost={setNewPost} userId={userId} />
          <Button onClick={() => navigate('trips')}> Trips </Button> {/* translate */}
          <div className="my-grid-cols-2 my-4 mb-8 text-center">
            {posts?.map((post) => (
              <div className="d-flex pb-5">
                <img
                  onClick={() => {
                    navigate("/");
                  }}
                  className="p-1  cursor-pointer posts-in-profile"
                  src={post.photo}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
