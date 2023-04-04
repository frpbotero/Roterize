# Roterize

<img src="https://github.com/FeBotero/Roterize/blob/main/frontend/public/Router1.svg"  width="120" alt="Roterize">

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

<img src="https://github.com/FeBotero/Roterize/blob/main/frontend/public/Home.png" alt="Roterize">

Projeto consiste em um sistema de controle de entrega, onde foi adicionado um campo de coleta de assinatura de recebimento. O usuário pode cadastrar os produtos, clientes e pedidos para ser entregue. Onde possui uma interface para Administrador e outra para o Entregador, filtrando todos os pedidos do dia e sua rota.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Assinatura de Recebimento
- [x] CRUD produtos, clientes e pedidos
- [x] Responsividade Delivery Mobile
- [ ] Filtro delivery por data(Ano/Mês/Dia), por empresa
- [ ] Organização de rota arrastavel
- [ ] Exportar endereço para Api do GoogleMaps
- [ ] Criaçaõ de PDF
- [ ] Autenticação com JWT

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você precisar criar um conta no Atlas MongoDB, em seguida criar um projeto para iniciar o backend.
- Crie um arquivo env com as variaveis de ambiente, adicionando como URL o endereço do seu projeto no Atlas MongoDB

## 🚀 Instalando <Roterize>

Para instalar o <Roterize>, siga estas etapas:

<p>1 - Clone o repositório</p>
   
`$ git clone https://github.com/FeBotero/Roterize.git`

<p>2 - Acesse no repositório localmente</p>

`$ cd Roterize`

<h3>Agora vamos instalar as dependencia do backend e do frontend.</h3>

<p>3 - selecione o backend do repositório</p>

`$ cd backend`

<p>4 - Instale as dependências</p>

`$ npm install`

<p>5 - selecione o frontend do repositório</p>

`$ cd frontend`

<p>6 - Instale as dependências</p>

`$ npm install`

<p>7 - Acesse novamente o backend e o backend da aplicação</p>

`$ npm start`

<p>8 - Acesse novamente o frontend e o frontend da aplicação</p>

`$ npm start`

```

## ☕ Usando Roterize

Para usar Roterize, siga estas etapas:

Para iniciar o uso do Roterize, é necessario a criação de uma conta no Atlas MongoDB, para que seja criado um banco de dados MongoDB hospedado neste dominio. Apos isso será necessario criar um arquivo env para inputar o caminho de conexão com o DB, atraves de uma variavel de ambiente "URL".

Hoje o sistema ainda não conta com autenticação, então assim que você acessar o login, pode apenas clicar em login que vai ser redirecionado para area de usuário.
O sistema contem um formulario de assinatura, onde durante a entrega o usuario pode coletar assinatura de quem está recebendo.

## 📫 Contribuindo para <Roterize>

Para contribuir com <Roterize>, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <Roterize> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).






```
