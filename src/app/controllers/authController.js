const { User } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
    login: async function (req, res) {
        /*
            #swagger.description = 'Login.'
            #swagger.summary = 'Login do usuário.'
            #swagger.tags = ['Auth']
        */
        const {email, password} = req.body;

        const user = await User.findOne({where: {email} });

        if (!user || !bcrypt.compareSync(password, user.password)) {
               /* #swagger.responses[400] =  mensagem: "Email ou senha estão incorretos ou não existem!" } */
            return res.status(400).json({ mensagem: "Email ou senha estão incorretos ou não existem!" });
        }
        
        const token = jwt.sign({data: user}, 'MEU_CODIGO_SECRETO', { expiresIn: '1h' });

         /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Login result.',
                required: true,
                 schema: { $ref: "#/definitions/ResultLogin" }
        } */
        return res.json({ token, user })
    },
    register: async function (req, res) {
        /*
            #swagger.description = 'Register.'
            #swagger.summary = 'Cadastro do usuário.'
            #swagger.tags = ['Auth']
        */

         /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'User information.',
                required: true,
                schema: { $ref: "#/definitions/addUser" }
        } */
        const {name, email, password} = req.body;

        const hash = bcrypt.hashSync(password, 10);

        const newUser = await User.create({name, email, password: hash});

        /* #swagger.responses[201] = { id: "Example", name: "Example", email: "example@example.com"} */
        return res.status(201).json(newUser);
    }
}

module.exports = authController