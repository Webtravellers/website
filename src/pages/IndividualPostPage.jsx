import React from "react";
import IndividualPost from "../components/IndividualPost";
import PostComment from "../components/comments/PostComment"
import { useTranslation } from "react-i18next";


const IndividualPostPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="w-100 d-flex flex-column align-items-center ">
            <div className="w-75 ">
                <IndividualPost
                    postPhoto=""
                    userPhoto=""
                    postDate="06/06/2022"
                    postText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea repudiandae perspiciatis ad officia dolorum consequuntur, maiores voluptatum ullam odit facilis aspernatur recusandae repellat illum, ex nobis. Iure reiciendis, aspernatur commodi nostrum nulla amet unde quos dignissimos exercitationem quibusdam voluptates. Magni, possimus veritatis nemo impedit facere laboriosam pariatur expedita adipisci!"
                />
            </div>
            <div className="w-75 p-3">
                <h3>{t("individual-post-page.comments")}</h3>
                <PostComment
                    firstname="Marry"
                    lastname="Harry"
                    time="13 m"
                    comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea repudiandae perspiciatis ad officia dolorum consequuntur"
                />
                <PostComment
                    firstname="Marry"
                    lastname="Harry"
                    time="13 m"
                    comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea repudiandae perspiciatis ad officia dolorum consequuntur"
                />
                <PostComment
                    firstname="Marry"
                    lastname="Harry"
                    time="13 m"
                    comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea repudiandae perspiciatis ad officia dolorum consequuntur"
                />
                <PostComment
                    firstname="Marry"
                    lastname="Harry"
                    time="13 m"
                    comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea repudiandae perspiciatis ad officia dolorum consequuntur"
                />
            </div>
        </div>
    )
}


export default IndividualPostPage