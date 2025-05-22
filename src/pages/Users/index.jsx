import { useEffect, useState } from 'react';
import DefaultButton from '../../components/Button';
import DefaultTopBackground from '../../components/TopBackground';
import api from '../../services/api';

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get('/users');
      setUsers(data);
    }
    loadUsers();
  }, []);

  return (
    <div>
      <DefaultTopBackground />
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.email}</p>
        </div>
      ))}
      <DefaultButton>Voltar</DefaultButton>
    </div>
  );
}

export default Users;
