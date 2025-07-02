import React from "react";
import { Image, View, StyleSheet } from "react-native";

const Logo = () => (
  <View style={styles.container}>
    <Image source={require("../../assets/logo.png")} style={styles.logo} resizeMode="contain" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 200,
  },
});

export default Logo;
