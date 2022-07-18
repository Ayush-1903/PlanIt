import TodoForm from './TodoForm';
import Todo from './Todo';
import { useState } from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import './Todo.css';

function TodoList(props) {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return(props.trigger) ? (
    <>
        <div className="body-todo">
            <h1 className="todoheading">What's the Plan for Today?</h1>
            <div className='icons-close'>
                <AiOutlineCloseCircle
                    onClick={() => props.setTrigger(false)}
                />
            </div>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    </>
  ): "";
}

export default TodoList;