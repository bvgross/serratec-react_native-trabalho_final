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

    if (data[0].senha === senha) {
      await storeData("nome", data[0].nome);
      await storeData("id", data[0].id);
      await storeData("acessoAutorizado", 'OK');
      Alert.alert("Login realizado!", `Bem-vindo, ${await getData("nome")}!`);
    } else {
      Alert.alert("Email ou senha inválidos!");
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

// API museu

export interface listProps {
  total: number,
  objectsIDs: number[];
}

// export interface objectProps {
//   objectID: number;
//   title: string;
//   objectName: string;
//   department: string;
//   culture?: string;
//   period?: string;
//   medium?: string;
//   dimensions?: string;
//   objectDate?: string;
//
//   primaryImage: string;
//   primaryImageSmall: string;
//   additionalImages?: string[];
//
//   artistDisplayName?: string;
//   artistDisplayBio?: string;
//   artistNationality?: string;
//   artistBeginDate?: string;
//   artistEndDate?: string;
//
//   measurements?: {
//     elementName: string;
//     elementMeasurements: {
//       Height?: number;
//       Width?: number;
//       [key: string]: number | undefined;
//     };
//   }[];
//
//   tags?: {
//     term: string;
//     Wikidata_URL?: string;
//   }[];
//
//   objectURL?: string;
// }

// Interface para constituintes (artistas, criadores)
export interface Constituent {
  constituentID: number;
  role: string;
  name: string;
  constituentULAN_URL?: string;
  constituentWikidata_URL?: string;
  gender?: string;
}

// Interface para medidas dos elementos
export interface ElementMeasurements {
  Height?: number;
  Width?: number;
  Length?: number;
  Depth?: number;
  Diameter?: number;
  [key: string]: number | undefined;
}

// Interface para medidas
export interface Measurement {
  elementName: string;
  elementDescription?: string | null;
  elementMeasurements: ElementMeasurements;
}

// Interface para tags
export interface Tag {
  term: string;
  AAT_URL?: string;
  Wikidata_URL?: string;
}

// Interface completa para objetos do museu
export interface objectProps {
  // Identificação básica
  objectID: number;
  isHighlight: boolean;
  accessionNumber: string;
  accessionYear: string;
  isPublicDomain: boolean;

  // Imagens
  primaryImage: string;
  primaryImageSmall: string;
  additionalImages?: string[];

  // Constituintes (artistas)
  constituents?: Constituent[];

  // Informações básicas do objeto
  department: string;
  objectName: string;
  title: string;
  culture?: string;
  period?: string;
  dynasty?: string;
  reign?: string;
  portfolio?: string;

  // Informações do artista
  artistRole?: string;
  artistPrefix?: string;
  artistDisplayName?: string;
  artistDisplayBio?: string;
  artistSuffix?: string;
  artistAlphaSort?: string;
  artistNationality?: string;
  artistBeginDate?: string;
  artistEndDate?: string;
  artistGender?: string;
  artistWikidata_URL?: string;
  artistULAN_URL?: string;

  // Data e período do objeto
  objectDate?: string;
  objectBeginDate?: number;
  objectEndDate?: number;

  // Características físicas
  medium?: string;
  dimensions?: string;
  measurements?: Measurement[];

  // Informações de crédito e proveniência
  creditLine?: string;

  // Geografia
  geographyType?: string;
  city?: string;
  state?: string;
  county?: string;
  country?: string;
  region?: string;
  subregion?: string;
  locale?: string;
  locus?: string;
  excavation?: string;
  river?: string;

  // Classificação e metadados
  classification?: string;
  rightsAndReproduction?: string;
  linkResource?: string;
  metadataDate?: string;
  repository?: string;

  // URLs e links
  objectURL?: string;
  objectWikidata_URL?: string;

  // Tags e categorização
  tags?: Tag[];

  // Galeria
  isTimelineWork?: boolean;
  GalleryNumber?: string;

  // Para flexibilidade com propriedades não mapeadas
  [key: string]: any;
}

const apiMuseum = axios.create({
  baseURL: "https://collectionapi.metmuseum.org/public/collection/v1/",
});

export const getMuseumObjects = () => {
  const url = "objects";
  return apiMuseum.get(url);
};

export const getMuseumObjectsByDepartmentId = (id: number):
  Promise<AxiosResponse<listProps, any>> => {
  const url = "objects?departmentIds=" + id;
  return apiMuseum.get(url);
};

export const getMuseumObjectById = (id: number):
  Promise<AxiosResponse<objectProps, any>> => {
  const url = "objects/" + id;
  return apiMuseum.get(url);
};
