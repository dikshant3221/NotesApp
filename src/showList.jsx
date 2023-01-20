import './App.css';

function ShowList({ topic,description, onEditInfo,index,onDeleteInfo}) {

    function onEditClick(id){
        onEditInfo(id)
    }
    function onDeleteClick(id){
        onDeleteInfo(id)
    }

  return (
    <>
    <ul className ="showlist">
        <li >
            <div>
                <label> Topic:</label>
                <label>{topic}</label> 
            </div>
            <div>
                <label> Description: </label>
                <label> {description}</label>
               
            </div>
            <button onClick={(e)=>onEditClick(index)}>Edit  Info</button>
            <button onClick={(e)=>onDeleteClick(index)}> Delete Info</button>
        </li>
    </ul>
</>
  );
}

export default ShowList;
