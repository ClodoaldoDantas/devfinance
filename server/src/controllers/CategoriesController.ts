import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../models/Category';

export class CategoriesController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    const repository = getRepository(Category);

    const category = repository.create({ name });
    await repository.save(category);

    return res.json(category);
  }

  async index(req: Request, res: Response) {
    const repository = getRepository(Category);
    const categories = await repository.find();

    return res.json(categories);
  }
}
