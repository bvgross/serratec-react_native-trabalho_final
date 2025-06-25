import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch, Image } from "react-native";
import styles from "../../../styles";
import iconeLogin from "../../assets/iconesLogin/iconeLogin.png";
import iconeLoginSenha from "../../assets/iconesLogin/iconeLoginSenha.png";
//typescript
type Props = {
  loginType: (nome: string, senha: string) => void;
  loading: boolean;
};

const LoginForm = ({ loginType, loading }: Props) => {
  const [remember, setRemember] = useState(false);
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <View style={styles.loginContainer}>
        <View style={styles.inputRow}>
          <Image source={iconeLogin} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#bfc4c9"
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={iconeLoginSenha} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#bfc4c9"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rememberRow}>
        <Text style={styles.rememberText}>Lembrar de mim</Text>
        <Switch
          value={remember}
          onValueChange={setRemember}
          thumbColor={remember ? "#6c63ff" : "#ccc"}
          trackColor={{ false: "#ccc", true: "#bfc4c9" }}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => loginType(nome, senha)} disabled={loading}>
        <Text style={styles.loginButtonText}>{loading ? "Entrando..." : "Entrar"}</Text>
      </TouchableOpacity>
      <Text style={styles.bottomText}>
        Não tem conta? <Text style={styles.register}>Registrar agora</Text>
      </Text>
    </>
  );
};

export default LoginForm;
