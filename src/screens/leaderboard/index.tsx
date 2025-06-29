import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from 'react';
import { styles } from './styles';
import { GameContext } from '../../context';

export const Leaderboard = () => {

  const { list, setMuseumList, object, setMuseumObject } = useContext(GameContext);

  //Escolher o departamento que quer consultar uma obra aleatória
  const department = 5;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //baixa os ids dos objetos do departamento usando uma função no context
    setMuseumList(department);
  }, []);

  useEffect(() => {
    //baixa um objeto de id aleatória do departamento selecionado em uma função no context
    setMuseumObject();
    setLoading(false); //diz que terminou de carregar o arquivo para poder exibir na tela
  }, [list]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Calculando classificação..</Text>
      </View>
    );
  } return (
    <View style={styles.container}>
      <Text style={styles.temp}>Classificação"</Text>

    </View>
  );
};
