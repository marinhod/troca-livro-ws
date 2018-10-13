import express = require('express');
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as expressValidator from 'express-validator';
import router from './rotas';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.db();
        this.routes();
    }

    private async db(): Promise<void> {
        // Add here database configurations
        const url = 'mongodb://localhost:27017/trocalivro';
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log('Connected to DB successfully');
    }

    private middlewares(): void {
        this.app.use(expressValidator());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(cors());
    }

    private routes(): void {
        // Add here routing configurations
        this.app.use('/api/v1', router);
    }
}

export default new App().app;
