import React, { FC } from 'react';
import  styled  from 'styled-components';
import { Todo } from '../model/model';
import SingleTodo from './SingleTodo';


interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 90%;
flex-wrap: wrap;
padding: 5px;
border: 2px;
border-color: white;
text-transform: uppercase;
@media (max-width: 700px) {
    flex-direction: column;
}
`;


const TodoList:FC<Props> = ({todos, setTodos}) => {
    return (
        <TodoContainer>
            {todos.map((todo)=>(
        <SingleTodo 
                todo={todo}
                todos={todos}
                setTodos={setTodos}
        />
      ))}
        </TodoContainer>
    );
};

export default TodoList;