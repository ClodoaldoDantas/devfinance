import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  children: ReactNode;
}

export function Button({ isLoading, children, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} disabled={isLoading} {...rest}>
      {children}
    </button>
  );
}
