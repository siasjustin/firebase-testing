import { StyleSheet } from 'react-native';
import theme from './theme';

const navStyles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    margin: 'auto',
    maxWidth: 400,
    flexWrap: 'wrap',
    marginTop: 50,
  },
  link: {
    fontSize: 14,
    padding: 3,
    margin: 5,
    color: theme.colors.linkText,
  },
});

export default navStyles;
