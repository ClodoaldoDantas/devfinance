import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Category } from './Category';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  category_id: number;

  @ManyToOne(() => Category, category => category.transactions)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  type: string;

  @CreateDateColumn()
  created_at: Date;
}
