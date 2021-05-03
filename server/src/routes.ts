import { Router } from 'express';
import { upload } from './config/upload';
import { CategoriesController } from './controllers/CategoriesController';
import { TransactionsController } from './controllers/TransactionsController';

const routes = Router();
const categoriesController = new CategoriesController();
const transactionsController = new TransactionsController();

routes.get('/categories', categoriesController.index);
routes.post('/categories', categoriesController.create);

routes.get('/transactions', transactionsController.index);
routes.post('/transactions', transactionsController.create);

routes.post(
  '/transactions/import',
  upload.single('arquivo'),
  transactionsController.import
);

export default routes;
