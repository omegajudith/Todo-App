import { useState } from 'react';
import TodoList from './components/TodoList';
import Login from './components/Login';
import './styles.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  const handleLogin = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <TodoList user={user} />
      )}
    </div>
  );
};

export default App;
