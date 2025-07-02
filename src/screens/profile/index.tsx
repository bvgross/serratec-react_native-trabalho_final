import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { getData } from "../../utils/asyncStorage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

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
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Nome: {profile.nome} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Email: {profile.email}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Pontuação: {profile.pontuacao} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Login" as never)}>
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};
