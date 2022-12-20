import { StyleSheet } from 'react-native';
import theme from './theme';

const upserProfileStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.lightGrey,
    alignItems: "center",
    paddingVertical: 16
  },
  heroContainer: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    width:"100%",
    paddingVertical:20,
    paddingHorizontal: theme.sizes.outerMargin,
    alignItems:'center',
    backgroundColor:theme.colors.white
  },
  rightContainer: {
    flexGrow:1,
    paddingLeft:32,
    justifyContent: "center",
    margin:'auto',
    width: theme.sizes.paddedContainerWidth - 204,
    paddingLeft:16,
    paddingTop:3
  },
  username: {
    fontFamily:"MaaxBold",
    fontSize:20
  },
  leftContainer: {

  },
  profileImage: {
    height:120,
    width:120,
  },
  editFollowHolder: {
     marginTop:10
  },
  editFollowLink: {
    margin: 0,
  },
  postsContainer: {
    // margin:theme.sizes.outerMargin
    margin:"auto"
  }
});

export default upserProfileStyles;
