import { StyleSheet } from 'react-native';
import theme from './theme';

const createStyles = StyleSheet.create({
  verticalContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex:1,
    paddingTop: 50,
    paddingBottom: 33,
    alignItems: "center"
  },
  ctaHolder: {
    paddingTop: 0,
    paddingBottom: 10,
  },
  wideContainer: {
    //justifyContent:'space-around',
    width:"100%"
  },
  taggedUserModule:{
    color:theme.colors.darkGrey,
    height:50,
    fontSize: 16,
    display: 'flex',
    flexDirection:'row',
    alignItems:"center",
    justifyContent: 'space-between',
    width:theme.sizes.paddedContainerWidth,
  },
  taggedUserHolder: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection:'row'
  },
  taggedUsername: {
    marginLeft: 10,
    display:"flex",
    alignItems:"center" 
  },
  bottomButtonContainer: {
    backgroundColor:theme.colors.white,
    flexDirection: 'row',
    alignItems:'flex-start',
    margin:"auto",
    width: theme.sizes.paddedContainerWidth,
    flexGrow: .05,
    paddingLeft:0,
    paddingRight:0,
    height:20
  },
  createSearchContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop:20
  },
  selectImageTop:{
    height:100,
    width:theme.sizes.paddedContainerWidth, 
    flex:1,
    justifyContent: "center",
  },
  categoryWrapper: {
    paddingVertical:8,
    width: theme.sizes.paddedContainerWidth
  }
});

export default createStyles;
