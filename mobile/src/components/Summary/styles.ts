import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: theme.colors.greenDark,
    height: 150,
  },
  summaryList: {
    marginHorizontal: 15,
    position: 'absolute',
    top: 0,
  },
  summaryItem: {
    marginTop: 10,
    marginRight: 16,
    padding: 20,
    width: 300,
    height: 200,
    backgroundColor: theme.colors.white,
    borderRadius: 5,
  },
  summaryTotal: {
    marginRight: 0,
    backgroundColor: theme.colors.green,
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  summaryHeaderTitle: {
    fontFamily: theme.font.regular,
    fontSize: 14,
    color: theme.colors.title,
  },
  summaryValue: {
    fontFamily: theme.font.medium,
    color: theme.colors.title,
    fontSize: 30,
  },
  summaryDate: {
    fontFamily: theme.font.regular,
    fontSize: 12,
    color: theme.colors.text,
  },
});
