import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {sum,displayObj} from './common/utils'
import {myObj} from './common/constants';

const App:React.FC = () => {
    const [count,setCount]=useState(0);
    const [inputValue,setInputValue]=useState('');
    const [search,setSearch]=useState('');
    const [todos,setToDos]=useState([]);
    const [copyOfToDos,setCopyOfToDos]=useState([]);

    const [isToDoAdded, setIsToDoAdded]=useState(false)
    const [isToDoSearched, setIsToDoSearched]=useState(false)

    useEffect(()=>{
        isToDoAdded && updateToDoList()
    },[isToDoAdded])

    const updateToDoList=()=>{
        setToDos([...todos,inputValue])
        setCopyOfToDos([...todos,inputValue])
        setIsToDoAdded(false)
        setInputValue('')
    }

    useEffect(()=>{
        isToDoSearched && filterToDos()
    },[isToDoSearched])

    useEffect(()=>{
        if (search.length === 0 && !isToDoAdded) {
            setToDos([...copyOfToDos])
            setIsToDoAdded(false)
        } 
    },[search])

    const onSearchToDO:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = ()=>setIsToDoSearched(true)

    const filterToDos=()=>{
        const filteredToDo=todos.filter((todo)=>todo.includes(search))
        setIsToDoSearched(false)
        filteredToDo.length > 0 && setToDos([...filteredToDo])
    }

    const onAddToDo:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void=(e)=>{
        e.preventDefault();
        setIsToDoAdded(true)
    }
    const onChangeHandler:(event: React.ChangeEvent<HTMLInputElement>) => void = (e)=>setInputValue(e.target.value);
    const onIncrementCount:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void=()=>setCount(count+1);
    const onSearchHandler:(event: React.ChangeEvent<HTMLInputElement>) => void = (e)=>setSearch(e.target.value.trim());


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
            <input placeholder="Search ToDo" value={search} onChange={onSearchHandler}/>
            <button disabled={search.length===0} onClick={onSearchToDO}>Search</button>

            {todos.map((_,idx)=><p>{_} <button>Delete</button></p>)}

		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
