### 

<details>
<summary> Teste Prático - Desenvolvimento FullStack </summary>
<div class="text-justify">

Esse arquivo tem como objetivo esclarecer como deve ser feito o Teste Prático para a sua aplicação para a Osten Moove. Leia atentamente todas as instruções para que você realize o seu teste tranquilamente.

### Objetivos e Avisos
1. Este teste tem como intuito avaliar os seus conhecimentos técnicos para a sua candidatura de desenvolvedor Full Stack para a Osten Moove.
2. O objetivo deste teste é avaliar as suas habilidades em:
- Entendimento de escopo e requisitos;
- Programação back-endk usando o runtime JavaScript Node.js, usando TypeScript;
- Acesso e estruturação do banco de dados usando um ORM (Lucid, Sequelize ou Prisma);
- Programação front-end usando o framework Quasar, que utiliza como base o framework Vue.js.
- Integração entre o back-end e o front-end.
- Tomada de decisões acerca da estrutura e do processo de elaboração do sistema.
3. A Osten Moove não utilizará o código desenvolvido em qualquer outro software que estejasendo desenvolvido para os seus clientes, tampouco será comercializado. Os direitos permanecerão com o concorrente.
4. A Osten Moove apenas utilizará o código desenvolvido para avaliar o candidato durante o processo de avaliação, não sendo utilizado após esse processo.

### Escopo do Projeto
O projeto é dividido em duas partes, uma parte de back-end e outra parte de front-end.

#### Back-end
Você deve fazer uma API back-end de cadastro de empresas. Para o nosso entendimento, Empresa é uma entidade que deve ser salva no banco de dados, que contêm os seguintes dados.
1. Id da empresa (deve ser autoincrementado, ou seja, não precisa ser informado)
2. Razão Social da Empresa
3. Nome Fantasia da Empresa
4. CNPJ da Empresa
5. Endereço da empresa (cada empresa deve ter um endereço)
- Logradouro da empresa (nome da Rua/Avenida)
- Número do logradouro
- Complemento (opcional)
- Bairro
- Cidade
- Estado
6. Telefone de Contato (com prefixo)

A API deve fazer as seguintes operações, seguindo o padrão REST:

1. Uma rota de listagem de todas as empresas cadastradas no sistema, havendo a possibilidade de colocar um parâmetro de busca por razão social da empresa, que deve pesquisar as empresas que contenham na Razão Social o texto indicado neste parâmetro.
2. Uma rota para detalhar os dados da empresa pelo ID informado na URL. Caso o ID não exista no banco de dados, deve disparar um erro 404.
3. Uma rota para salvar os dados da empresa. Deve validar os inputs para que todos os campos indicados no modelo de dados obrigatórios (são aqueles que não são indicados como opcionais), recusando inputs que não contenham todos os dados obrigatórios. A rota também deve validar se o CNPJ informado é válido pelo dígito verificador. Além disso, a rota deve verificar se o CNPJ informado já estiver cadastrado na tabela, negando a requisição. Se todas as condições forem satsfeitas, deve ser salvo no banco de dados, retornando o código 201, e os dados da empresa salvo.
4. Uma rota PATCH para atualizar os dados da empresa cujo id informado na URL, validando a questão de CNPJs inválidos.
5. Uma rota DELETE para deletar os dados da empresa cujo id informado na URL, disparando erro 404 em caso de dados inexistentes e disparando 204 em caso de remoção concluída com êxito.
A API deve ser implementada para ser executada em um runtime Node.JS, podendo ser usado um framework (como por exemplo Nest). Os dados da empresa deverão ser salvos usando um banco de dados relacional (podendo ser SQLite, MySQL), devendo ser usado um ORM para fazer as operações do banco de dados (como por exemplo Prisma ou Lucid). Deve conter nessa API alguma forma de criação das tabelas do banco de dados, por meio de migrações. A API deve permitir a especificação dos parâmetros de conexão com o banco de dados por meio de um arquivo env.

