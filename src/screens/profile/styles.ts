import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    // backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    // borderBottomWidth: 10,
    // borderBottomColor: "red",
  },
  avatar: {
    backgroundColor: "#e2e2e2",
    tintColor: "#868686",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: "#eee",
  },
  menuText: {
    fontSize: 18,
    color: "#fff",
  },
  menuPontuacao: {
    fontSize: 18,
    textAlign: "center",
  },
  logoutButton: {
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 22,
  },
  logoutText: {
    color: "red",
    textAlign: "center",
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
