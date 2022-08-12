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
        // onClick={() => {
        //   navigate("/account");
        // }}
        className="userInfoIMG"
        src="https://cdn.yeniakit.com.tr/images/news/625/kun-ata-kim-kun-ata-rolunu-kim-oynuyor-h1638012805-a8c35c.jpg"
        alt=""

      />
      <div className="d-flex flex-column">
        <p
          // onClick={() => {
          //   navigate("/account");
          // }}
          className="text-dark my-font"
        >
          Ata Kim
        </p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default UserInfo;
