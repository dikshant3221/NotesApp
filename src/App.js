import './App.css';
import { useState } from 'react';
import Loginapp  from './loginapp.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Notes from './notes'
import ShowList from './showList'
import ListItem from './listItems'
function App() {

  const [topic,setTopic] = useState();
  const [description,setdescription] = useState();
  const [list,setList] = useState([])

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path ="/Login" element = {<Loginapp 
        topic= {topic}
        setTopic = {setTopic}
        description= {description}
        setdescription = {setdescription}
        list= {list}
        setList = {setList}
        />}/>
        <Route exact path ="/Notes" element = {<Notes topic={topic} setTopic={setTopic} description= {description}
        setdescription = {setdescription}
        list= {list}
        setList = {setList}/>}/>
        <Route exact path ="/ListItem" element = {<ListItem topic={topic} description={description}/>}/>
        <Route exact path ="/ShowList" element = {<ShowList topic={topic} description={description} />}/>
        </Routes>
        </Router>

    </div>
  );
}

export default App;
