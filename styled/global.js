import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  signInContainer: {
    justifyContent: 'flex-end',
    maxWidth: 400,
    width: '100%',
    height: '100%',
    margin: 'auto',
    flex: 1,
    width:theme.sizes.paddedContainerWidth
  },
  MainContainer: {
    flex: 1,
    backgroundColor: 'tomato',
		justifyContent: 'flex-start'
  },
  outerContainer: {
    justifyContent: 'flex-start',
    // alignItems: 'space-between',
    maxWidth: 400,
    width: '100%',
    height: '100%',
    margin: 'auto',
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  footer: {
    width: theme.sizes.paddedContainerWidth,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    alignItems: 'flex-end',

  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  scrollView: {
    justifyContent: 'center',
    alignItems: "center",
    width:"100%",
    height:"100%",
    flex:1,
    backgroundColor: "yellow"
  },
  contentContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems:"center"
  },
  container: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexGrow: 1,
    backgroundColor: theme.colors.white,
    alignItems:"center"
  },
  buttonContainer: {
    width: '100%'
  },
  buttonInactive: {
    alignSelf: 'stretch',
    width: '100%',
    paddingVertical: 20,
    backgroundColor: theme.colors.border,
    alignSelf: 'center',
    margin: '2%',
    color: 'white',
  },
  button: {
    alignSelf: 'stretch',
    width: '100%',
    paddingVertical: 20,
    backgroundColor: theme.colors.pink,
    alignSelf: 'center',
    margin: '2%',
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 1.5,
    fontFamily: 'Maax',
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: '600',
  },
  buttonHint: {
    fontFamily: 'MaaxBold',
    fontSize:12,
    position:"absolute",
    right:10,
    zIndex:1,
    top:24,
    textTransform: 'uppercase',
    color:theme.colors.pink,
    textDecorationLine: 'underline',

    textDecorationColor: theme.colors.pink
  },
  readyToSubmit: {
    color: 'black',
  },
  interestButton: {
    alignSelf: 'stretch',
    width: '100%',
    alignSelf: 'center',
    borderWidth: 2,
		padding:16
  },
  basicLink: {
    textDecorationLine: 'underline',
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: 'auto',
    fontFamily: 'MaaxBold',
  },
	pinkLink: {
		color: theme.colors.pink,
		fontWeight: "bold",
		textAlign: "center"
	},
  icon: {
    width: 30,
    height: 30,
  },
  roundImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  formInput: {
    color: theme.colors.black,
    width: '100%',
    fontSize: 20,
    borderWidth: 1,
    paddingBottom: 14,
    paddingTop: 18,
    paddingHorizontal: 16,
    marginHorizontal: 0,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.border
  },
  formError: {
    fontSize: 9,
    color: 'orange',
    alignSelf: 'flex-start',
    paddingTop: 1,
    paddingBottom: 4,
    height: 16,
  },
  forgotPassword: {
    fontSize: 12,
    fontStyle: 'italic',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    marginVertical: 8,
    color: theme.colors.white,
  },
  placeholder: {
    color: theme.colors.lightGrey,
  },
  checkbox: {
    marginRight: 6,
  },
  checkboxMark: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  checkboxHolder: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 10,
  },
  termsText: {
    fontSize: 10,
    color: theme.colors.darkGrey,
    marginTop: 2,
  },
  textarea: {
    textAlign: 'left',
    fontSize: 16,
    height: 120,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: theme.colors.border,
    color: theme.colors.black,
    padding: 18,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: theme.colors.black,
    // lineHeight: 28,
    fontFamily: 'MaaxBold',
  },
  miniText: {
    fontSize: 12,
    textAlign: 'center',
  },
	smallEmText: {
		fontStyle: "italic",
		fontSize: 12
	},
  titleContainer: {
    position: 'absolute',
    top: 170,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  inlineText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'navy',
    textAlign: 'center',
    marginTop: '5%',
  },
  safeArea: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  scrollView: {
    alignItems: 'center',
  },
  boldStyle: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  error: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  video: {
    width: 200,
    height: 200,
    // objectFit:'cover',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'flex-start',
    margin: 'auto'
  },
  slidePanel: {
    backgroundColor: theme.colors.lightGrey,
    paddingVertical: 30,
    paddingHorizontal: 12,
    flexDirection: 'row',
    //justifyContent: 'space-around',
    width: '100%',
  },
  attachedToKeyboard: {
    position: 'absolute',
    width: '100%',
    bottom: 50,
  },
	attachedToKeyboard:{
		position:'absolute',
		width:"100%",
		bottom:50
	},
	interestsContainer: {
		justifyContent: 'center',
		flex:1,
		height: "120%",
		paddingTop:30,
    width:"100%"
	},
  inputButton: {
    color:theme.colors.darkGrey,
    borderColor:theme.colors.border,
    borderWidth: 2,
    height:50,
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
    padding:10
  },
  roundTaggedUserImage: {
    width:34,
    height:34,
    borderRadius: 17
  },
  taggedUsers: {
    color:theme.colors.pink,
    fontSize:12,
    letterSpacing:-1,
    fontFamily:'MaaxBold',
    paddingLeft:5
  },
  profileImageSize: {
    width:theme.sizes.paddedContainerWidth,
    height:theme.sizes.paddedContainerWidth
  },
  dots: {
    fontSize:30,
    fontFamily:'MaaxBold',
    color:theme.colors.grey,
    letterSpacing:-2
  },
  paddedContainerOuter: {
    alignItems: "center"
  },
  paddedContainerInner: {
    width:theme.sizes.paddedContainerWidth
  }

});

export default styles;
