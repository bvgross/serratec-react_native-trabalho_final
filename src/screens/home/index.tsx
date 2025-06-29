import { Image, Text, View } from "react-native";
import { getMuseumObjectById, getMuseumObjectsByDepartmentId, listProps, objectProps } from '../../services/museu';
import { useEffect, useState } from 'react';
import { styles } from './styles';

export const Home = () => {

  //Escolher o departamento que quer consultar uma obra aleatória
  const department = 5;

  const [loading, setLoading] = useState(true);
  const [list, setlist] = useState<listProps>({ total: 0, objectIDs: [] });
  const [object, setObject] = useState<objectProps>();


  //useEffect para baixar os ids das obras ao carregar a página
  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await getMuseumObjectsByDepartmentId(department);
        setlist(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchList();
  }, []);


  //useEffect para pegar uma obra aleatória dessa lista carregada e exibir apenas as que tem imagem
  useEffect(() => {
    if (list.objectIDs.length === 0) return;

    const fetchObject = async () => {
      const randomObjectId = list.objectIDs[Math.floor(Math.random() * list.objectIDs.length)];
      try {
        let object;
        do {
          const response = await getMuseumObjectById(randomObjectId);
          object = response.data;
        } while (object.primaryImage === null); //só sai do loop se tiver imagem cadastrada

        setObject(object);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchObject();
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
      <Image source={{ uri: object?.primaryImage }} style={{ width: 200, height: 200 }} />
    </View>
  );
};
