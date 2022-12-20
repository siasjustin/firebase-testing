import { camelCase } from 'lodash';
import { StyleSheet } from 'react-native';
import theme from './theme';

const searchStyles = StyleSheet.create({
  searchBar: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: theme.colors.grey,
    paddingHorizontal: 10,
    flex: 1,
    width: '100%',
  },
  searchHint: {
    color: 'black',
    fontSize: 16,
    padding: 0,
    width: '100%',
  },
  input: {
    fontSize: 11,
    paddingHorizontal: 10,
  },
  flatListContainer: {
    justifyContent: 'flex-start',
    paddingTop: 20,
    width: '100%',
    paddingHorizontal: theme.sizes.outerMargin,
  },
  resultContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 30,
    width:theme.sizes.paddedContainerWidth,
  },
  resultContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Arial'
  },
  resultCategory: {
    paddingLeft: 20,
    color: theme.colors.purple,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  categoryTitle: {
    textAlign: 'center',
    paddingVertical: 10,
  },
  resultTitle: {
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultSubtitle: {
    paddingLeft: 20,
  },
  rightArrow: {
    height: 16,
    width: 10,
    paddingRight: 10,
  },
  noResultsContainer: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 50,
    backgroundColor: theme.colors.lightGrey,
    textAlign: 'center',
  },
});

export default searchStyles;
