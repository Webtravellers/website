import React from "react";

function ForgottenFlavorsCard(props) {
  return (
    <div className="forgotten-flavors-card d-flex flex-column">
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
