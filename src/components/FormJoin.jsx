import React, {useState} from "react";
import{useForm} from "react-hook-form";
import {Button, InputsForm, FormStyle} from './styles/Styles.jsx'

function FormJoin() {
    const {handleSubmit} = useForm();

    const [enters,setEnters] = useState([])

    const onSubmit = (data, e) => {
        setEnters([
            ...enters,
            data
        ])
        e.target.reset();
    }

    return (
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name: </label>
                <InputsForm  
                placeholder="Please enter a name" 
                type="text" 
                name="name" 
                />
            </div>    

            <div>
                <label>Email: </label>
                <InputsForm  
                placeholder="Please enter a email" 
                type="text" 
                name="email" 
                />
            </div>
            
            <div>
                <label>Password: </label>
                <InputsForm 
                placeholder="Please enter a password" 
                type="text" 
                name="password" 
                />
            </div>
            
            <Button className="btn btn-primary btn-form" type="submit">Join Now</Button>
        </FormStyle>
    )
}

export default FormJoin;