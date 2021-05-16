import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export function Button({ label, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
