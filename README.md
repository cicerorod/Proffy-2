# Proffy
Este é um projeto desenvolvido durante a Next Level Week, realizada pela @Rocketseat durante os dias 3 a 9 de Agosto de 2020.

O Proffy visa conectar profissionais da educação para com possíveis novos alunos. Na plataforma você pode cadastrar-se como professor ou simplesmente listar todos os profissionais disponíveis com base em um sistema de filtros (dia da semana, horário e disciplina ministrada).

##  :camera: Preview

![Página inicial da aplicação](./docs/proffy-1.png)
![Página de cadastro de professores](./docs/proffy-2.png)
![Página de listagem de professores](./docs/proffy-3.png)

## :hammer: Instalação

### Server
Aplicação feita em Node.js e Typescript que utiliza o SQLite como banco de dados.
Ele é indispensável para a aplicação, portanto deve ser o primeiro a entrar em funcionamento.

```bash
# Navegue até a pasta server
cd server

# Para instalar todas as dependências do projeto
npm install

# Para criar as tabelas no banco de dados
npm run knex:migrate

# Para rodar a aplicação
npm start
```

**Rotas da aplicação:**

Listagem de professores:  `GET: /classes`

Criação de professor: `POST: /classes`

Retorna a quantidade de conexões feitas: `GET: /connections`

Criação de uma conexão: `POST: /connections`

------------

#### Web
Aplicação feita inteiramente em React.js e Typescript, que consome uma API REST fornecida pelo server.

```bash
# Navegue até a pasta web
cd web

# Para instalar todas as dependências do projeto
npm install

# Para rodar a aplicação
npm start
```

#### Mobile
Aplicação feita inteiramente em React Native e Typescript, que consome uma API REST fornecida pelo server.

```bash
# Navegue até a pasta mobile
cd mobile

# Para instalar todas as dependências do projeto
npm install

# Para rodar a aplicação
npm start
```

## :computer: Dependências de desenvolvimento

**Server**
- cors
- express
- knex
- sqlite3
- typescript

**Web**
- axios
- react-router-dom
- typescript

**Mobile**
- expo-google-fonts
- react-native-community/async-storage
- react-native-community/masked-view
- react-navigation/bottom-tabs
- react-navigation/native
- react-navigation/stack
- axios
- expo
- expo-font
- react-native-gesture-handler
- typescript

## [Próximas features](https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970)
- [ ] Autenticação de usuários
- [ ] Recuperação de senhas
- [ ] Perfil do proffy
- [ ] Splash Screen no React Native
- [ ] Paginação na listagem de proffys
- [ ] Exibindo horários disponíveis dos proffys
- [ ] Salvando seus proffys favoritos
- [ ] Logout da aplicação
- [ ] Deploy da aplicação










