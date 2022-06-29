import React, { useState, useEffect } from 'react';
import LocationService from '../../services/locationService';
import { useParams } from 'react-router';
import { UncontrolledCarousel } from 'reactstrap';


const Carousel = () => {

    const { id } = useParams()
    const [locationPhotos, setLocationPhotos] = useState([])
    useEffect(() => {
        const locationService = new LocationService()
        locationService.getById(id).then(res => {
            setLocationPhotos(res.data.data.photos)
        })
    })

    const items = locationPhotos.map(link => {
        return {
            src: link,
            altText: '',
            caption: '',
            header: ''
        }
    })



    return (
        <UncontrolledCarousel className='carousels' items={items} />
    )
}

export default Carousel;
