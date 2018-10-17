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
.post(`/${USUARIO_URL}/add-livro`, [
  check('usuario').not().isEmpty().isString(),
  check('livro').not().isEmpty().isString(),
  check('opcao').not().isEmpty().isString().isIn(['insere', 'remove'])
  ],
  USUARIO_CONTROLLER.editaLivro);

ROUTER
.post(`/${USUARIO_URL}`, [
    check('nome').not().isEmpty().isString(),
    check('sobrenome').not().isEmpty().isString(),
    check('email').not().isEmpty().isEmail(),
    check('foto').isString()
  ],
  USUARIO_CONTROLLER.create);

// LIVRO
ROUTER
.get(`/${LIVRO_URL}/:slug`, LIVRO_CONTROLLER.get);

ROUTER
.post(`/${LIVRO_URL}`, [
    check('titulo').not().isEmpty().isString(),
    check('autor').not().isEmpty().isString(),
    check('ano').not().isEmpty().isString(),
    check('capa').not().isEmpty().isString(),
    check('descricao').not().isEmpty().isString()
  ],
  LIVRO_CONTROLLER.create)
.get(`/${LIVRO_URL}`, LIVRO_CONTROLLER.list);

export default ROUTER;
