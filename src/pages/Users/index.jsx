import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Trash from '../../assets/trash.svg';
import DefaultButton from '../../components/Button';
import DefaultTitle from '../../components/Title';
import DefaultTopBackground from '../../components/TopBackground';
import api from '../../services/api';
import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsers,
  TrashIcons,
} from './styles';

export function Users() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get('/users');
      setUsers(data);
    }
    loadUsers();
  }, []);

  async function deleteUser(id) {
    await api.delete(`/users/${id}`);

    const updtadedUsers = users.filter((user) => user.id !== id);
    setUsers(updtadedUsers);
  }

  return (
    <Container>
      <DefaultTopBackground />
      <DefaultTitle>Lista de usuários</DefaultTitle>
      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcons
              src={Trash}
              alt="lixeira"
              onClick={() => deleteUser(user.id)}
            />
          </CardUsers>
        ))}
      </ContainerUsers>
      <DefaultButton
        type="button"
        theme="primary"
        onClick={() => navigate('/')}
      >
        Voltar
      </DefaultButton>
    </Container>
  );
}

export default Users;
