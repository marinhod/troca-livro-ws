import express = require('express');
import UsuarioController from './controllers/Usuario';
import LivroController from './controllers/Livro';

const ROUTER = express.Router();

const USUARIO_CONTROLLER = new UsuarioController();
const USUARIO_URL = 'usuario';

const LIVRO_CONTROLLER = new LivroController();
const LIVRO_URL = 'livro';

ROUTER
.get(`/${USUARIO_URL}/:slug`, USUARIO_CONTROLLER.get)
.post(`/${USUARIO_URL}`, USUARIO_CONTROLLER.create);

ROUTER
.get(`/${LIVRO_URL}/:slug`, LIVRO_CONTROLLER.get)
.post(`/${LIVRO_URL}`, LIVRO_CONTROLLER.create);

export default ROUTER;
