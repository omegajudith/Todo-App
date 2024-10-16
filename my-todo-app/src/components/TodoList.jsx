import { useState } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ user }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState('Low');
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = () => {
    if (inputValue) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, priority, completed: false },
      ]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedText) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    ));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="todo-container">
      <h1>{user}&#39;s Todo List</h1>
      <div className="todo-header">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
        />
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={addTodo}>Add</button>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="search-icon">🔍</i>
        </div>
      </div>
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  user: PropTypes.string.isRequired,
};

export default TodoList;
