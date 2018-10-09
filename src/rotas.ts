import express = require('express');
import UsuarioController from './controller/Usuario';

const ROUTER = express.Router();

const USUARIO_CONTROLLER = new UsuarioController();
const USUARIO_URL = 'usuario';

ROUTER
.get(`/${USUARIO_URL}/:id`, USUARIO_CONTROLLER.get);

export default ROUTER;
