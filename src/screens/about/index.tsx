import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import brunoFoto from '../../assets/equipeFotos/brunoFoto.png';
import danielFoto from '../../assets/equipeFotos/danielFoto.png';
import joseFoto from '../../assets/equipeFotos/JoseFoto.png';
import marlosFoto from '../../assets/equipeFotos/marlosFoto.png';
import mateusFoto from '../../assets/equipeFotos/mateusFoto.png';
import pauloFoto from '../../assets/equipeFotos/pauloFoto.png'

const teamMembers = [
  {
    name: 'Bruno',
    role: 'Designer UI/UX',
    description: 'Implementou as telas e navegação do app.',
    image: brunoFoto,
  },
  {
    name: 'Daniel',
    role: 'Designer UI/UX',
    description: 'Responsável pelo visual do app e experiência do usuário.',
    image: danielFoto,
  },
  {
    name: 'José Neto',
    role: 'Pesquisadora de Arte',
    description: 'Selecionou as obras e criou as perguntas.',
    image: joseFoto,
  },
  {
    name: 'Marlos Bianna',
    role: 'Desenvolvedor Backend',
    description: 'Developer Full Stack and Production Engeenier.',
    image: marlosFoto,
  },
  {
    name: 'Matheus',
    role: 'Gerente de Projeto',
    description: 'Organizou as tarefas e cronograma do grupo.',
    image: mateusFoto,
  },
  {
    name: 'Paulo Roberto',
    role: 'Tester',
    description: 'Testou o app e garantiu a qualidade final.',
    image: pauloFoto,
  },
];

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>👥 Sobre o Grupo</Text>
      {teamMembers.map((member, index) => (
        <View key={index} style={styles.card}>
          <Image source={member.image} style={styles.avatar} />
          <View style={styles.info}>
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.description}>{member.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}