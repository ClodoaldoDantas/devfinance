import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    fontFamily: theme.font.regular,
    backgroundColor: theme.colors.white,
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});
