import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Text, View } from "react-native";
import { getUsers, UserProps } from "../../services/usuarios";
import { styles } from "./styles";

export const LeaderboardList = () => {
  const [loading, setLoading] = useState(false);
  const [leaderboardList, setLeaderboardList] = useState<UserProps[]>([]);

  const carregarLeaderboard = async () => {
    setLoading(true);
    try {
      const hanking = await getUsers();
      const top10 = hanking.sort((a, b) => b.pontuacao - a.pontuacao).slice(0, 10);
      setLeaderboardList(top10);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar o ranking.");
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregarLeaderboard();
      return () => {
      };
    }, [])
  );

  const renderItem = ({ item, index }: { item: UserProps; index: number }) => {
    const medalhas = ["🥇", "🥈", "🥉"];
    const posicao = index + 1;
    const marcador = index < 3 ? medalhas[index] : `${posicao}º`;
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.posicao}>{marcador}</Text>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.pontuacao}>{item.pontuacao} pts</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0477BF" />
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#666D73", "#404040"]}
      start={{ x: 1, y: 0.6 }}
      end={{ x: 0.8, y: 0 }}
      style={styles.container}
    >
      <View>
        <Text style={styles.titulo}>🏆 Ranking dos Top 10 Jogadores</Text>
        <FlatList data={leaderboardList} keyExtractor={(_, index) => index.toString()} renderItem={renderItem} />
      </View>
    </LinearGradient>
  );
};
