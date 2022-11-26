import './App.css';
import SignUp from'./signup'
import {  useNavigate} from 'react-router-dom';
const Loginapp =({topic,setTopic,description, setdescription,list,setList})=>{ 
  var navigate = useNavigate();

  var navigateToPage = (page)=>{
    navigate(page);
  }

  function onSignupClick(){
    <SignUp 
    topic={topic}
    setTopic = {setTopic}
    description= {description}
    setdescription = {setdescription}
    list= {list}
    setList = {setList}/>
  }

  return (
    <div >
     <header className='header'>Notes</header>
     <select>
        <option value = {"SignUp"} onClick = {()=>onSignupClick()}> Login</option>
     </select>
    <form className="login" onSubmit={(e)=>e.preventDefault()}>
   
    <div>
        <label>Username: </label>
        <input type = 'email' placeholder='username' style={{"borderRadius":'5px'}}></input>
    </div>
    <div>
        <label>Password: </label>
        <input type= 'password' placeholder='password' style={{"borderRadius":'5px'}}></input>
    </div>
        
        <button style={{"backgroundColor":'white'}} onClick = {()=>navigateToPage('/Notes')}>SignIn</button>
    </form> 
        
    </div>
  );
}

export default Loginapp;
