import React from 'react'
import { UserList } from '../components/UserList'

export const Users = () => {
  
    const USER=[{
        id:'u1',
        name:'martin',
        image:'https://st.depositphotos.com/1729435/2226/i/950/depositphotos_22262399-stock-photo-central-park-new-york-city.jpg',
        places:3,
    },];

    return (
        <UserList items={USER} />
    )
}
