import React, { useState, useContext } from 'react'
import axios from 'axios';
import { store } from './App';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate()
    const [token, setToken] = useContext(store)
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submitHandler = e => {
        console.log("front_end_login", data)
        e.preventDefault();
        axios.post('https://registration-login.onrender.com/login', data).then(
            res => setToken(res.data.token)
        )
    }
    if (token) {
        return navigate('/myprofile')
    }
    return (
        <div>
            <center>
                <form onSubmit={submitHandler} autoComplete="off">
                    <h3>Login</h3>
                    <label>email</label>&nbsp;&nbsp;<input type="email" onChange={changeHandler} name="email" placeholder="Email" /><br />
                    <label>password</label>&nbsp;&nbsp;<input type="password" onChange={changeHandler} name="password" placeholder="Password" /><br />
                    <input type="submit" value="Login" /><br />
                </form>
            </center>
        </div>
    )
}

export default Login
