import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.greenDark,
    paddingVertical: 23,
    paddingHorizontal: 24,
    marginTop: Constants.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    fontFamily: theme.font.regular,
    fontSize: 14,
    color: theme.colors.white,
    opacity: 0.5,
  },
});
