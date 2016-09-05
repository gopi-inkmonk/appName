import {
  StyleSheet
} from 'react-native';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button:{
    textAlign:'center',
    flex:1,
    paddingTop:12,
    color:'#ffffff'
  },
  btnContainer:{
    height:45,
    borderRadius:5
  },
  popupBTNdefault:{
    width:360,
    backgroundColor:'white',
    color:"#000000",
  },
  popup:{
    backgroundColor:"rgba(255, 255, 255, .9)",
    flex:1,
  },
  popupContent:{
    flex:1,
    padding:30
  },
  topStrip:{
    backgroundColor:"rgb(49, 56, 63)",
    width: 360,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  hamburger:{
    color:"#ffffff",
    padding:15,
    width:45,
    flex:0,
    fontSize:17
  },
  topStrip_text:{
    color:"#ffffff",
    padding:15,
    flex:1
  },
  layoutwrapper:{
    flex:1,
    flexDirection: 'row',
  },
  menuWrapper:{
    width: 70,
    backgroundColor:"rgb(230, 235, 238)",
    paddingTop:15,
  },
  menuText:{
    color:"rgb(157, 166, 169)",
    paddingTop:10,
    paddingBottom:10,
    textAlign:'center'
  },
  menuTextActive:{
    color:"rgb(224, 84, 96)",
  },
  contentWrapper:{
    flex:1,
  },
  contentWrapperScroll:{
    padding:15,
    paddingBottom:0,
  },
  h1:{
    fontSize:21,
    color:"rgb(70, 81, 90)",
  },
  para:{
    fontSize:14,
    color:"rgb(121, 129, 147)",
    marginBottom:5
  },
  feedThumpContainer:{
    marginTop:10,
    marginBottom:15
  },
  feedThump:{
    borderRadius:5,
    backgroundColor:"rgb(213, 135, 227)",
    // backgroundColor:"linear-gradient(to left, #ffb347 , #ffcc33)",
    padding:15,
    paddingLeft:30,
    paddingRight:30,
  },
  feedContent:{
    textAlign:'center',
    color:'#ffffff',
    marginBottom:15
  },
  feedIndus:{
    fontSize:13,
  },
  feedTitle:{
    fontSize:21,
    fontWeight:'bold'
  },
  feedMeta:{
    fontSize:13,
  },
  feedCTA:{
    fontSize:11,
    fontWeight:'bold',
    marginBottom:0,
  },
  feedEndText:{
    fontSize:11,
    fontStyle:'italic',
    textAlign:'center',
    color:'grey',
    marginBottom:30,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    padding:10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    backgroundColor: 'transparent',
  },
};

export default styles;
