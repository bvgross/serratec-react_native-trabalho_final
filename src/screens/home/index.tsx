import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from 'react';
import { styles } from './styles';
import { GameContext } from '../../context';

export const Home = () => {

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
        <Text>Carregando dados do museu...</Text>
      </View>
    );
  } return (
    <View style={styles.container}>
      <Text style={styles.temp}>Total de objetos do departamento "{object?.department}" é: {list.total}</Text>

      <Text>Id do objeto: {object?.objectID}</Text>
      <Text>Cultura mãe do objeto: {object?.culture}</Text>
      <Text>Período: {object?.period ? object?.period : "Periodo desconhecido"}</Text>
      <Text>Nome do artista: {object?.artistDisplayName ? object?.artistDisplayName : "Artista desconhecido"}</Text>
      <Image source={{ uri: object?.primaryImageSmall }} style={{ width: 300, height: 300 }} />
      <TouchableOpacity onPress={setMuseumObject} style={styles.botao}><Text style={styles.text}>Randomizar</Text></TouchableOpacity>
    </View>
  );
};
