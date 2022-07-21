import React from 'react'

import { Card } from '../../shared/components/UIElements/Card';
import { UserItem } from './UserItem';

import './UserList.css'


export const UserList = ({ items }) => {

    if (items.length === 0) {
        return (
            <div className='center'>
                <Card>
                    <h2>No user Found</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className='user__list'>
            {
                items.map(user => (

                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places} />
                ))
            }
        </ul>
    )
}
