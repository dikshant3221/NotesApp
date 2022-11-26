import './App.css';
import ShowList from './showList';
//import {  useNavigate} from 'react-router-dom';
function Notes({ topic, setTopic, description, setdescription, list, setList }) {
    //var navigate = useNavigate();

    var navigateToPage = (page) => {
        setList([...list, [topic, description]]);
        //navigate(page);
        onSubmit()
    }

    function updateTopic(e) {
        setTopic(e.target.value)
    }

    function updateDescrition(e) {
        setdescription(e.target.value)
    }

    function onSubmit(){
        document.getElementById("desc").value = "";
        document.getElementById("topic").value = "";
    }


    return (
        <div >
            <header className='header'>Notes</header>

            <form className="login" onSubmit={(e) => e.preventDefault()}>

                <div>
                    <label>Topic: </label>
                    <textarea id = "topic"placeholder='topic' onKeyUp={(e) => updateTopic(e)}></textarea>
                </div>
                <div>
                    <label>Description: </label>
                    <textarea id = "desc"placeholder='Description' onKeyUp={(e) => updateDescrition(e)}></textarea >
                </div>
                <button onClick={() => navigateToPage('/ShowList')} onSubmit = {()=>onSubmit()}>SaveInfo</button>
            </form>
            <>
                {list.map((item) => (
                    <ShowList topic={item[0]} description = {item[1]}/>
                ))}
            </>


        </div>
    );
}

export default Notes;
