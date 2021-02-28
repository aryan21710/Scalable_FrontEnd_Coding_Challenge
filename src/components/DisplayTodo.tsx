import React from 'react';

interface IProps {
    todos: string[]
}

export const DisplayTodo:React.FC<IProps> = (props:IProps) => {
    const {todos}=props
    return (
        <React.Fragment>
            {todos.map((_,idx)=><p key={idx}>{_} <button>Delete</button></p>)}
        </React.Fragment>
    )
}
