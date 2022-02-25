import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();
import { tasksConnect } from './db/db.js';
import * as crud from './services/crud.js';

const app = express();
const port = process.env.PORT;

const Task = tasksConnect();

app.use(express.json());
app.use(morgan('dev'));

app.get('/tasks', (req, res) => {
    crud.getAllTasks(Task).then((resp) => {
        res.send(resp);
    });
});

app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
