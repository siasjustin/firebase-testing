import { StyleSheet } from 'react-native';
import theme from './theme';

const keyboardHelperStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
		flexDirection: 'row',
  	flexWrap: 'wrap'
  },
  textInput: {
    color: theme.colors.pink,
    width: '100%',
    backgroundColor: 'black',
    padding: 20,
  },
});

export default keyboardHelperStyles;
