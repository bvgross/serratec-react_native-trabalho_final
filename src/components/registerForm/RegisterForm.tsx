import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import calender from "../../assets/iconesCadastro/calender.png";
import emailicon from "../../assets/iconesCadastro/emailicon.png";
import nacionalidadeIcon from "../../assets/iconesCadastro/nacionalidade.png";
import iconeLogin from "../../assets/iconesLogin/iconeLogin.png";
import iconeLoginSenha from "../../assets/iconesLogin/iconeLoginSenha.png";

import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

type Props = {
  registerType: (
    nome: string,
    email: string,
    dataNascimento: string,
    nacionalidade: string,
    senha: string,
    pontuacao: number
  ) => void;
  loading: boolean;
};

const RegisterForm = ({ registerType, loading }: Props) => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const pontuacao = 0;
  const navigation = useNavigation();

  function cleanFields() {
    setNome("");
    setSenha("");
    setEmail("");
    setData_nascimento("");
    setNacionalidade("");
  }

  function registerNewUser() {
    registerType(nome, senha, email, data_nascimento, nacionalidade, pontuacao);
    cleanFields();
    navigation.navigate("Login" as never);
    // Navegar para login ou Home
  }

  return (
    <>
      <Text style={styles.title}>Registre-se</Text>
      <View style={styles.formContainer}>
        <View style={{ ...styles.inputRow, ...styles }}>
          <Image source={iconeLogin} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor={styles.corPlaceHolder.color}
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={iconeLoginSenha} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={styles.corPlaceHolder.color}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={emailicon} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={styles.corPlaceHolder.color}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={calender} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento"
            placeholderTextColor={styles.corPlaceHolder.color}
            value={data_nascimento}
            onChangeText={setData_nascimento}
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={nacionalidadeIcon} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Nacionalidade"
            placeholderTextColor={styles.corPlaceHolder.color}
            value={nacionalidade}
            onChangeText={setNacionalidade}
          />
        </View>
        <TouchableOpacity style={styles.registerButton} onPress={() => registerNewUser()} disabled={loading}>
          <Text style={styles.registerButtonText}>{loading ? "Registrando..." : "Registrar"}</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>Tem uma conta ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
          <Text style={styles.loginLink}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RegisterForm;
