import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'



function Todolist() {
    const [todos, setTodos] = useState([]);


    // function to add item to do list 
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    // function to mark item as completed 
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
    };

    // funtion to remove an item from the todolist 
    const removeTodo = id => { 
        // filters out the elements where the id equals to the todos id 
        let newArr = [...todos].filter(todo => id !== todo.id); 
        setTodos(newArr); 
    }


    // function to update an item in a todolist 
    const updateTodo = (id, updatedvalue) => {

        if (!updatedvalue.text || /^\s*$/.test(updatedvalue.text)) {
            return;
        }

        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
               todo = updatedvalue
            } 
            return todo;
          });

        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1> Create your to do list! </h1>
            <TodoForm onSubmit={addTodo}/> 
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            /> 
        </div>
    )
}

export default Todolist
