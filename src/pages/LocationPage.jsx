import React from "react";
import Carousels from "../components/carousel/Carousel";
import LocationComment from "../components/comments/LocationComment.";

const LocationPage = () => {
    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <div className="w-75 mh-25 m-5" >
                <Carousels />
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column m-1">
                        <h1>Eymir gölü</h1>
                        <p className="text-muted">Ankara</p>
                        <div className="d-flex">
                            <p className="text-dark ">4,6 Puan</p>
                            <i className="fa fa-star p-1" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="d-flex flex-column m-1">
                        <h4 className="m-4 ">İmkanlar</h4>
                        <div className="d-flex flex-row">
                            <i className="fa fa-car display-4 px-4"></i>
                            <i class="fa fa-cutlery display-4 px-4" aria-hidden="true"></i>
                            <i class="fa fa-bus display-4 px-4" aria-hidden="true"></i>
                            <i class="fa fa-tree display-4 px-4" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam nisi mollitia obcaecati magnam provident earum perferendis velit, molestias quas, vitae debitis. Quia, necessitatibus? Odio exercitationem maiores fugit sit quaerat omnis eveniet? Earum modi voluptatum suscipit molestias repellendus deserunt. Odit autem hic aliquid delectus odio dignissimos repellat, quo inventore eius sint dolorum eos similique fuga et expedita quisquam. Corrupti expedita fuga rem nesciunt assumenda est nemo! Adipisci tenetur omnis error molestias assumenda perferendis, esse minima, impedit, nam dicta possimus totam harum.
                </div>
            </div>
            <div className="w-75 m-5">
                <h3>Diğer kullanıcıların yorumları</h3>
                <LocationComment
                    firstname="Melike Nur"
                    lastname="Aydemir"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eligendi facilis, atque iste at, fuga, velit quo doloremque non molestias minus incidunt totam temporibus unde."
                    time="20 m"
                />

                <LocationComment
                    firstname="Melike Nur"
                    lastname="Aydemir"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eligendi facilis, atque iste at, fuga, velit quo doloremque non molestias minus incidunt totam temporibus unde."
                    time="20 m"
                />
                <LocationComment
                    firstname="Melike Nur"
                    lastname="Aydemir"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eligendi facilis, atque iste at, fuga, velit quo doloremque non molestias minus incidunt totam temporibus unde."
                    time="20 m"
                />
                <LocationComment
                    firstname="Melike Nur"
                    lastname="Aydemir"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eligendi facilis, atque iste at, fuga, velit quo doloremque non molestias minus incidunt totam temporibus unde."
                    time="20 m"
                />


            </div>

        </div>
    )
}

export default LocationPage