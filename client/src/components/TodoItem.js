import React from 'react';
import EditButton from './EditButton';


const TodoItem = (props) => {
    const id = props.todo.todo_id;
    const todos = props.todos;
    const setTodos = props.setTodos;
    const deleteTodo = async() => {
    try {
            await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
        })    
        setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
        console.log(err.message)
    }
}


    const style = {
        span: {
            width: '70%',
            fontSize: 'normal'

        }
    }

    return(
            <li className="list-group-item d-flex justify-content-around">
                <span className="font-weight-normal" style={style.span}>{props.todo.description}</span>
                <EditButton todos={todos} setTodos={setTodos} todo={props.todo} />
                <button onClick={() => deleteTodo()} className="btn btn-danger">Delete</button>
            </li>
    )
}

export default TodoItem;