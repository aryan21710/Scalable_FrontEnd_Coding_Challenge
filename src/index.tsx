import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {sum,displayObj} from './common/utils'
import {myObj} from './common/constants';

const App:React.FC = () => {
    const [count,setCount]=useState(0);
    const [inputValue,setInputValue]=useState('');
    const [todo,setToDo]=useState([]);
    const [isToDoAdded, setIsToDoAdded]=useState(false)

    useEffect(()=>{
        isToDoAdded && updateToDoList()
    },[isToDoAdded])

    const updateToDoList=()=>{
        setToDo([...todo,inputValue])
        setIsToDoAdded(false)
        setInputValue('')
    }



    const onAddToDo:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void=(e)=>{
        e.preventDefault();
        setIsToDoAdded(true)
    }
    const onChangeHandler:(event: React.ChangeEvent<HTMLInputElement>) => void = (e)=>setInputValue(e.target.value);
    const onIncrementCount:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void=()=>setCount(count+1);


	return (
		<div>
			<p>{`output of sum is :- ${sum([10, 20, 30, 40])}`}</p>
			<hr></hr>
			<p>PASSING OBJECT TO A FUNCTION</p>
			{displayObj(myObj)
				.split('.')
				.map((_) => (
					<p>{_}</p>
				))}
			<hr></hr>
            <h2>REACT INCREMENT COUNT</h2>
            <hr></hr>
                <p>COUNT VALUE IS:- {count}</p>
                <button onClick={onIncrementCount}>+</button>
            <hr></hr>
            <h2>TODOLIST</h2>
            <input placeholder="Add Todo" value={inputValue} onChange={onChangeHandler}/>
            <button disabled={inputValue.length===0} onClick={onAddToDo}>ADD</button>
            <br></br>
            {todo.map((_,idx)=><p>{_} <button>Delete</button></p>)}

		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
