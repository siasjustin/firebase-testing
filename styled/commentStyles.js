import { StyleSheet } from 'react-native';
import theme from './theme';

const imageHeight = 40;

const commentStyles = StyleSheet.create({
  container: {
    width: theme.sizes.paddedContainerWidth,
    justifyContent: 'flex-start',
    flexDirection: 'row',
		paddingBottom:20,
  },
  image: {
    height: imageHeight,
    width: imageHeight,
    borderRadius: imageHeight / 2,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  comment: {
    color: theme.colors.black,
    fontSize: 14,
  },
  editComment: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: theme.colors.darkGrey,
    color: theme.colors.darkGrey,
    fontSize: 12,
    fontWeight: 'bold',
		paddingTop:8
  },
});

export default commentStyles;
