import './App.css';
function Signup ({state,setState}) {

    function onMinusButtonClick(){
        var count = state;
        count--; 
       if(count>0){
        setState(count)
    }
    }

    function onPlusButtonClick(){
        var count = state;
        count++;
        if(count<25){
            setState(count)
        }
    }

  return (
    <div>
        <form className='signup' onSubmit={(e)=>e.preventDefault()}>
        <button onClick={()=>onMinusButtonClick()}>-</button>
        <button onClick={()=>onPlusButtonClick()}>+</button>
        <input value={state}  onChange={(e) => setState(e.target.value)}></input>
        </form >
    </div>
  )
}
export default Signup;
