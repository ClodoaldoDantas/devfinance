import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  return <TextInput style={styles.container} placeholder={label} {...rest} />;
}
