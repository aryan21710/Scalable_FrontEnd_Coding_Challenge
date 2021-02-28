import React from 'react';

interface IProps {
    inputValue: string,
    search: string,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onAddToDo: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    onSearchToDO: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    onSearchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void

}

export const InputTodo:React.FC<IProps> = (props:IProps) => {
    const {inputValue, search,onChangeHandler, onAddToDo, onSearchHandler, onSearchToDO} = props;
	return (
		<React.Fragment>
			<input placeholder="Add Todo" value={inputValue} onChange={onChangeHandler} />
			<button disabled={inputValue.length === 0} onClick={onAddToDo}>
				ADD
			</button>
            <br></br>
            <input placeholder="Search ToDo" value={search} onChange={onSearchHandler}/>
            <button disabled={search.length===0} onClick={onSearchToDO}>Search</button>
		</React.Fragment>
	);
};
