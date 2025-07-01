import { Button, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from 'react';
import { styles } from './styles';
import { GameModal } from '../../components/Modals/GameModal';
import { GameContext } from '../../context';
import { getMuseumDepartments } from '../../services/museu';
import { LinearGradient } from "expo-linear-gradient";

interface museumDepartmentProps {
  // "departmentId": 1, "displayName": "American Decorative Arts"
  departmentId: number,
  displayName: string;
}

export const Home = () => {

  const [loading, setLoading] = useState(true);
  const [departments, setDepartments] = useState<museumDepartmentProps[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [itemDepartmentId, setItemDepartmentId] = useState<number>(0);

  const fetchDepartments = async () => {
    const response = await getMuseumDepartments();
    const departments = response.data.departments;
    setDepartments(departments);
  };

  useEffect(() => {
    fetchDepartments();
    setLoading(false);
  }, []);

  const handlePress = (departmentId: number) => {
    setModalOpen(true);
    setItemDepartmentId(departmentId);
    console.log("TESTE", departmentId);

  };

  if (loading) {
    return (
      <LinearGradient
        colors={["#404040", "#666D73"]}
        start={{ x: 1, y: 0.6 }}
        end={{ x: 0.8, y: 0 }}
        style={styles.container}>
        <View style={styles.container}>
          <Text>Carregando dados do museu...</Text>
        </View>
      </LinearGradient>
    );

  } return (
    <LinearGradient
      colors={["#404040", "#666D73"]}
      start={{ x: 1, y: 0.6 }}
      end={{ x: 0.8, y: 0 }}
      style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={departments}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }: { item: museumDepartmentProps; }) => {
            return (
              <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item.departmentId)}>
                <Text>{item.displayName}</Text>
              </TouchableOpacity>
            );
          }}
        />
        {
          modalOpen &&
          <GameModal isItemDetailsModalOpen={modalOpen} selectedDepartmentId={itemDepartmentId} setModalOpen={setModalOpen} />
        }

      </View>
    </LinearGradient>
  );
};
