import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Image, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import iconeLogin from "../../assets/iconesLogin/iconeLogin.png";
import iconeLoginSenha from "../../assets/iconesLogin/iconeLoginSenha.png";
import { checkLogin } from "../../services/usuarios";
import { getData, removeData, storeData } from "../../utils/asyncStorage";
import styles from "./styles";

type Props = {
  loginType: (nome: string, senha: string) => void;
};

const LoginForm = ({ loginType }: Props) => {
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  const handlePress = async (email: string, senha: string) => {
    setLoading(true);
    try {
      await checkLogin(email, senha);
      const autorizado = await getData("acessoAutorizado");


      if (autorizado === "OK") {
        if (remember) {
          await storeData("rememberedEmail", email);
          await storeData("rememberedSenha", senha);
        } else {
          await removeData("rememberedEmail");
          await removeData("rememberedSenha");
        }

        navigation.navigate("Home" as never);
      } else {
        Alert.alert("Erro", "Usuário não autorizado.");
      }
    } catch (error) {
      Alert.alert("Erro", "Falha ao tentar fazer login.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadRememberedData = async () => {
      const savedEmail = await getData("rememberedEmail");
      const savedSenha = await getData("rememberedSenha");

      if (savedEmail && savedSenha) {
        setEmail(savedEmail);
        setSenha(savedSenha);
        setRemember(true);
      }
    };

    loadRememberedData();
  }, []);

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
            keyboardType="email-address"
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
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro" as never)}>
        <Text style={styles.register}>Registrar agora</Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginForm;

