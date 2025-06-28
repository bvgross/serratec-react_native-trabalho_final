import { Image, Text, View } from "react-native";
import { getMuseumObjectById, getMuseumObjectsByDepartmentId, listProps, objectProps } from '../../services/usuarios';
import { useEffect, useState } from 'react';
import { styles } from './styles';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [objects, setObjects] = useState<listProps>({ total: 0, objectsIDs: [] });
  const [object, setObject] = useState<objectProps>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMuseumObjectsByDepartmentId(1);
        setObjects(response.data);

        const response2 = await getMuseumObjectById(45734);
        setObject(response2.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // return (
  //   <View style={styles.container}>
  //
  //     <Text style={styles.temp} >{objects.total}</Text>
  //     {object ? (
  //       <Text>{object.title}</Text>
  //     ) : (
  //       <Text>Carregando objeto...</Text>
  //     )}
  //   </View >
  // );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando dados do museu...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.temp}>{objects.total}</Text>
      <Text>{object?.culture}</Text>
      <Text>{object?.artistDisplayName}</Text>
      <Image src={object?.primaryImage} />
    </View>
  );
};
