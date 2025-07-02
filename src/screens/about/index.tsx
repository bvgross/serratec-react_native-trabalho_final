import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import brunoFoto from "../../assets/equipeFotos/brunoFoto.png";
import danielFoto from "../../assets/equipeFotos/danielFoto.png";
import joseFoto from "../../assets/equipeFotos/JoseFoto.png";
import marlosFoto from "../../assets/equipeFotos/marlosFoto.png";
import mateusFoto from "../../assets/equipeFotos/mateusFoto.png";
import pauloFoto from "../../assets/equipeFotos/pauloFoto.png";
import { LinearGradient } from "expo-linear-gradient";
import groupIcon from "../../assets/iconesGerais/people.png";

const teamMembers = [
  {
    name: "Bruno Gross",
    role: "Designer UI/UX",
    description: "github.com/bvgross",
    image: brunoFoto,
  },
  {
    name: "Daniel Lopes",
    role: "Designer UI/UX",
    description: "github.com/Danzete",
    image: danielFoto,
  },
  {
    name: "José Netto",
    role: "Pesquisadora de Arte",
    description: "github.com/jcboaretto",
    image: joseFoto,
  },
  {
    name: "Marlos Bianna",
    role: "Desenvolvedor Backend",
    description: "github.com/biannamarlos",
    image: marlosFoto,
  },
  {
    name: "Mateus Karl",
    role: "Gerente de Projeto",
    description: "github.com/KarlPeixoto",
    image: mateusFoto,
  },
  {
    name: "Paulo Roberto Silva",
    role: "Tester",
    description: "github.com/Paulo68129",
    image: pauloFoto,
  },
];

export default function About() {
  return (
    <LinearGradient
      colors={["#404040", "#666D73"]}
      start={{ x: 1, y: 0.6 }}
      end={{ x: 0.8, y: 0 }}
      style={styles.container}
    >
      <ScrollView>
        <View
          style={{
            // backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 20,
            marginTop: 20,
            gap: 15,
          }}
        >
          <Image
            source={groupIcon}
            style={{
              // backgroundColor: "blue",
              // alignSelf:
              tintColor: "#fef6e4",
              width: 30,
              height: 30,
            }}
          />
          <Text style={styles.title}> Sobre o Grupo</Text>
        </View>
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
    </LinearGradient>
  );
}
