import 'reflect-metadata';
import './database/connection';

import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
const port = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
app.listen(3333, () => console.log(`🚀 Server started on port ${port}`));
