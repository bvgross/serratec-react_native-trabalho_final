import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { GameContext } from "../../../context";
import { putPontuacao } from '../../../services/usuarios';
import { getData, storeData } from '../../../utils/asyncStorage';
import { styles } from "./styles";

interface ItemDetailsModal {
  isItemDetailsModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDepartmentId: number;
}

export const GameModal = ({ isItemDetailsModalOpen, selectedDepartmentId, setModalOpen }: ItemDetailsModal) => {
  const { list, setMuseumList, object, object2, setMuseumObject, loading } = useContext(GameContext);
  const [department, setDepartMent] = useState<number>(selectedDepartmentId);
  const [pontuacao, setPontuacao] = useState<number>(0);
  const [vidas, setVidas] = useState<number>(3);

  useEffect(() => {
    //baixa os ids dos objetos do departamento usando uma função no context
    setMuseumList(department);
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const randomizeModal = () => {
    setMuseumObject(list);
  };

  const respostas = [object?.artistDisplayName, object2?.artistDisplayName];
  const resposta1 = respostas[Math.floor(Math.random() * respostas.length)];
  let resposta2;
  if (resposta1 === respostas[0]) {
    resposta2 = respostas[1];
  } else {
    resposta2 = respostas[0];
  }


  const handlePress = (resposta: string | undefined) => {
    if (resposta == respostas[0]) {
      Alert.alert("Acertou");
      //adicionar um ponto
      setPontuacao(pontuacao + 1);
    } else {
      Alert.alert("Errou");
      //retirar uma vida
      setVidas(vidas - 1);
    }
    setMuseumObject(list);
  };

  const getPontuacaoAtual = async () => {
    const pontuacao = Number(await getData("pontuacao"));
    return pontuacao;
  };

  useEffect(() => {
    if (vidas === 0) {
      Alert.alert("Game over! Você fez: " + pontuacao + " pontos!");
      setVidas(3);
      setPontuacao(0);

      const verificarPontuacao = async () => {
        const pontuacaoAtual = await getPontuacaoAtual();

        if (pontuacao > pontuacaoAtual) {
          storeData("pontuacao", pontuacao.toString());
          putPontuacao(pontuacao);

        }
      };

      verificarPontuacao(); // chama a função assíncrona
    }
  }, [vidas]);

  return (
    <Modal animationType="fade" transparent={true} visible={isItemDetailsModalOpen} onRequestClose={closeModal}>
      {loading ? (
        <TouchableOpacity style={styles.modal} onPress={closeModal}>
          <Text>Carregando...</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.modal} onPress={closeModal}>
          <LinearGradient
            colors={["#666D73", "#404040"]}
            start={{ x: 1, y: 0.6 }}
            end={{ x: 0.8, y: 0 }}
            style={styles.modalContainer}
          >
            <View>
              <Text style={styles.text}>Vidas: {vidas}</Text>
              <Text style={styles.text}>Pontuação: {pontuacao}</Text>
              <Text style={styles.text}>Qual é o autor dessa obra?</Text>
              <Image source={{ uri: object?.primaryImageSmall }} style={{ width: 270, height: 350 }} />
              <TouchableOpacity onPress={() => handlePress(resposta1)} style={styles.botao}>
                <Text style={styles.text}>{resposta1}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlePress(resposta2)} style={styles.botao}>
                <Text style={styles.text}>{resposta2}</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </Modal>
  );
};
