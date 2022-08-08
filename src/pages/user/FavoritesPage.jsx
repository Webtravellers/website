import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LocationContainerInFavorites from "../../components/trip-page/LocationContainerInFavorites";
import UserService from "../../services/userServices";



const FavoritesPage = () => {

    const { id } = useParams()
    const [user, setUser] = useState({})
    const userService = new UserService()
    useEffect(() => {
        userService.getUserById(id).then(res => {
            setUser(res.data.data)
        })
    }, [])
    console.log(user);
    return (
        <div className="d-flex flex-column  align-items-center">
            <div className="w-50">
                <h3 className="ml-4 mt-4 p-3   ">{user.name}'s Favorite List!</h3>
                {
                    user?.favoritesList?.map((loc) => (

                        <LocationContainerInFavorites
                            key={loc._id}
                            name={loc.name}
                            desc={loc.desc}
                            photo={loc.photos[0]}
                            id={loc._id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FavoritesPage