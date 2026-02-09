# 🎬 Netflix Clone

Plataforma de streaming completa desenvolvida com React e Firebase, replicando as principais funcionalidades da Netflix.

![Netflix Clone](src/screenshots/Projeto-NetFlix-Clone.gif)


## 🚀 Demonstração

**🔗 Deploy ao vivo:** [Seu link Vercel aqui]

## 💻 Tecnologias Utilizadas

- **React.js** - Biblioteca JavaScript para construção de interfaces
- **Firebase** 
  - Authentication (autenticação de usuários)
  - Firestore (banco de dados)
- **TMDB API** - The Movie Database para dados de filmes
- **Axios** - Cliente HTTP para requisições
- **CSS3** - Estilização customizada
- **React Router DOM** - Navegação entre páginas
- **Vercel** - Deploy e hospedagem

## ⚙️ Funcionalidades

✅ **Sistema de Autenticação Completo**
  - Cadastro de novos usuários
  - Login com email e senha
  - Logout

✅ **Catálogo de Filmes e Séries**
  - Integração com TMDB API
  - Banner principal dinâmico
  - Múltiplas categorias (Em Alta, Originais Netflix, Ação, Comédia, Terror, Romance, Documentários)

✅ **Interface Responsiva**
  - Layout adaptável para desktop, tablet e mobile
  - Design fiel à Netflix original

✅ **Rows de Filmes Horizontais**
  - Scroll horizontal por categoria
  - Posters dos filmes com informações ao passar o mouse

## 📸 Screenshots

### Tela de Login
![Login](src/screenshots/Projeto-NetFlix-Clone-Login.gif)

### Página Principal
![Home](src/screenshots/Projeto-NetFlix-Clone-Tela-principal.gif)

### Catálogo de Filmes

![Catalogo](src/screenshots/Projeto-NetFlix-Clone-Catalogo.gif) 

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Git](https://git-scm.com/)
- Conta no [Firebase](https://firebase.google.com/)
- API Key do [TMDB](https://www.themoviedb.org/settings/api)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/Thiagobt03/netflix-clone.git
```

2. **Entre na pasta do projeto**
```bash
cd netflix-clone
```

3. **Instale as dependências**
```bash
npm install
```

4. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
REACT_APP_FIREBASE_API_KEY=sua_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=seu_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=seu_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
REACT_APP_FIREBASE_APP_ID=seu_app_id

REACT_APP_TMDB_API_KEY=sua_tmdb_api_key
```

**Como obter as credenciais:**

- **Firebase:** Acesse o [Console do Firebase](https://console.firebase.google.com/), crie um projeto e copie as credenciais em Project Settings > General
- **TMDB:** Crie uma conta em [TMDB](https://www.themoviedb.org/), vá em Settings > API e gere sua API Key

5. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

6. **Abra no navegador**
```
http://localhost:3000
```

## 📂 Estrutura de Pastas
```
netflix-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── Banner.js
│   │   ├── Banner.css
│   │   ├── Nav.js
│   │   ├── Nav.css
│   │   ├── Row.js
│   │   └── Row.css
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── HomeScreen.css
│   │   ├── LoginScreen.js
│   │   ├── LoginScreen.css
│   │   ├── ProfileScreen.js
│   │   └── ProfileScreen.css
│   ├── firebase.js
│   ├── axios.js
│   ├── requests.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🎓 Aprendizados

Durante o desenvolvimento deste projeto, aprendi e pratiquei:

- ✅ Componentização e reutilização de código no React
- ✅ Gerenciamento de estado com React Hooks (useState, useEffect)
- ✅ Integração com APIs REST (TMDB)
- ✅ Autenticação de usuários com Firebase Authentication
- ✅ Armazenamento de dados com Firebase Firestore
- ✅ Requisições HTTP com Axios
- ✅ Roteamento com React Router
- ✅ Deploy de aplicações React
- ✅ Boas práticas de organização de código

## 🚀 Deploy

Este projeto está hospedado na Vercel. Para fazer seu próprio deploy:

1. Crie uma conta na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente no painel da Vercel
4. Deploy automático a cada push na branch main

## 🔗 Links Úteis

- **Deploy:** [Link do projeto funcionando]
- **Repositório:** [https://github.com/Thiagobt03/netflix-clone](https://github.com/Thiagobt03/netflix-clone)
- **TMDB API:** [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
- **Firebase Docs:** [https://firebase.google.com/docs](https://firebase.google.com/docs)

## 👨‍💻 Autor

**Thiago Batista Correia Pereira**

Desenvolvedor Front-End em formação, cursando Ciência da Computação.

- 💼 [LinkedIn](https://www.linkedin.com/in/thiagobatista-dev/)
- 🐙 [GitHub](https://github.com/Thiagobt03)
- 📧 Email: ThiagoBatista0357@hotmail.com

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.

---

⭐ **Se você gostou deste projeto, deixe uma estrela no repositório!**

💬 **Sugestões e feedbacks são sempre bem-vindos!**