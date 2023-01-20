import './App.css';
import { useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const baseURL = 'https://mocki.io/v1/8c6052e4-2f30-4d22-b054-868922c82571'
const Loginapp = ({ topic, setTopic, description, setdescription, list, setList }) => {
   var navigate = useNavigate();
   // const [response, setResponse] = useState({});
    const [user, setuser] = useState({
        "email": "",
        "password": "",
        "username": ""
    })

    // useEffect(() => {
    //     document.getElementById("error").hidden = true;
    //     axios.get(baseURL).then((response) => {
    //         setResponse(response.data.users);
    //     })
    // }, [])

    function updateNewUser(page) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("email").value;
        var username = document.getElementById("email").value;
        const newUser = user;
        newUser.email = email;
        newUser.password = password;
        newUser.username = username;
        setuser(newUser);
        axios.put(`${baseURL}/1`,user).then((response) => {
            navigate(page)
        })

  }

    return (
        <div >
            <header className='header'>Notes</header>
            <form className="signup" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>UserName: </label>
                    <input type='name' id="name" placeholder='username' style={{ "borderRadius": '5px' }}></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input type='email' id="email" placeholder='email' style={{ "borderRadius": '5px' }}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type='password' id="password" placeholder='Must be difficult ot Hack' style={{ "borderRadius": '5px' }}></input>
                </div>
                <button style={{ "backgroundColor": 'white' }} onClick={() => updateNewUser('/Login')}>SignUp</button>
            </form>

        </div>
    );
}

export default Loginapp;
