import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest }: InputProps,
  ref
) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input ref={ref} name={name} id={name} {...rest} />

      {!!error && <span className="error">{error.message}</span>}
    </div>
  );
};

export const Input = forwardRef(InputBase);
