import React, { useEffect, useRef } from 'react';
import { Button,TextField } from '@material-ui/core';

interface IProps {
	inputValue: string;
	search: string;
	onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onAddToDo: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onSearchToDO: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onSearchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputTodo: React.FC<IProps> = (props: IProps) => {
	const { inputValue, search, onChangeHandler, onAddToDo, onSearchHandler, onSearchToDO } = props;
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<React.Fragment>
			<TextField variant="filled" ref={inputRef} placeholder="Add Todo" value={inputValue} onChange={onChangeHandler} />
			<Button variant="contained" color="primary" disabled={inputValue.length === 0} onClick={onAddToDo}>
				ADD
			</Button>
			<br></br>
			<TextField  variant="filled" placeholder="Search ToDo" value={search} onChange={onSearchHandler} />
			<Button variant="contained" color="primary" disabled={search.length === 0} onClick={onSearchToDO}>
				Search
			</Button>
		</React.Fragment>
	);
};
