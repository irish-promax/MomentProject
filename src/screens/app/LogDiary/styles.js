import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({

  container: {
    padding: 15,
    marginBottom: 0,
  },

  butang: {
    backgroundColor: colors.white,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    height: 30

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
    backgroundColor: colors.grey,
    borderRadius: 30,
    justifyContent: "center",
    flexDirection: "row",
    height: 36,
    width: 130,
    marginTop: 10,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    marginRight: 10,
    marginBottom: 10
  },

  title: {
    padding: 15,
    color: colors.blue,
    width: Dimensions.get('window').width,
    borderRadius: 10,
    //padding:15,
    paddingTop: 15,
    marginBottom: 5,
    fontWeight: "bold",
    backgroundColor: "#F0D996",
    alignSelf: "center",
    marginTop: 10
  },

  Log: {
    color: colors.white,
    height: 370,
    width: Dimensions.get('window').width,
    alignSelf: "center",
    backgroundColor: "#F7EAC4",
    padding: 15,
    color: colors.blue,
    borderRadius: 20,
    //padding:15,
    paddingTop: 15,
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
    marginTop: 15,
    marginHorizontal: 9

  },

})