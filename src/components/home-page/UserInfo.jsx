import React from "react";
import { useNavigate } from "react-router";

function UserInfo(props) {
  const userProfilePhoto = props.userProfilePhoto;
  const current = new Date();
  const month = current.toLocaleString("default", { month: "long" });
  const date = `${current.getDate()} ${month} ${current.getFullYear()}`;
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-row">
      <img
        onClick={() => {
          navigate("/account");
        }}
        className="userInfoIMG cursor-pointer"
        src={require("../../assets/imgs/user-account-photo.png")}
        alt=""
      />
      <div className="d-flex flex-column">
        <p
          onClick={() => {
            navigate("/account");
          }}
          className="text-dark my-font cursor-pointer"
        >
          Emma Stone
        </p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default UserInfo;
