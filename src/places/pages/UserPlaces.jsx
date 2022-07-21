import React from 'react'
import { useParams } from 'react-router-dom'

import { PlacesList } from '../components/PlacesList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        creator: 'u1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the word',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/9d/74/9f/photo0jpg.jpg?w=1200&h=-1&s=1',
        address: '20 W 34th St., New York, NY 10001, Estados Unidos',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },

    },

    {
        id: 'p2',
        creator: 'u2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the word',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/9d/74/9f/photo0jpg.jpg?w=1200&h=-1&s=1',
        address: '20 W 34th St., New York, NY 10001, Estados Unidos',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },

    },
]
export const UserPlaces = () => {


    const userId = useParams().userId;
    
    const loadedPlaces = DUMMY_PLACES.filter((places) => places.creator = userId);
    

    return (
        <PlacesList items={loadedPlaces} />
    )
}
