import express = require('express');
import UsuarioController from './controller/Usuario';

const ROUTER = express.Router();

const USUARIO_CONTROLLER = new UsuarioController();
const USUARIO_URL = 'usuario';

const LIVRO_CONTROLLER = new UsuarioController();
const LIVRO_URL = 'livro';

ROUTER
.get(`/${USUARIO_URL}/:id`, USUARIO_CONTROLLER.get);

ROUTER
.get(`/${LIVRO_URL}/:id`, LIVRO_CONTROLLER.get);

export default ROUTER;