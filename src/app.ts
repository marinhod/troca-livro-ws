import express = require('express');
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import router from './rotas';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.db();
        this.midleware();
        this.routes();
    }

    private async db(): Promise<void> {
        // Add here database configurations
        const url = 'mongodb://localhost:27017/trocalivro';
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log('Connected to DB successfully');
    }

    private midleware(): void {
        // Add here midleware configurations
        // Through this.app.use()

        // To suport POST requests with application/json
        this.app.use(bodyParser.json());
        // To suport POST requests with application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({extended: false}));
        // To suport CORS
        this.app.use(cors());
    }

    private routes(): void {
        // Add here routing configurations
        this.app.use('/api/v1', router);
    }
}

export default new App().app;
