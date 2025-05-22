import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultButton from '../../components/Button';
import DefaultTitle from '../../components/Title';
import DefaultTopBackground from '../../components/TopBackground';
import api from '../../services/api';
import { Container, ContainerInputs, Form, Input, InputLabel } from './styles';

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    const data = await api.post('/users', {
      name: inputName.current.value,
      age: Number.parseInt(inputAge.current.value),
      email: inputEmail.current.value,
    });
    navigate('/lista-de-usuarios');
  }

  return (
    <>
      <Container>
        <DefaultTopBackground />
        <Form>
          <DefaultTitle>Cadastro de Usuários</DefaultTitle>
          <ContainerInputs>
            <div>
              <InputLabel>
                Nome <span>*</span>
                <Input
                  type="text"
                  placeholder="Nome do usuário"
                  ref={inputName}
                />
              </InputLabel>
            </div>

            <div>
              <InputLabel>
                Idade <span>*</span>
              </InputLabel>
              <Input
                type="number"
                placeholder="Idade do usuário"
                ref={inputAge}
              />
            </div>
          </ContainerInputs>
          <div style={{ width: '100%' }}>
            <InputLabel>
              E-mail <span>*</span>
              <Input
                type="email"
                placeholder="E-mail do usuário"
                ref={inputEmail}
              />
            </InputLabel>
          </div>
          <DefaultButton
            type="button"
            onClick={registerNewUser}
            theme="primary"
          >
            Cadastrar Usuário
          </DefaultButton>
        </Form>
        <DefaultButton
          type="button"
          onClick={() => navigate('/lista-de-usuarios')}
        >
          Ver Lista de Usuários
        </DefaultButton>
      </Container>
    </>
  );
}

export default Home;
