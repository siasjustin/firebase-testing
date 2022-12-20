import { StyleSheet } from 'react-native';
import theme from './theme';

const postStyles = StyleSheet.create({
  container: {
    margin: 'auto',
    width: '100%',
  },
  outerContainer: {
    width: '100%',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 'auto',
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'MaaxBold',
    fontSize: 34,
    lineHeight: 28,
    marginTop: 16,
  },
  bodyCopy: {
    fontSize: 12,
  },
  utilityTable: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    color: theme.colors.purple,
    textTransform: 'uppercase',
    marginTop: 7,
    fontFamily: 'Maax',
    fontWeight: 'bold',
  },
  iconHolder: {
    flexDirection: 'row',
  },
  icon: {
    width: 16,
    height: 16,
    marginTop: 7,
  },
  cardContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    padding: 7,
  },
  dashboardContainer: {
    width: '100%',
    backgroundColor: theme.colors.lightGrey,
    paddingVertical: 30,
  },
  grid: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 'auto',
    flexWrap: 'wrap',
    padding: 0,
    justifyContent: 'space-between',
    width: '100%',
  },
  gridItem: {
    flex: 1,
    backgroundColor: 'white',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    width: '100%',
    justifyContent: 'flex-start',
  },
  cardImageHolder: {
    width: '100%',
    aspectRatio: 1,
    height: 'auto',
    flex: 1,
    alignItems: 'stretch',
    alignItems: 'center',
  },
  cardImage: {
    backgroundColor: 'grey',
  },
  cardTitle: {
    fontFamily: 'MaaxBold',
    height: 34,
    overflow: 'hidden',
    paddingTop: 4,
  },
  dashboardContainer: {
    width: '100%',
    backgroundColor: theme.colors.white,
    textAlign: 'center',
    paddingTop: 20,
  },
  favoritesGridItem: {
    width: '50%',
    margin: 'auto',
    alignItems: 'center',
  },
});

export default postStyles;
