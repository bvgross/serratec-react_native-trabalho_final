import React, { useState } from "react";
import { View } from "react-native";
import RegisterForm from "../../components/registerForm/RegisterForm";
import registerStyles from "./registerStyles";
import { postUsers } from "../../services/usuarios";

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
    <View style={registerStyles.container}>
      <RegisterForm registerType={Registro} loading={false} />
    </View>
  );
};
