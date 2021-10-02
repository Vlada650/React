import React, { useState } from "react";

export default function Login() {

    const [errorMes, setError] = useState(false)
    const [value, setValue] = useState({
        login: '',
        password: ''
    })

    const handleChange = (e) => {
        setValue({ [e.target.name]: e.target.value })
    }
    const validateFunc = (e) => {
        if (e.target.value == "") {
            setError(true)
            e.preventDefault()
        }
    }

    return (
        <form action="">
            <input type="text" value={value.login} onChange={handleChange} id="login" className="fadeIn" name="login" placeholder="login" />
            <input type="password" value={value.password} id="password" onChange={handleChange} className="fadeIn" name="password" placeholder="password" />
            <button onClick={validateFunc} className="btn" >Log In</button>
            {errorMes && <span>Заполните все поля!</span>}</form>
    );
}