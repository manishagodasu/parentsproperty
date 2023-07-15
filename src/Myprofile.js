import React,{useContext,useState,useEffect} from 'react'
import {store} from './App';
import axios from 'axios';
import avatar from './avatar.png';
import { useNavigate } from 'react-router-dom';

const Myprofile = () => {
    const navigate=useNavigate()
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('https://registration-login.onrender.com/myprofile',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    },[])
    if(!token){
        return navigate('/login')
    }
    return (
        <div>
            {
                data &&
            <center>
                <br />
                <div className="card" style={{"width": "18rem"}}>
                <img className="card-img-top" src={avatar} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Welcome : {data.username}</h5>
                    <button className="btn btn-primary" onClick={() => setToken(null)}>Logout</button>
                    
                </div>
                </div>
            </center>
        }
        </div>
    )
}

export default Myprofile
