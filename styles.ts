import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#484f58",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#bfc4c9",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: "100%",
    marginBottom: 12,
  },
  socialIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  socialText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
    width: "100%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#bfc4c9",
  },
  orText: {
    color: "#bfc4c9",
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  loginContainer: {
    gap: 15,
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
    marginLeft: 8,
    textDecorationLine: "underline",
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginVertical: 10,
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
  },
  bottomText: {
    color: "#bfc4c9",
    fontSize: 13,
    marginTop: 10,
  },
  register: {
    color: "#6c63ff",
    textDecorationLine: "underline",
  },
});

export default styles;
