import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    padding: 24,
    gap: 15,
  },
  title : {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 32,
    alignSelf: "center",
    marginBottom: 34,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,

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
  registerButton: {
    backgroundColor: "#bfc4c9",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
    marginBottom: 18,
    width: "100%",
    alignItems: "center", 
    justifyContent: "center",
    marginHorizontal: 150,
  },
  registerButtonText: {
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
 loginLink: {
    color: "#bfc4c9",
    fontSize: 13,
    textDecorationLine: "underline",
  },
});
