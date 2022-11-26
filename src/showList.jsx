import './App.css';

function ShowList({ topic,description}) {
  return (
    <>
    <ul>
        <li key={topic.toString()}>
            <div>
                <label> Topic:</label>
                <label>{topic}</label>
            </div>
            <div>
                <label> Description: </label>
                <label> {description}</label>
            </div>

        </li>
    </ul>
</>
  );
}

export default ShowList;
