import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch, Image, Alert } from "react-native";
import styles from "./styles";
import iconeLogin from "../../assets/iconesLogin/iconeLogin.png";
import iconeLoginSenha from "../../assets/iconesLogin/iconeLoginSenha.png";
import { checkLogin } from "../../services/usuarios";
import { getData } from "../../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";
import Logo from "../logo";

//typescript
type Props = {
  loginType: (nome: string, senha: string) => void;
};

const LoginForm = ({ loginType }: Props) => {
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  // const handlePress = async () => {
  //   if (!validateInputs()) return;
  //   setLoading(true);
  //   const success = await checkLogin(email, senha);
  //   if (success) {
  //     if (remember) await AsyncStorage.setItem('savedEmail', email);
  //     navigation.navigate('home' as never);
  //   } else {
  //     Alert.alert('Erro', 'Email ou senha incorretos.');
  //   }
  //   setLoading(false);
  // };

  const handlePress = async (email: string, senha: string) => {
    setLoading(true);
    await checkLogin(email, senha);
    setLoading(false);

    const autorizado = await getData("acessoAutorizado");
    if (autorizado === "OK") {
      navigation.navigate("home" as never);
    } else {
      Alert.alert("Erro", "Usuário não autorizado.");
    }

  }

  return (
    <>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Entrar</Text>
        <View style={styles.inputRow}>
          <Image source={iconeLogin} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#bfc4c9"
            value={email}
            onChangeText={setEmail}
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
      <TouchableOpacity style={styles.loginButton} onPress={() => handlePress(email, senha)} disabled={loading}>
        <Text style={styles.loginButtonText}>{loading ? "Entrando..." : "Entrar"}</Text>
      </TouchableOpacity>
      <Text style={styles.bottomText}>Não tem uma conta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("cadastro" as never)}>
        <Text style={styles.register}>Registrar agora</Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginForm;
