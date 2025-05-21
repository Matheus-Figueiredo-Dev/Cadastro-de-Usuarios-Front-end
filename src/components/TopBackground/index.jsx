import Users from '../../assets/users.png';
import { TopBackground } from './styles';

function DefaultTopBackground() {
  return (
    <TopBackground>
      <img src={Users} alt="Imagem-de-usuários" />
    </TopBackground>
  );
}

export default DefaultTopBackground;
