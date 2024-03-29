const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/docs/swagger_output.json'
const endpointsFiles = ['./src/app/routers/index.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "Blog API",
        description: "Documentação da API em Nodejs, desenvolvida pelos aluno da turma Gerando Falcões Fullstack Node. No intuito de alimentar aplicações frontend desenvolvidas com o Reactjs durante a aula."
    },
    host: "localhost:3001",
    basePath: "/",
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Posts",
            "description": "Endpoints"
        },
        {
            name: "Auth",
            description: "Endpoints para autenticação dos usuários"
        }
    ],
    definitions: {
        Post: {
            id: 1,
            title: "examplo",
            description: "example",
            createdAt: "12/12/2022",
        },
        AddPost: {
            $title: "Example",
            $description: "example",
        },
        Posts: [
            {
                "$ref": "#/definitions/Post" 
            }
        ],
        addUser: {
            $name: "Example",
            $email: "example@example.com",
            $password: "example"
        },
        ResultLogin: {
            $token: "example",
            $user: {
                id: 0,
                name: "example",
                email: "example@example.com",
            }
        }
    }
}
swaggerAutogen(outputFile, endpointsFiles, doc)