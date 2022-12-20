import { StyleSheet } from 'react-native';
import theme from './theme';

const postStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    flex:1,
    paddingVertical:20, 
  },
  contentHolder: {
    width: theme.sizes.uploadImageSize,
    backgroundColor: theme.colors.white,
    paddingTop: 20
  },
  userByLine: {
    width: theme.sizes.uploadImageSize - 10,
    textAlign:'left',
    color:theme.colors.pink,
  },
  postFooter: {
    width:theme.sizes.paddedContainerWidth,
    backgroundColor:theme.colors.white,
    flexDirection: 'row',
    justifyContent:'space-between',
    flex:1,
    paddingHorizontal: 20,
    paddingBottom:10,
    alignItems: 'flex-end'
  },
  postFooterPlaceholder: {
    height: 14,
    width: theme.sizes.paddedContainerWidth, 
    backgroundColor: theme.colors.white
  },
  taggedUsers: {
    // backgroundColor:"orange",
    paddingTop:10,
    justifyContent: "flex-end"
  },
  editHolder: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height:24,
  },

  outerContainer: {
    width: '100%',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: theme.colors.lightGrey
  },
  innerContainer: {
    backgroundColor: theme.colors.white,
    width:theme.sizes.paddedContainerWidth,
    alignItems: 'center',
    justifyContent:'center'
  },
  whitePadding: {
    width:theme.sizes.uploadImageSize,
    backgroundColor: 'white',
    paddingVertical: 20
  },
  heading: {
    fontFamily: 'MaaxBold',
    fontSize: 34,
    lineHeight: 28,
    paddingTop:10

  },
  bodyCopy: {
    paddingTop:10,
    fontSize: 12,

  },
  utilityTable: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
    width: 20,
    height: 20,
    marginTop: 7,
    justifyContent: 'center',
  },
  cardContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    padding: 7,
  },
  postImage: {
    width:theme.sizes.uploadImageSize,
    height:theme.sizes.uploadImageSize
  },
  dashboardContainer: {
    backgroundColor: theme.colors.lightGrey,
    paddingVertical: 30,
    width: '100%',
    alignItems: "center"
  },
  grid: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 'auto',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    width: theme.sizes.paddedContainerWidth,
    paddingBottom:10,
    marginBottom:20,
    backgroundColor: theme.colors.white
  },
  gridItem: {
    flex: 1,
    backgroundColor: 'white',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding:10,
  },
  card: {
    alignItems: 'center',
    textAlign: 'center',
    overflow:"hidden",
    paddingHorizontal:10,
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
    backgroundColor: theme.colors.lightGrey,
    width:theme.sizes.paddedContainerWidth / 2 - 10,
    height: theme.sizes.paddedContainerWidth / 2 - 10
  },
  cardTitle: {
    fontFamily: 'MaaxBold',
    height: 34,
    overflow: 'hidden',
    paddingTop: 16,
    textAlign: 'left',
  },
  cardAuthor: {
    fontSize: 12,
    paddingBottom: 10,
    width: '100%',
    textAlign: 'left',
  },
  altMiniText: {
    maxWidth: 260,
    paddingBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  youtubeWrapper: {
    position: 'relative',
  },
  videoThumbPlayIcon: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  deletePostModal: {
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    zIndex:1
  },
  deletePostTopOpacity: {
    backgroundColor: theme.colors.white,
    opacity: .9,
    flex:1
  },
  deletePostBottomHolder: {
    backgroundColor: theme.colors.lightGrey,
    justifyContent:"flex-end",
    alignItems: "center",
  },
  deletePostText: {
    textAlign: "center"
  },
  createBottom: {
    height:300,
    justifyContent: "center"
  },
});

export default postStyles;
