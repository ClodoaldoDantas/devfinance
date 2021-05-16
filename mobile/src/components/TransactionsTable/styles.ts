import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: theme.font.regular,
    fontSize: 18,
    color: theme.colors.title,
    marginBottom: 16,
  },
  transaction: {
    backgroundColor: theme.colors.white,
    padding: 15,
    marginBottom: 16,
    borderRadius: 5,
  },
  transactionTitle: {
    fontFamily: theme.font.regular,
    fontSize: 14,
    color: theme.colors.title,
  },
  transactionPrice: {
    fontFamily: theme.font.regular,
    fontSize: 18,
    marginBottom: 20,
  },
  transactionInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionText: {
    fontFamily: theme.font.regular,
    fontSize: 14,
    color: theme.colors.text,
  },
});
