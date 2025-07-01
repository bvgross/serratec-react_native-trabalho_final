import React, { useContext, useEffect, useState } from "react";
import { Modal, View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import CloseIcon from "../../../assets/iconesGerais/CloseIcon.png";
import { GameContext } from "../../../context";
import { LinearGradient } from "expo-linear-gradient";

interface ItemDetailsModal {
  isItemDetailsModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDepartmentId: number;
}

export const GameModal = ({ isItemDetailsModalOpen, selectedDepartmentId, setModalOpen }: ItemDetailsModal) => {
  const { list, setMuseumList, object, object2, setMuseumObject, loading } = useContext(GameContext);

  //Escolher o departamento que quer consultar uma obra aleatória

  const [department, setDepartMent] = useState<number>(selectedDepartmentId);

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
              <Text style={styles.text}>Qual a cultura desta obra?</Text>
              <Image source={{ uri: object?.primaryImageSmall }} style={{ width: 290, height: 350 }} />
              <TouchableOpacity onPress={() => setMuseumObject(list)} style={styles.botao}>
                <Text style={styles.text}>{object?.artistDisplayName}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setMuseumObject(list)} style={styles.botao}>
                <Text style={styles.text}>{object2?.culture}</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </Modal>
  );
};
