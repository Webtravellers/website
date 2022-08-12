import React from "react";
import { useNavigate } from "react-router";

function ForgottenFlavorsCard(props) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/location/${props.id}`)} className="forgotten-flavors-card d-flex flex-column cursor-pointer">
        <div>
            <img className="forgotten-flavors-card-img" src={props.photos[0]} alt='yemek' />
        </div>
        <div className="mt-5">
            <span style={{fontWeight: 'bold'}}>{props.name}</span>
        </div>
        <div className="mt-2">
            {props.type}
        </div>
    </div>
  );
}

export default ForgottenFlavorsCard;
