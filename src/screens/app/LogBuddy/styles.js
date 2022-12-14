import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({

  container: {
    padding: 15,
    marginBottom: 0,
  },
  container2:{
    
   backgroundColor: "#" 

  },

  butang: {
    backgroundColor:colors.white,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    height:30

  },

  Htitle: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,

    color: colors.white
  },

  SHtitle: {
    fontSize: 20,
    alignSelf: "center",
    color: colors.white,
    justifyContent: "space-evenly",
  },

  SHtitle1: {
    fontSize: 14,
    paddingHorizontal: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.white,
    justifyContent: "space-evenly",
    paddingTop: 10
  },

  SHtitle2: {
    fontSize: 14,
    paddingHorizontal: 20,
    fontWeight: "bold",
    color: colors.white,
    justifyContent: "space-evenly",
  },

  SHtitle3: {
    fontSize: 14,
    paddingHorizontal: 5,
    fontWeight: "bold",
    color: colors.white,
    justifyContent: "space-evenly",
  },

  button: {

  },

  container1: {
    backgroundColor: "#F0D996",
    height: 540,
    borderRadius: 20,
  },

  container2: {
    backgroundColor: "#324A5F",
    borderRadius: 30,
    marginBottom: 15,
    height: 50,
    width: "98%",
    justifyContent: "center",
    alignSelf: "center"
  },

  container3: {
    borderRadius: 30,
    backgroundColor: "#1D2A49",

    height:260
    
   
  },

  title: {
    padding: 15,
    color: colors.white,
    borderRadius: 10,
    //padding:15,
    paddingTop: 15,
    marginBottom: 5,
    fontWeight: "bold",
    marginTop: 15,height:55
  },

  Log: {
     padding: 15,
    color: colors.white,
    borderRadius: 10,
    //padding:15,
    paddingTop: 15,
    marginBottom: 5,
    paddingBottom:40,
    fontWeight: "bold",
    marginTop: 15,
    height:345
  },

  dateText1: {
    fontSize: 19,
    color: colors.white,
    fontWeight: "500",

  },

  dateText2: {
    fontSize: 16,
    color: colors.white,
    paddingBottom: 20
  },

  titleDP: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },

  datePickerStyle: {
    width: 300,
    marginTop: 20,
    fontSize: 20,
    color: colors.black,
    marginBottom: 20,
  },

  SHtitle1: {
    fontSize: 14,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: colors.white,
    justifyContent: "flex-end",
    marginTop: 10,
    marginHorizontal: 9,
    marginBottom:10

  },

  gambar:{
    marginTop: 20, 
    width: 180, 
    height: 180, 
    resizeMode: 'contain', 
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  }

})