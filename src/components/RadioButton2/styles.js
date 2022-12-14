import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";



export const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    backgroundColor: "#1B1B1E",
    height: 45,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    
  },

  image: {
    width: 18,
    height: 28,
  },

  title: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
    margin: 100
  },

  text1: {
    textAlign: "center",
    alignContent: "center",
    color: colors.white,

    fontSize: 16,
    fontWeight: "500"
  },

  text2: {
    color: colors.white,
    textAlign: "center",
    alignContent: "center",
    color: colors.white,
    justifyContent: "space-evenly",
    fontSize: 16,

  },
  unselected: {
    borderRadius: 50,
    marginHorizontal: 5,
    fontSize: 16,
    height: 25,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: 5,
    justifyContent: "space-evenly",

  },
  option1: {
    fontSize: 16,
    textAlign: 'center',
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",

    color: colors.white,
    fontWeight:"bold",
    marginHorizontal: 5,
  },

  selected: {
    backgroundColor: "#4D7C8A",
    borderRadius: 10,
    fontSize: 16,
    height: 25,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: 5,
    justifyContent: "space-evenly",
  },

  option2: {
    marginHorizontal: 5,
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",

  },





})