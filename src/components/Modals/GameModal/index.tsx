import React, { useContext, useEffect, useState } from "react";
import { Modal, View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from "./styles";
import CloseIcon from '../../../assets/iconesGerais/CloseIcon.png';
import { GameContext } from '../../../context';
import { LinearGradient } from "expo-linear-gradient";

interface ItemDetailsModal {
  isItemDetailsModalOpen: boolean,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  selectedDepartmentId: number,
}

export const GameModal = ({ isItemDetailsModalOpen, selectedDepartmentId, setModalOpen }: ItemDetailsModal) => {
  const { list, setMuseumList, object, setMuseumObject, loading } = useContext(GameContext);

  //Escolher o departamento que quer consultar uma obra aleatória

  const [department, setDepartMent] = useState<number>(selectedDepartmentId);

  useEffect(() => {
    //baixa os ids dos objetos do departamento usando uma função no context
    setMuseumList(department);
  }, []);

  //useEffect(() => {
  //baixa um objeto de id aleatória do departamento selecionado em uma função no context
  // setLoading(false); //diz que terminou de carregar o arquivo para poder exibir na tela
  //}, [list]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const randomizeModal = () => {
    setMuseumObject(list)
  }

  return (

    <Modal
      animationType="fade"
      transparent={true}
      visible={isItemDetailsModalOpen}
      onRequestClose={closeModal
      }
    >
      {loading ?
        <TouchableOpacity style={styles.modal} onPress={closeModal}>
          <Text>Carregando...</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.modal} onPress={closeModal}>
          <LinearGradient
            colors={["#666D73", "#404040"]}
            start={{ x: 1, y: 0.6 }}
            end={{ x: 0.8, y: 0 }}
            style={styles.modalContainer}>
            <View>
              <Text style={styles.text}>Total de objetos do departamento "{object?.department}" é: {list.total}</Text>

              <Text style={styles.text}>Id do objeto: {object?.objectID}</Text>
              <Text style={styles.text}>Cultura mãe do objeto: {object?.culture}</Text>
              <Text style={styles.text}>Período: {object?.period ? object?.period : "Periodo desconhecido"}</Text>
              <Text style={styles.text}>Nome do artista: {object?.artistDisplayName ? object?.artistDisplayName : "Artista desconhecido"}</Text>
              <Image source={{ uri: object?.primaryImageSmall }} style={{ width: 250, height: 250 }} />
              <TouchableOpacity onPress={() => setMuseumObject(list)} style={styles.botao}><Text style={styles.text}>Randomizar</Text></TouchableOpacity>
            </View>
          </LinearGradient>
        </TouchableOpacity>}

    </Modal>

  );
};

