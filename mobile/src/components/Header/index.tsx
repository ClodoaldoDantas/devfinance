import React from 'react';
import { View, Image, Text } from 'react-native';
import { formatDate } from '../../utils/date';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} />
      <Text style={styles.date}>{formatDate(new Date())}</Text>
    </View>
  );
}
