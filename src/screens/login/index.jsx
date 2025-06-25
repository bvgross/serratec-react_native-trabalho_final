import React from "react";
import { View, Text, Image, Button, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import iconeEmail from "../../assets/iconesLogin/iconeLogin.png";
import iconeEmailSenha from "../../assets/iconesLogin/iconeLoginSenha.png";

export const Login = () => {
  return (
    <>
      <LinearGradient
        colors={["#404040", "#666D73"]}
        start={{ x: 1, y: 0.6 }}
        end={{ x: 0.8, y: 0 }}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.loginInput}>
            <Image style={styles.iconeLogin} source={iconeEmail} />
            <TextInput style={styles.input} value="email" placeholder="Digite e-mail" keyboardType="email-address" />
          </View>
          <Image style={styles.iconeLogin} source={iconeEmailSenha} />
          <TextInput
            style={{ ...styles.input, fontFamily: "poppins" }}
            value="password"
            placeholder="Digite sua senha"
            keyboardType="password"
          />
        </View>
      </LinearGradient>
    </>
  );
};
