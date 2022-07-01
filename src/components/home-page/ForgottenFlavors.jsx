import React from "react";
import ForgottenFlavorsCard from "./ForgottenFlavorsCard";
import forgottenFlavors from "./forgottenFlavors";

function createCard(flavor) {
    return(
        <ForgottenFlavorsCard 
        key = {flavor.id}
        name = {flavor.name}
        photos = {flavor.photos}
        type = {flavor.type}
        />
    )
}

function ForgottenFlavors() {
    return(
        <div className="forgotten-flavors d-flex flex-row">
            {forgottenFlavors.map(createCard)}
        </div>
    )
}

export default ForgottenFlavors