import React, { useState } from "react";
import { View, Alert } from "react-native";
import LoginForm from "../../components/loginForm/LoginForm";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../components/logo";


const Login = () => {
  const [loading, setLoading] = useState(false);

  // const Login = async (email: string, senha: string) => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("https://681cefc3f74de1d219ae5154.mockapi.io/api/v1/users", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, senha }),
  //     });
  //     const data = await response.json();
  //     if (response.ok) {
  //       Alert.alert("Login realizado!", `Bem-vindo, ${data.nome}!`);
  //     } else {
  //       Alert.alert("Erro", data.message || "Usuário ou senha inválidos");
  //     }
  //   } catch (err) {
  //     Alert.alert("Erro", "Não foi possível conectar à API");
  //   }
  //   setLoading(false);
  // };

  return (
    <>
      <LinearGradient
        colors={["#404040", "#666D73"]}
        start={{ x: 1, y: 0.6 }}
        end={{ x: 0.8, y: 0 }}
        style={styles.container}
      >
        <View style={styles.container}>
          <Logo />

          <LoginForm loginType={Login} />
        </View>
      </LinearGradient>
    </>
  );
};

export default Login;