#### Front-end
Você deve fazer um projeto Front-end usando o framework Quasar, contendo uma interface HTML/Javascript que interage com essa API acima. Ou seja, você deve   fazer o layout desta página e fazer as integrações com essa API que você construiu. Esse front-end deve ter:
1. Uma tabela contendo uma lista de empresas, contendo id, razão social e CNPJ, um botão para mais detalhes, outro para editar a empresa, e outro para apagar a empresa.
2. Quando a pessoa clicar no botão de mais detalhes, deve ser exibido um modal indicando todos os dados da empresa cadastrada.
3. Quando a pessoa clicar no botão de editar a empresa, aparecerá um modal com os dados atuais da empresa, e deverá permitir o usuário inputar os novos dados da empresa e submeter os dados para a API, para fazer a edição.
4. Quando a pessoa clicar no botão de apagar a empresa, aparecerá um modal exigindo a confirmação da remoção da empresa para o usuário. Ao confirmar, deve ser submetida um pedido de remoção de dados na API, e a tabela deve atualizar com a lista atualizada de empresas.
5. Acima da tabela de lista de empresas, deve conter um campo de pesquisa de empresas por razão social, devendo receber os dados digitados e submeter uma pesquisa na API de empresas por razão social.
6. Também acima da tabela da lista de empresas, deverá conter um botão para adicionar uma nova empresa no sistema. Deve ser aberto um modal ou um formulário para permitir o usuário digitar os novos dados da empresa e submeter a API a criação. Se a API retornar 201, deve ser atualizada a tabela de empresas.

#### O que é necessário enviar
Você deve construir o projeto front-end e back-end em um repositório Git único e público hospedado no Gitlab (preferível), Github ou Bitbucket, sendo uma pasta para o projeto front-end e outra pasta para o projeto back-end. Na raiz do projeto, deve conter um arquivo README.md com todas as instruções necessárias para criar o banco de dados, configurar a API backend, rodar a API back-end, configurar o front-end com a URL da API e rodar o front-end.

</div>
</details>

## Projeto
Aplicação de Cadastro de Empresas integrando entre o back-end em Node.js usando TypeScript e AdonisJS com front-end em Quasar VueJS, conectado e armazenado banco de dados local (SQLite) usando um ORM (Lucid). Utilizando Arquitetura MVC, pontos de APIRestful e CleanCode.

## Diagrama
<img width="700" src="frontend\src\assets\diagrama.JPG">

### Rodando a aplicação

Baixe ou clone a aplicação em sua máquina, dentro da pasta backend execute o comando:
```bash
node ace serve --watch
```
Aplicação abrirá em na Porta 3333 -> Rotas estão agrupadas, portando a raiz exibirá Hello World por default e métodos estão dentro do caminho 'localhost:3333/api/companies'

Agora dentro da pasta frontend execute o comando 
```bash
npx quasar dev
```
Aplicação abrirá em na Porta 9000 -> E exibirá a seguinte tela!

O teste de API foi feito através o Thunder Client, uma extensão do Visual Studio Code!

A Visualização das tabelas criadas foi atraves do SQLite Viewer (Internamente) e do Bekeeper Studio (Externamente)

## Criação
### Instalação e Preparação - Ambiente Backend

Use o gerenciador de pacotes node [npm](https://docs.adonisjs.com/guides/installation) para iniciar a aplicação e criar as configurações iniciais.

```bash
npm init adonis-ts-app@latest hello-world
```

```bash
node ace serve --watch
```

### Instalação e Preparação - Ambiente Frontend

Use o gerenciador de pacotes node [npm](https://quasar.dev/start/quasar-cli) para iniciar a aplicação e criar a estrutura de pastas inicial.

```bash
$ npm i -g @quasar/cli
$ npm init quasar
```
Verifique os scripts do package.json

```bash
// package.json
"scripts": {
  "dev": "quasar dev",
  "build": "quasar build",
  "build:pwa": "quasar build -m pwa"
}
```
E inicie a aplicação com comando abaixo:

```bash
npx quasar dev
```
### Algumas configurações 

Conventional Commits é uma convenção em cima dos commits que fornece um conjunto fácil de regras para criar um histórico de confirmação explícito; o que torna mais fácil escrevê-los e identifica-los. 
```bash
npm i -D git-commit-msg-linter
```

### Ferramentas Utilizadas
- Visual Studio Code
- WSL Ubuntu 20.04LTS
- Node v16.15.1
- npm 8.11.0
- SQLite
- Bekeeper Studio
- Git
- 

### Autor
Jordan Cruz
