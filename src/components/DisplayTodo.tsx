import React from 'react';
import {Container} from '@material-ui/core';


interface IProps {
    todos: string[]
}

export const DisplayTodo:React.FC<IProps> = (props:IProps) => {
    const {todos}=props
    return (
        <Container maxWidth="lg" style={{border: '1px solid red'}}>
            {todos.map((_,idx)=><p key={idx}>{_} <button>Delete</button></p>)}
        </Container>
    )
}
