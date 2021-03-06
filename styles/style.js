import {
  StyleSheet
} from 'react-native';

const styles = {
  appWrapper: {
    backgroundColor:'#F1F2F7',
    flex:1,
    flexDirection:'column',
  },
  heroTab: {
    flexDirection:'row',
    backgroundColor:'#ffffff',
  },
  tabIcon: {
    flex: 1,
    textAlign:'center',
    fontSize:18,
    padding:15,
    color:'#A8A9AD',
  },
  plusCircle: {
    color:'#E5525C'
  },
  tabActive: {
    color:'#52545B',
    backgroundColor:'#F1F2F7'
  },
  innerTabWrapper: {
    flexDirection:'row',
    paddingTop:30,
    paddingBottom:15,
  },
  innerTab: {
    flex: 1,
    paddingBottom:5,
  },
  innerTabActive: {
    borderBottomWidth:2,
    borderBottomColor:'#52545B',
    borderStyle:'solid'
  },
  innerTabText: {
    flex: 1,
    textAlign:'center',
    color:'#C6C8D0',
    fontSize:13
  },
  innerTabTextActive: {
    color:'#52545B',
  },
  container: {

  },
  containerWrapper: {
    flex: 1,
    backgroundColor:'#F1F2F7',
  },
  button:{
    textAlign:'center',
    flex:1,
    paddingTop:12,
    color:'#ffffff'
  },
  btnContainer:{
    height:45,
    borderRadius:10
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
    marginBottom:15,
    marginLeft:30,
    marginRight:30,
  },
  feedThump:{

  },
  feedContent:{
    textAlign:'center',
    color:'#ffffff',
    marginBottom:15
  },
  feedThumpHeader: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop:30,
    paddingBottom:30,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  feedThumpFooter: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop:15,
    paddingBottom:30,
    borderWidth:1,
    borderColor:'#C6C8D0',
    backgroundColor:'#ffffff',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  },
  feedIndus:{
    fontSize:12,
    fontWeight:'bold',
    marginBottom:15,
  },
  feedTitle:{
    fontSize:36,
    lineHeight:38,
    fontWeight:'bold',
    marginBottom:20,
  },
  feedMeta:{
    fontSize:13,
    color:'#C6C8D0',
    fontStyle:'italic'
  },
  feedLink:{
    fontSize:12,
    fontWeight:'bold',
    paddingBottom:5,
    marginBottom:0,
  },
  feedBtn: {
    borderRadius:10,
    borderColor:'#C6C8D0',
    borderWidth:1,
    padding:10,
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:15,
  },
  feedBtnPrimary: {
    borderColor:'#E5525C',
    marginBottom:0,
  },
  feedBtnText: {
    color:'#52545B',
    paddingLeft:5,
    paddingRight:5,
    fontSize:12,
    fontWeight:'bold',
  },
  feedBtnTextPrimary: {
    color:'#E5525C',
  },
  tab: {
    // backgroundColor:'#ffffff',
    color:'#A8A9AD',
  }
};

export default styles;
