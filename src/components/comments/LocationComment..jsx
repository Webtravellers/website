import React from "react";


const LocationComment = (props) => {
    const fname = props.firstname
    const lname = props.lastname
    const fullname = fname + " " + lname
    const comment = props.comment
    const time = props.time
    return (
        <div className="d-flex  position-relative">
            <div className="d-flex align-items-center">
                <img className="" alt="" src={require("../../assets/imgs/user1.png")}></img>
                <div className="d-flex flex-column mt-4 ml-2">
                    <p className="Location-comment">{fullname}</p>
                    <p className="Location-comment">{comment}</p>
                </div>
            </div>
            <div className="justify-self-end mt-4 position-absolute right-0 mx-2">
                <p className="Location-comment">{time} ago</p>
            </div>

        </div>
    )
}

export default LocationComment