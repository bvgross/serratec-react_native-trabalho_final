import { createContext, useEffect, useState } from "react";
import { getMuseumObjectById, getMuseumObjectsByDepartmentId, listProps, objectProps } from "../services/museu";

interface GameProviderProps {
  children: React.ReactNode;
}

interface GameContextType {
  list: listProps;
  setMuseumList: (department: number) => Promise<void>;
  object: objectProps | undefined;
  object2: objectProps | undefined;
  setMuseumObject: (list: listProps) => Promise<void>;
  loading: boolean;
}

interface QuizProps {
  pergunta: string;
  respostaCerta: string;
  respostaErrada: string;
  tipoPergunta: string;
}

export const GameContext = createContext<GameContextType>({
  list: { total: 0, objectIDs: [] },
  setMuseumList: async () => {},
  object: undefined,
  object2: undefined,
  setMuseumObject: async () => {},
  loading: true,
});

export const GameProvider = ({ children }: GameProviderProps) => {
  const [list, setlist] = useState<listProps>({ total: 0, objectIDs: [] });
  const [object, setObject] = useState<objectProps>();
  const [object2, setObject2] = useState<objectProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [pergunta, setPergunta] = useState<QuizProps>();

  //baixar os ids das obas ao carregar a página
  const setMuseumList = async (department: number) => {
    setLoading(true);
    try {
      const response = await getMuseumObjectsByDepartmentId(department);
      setlist(response.data);
      setMuseumObject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const perguntas = [
    {
      pergunta: "Qual é o autor dessa obra?",
      tipopergunta: 0,
      campoPergunta: "artistDisplayName",
    },
    {
      pergunta: "Qual é a cultura dessa obra?",
      tipopergunta: 1,
      campoPergunta: "culture",
    },
    {
      pergunta: "Qual é o período dessa obra?",
      tipopergunta: 2,
      campoPergunta: "period",
    },
  ];

  const getPerguntaAleatoria = () => {
    return perguntas[Math.floor(Math.random() * perguntas.length)];
  };

  //baixar um objeto aleatório da lista
  const setMuseumObject = async (list: listProps) => {
    if (list.objectIDs.length === 0) return;

    const getRandonObject = async () => {
      let object;
      let tentativas = 0;

      const tentativasMaximas = 10;

      do {
        const randomObjectId = list.objectIDs[Math.floor(Math.random() * list.objectIDs.length)];

        try {
          const response = await getMuseumObjectById(randomObjectId);
          object = response.data;
          tentativas++;
        } catch (error) {
          console.log(error);
          tentativas++;
        }
      } while ((!object?.primaryImageSmall || !object?.artistDisplayName) && tentativas < tentativasMaximas);

      if (!object?.primaryImageSmall || !object?.artistDisplayName) {
        return undefined;
      }

      return object;
    };

    const object = await getRandonObject();
    const object2 = await getRandonObject();

    if (object?.primaryImageSmall && object2?.primaryImageSmall) {
      setObject(object);
      setObject2(object2);

      setLoading(false);
    } else {
      console.log("Não foi possível encontrar um objeto com imagem e outra caracteristica");
    }
  };

  return (
    <GameContext.Provider
      value={{
        list,
        setMuseumList,
        object,
        object2,
        setMuseumObject,
        loading,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
