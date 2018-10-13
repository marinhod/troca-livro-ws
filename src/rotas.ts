import express = require('express');
import { check } from 'express-validator/check';
import UsuarioController from './controllers/Usuario';
import LivroController from './controllers/Livro';

const ROUTER = express.Router();

const USUARIO_CONTROLLER = new UsuarioController();
const USUARIO_URL = 'usuario';

const LIVRO_CONTROLLER = new LivroController();
const LIVRO_URL = 'livro';

// USUARIO
ROUTER
.get(`/${USUARIO_URL}/:slug`, USUARIO_CONTROLLER.get);

ROUTER
.post(`/${USUARIO_URL}`, [
    check('nome').not().isEmpty(),
    check('sobrenome').not().isEmpty(),
    check('email').not().isEmpty().isEmail()
  ],
  USUARIO_CONTROLLER.create);

// LIVRO
ROUTER
.get(`/${LIVRO_URL}/:slug`, LIVRO_CONTROLLER.get);

ROUTER
.get(`/${LIVRO_URL}`, LIVRO_CONTROLLER.create);

export default ROUTER;
