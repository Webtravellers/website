import React from "react";

const LocationComment = (props) => {
  const fname = props.firstname;
  const lname = props.lastname;
  const fullname = fname + " " + lname;
  const comment = props.comment;
  const time = props.time ? new Date(props.time).toLocaleString() : null;
  const photo = props.photo;
  return (
    <div className="d-flex  position-relative">
      <div className="d-flex align-items-center">
        <img
          width={64}
          height={64}
          className="rounded-pill"
          alt=""
          src={photo}
        ></img>
        <div className="d-flex flex-column mt-4 ml-2">
          <h5>
            {fullname}
            <span className="ml-3 mr-1">
              {Array.from(Array(5).keys()).map((i, index) => (
                <i
                  key = {index}
                  className={`fa fa-star p-1 ${
                    parseInt(props.score ?? 0) > index ? "text-warning" : ""
                  }`}
                  aria-hidden="true"
                ></i>
              ))}
            </span>
            {(props.score)}.0
          </h5>
          <p className="Location-comment">{comment}</p>
        </div>
      </div>
      <div className="justify-self-end mt-4 position-absolute right-0 mx-2">
        <p className="Location-comment">{time}</p>
      </div>
    </div>
  );
};

export default LocationComment;
