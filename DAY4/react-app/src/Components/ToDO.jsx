import React, { useState } from 'react'
import '../Styles/ToDO.css'
import uuid from 'react-uuid';

export default function ToDO() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


   const [todos, setTodos] = useState([]);

    const Todos = ({ todo }) => (
        <div className='todoCard'>
            <h3>Title: {todo.title}</h3>
            <p>Description: {todo.disc}</p>
        </div>
    );

    const handleAddTodo = (e) => {
        if (e) e.preventDefault();
        if (title.trim() === '' || description.trim() === '') {
            alert('Please fill in both fields');
            return;
        }

        const newTodo = {
            id: uuid(),
            title: title,
            disc: description
        };

        setTodos([...todos, newTodo]);
        setTitle('');
        setDescription('');
        console.log(todos.id);
    }
    const handleDeleteTodo = (deleteId) => {
        const newTodos = todos.filter(todo => todo.id !== deleteId);
        setTodos(newTodos);
    }
  return (
    <center>
    <div>
        <label htmlFor="title">Title:</label>
        <input type="text" placeholder='Enter Title' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label htmlFor="description">Description:</label>
        <input type="text" placeholder='Enter Description' id='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button className='btnadd' onClick={()=> handleAddTodo()}>Add Todo</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <Todos todo={todo} />
          <button className='btn' onClick={()=> handleDeleteTodo(todo.id)}>Delete Todo</button>
        </div>
      ))}
    </div>
    </center>
  )
}
