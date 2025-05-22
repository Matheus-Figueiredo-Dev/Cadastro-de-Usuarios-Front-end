👤 Sistema de Cadastro de Usuários – Front-end

Este é o front-end de um sistema completo de cadastro de usuários, desenvolvido em **React**. A aplicação permite interagir com a API para realizar operações de cadastro, listagem e exclusão de usuários.

---

## 🚀 Tecnologias utilizadas

- **React** – Biblioteca JavaScript para construção de interfaces
- **Vite** – Ferramenta de build rápida para projetos React
- **Styled-components** – Estilização de componentes via CSS-in-JS
- **Axios** – Cliente HTTP para requisições à API
- **React Hooks**:
  - `useState`
  - `useEffect`
  - `useRef`
  - `useNavigate` (via `react-router-dom`)

---

## 🖥 Funcionalidades

- 📄 Cadastro de usuários
- 📋 Listagem de usuários cadastrados
- 🗑️ Exclusão de usuários
- ✨ Integração com back-end via API REST

---

💡 Observações
O projeto foi construído com o objetivo de praticar React + integração com API back-end.

As funcionalidades de edição de usuários serão implementadas em breve.

🖼 Demonstração
![image](https://github.com/user-attachments/assets/6eb37fdc-d8f9-4c83-b594-81f85aa47335)

![image](https://github.com/user-attachments/assets/f484ee4f-5687-41c0-807b-4aab568fcca6)

## ⚙️ Como executar o projeto

1. **Clone o repositório**:

```bash
git clone https://github.com/Matheus-Figueiredo-Dev/Cadastro-de-usuarios-front-end.git
cd nome-do-repo-frontend
Instale as dependências:
npm install

Configure a URL da API:
No arquivo src/services/api.js, atualize a baseURL com o endereço da sua API:

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002' // ou a URL da sua API hospedada
});

export default api;
Inicie a aplicação:

npm run dev
