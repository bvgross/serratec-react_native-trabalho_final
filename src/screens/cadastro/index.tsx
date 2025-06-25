import React, { useState } from "react";
import { View, Alert } from "react-native";
import RegisterForm from "../../components/registerForm/RegisterForm";
import registerStyles from "./registerStyles";

const Cadastro = () => {
  const [loading, setLoading] = useState(false);

  const Registro = async (
    nome: string,
    senha: string,
    email: string,
    dataAniversario: string,
    nacionalidade: string
  ) => {
    setLoading(true);
    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, senha, email, dataAniversario, nacionalidade }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert("Cadastro realizado!", `Bem-vindo, ${data.user || nome}!`);
        // Navegar para o login ou home
      } else {
        Alert.alert("Erro", data.message || "Não foi possível cadastrar");
      }
    } catch (err) {
      Alert.alert("Erro", "Não foi possível conectar à API");
    }
    setLoading(false);
  };

  return (
    <View style={registerStyles.container}>
      <RegisterForm registerType={Registro} loading={loading} />
    </View>
  );
};

export default Cadastro;
