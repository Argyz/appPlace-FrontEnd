import React from 'react'

import { Input } from '../../shared/components/FormElements/Input';
import { Button } from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hook/form-hooks';

import './PlacesForm.css';

export const NewPlaces = () => {

    const [formState,inputHandler] = useForm({
        title:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        },
        address:{
            value:'',
            isValid:false,
        }
    }, false);

    

    const placeSubmitHandler = (e) => {
        e.preventDefault();
        
    }

    return (
        <form className='place-form' onSubmit={placeSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="please enter a valid title"
                onInput={inputHandler} />

            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="please enter a valid description (at least 5 characters)"
                onInput={inputHandler} />

            <Input
                id="address"
                element="input"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="please enter a valid Address"
                onInput={inputHandler} />

            <Button type="submit" disabled={!formState.isValid}>
                ADD PLACE
            </Button>
        </form>
    )
}