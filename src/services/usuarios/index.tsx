import axios, { AxiosResponse } from "axios";
import { Alert } from "react-native";
import { getData, storeData } from "../../utils/asyncStorage";

const apiUsers = axios.create({
  baseURL: "https://681cefc3f74de1d219ae5154.mockapi.io/api/v1/",
});

export interface UserProps {
  nome: string;
  senha: string;
  email: string;
  data_nascimento: string;
  nacionalidade: string;
  pontuacao: number;
}

export const putPontuacao = async (pontuacaoNova: number) => {
  const id = await getData("id");
  console.log(id);

  const url = "users/" + id;
  const object = { pontuacao: pontuacaoNova };

  try {
    const response = await apiUsers.put(url, object);
    console.log("Resposta do PUT:", response.data);
  } catch (error) {
    console.error("Erro ao fazer PUT:", error);
  }
};

export const getUsers = async () => {
  const response = await apiUsers.get("users");
  return response.data;
};

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

  try {
    // Testa email
    const emailExiste = await checkEmail(user);
    if (emailExiste) {
      Alert.alert("Email já cadastrado!");
      return;
    }
    const response = await apiUsers.post("users", user);
    console.log("usuario cadastrado", response.data);
    Alert.alert("Bem vindo(a) " + response.data.nome + "!!! Cadastro realizado com sucesso!");
  } catch (error) {
    console.error("erro ao cadastrar:", error);

    Alert.alert("erro ao cadastrar usuário");
  }
};

export const checkLogin = async (email: string, senha: string) => {
  const url = "users?email=" + email;

  console.log("dados inseridos", email, senha);

  try {
    const { data } = await apiUsers.get(url);

    if (data.length > 0 && data[0].senha === senha) {
      await storeData("nome", data[0].nome);
      await storeData("id", data[0].id);
      const pontuacao = data[0].pontuacao;
      await storeData("pontuacao", pontuacao.toString());

      await storeData("acessoAutorizado", "OK");
      Alert.alert(`Login realizado! Bem-vindo, ${await getData("nome")}!`);
      return true;
    } else {
      await storeData("acessoAutorizado", "NO");
      Alert.alert("Email ou senha inválidos!");
      return false;
    }

    return;
  } catch (error) {
    // console.error("Erro ao verificar e-mail:", error);
    return false;
  }
};

export const checkEmail = async (user: UserProps) => {
  const url = "users?email=" + user.email;

  try {
    const { data } = await apiUsers.get(url);
    return data.length > 0; // true se já existe
  } catch (error) {
    // console.error("Erro ao verificar e-mail:", error);
    return false;
  }
};
