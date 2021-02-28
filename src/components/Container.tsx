import React, { useState, useEffect } from 'react';
import { InputTodo } from './InputTodo';
import { DisplayTodo } from './DisplayTodo';


export const Container: React.FC<any> = () => {
	const [inputValue, setInputValue] = useState('');
	const [search, setSearch] = useState('');
	const [todos, setToDos] = useState([]);
	const [copyOfToDos, setCopyOfToDos] = useState([]);
	const [isToDoAdded, setIsToDoAdded] = useState(false);
	const [isToDoSearched, setIsToDoSearched] = useState(false);
	useEffect(() => {
		isToDoAdded && updateToDoList();
	}, [isToDoAdded]);

	const updateToDoList = () => {
		setToDos([...todos, inputValue]);
		setCopyOfToDos([...todos, inputValue]);
		setIsToDoAdded(false);
		setInputValue('');
	};

	useEffect(() => {
		isToDoSearched && filterToDos();
	}, [isToDoSearched]);

	useEffect(() => {
		if (search.length === 0 && !isToDoAdded) {
			setToDos([...copyOfToDos]);
			setIsToDoAdded(false);
		}
	}, [search]);
	const onSearchToDO: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = () =>
		setIsToDoSearched(true);

	const filterToDos = () => {
		const filteredToDo = todos.filter((todo) => todo.includes(search));
		setIsToDoSearched(false);
		filteredToDo.length > 0 && setToDos([...filteredToDo]);
	};

	const onAddToDo: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = (e) => {
		e.preventDefault();
		setIsToDoAdded(true);
	};
	const onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void = (e) => setInputValue(e.target.value);
	const onSearchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void = (e) =>
		setSearch(e.target.value.trim());
	return (
		<React.Fragment>
			<h2>TODOLIST</h2>

			<InputTodo
				inputValue={inputValue}
				onAddToDo={onAddToDo}
				onChangeHandler={onChangeHandler}
				onSearchHandler={onSearchHandler}
				onSearchToDO={onSearchToDO}
				search={search}
			/>
            <DisplayTodo todos={todos}/>
		</React.Fragment>
	);
};
