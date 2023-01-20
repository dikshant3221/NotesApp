import './App.css';
import ShowList from './showlist';
import Pagination from "react-js-pagination";
import { useState } from 'react';
import { useEffect } from 'react';
function Notes({ topic, setTopic, description, setdescription, list, setList }) {
    const [currentPage, setCurrentPage] = useState(1);
    //const [topElements, setTopElements] = useState([]);
    const recordPerPage = 3;
    const pageRange = 3;
    const [id,setId] = useState(null);
    
    useEffect(()=>{
        document.getElementById("updateButton").hidden =true;
    },[])

    var onSaveInfoClick = () => {
        setList([...list, [topic, description]]);
        document.getElementById("desc").value = "";
        document.getElementById("topic").value = "";
    }


    function onUpdateInfo (){
        let updatedlist = list.map((item,index)=>{
            if(index === id){
                item[0]= topic;
                item[1]=description;
                return item;
            }
            return item
        })
      
        setList(updatedlist);
        document.getElementById("desc").value = '';
        document.getElementById("topic").value = '';
        document.getElementById("updateButton").hidden =true;
      
     }

    const handlePageChange = pageNumber => {
        setCurrentPage(pageNumber);
    }

    function updateTopic(e) {
        setTopic(e.target.value)
    }

    function updateDescrition(e) {
        setdescription(e.target.value)
    }

    function onEditInfo(id){
        setTopic(list[id][0]);
        setdescription(list[id][1]);
        setId(id);
        document.getElementById("updateButton").hidden =false;
        document.getElementById("desc").value = list[id][0];
        document.getElementById("topic").value = list[id][1];
    }

    function onDeleteInfo(id){
        setId(id);
        var newList = list.filter((item,index)=>{
            if(index !== id){
                return item ;
            }
            return null;
        })
        setList(newList);
    }

    return (
        <div >
            <header className='header'>Notes</header>
            <form className="login" onSubmit={(e) => e.preventDefault()}>

                <div>
                    <label>Topic: </label>
                    <textarea id="topic" placeholder='topic' onKeyUp={(e) => updateTopic(e)}></textarea>
                </div>
                <div>
                    <label>Description: </label>
                    <textarea id="desc" placeholder='Description' onKeyUp={(e) => updateDescrition(e)}></textarea >
                </div>
                <div>
                <button id = "saveButton" onClick={() => onSaveInfoClick('/ShowList')}>SaveInfo</button>
                <button id = "updateButton" onClick={() => onUpdateInfo() }>UpdateInfo</button></div>
               
            </form>
            <>
                {list.map((item,index) => (
                   (item[0].length && index<3*currentPage && index>= 3*currentPage-3)?<ShowList key={index} topic={item[0]} description={item[1]} onEditInfo={onEditInfo} index = {index} onDeleteInfo = {onDeleteInfo}/>: null
                ))}
            </>

            {list.length>0?
            <Pagination className="pagination"
                activePage={currentPage}
                itemsCountPerPage={recordPerPage}
                totalItemsCount={(list.length && list.length > 1) ? list.length : 2}
                pageRangeDisplayed={pageRange}
                onChange={handlePageChange}
            />
            :null}
        </div>
    );
}

export default Notes;
