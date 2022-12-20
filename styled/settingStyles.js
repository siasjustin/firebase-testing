import { StyleSheet } from 'react-native';
import theme from './theme';

const settingStyles = StyleSheet.create({
  outerContainer: {
    flexGrow: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: '100%',
  },
  rowHolder: {
    flex: 1,
    justifyContent: 'center',
    borderBottomColor: theme.colors.grey,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: theme.sizes.outerMargin
  },
  rightArrow: {
    height: 16,
    width: 10,
    paddingRight: 10,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#D8D8D8',
  },
  ctaContainer: {
    paddingHorizontal: theme.sizes.outerMargin
  }
});

export default settingStyles;
