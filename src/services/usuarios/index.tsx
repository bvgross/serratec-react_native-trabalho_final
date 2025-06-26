import axios, { AxiosResponse } from "axios";
import { Alert } from "react-native";

const apiUsers = axios.create({
  baseURL: "https://681cefc3f74de1d219ae5154.mockapi.io/api/v1/",
});

export interface UserProps {
  nome: string;
  senha: string;
  email: string;
  data_nascimento: string;
  nacionalidade: string;
  pontuacao?: number;
}

// interface MagicItemResponse {
//   count: number;
//   results: MagicItemProps[];
// }

export const postUsers = async (user: UserProps) => {
  const url = "users";

  if (
    !user.nome.trim() ||
    !user.senha.trim() ||
    !user.email.trim() ||
    !user.data_nascimento.trim() ||
    !user.nacionalidade.trim()
  ) {
    Alert.alert("Todos os campos devem ser preenchidos!");
    return;
  }
  const emailExiste = await checkEmail(user);
  if (emailExiste) {
    Alert.alert("Email já cadastrado!");
    return;
  }
  try {
    const response = await apiUsers.post("users", user);
    console.log("usuario cadastrado", response.data);
    Alert.alert("Usuário cadastrado com sucesso! Seja bem vindo,");
  } catch (error) {
    console.error("erro ao cadastrar:", error);

    Alert.alert("erro ao cadastrar usuario");
  }
};

export function getUsers(): Promise<AxiosResponse<any, any>> {
  const url = "users";

  return apiUsers.get(url);
}

export const checkEmail = async (user: UserProps) => {
  const url = "users?email=" + user.email;

  try {
    const { data } = await apiUsers.get(url);
    return data.length > 0; // true se já existe
  } catch (error) {
    console.error("Erro ao verificar e-mail:", error);
    return false; // Em caso de erro, não impede o cadastro
  }
};
//   return false;

//   return apiUsers.get(url);

// export interface getMagicItemDetailsResponse {
//   index: string;
//   name: string;
//   equipment_category: EquipmentCategory;
//   rarity: Rarity;
//   variants?: any[] | null;
//   variant: boolean;
//   desc?: string[] | null;
// }

// interface EquipmentCategory {
//   index: string;
//   name: string;
//   url: string;
// }

// interface Rarity {
//   name: string;
// }

// export function getMagicItemsDetails(index: string): Promise<AxiosResponse<getMagicItemDetailsResponse, any>> {
//   const url = "magic-items/" + index;

//   return apiMagicItems.get(url);
