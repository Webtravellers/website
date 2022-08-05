import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import TripService from "../../services/tripService";
import { useTranslation } from "react-i18next";


const NewTrip = ({ newTrip, setNewTrip, userId }) => {
    const { t, i18n } = useTranslation();
    const [tripName, setTripName] = useState("")
    const [startDate, setStartDate] = useState({})
    const [endDate, setEndDate] = useState({})
    const tripService = new TripService()

    const newTripSubmitHandler = (e) => {
        if (!tripName) {
            toast.error("Give a trip name");
            return
        }
        console.log(tripName, startDate, endDate);
        const data = {
            name: tripName,
            startDate: startDate,
            endDate: endDate
        }


        tripService.newTrip(userId, data)
            .then(res => {
                console.log(res.data)
                toast.success(res.data.message);
            })
            .catch(err => {
                console.log(err)
                toast.error(err);
            })
            .finally(() => {
                setTripName("")
                setEndDate({})
                setStartDate({})
                setNewTrip(false)
            })

    }

    return (

        <Modal isOpen={newTrip} onClosed={() => setNewTrip(false)}>
            <ModalHeader> {t("new-trip-component.create-new-trip")}</ModalHeader>
            <ModalBody className="d-flex flex-column">
                <div>
                    <span> {t("new-trip-component.trip-name")}</span>
                    <input type={"text"} className="m-2" onChange={(val) => setTripName(val.target.value)} >
                    </input>
                </div>
                <div>
                    <span> {t("new-trip-component.start-date")}</span>
                    <input type={"date"} className="m-2" onChange={(val) => setStartDate(val.target.value)}>
                    </input>
                </div>
                <div>
                    <span> {t("new-trip-component.end-date")}</span>
                    <input type={"date"} className="m-2" onChange={(val) => setEndDate(val.target.value)}>
                    </input>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button onClick={newTripSubmitHandler}>{t("new-trip-component.continue-button")}</Button>
                <Button onClick={() => setNewTrip(false)}> {t("new-trip-component.cancel-button")}</Button>
            </ModalFooter>
        </Modal>
    )
}

export default NewTrip