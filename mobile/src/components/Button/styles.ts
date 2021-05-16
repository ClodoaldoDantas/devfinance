import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: theme.colors.green,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: theme.font.medium,
    fontSize: 14,
    color: theme.colors.white,
  },
});
