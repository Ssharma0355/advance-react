import React, { useState } from 'react'
import "./ss.css"

function Todolist() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addTodo =()=>{
    if(input.trim ==="") return;
    const items = {
      id: todoList.length + 1,
      text: input.trim(),
      completed:false
    };
    setTodoList(prev => [...prev,items]);
    setInput("");
  }
  const deleteTodo =(id)=>{
    setTodoList(todoList.filter(t=>(t.id !== id)))
  }
  const toggleCompleted =(id)=>{
    setTodoList(todoList.map(t=>{
      if(t.id === id){
        return{
          ...t,
          completed:!t.completed
        }
      }
      else return t;
    }))
  }
  return (
    <div>
      <input
        type="text"
        placeholder="enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <div>
        <ul>
          {todoList.map((t, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleCompleted(t.id)}
              />
              <span className={t.completed ? "line" : ""}>{t.text}</span>
              <button onClick={() => deleteTodo(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Todolist
