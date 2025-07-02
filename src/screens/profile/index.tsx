import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { getData } from "../../utils/asyncStorage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import userIcon from "../../assets/iconesGerais/user.png";
import Logo from "../../components/logo";

interface ProfileProps {
  nome: string;
  email: string;
  pontuacao: string;
}
export const Profile = () => {
  const [profile, setProfile] = useState<ProfileProps>({
    nome: "",
    email: "",
    pontuacao: "",
  });

  useFocusEffect(
    useCallback(() => {
      const carregarDados = async () => {
        const nome = await getData("nome");
        const email = await getData("email");
        const pontuacao = await getData("pontuacao");
        setProfile({ nome: nome ?? "", email: email ?? "", pontuacao: pontuacao ?? "" });
      };

      carregarDados();
    }, [])
  );
  const navigation = useNavigation();

  return (
    <>
      <LinearGradient
        colors={["#404040", "#666D73"]}
        start={{ x: 1, y: 0.6 }}
        end={{ x: 0.8, y: 0 }}
        style={styles.container}
      >
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Image
              source={userIcon}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <Text style={styles.menuText}>{profile.nome} </Text>
          <Text style={styles.menuText}>{profile.email} </Text>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuPontuacao}>Pontuação: {profile.pontuacao} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Logo />
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate("Login" as never)}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};
