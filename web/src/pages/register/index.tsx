import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { api } from '../../services/api';
import styles from './styles.module.scss';
import { useTransactions } from '../../contexts/TransactionsContext';
import { Button } from '../../components/Button';

interface IFormData {
  title: string;
  price: string;
  category_id: string;
}

interface Category {
  id: number;
  name: string;
}

const schema = yup.object().shape({
  title: yup.string().required('Título é obrigatório'),
  price: yup.string().required('Preço é obrigatório'),
  category_id: yup.string().required('Categoria é obrigatória'),
});

export default function Register() {
  const { createTransaction } = useTransactions();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [type, setType] = useState('income');

  const options = categories.map(category => {
    return { label: category.name, value: category.id };
  });

  async function onSubmit(data: IFormData) {
    const payload = {
      title: data.title,
      price: Number(data.price),
      category_id: Number(data.category_id),
      type,
    };

    await createTransaction(payload);
  }

  useEffect(() => {
    api.get('categories').then(response => {
      setCategories(response.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Cadastro | dev.finance</title>
      </Head>

      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h3>Adicionar nova transação 💰</h3>

          <Input
            name="title"
            label="Título"
            error={errors.title}
            {...register('title')}
          />

          <Input
            type="number"
            name="price"
            label="Preço"
            error={errors.price}
            {...register('price')}
          />

          <div className={styles.buttonGroup}>
            <button
              type="button"
              className={type === 'income' ? styles.income : ''}
              onClick={() => setType('income')}
            >
              <img src="/income.svg" alt="Income" />
              Income
            </button>
            <button
              type="button"
              className={type === 'outcome' ? styles.outcome : ''}
              onClick={() => setType('outcome')}
            >
              <img src="/outcome.svg" alt="Outcome" />
              Outcome
            </button>
          </div>

          <Select
            name="category_id"
            label="Categoria"
            options={options}
            error={errors.category_id}
            {...register('category_id')}
          />

          <Button type="submit" isLoading={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </Button>
        </form>
      </div>
    </>
  );
}
