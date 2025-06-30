import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch, Image, Alert, FlatList } from "react-native";
import styles from "./styles";
import { getData } from "../../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";
import Logo from "../logo";
import { checkLogin, getUsers, UserProps } from "../../services/usuarios";
import LoginForm from "../loginForm/LoginForm";

export const LeaderboardList = () => {
  const [loading, setLoading] = useState(false);
  const [leaderboardList, setLeaderboardList] = useState<UserProps[]>([]);
  const navigation = useNavigation();

  const CargaleaderboardList = async () => {
    const hanking = await getUsers();

    setLeaderboardList(hanking);
  }

  useEffect(() => {
    //baixa todos usuários para compor o hanking
    CargaleaderboardList();
  }, []);

  return (
    <FlatList
      data={leaderboardList}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.nome}</Text>
            <Text>{item.pontuacao}</Text>

          </View>

          // <MagicItem
          //     name={item.name}
          //     index={item.index}
          //     setIsItemDetailsModalOpen={setIsItemDetailsModalOpen}
          //     setSelectedItemIndex={setSelectedItemIndex}
          //     />
        )
      }}
    />

  );
};


