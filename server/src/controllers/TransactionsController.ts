import { Request, Response } from 'express';
import { getRepository, getConnection } from 'typeorm';
import { Transaction } from '../models/Transaction';

import csv from 'csvtojson';
import fs from 'fs';

export class TransactionsController {
  async create(req: Request, res: Response) {
    const { title, price, type, category_id } = req.body;
    const repository = getRepository(Transaction);

    const transaction = repository.create({ title, price, type, category_id });
    await repository.save(transaction);

    return res.json(transaction);
  }

  async index(req: Request, res: Response) {
    const repository = getRepository(Transaction);
    const transactions = await repository.find({
      relations: ['category'],
      order: {
        created_at: 'DESC',
      },
    });

    return res.json(transactions);
  }

  async import(req: Request, res: Response) {
    try {
      const json = await csv().fromFile(req.file.path);

      const transactions = json.map(transaction => {
        return {
          ...transaction,
          category_id: Number(transaction.category_id),
          price: Number(transaction.price),
        };
      });

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Transaction)
        .values(transactions)
        .execute();

      fs.unlinkSync(req.file.path);
      return res.status(204).send();
    } catch {
      return res
        .status(400)
        .json({ error: 'Não foi possível importar o arquivo' });
    }
  }
}
