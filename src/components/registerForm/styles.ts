import { StyleSheet } from "react-native";
export const stylesCadastro = StyleSheet.create({
  formContainer: {
    width: "100%",
    alignItems: "center",
    padding: 24,
    backgroundColor: "transparent",
    gap: 15,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#60656f",
    borderRadius: 6,
    marginBottom: 14,
    width: "100%",
    paddingHorizontal: 12,
    borderWidth: 1,
    // borderColor: "#fff",
  },
  inputIcon: {
    fontSize: 20,
    color: "#bfc4c9",
    marginRight: 8,
  },
  input: {
    flex: 1,
    // color: "red",
    fontSize: 16,
    paddingVertical: 12,
  },
  bottomText: {
    color: "#bfc4c9",
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  loginLink: {
    color: "#6c63ff",
    textDecorationLine: "underline",
  },
  registerButton: {
    backgroundColor: "#222",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
