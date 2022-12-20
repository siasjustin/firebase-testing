import { StyleSheet } from 'react-native';
import theme from './theme';

const headerStyles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    position: 'relative',
    width: '100%',
    backgroundColor: theme.colors.white,
    margin: 'auto',
    maxWidth: 400,
  },
  container: {
    paddingHorizontal: theme.sizes.outerMargin,
    backgroundColor: theme.colors.white,
    width:"100%",
    flex:1 // for
  },
  tabHeaderView: {
    height: theme.sizes.headerHeight,
    backgroundColor: theme.colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  headerFlex: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  headerRight: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  tabFooterView: {
    position: 'relative',
    height: theme.sizes.footerHeight,
    width: '100%',
    backgroundColor: theme.colors.lightGrey,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '90%',
    maxWidth: 400,
  },
  logo: {
    width: 116,
    height: 18,
  },
  footerIconHolder: {
		justifyContent: 'center'
	},
  ScrollViewStyles: {
    marginTop: 0,
  },
  centerer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default headerStyles;
