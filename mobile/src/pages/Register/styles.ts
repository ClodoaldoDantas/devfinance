import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    paddingHorizontal: 24,
  },
  title: {
    marginVertical: 24,
    fontFamily: theme.font.regular,
    fontSize: 20,
    color: theme.colors.title,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 24,
    height: 24,
  },
  buttonText: {
    fontFamily: theme.font.regular,
    color: theme.colors.title,
    marginLeft: 12,
  },
  pickerContainer: {
    height: 50,
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    color: theme.colors.title,
  },
});
