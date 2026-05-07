import { useEffect, useState } from 'react';
import { getUsers } from './services/userService';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Servicedan ma'lumotni olish
    getUsers().then(data => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <h1>Foydalanuvchilar</h1>
      <ul>
        {users.map(user => (
          <h2 key={user.id}>{user.name}</h2>
        ))}
      </ul>
    </div>
  );
}

export default App;