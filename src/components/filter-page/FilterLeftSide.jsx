import React from "react"
import { Button, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from "reactstrap"
import { useNavigate } from "react-router"

const FilterLeftSide = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="d-flex flex-column p-5 my-filter-left">
                <div className="d-flex flex-column bg-white p-5 my-filter-text">
                    <div className="d-flex flex-column">
                        <p><strong>Kategori Seçiniz</strong></p>
                        <UncontrolledDropdown>
                            <DropdownToggle caret className="my-filter-dropdown" variant="success" id="dropdown-basic">
                                Tarihi Mekan
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="#/action-1">Action</DropdownItem>
                                <DropdownItem href="#/action-2">Another action</DropdownItem>
                                <DropdownItem href="#/action-3">Something else</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>

                    <div className="d-flex flex-column">
                        <p><strong>Şehir Seçiniz</strong></p>
                        <UncontrolledDropdown>
                            <DropdownToggle caret className="my-filter-dropdown" variant="success" id="dropdown-basic">
                                İstanbul
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="#/action-1">Action</DropdownItem>
                                <DropdownItem href="#/action-2">Another action</DropdownItem>
                                <DropdownItem href="#/action-3">Something else</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>

                    <div className="d-flex flex-column">
                        <p><strong>Ücretli/Ücretsiz</strong></p>
                        <UncontrolledDropdown>
                            <DropdownToggle caret className="my-filter-dropdown" variant="success" id="dropdown-basic">
                                Özel Araç
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="#/action-1">Action</DropdownItem>
                                <DropdownItem href="#/action-2">Another action</DropdownItem>
                                <DropdownItem href="#/action-3">Something else</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>

                    <div className="my-filter-dropdown">
                        <form>
                            <input type='checkbox' id='konum' name='konum' value='konum' />
                            <label htmlFor="konum">Konumum Kullanmasına İzin Veriyorum.</label>
                        </form>
                    </div>

                    <div>
                        <form>
                            <label for="location"></label>
                            <input className="my-filter-dropdown mb-5" type="text" placeholder="Başlangıç Noktası" id="location" name="location" />
                        </form>
                    </div>
                    <Button className="bg-dark text-light m-4">Filtrele</Button>
                </div>


                <div className="my-filter-left-bottom">
                    <h3 className="p-5">Yöresel Tatlarını Denediniz mi?</h3>
                    <div className="d-flex flex-column align-items-center">
                        <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/yemek1.png")} />
                        <strong>Kıygaşa  Böreği</strong>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/yemek2.png")} alt="" />
                        <strong>Balaban </strong>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/yemek3.png")} alt="" />
                        <strong>Çipbörek</strong>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/yemek4.png")} alt="" />
                        <strong>Yufkalı Büryan</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterLeftSide