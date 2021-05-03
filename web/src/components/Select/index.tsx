import {
  forwardRef,
  ForwardRefRenderFunction,
  SelectHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form';
import styles from './styles.module.scss';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{ value: string | number; label: string }>;
  error: FieldError;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { label, name, options, error = null, ...rest }: SelectProps,
  ref
) => {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" ref={ref} name={name} id={name} {...rest}>
        <option value="" disabled>
          Selecione uma opção
        </option>

        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {!!error && <span className="error">{error.message}</span>}
    </div>
  );
};

export const Select = forwardRef(SelectBase);
