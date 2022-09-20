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
flex: wrap;
text-transform: uppercase;
`;


const TodoList:FC<Props> = ({todos, setTodos}) => {
    return (
        <TodoContainer>
            {todos.map((todo)=>(
        <SingleTodo 
                todo={todo.todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
        />
      ))}
        </TodoContainer>
    );
};

export default TodoList;