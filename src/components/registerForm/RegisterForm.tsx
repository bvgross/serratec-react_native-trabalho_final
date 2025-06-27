import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import iconeLogin from "../../assets/iconesLogin/iconeLogin.png";
import iconeLoginSenha from "../../assets/iconesLogin/iconeLoginSenha.png";
import emailicon from "../../assets/iconesCadastro/emailicon.png";
import calender from "../../assets/iconesCadastro/calender.png";
import nacionalidadeIcon from "../../assets/iconesCadastro/nacionalidade.png";
import styles from "../../../styles";
import { stylesCadastro } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  registerType: (nome: string, email: string, dataNascimento: string, nacionalidade: string, senha: string, pontuacao: number) => void;
  loading: boolean;
};

const RegisterForm = ({ registerType, loading }: Props) => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  // const [pontuacao, setPontuacao] = useState(0);
  const pontuacao = 0;

  return (
    <LinearGradient
      colors={["#404040", "#666D73"]}
      start={{ x: 1, y: 0.6 }}
      end={{ x: 0.8, y: 0 }}
      style={styles.container}
    >
      {/* nome, senha, email, data_nascimento, nacionalidade,  */}
      <View style={stylesCadastro.formContainer}>
        <Text style={stylesCadastro.title}>Registre-se</Text>
        <View style={{ ...styles.inputRow, ...stylesCadastro }}>
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
        <Text style={styles.bottomText}>
          Tem uma conta ? <Text style={stylesCadastro.loginLink}>Entrar</Text>
        </Text>
        <TouchableOpacity
          style={stylesCadastro.registerButton}
          onPress={() => registerType(nome, senha, email, data_nascimento, nacionalidade, pontuacao)}
          disabled={loading}
        >
          <Text style={stylesCadastro.registerButtonText}>{loading ? "Registrando..." : "Registrar"}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default RegisterForm;
