import './App.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Link from "@material-ui/core/Link";

const baseURL = 'https://mocki.io/v1/8a4f0edf-3cee-4cec-9d71-010628b80104'
const Loginapp = ({ topic, setTopic, description, setdescription, list, setList }) => {
  var navigate = useNavigate();
  const [response, setResponse] = useState({});

  useEffect(() => {
    document.getElementById("error").hidden = true;
    axios.get(baseURL).then((response) => {
      setResponse(response.data.users);
    })
  }, [])

  function validateUser(page) {
    var currentUserMail = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    response.map((user) => {
      if (user.mail === currentUserMail && user.password === password) {
        return  navigate(page);
      } else {
       return document.getElementById("error").hidden = false;
      }
    })
  }

  function onEmailUpdate() {
    document.getElementById("error").hidden = true;
  }

  return (
    <div >
      <header className='header'>Notes</header>
      <form className="login" onSubmit={(e) => e.preventDefault()}>

        <div>
          <label>Username: </label>
          <input type='email' id="email" placeholder='username' style={{ "borderRadius": '5px' }} onClick={() => onEmailUpdate()}></input>
        </div>
        <div>
          <label>Password: </label>
          <input type='password'id="password" placeholder='password' style={{ "borderRadius": '5px' }}></input>
        </div>
        <div><button style={{ "backgroundColor": 'white' }} onClick={() => validateUser('/Notes')}>SignIn</button>
        <Link
        onClick={()=>  navigate('/Signup')}
      >SignUp</Link></div>
        
        <label id="error" style={{"color": "red"}}>Please enter valid details seems like username or password is incorrect </label>
      </form>

    </div>
  );
}

export default Loginapp;
