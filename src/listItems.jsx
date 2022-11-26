import './App.css';

function ListItems({topic,description}) {

  return (
    <div className='listItems' >
        <p>{topic}</p>
        <p>{description}</p>
   </div>
  );
}

export default ListItems;
