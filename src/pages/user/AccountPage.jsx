import React, { useState } from "react";
import { Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UserPageHeader from "../../components/user-page/UserPageHeader";
import { useNavigate } from "react-router";

const AccountPage = () => {
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)
    return (
        <div >
            <UserPageHeader
                userProfilePhoto=""
                followers="2341"
                following="1234"
                posts="76"
            />
            <div className="w-100 d-flex justify-content-center my-margin300">
                <div className="d-flex flex-column justify-content-center align-items-center w-75">
<<<<<<< Updated upstream
                    <Button className="bg-dark text-light">Gönderi Paylaş</Button>
                    <div className="grid grid-cols-2 gap-1 sm:gap-8 my-1 mb-8 text-center">
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.png")} alt="" />
=======
                    <Button onClick={toggleModal} className="bg-dark text-light">Gönderi Paylaş</Button>
                    <Modal
                        isOpen={modal}
                        toggle={toggleModal}
                        centered
                        fullscreen="true">
                        <ModalHeader>
                            Yeni Gönderi
                        </ModalHeader>
                        <ModalBody className="d-flex flex-column">
                            <p>Yüklemek istediğiniz fotoğrafı sürükleyin</p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={""}
                                className="w-100"
                            />
                            <p>Hatıralanızla ilgili yazın!</p>
                            <textarea
                                className="outline-none resize-none h-32 sm:h-auto"
                                placeholder="Write a caption..."
                                name="caption"
                                cols="40"
                                rows="12"
                                value={""}
                                onChange={""}
                                onClick={""}
                            >
                            </textarea>
                        </ModalBody>
                        <ModalFooter className="d-flex">
                            <Button className="bg-success">
                                Paylaş
                            </Button>
                            <Button className="bg-danger">
                                İptal
                            </Button>
                        </ModalFooter>

                    </Modal>
                    <div className="my-1 mb-8 text-center">
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.PNG")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.PNG")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.PNG")} alt="" />
                        <img onClick={() => { navigate('/') }} className="p-3 m-1 cursor-pointer" src={require("../../assets/imgs/img3.PNG")} alt="" />
>>>>>>> Stashed changes
                    </div>
                </div>
            </div>

        </div >
    )
}

export default AccountPage