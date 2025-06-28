import React, { useState } from "react";
import { View, Alert } from "react-native";
import RegisterForm from "../../components/registerForm/RegisterForm";
import registerStyles from "./registerStyles";
import { postUsers } from "../../services/usuarios";
import Logo from "../../components/logo";
import styles from "./registerStyles";
import { LinearGradient } from "expo-linear-gradient";

const Cadastro = () => {
  const [loading, setLoading] = useState(false);

  const Registro = async (
    nome: string,
    senha: string,
    email: string,
    data_nascimento: string,
    nacionalidade: string,
    pontuacao: number
  ) => {
    postUsers({ nome, senha, email, data_nascimento, nacionalidade, pontuacao });
    // setLoading(true);
    // try {
    //   const response = await fetch("https://681cefc3f74de1d219ae5154.mockapi.io/api/v1/users", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ nome, senha, email, data_nascimento, nacionalidade }),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     Alert.alert("Cadastro realizado!", `Bem-vindo, ${data.user || nome}!`);
    //     // Navegar para o login ou home
    //   } else {
    //     Alert.alert("Erro", data.message || "Não foi possível cadastrar");
    //   }
    // } catch (err) {
    //   Alert.alert("Erro", "Não foi possível conectar à API");
    // }
    // setLoading(false);
  };

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

          <RegisterForm registerType={Registro} loading={loading} />
        </View>
      </LinearGradient>
    </>
  );
};

export default Cadastro;
