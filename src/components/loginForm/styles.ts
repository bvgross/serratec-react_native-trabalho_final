import { CurrentRenderContext } from "@react-navigation/native";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#404040",
    marginTop: 0,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
    width: "100%",
  },

  loginContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    padding: 24,
    backgroundColor: "transparent",
    gap: 15,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 32,
    alignSelf: "center",
    marginBottom: 24,
    textAlign: "center",



  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    // marginBottom: 14,
    borderWidth: 3,
    borderColor: "#949FA6",
    width: "100%",
    paddingHorizontal: 10,
  },
  inputIcon: {
    fontSize: 20,
    color: "#bfc4c9",
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "#ffffff80",
    fontSize: 16,
    paddingVertical: 12,
    paddingLeft: 25,
    fontWeight: 400,
  },
  corPlaceHolder: {
    color: "#fff",
  },
  forgot: {
    color: "#bfc4c9",
    fontSize: 12,
    marginLeft: 10,
    textDecorationLine: "underline",
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginLeft: 35,
    marginTop: -30,
  },
  rememberText: {
    color: "#fff",
    fontSize: 14,
    marginRight: 8,
  },
  loginButton: {
    backgroundColor: "#bfc4c9",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 10,
    marginBottom: 18,
  },
  loginButtonText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  bottomText: {
    color: "#bfc4c9",
    fontSize: 13,
    fontWeight: "bold",
  },


  register: {
    color: "#bfc4c9",
    fontSize: 13,
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 5,





  },
});

export default styles;
