import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import TripService from "../../services/tripService";


const NewTrip = ({ newTrip, setNewTrip, userId }) => {

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
            <ModalHeader> Create New Trip</ModalHeader>
            <ModalBody className="d-flex flex-column">
                <div>
                    <span> Trip name</span>
                    <input type={"text"} className="m-2" onChange={(val) => setTripName(val.target.value)} >
                    </input>
                </div>
                <div>
                    <span> Start Date</span>
                    <input type={"date"} className="m-2" onChange={(val) => setStartDate(val.target.value)}>
                    </input>
                </div>
                <div>
                    <span> End Date</span>
                    <input type={"date"} className="m-2" onChange={(val) => setEndDate(val.target.value)}>
                    </input>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button onClick={newTripSubmitHandler}>Continue</Button>
                <Button onClick={() => setNewTrip(false)}> Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default NewTrip