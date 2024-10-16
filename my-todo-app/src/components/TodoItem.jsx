import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    setIsEditing(false);
    onUpdate(todo.id, newText);
  };

  return (
    <div className={`todo-item ${todo.priority.toLowerCase()}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleUpdate}
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{todo.text}</span>
      )}
      <span className="priority-tag">{todo.priority}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

// Define propTypes for props validation
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
