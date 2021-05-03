import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Transaction } from './Transaction';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Transaction, transaction => transaction.category)
  @JoinColumn({ name: 'category_id' })
  transactions: Transaction[];
}
