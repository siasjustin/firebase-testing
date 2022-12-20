import { StyleSheet } from 'react-native';
import theme from './theme';

const catNavStyles = StyleSheet.create({
  categoryNavContainer: {
    position: "relative",
    width: "100%",
    zIndex:2,
		borderBottomColor: theme.colors.lightGrey,
		borderBottomWidth: 2,
    paddingHorizontal:theme.sizes.outerMargin,
  },
  categoryTable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 20,
  },
  categoryHolder: {},
  link: {
    fontFamily: 'MaaxBold',
    textTransform: 'uppercase',
  },
  noLink: {
    fontFamily: 'MaaxBold',
    textTransform: 'uppercase',
    color:theme.colors.grey
  },
  text: {
    fontFamily: 'Maax',
    fontWeight: '600',
		textTransform: 'uppercase'
  },
  activeLink: {
    borderBottomColor: theme.colors.pink,
    borderBottomWidth: 3,
    textTransform: 'uppercase',
    fontFamily: 'MaaxBold',
  },
});

export default catNavStyles;
