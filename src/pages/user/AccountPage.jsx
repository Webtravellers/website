import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import UserPageHeader from "../../components/user-page/UserPageHeader";
import { useNavigate, useParams } from "react-router";
import NewPost from "../../components/user-page/NewPost";
import { useSelector } from "react-redux";
import UserService from "../../services/userServices";
import PostService from "../../services/postService";
import { useTranslation } from "react-i18next";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";


const AccountPage = () => {
  const [loading, setLoading] = useState(false)
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState(0)
  const [followings, setFollowings] = useState(0)

  const {
    user: { _id: userId },
  } = useSelector((state) => state.auth);
  const { id: userIdFromUrl } = useParams()


  const userService = new UserService();
  const postService = new PostService();

  useEffect(() => {
    setLoading(true)
    userService.getUserById(String(userIdFromUrl)).then((res) => {
      setUser(res.data.data);
      setFollowers(res.data.data.followers?.length ?? 0)
      setFollowings(res.data.data.followings?.length ?? 0)
      setLoading(false)

    });
    postService.getPostsByUser(String(userIdFromUrl)).then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  const handleFollowOperation = () => {
    userService.handleFollow(userId, { userToFollow: userIdFromUrl }).then(res => {
      toast.success(res.data.message);
    })
      .catch(err => {
        toast.error(err.response.data.message);
      })

    userService.getUserById(String(userIdFromUrl)).then((res) => {
      setUser(res.data.data);
      setFollowers(res.data.data.followers.length)
      setFollowings(res.data.data.followings.length)


    });
  }
  return (
    <div>
      {
        loading ?
          <ClipLoader id="loader" className="center-text" loading={loading} color={"#FF7426"} size={100} /> :
          <>
            <UserPageHeader
              userProfilePhoto={user?.photo}
              userFullName={`${user.name} ${user.lastname}`}
              followers={followers}
              following={followings}
            />
            <div className="d-flex justify-content-center my-margin300">
              <div className="d-flex flex-column justify-content-center align-items-center w-75">

                {
                  (userIdFromUrl === userId) ? <div className="flex-row">
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
                  </div> :
                    <>
                      {
                        <Button
                          onClick={() => handleFollowOperation()}
                          className=""
                        >
                          {user?.followers?.includes(userId) ? <span>Unfollow</span> : <span>Follow</span>}
                        </Button>

                      }
                    </>
                }

                <NewPost newPost={newPost} setNewPost={setNewPost} userId={userId} />
                <Button className="mt-4" onClick={() => navigate("trips")}> {t("account-page.trips")} </Button>{" "}
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
