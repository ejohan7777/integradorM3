import { useState } from "react";
import validation from "./validation";

const  Form = ({login}) => {

    const [userData, setUserData] = useState ({
        email: '',
        password: '', 
    })


    const [errors, setErrors] = useState({});

    
    const handleChange = (event) =>{
        let property = event.target.name
        let value = event.target.value
        console.log('property', property)
        console.log('value', value)

        setUserData({...userData, [property]: value })
        validation({...userData, [property]: value }, errors, setErrors)
    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        login(userData)
    }

    return (
        <div>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange}/>
            <p>{errors.email} </p>
            <label htmlFor="">Password</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange} />
            <p>{errors.password} </p>
            <button>Submit</button>

        </form>
        <p>Para Ingresar Usa:</p>
        <p>email = na@mail.com</p>
        <p>password = hola1234</p>

        </div>
    )

}

export default Form;