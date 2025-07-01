import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'; // Corrigido aqui
import { styles } from './styles';

export const RulesGame = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎮 Regras do Jogo</Text>

      <Text style={styles.sectionTitle}>📌 Objetivo</Text>
      <Text style={styles.text}>
        O objetivo do jogo é acumular o maior número de pontos completando desafios e evitando penalidades.
      </Text>

      <Text style={styles.sectionTitle}>🕹️ Como Jogar</Text>
      <Text style={styles.text}>
        1. Cada jogador começa com 3 vidas.{'\n'}
        2. A cada rodada, um desafio é apresentado.{'\n'}
        3. Respostas corretas somam pontos; erradas perdem vidas.
      </Text>

      <Text style={styles.sectionTitle}>⚠️ Penalidades</Text>
      <Text style={styles.text}>
        - Resposta errada: -1 vida{'\n'}
      </Text>

      <Text style={styles.sectionTitle}>🏆 Hanking</Text>
      <Text style={styles.text}>
        Há uma lista de classificação dos jogadores, onde são destacados o Top 10.
      </Text>

      <Text style={styles.footer}>Boa sorte e divirta-se! 🚀</Text>
    </ScrollView>
  );
};
