import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import Logo from "../../components/logo";
import RegisterForm from "../../components/registerForm/RegisterForm";
import { postUsers } from "../../services/usuarios";
import styles from "./registerStyles";

export const Cadastro = () => {

  const Registro = async (
    nome: string,
    senha: string,
    email: string,
    data_nascimento: string,
    nacionalidade: string,
    pontuacao: number
  ) => {
    postUsers({ nome, senha, email, data_nascimento, nacionalidade, pontuacao });
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
          <RegisterForm registerType={Registro} loading={false} />
        </View>
      </LinearGradient>
    </>

  );
};
