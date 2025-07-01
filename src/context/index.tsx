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
      } while (
        !object?.primaryImageSmall ||
        !object?.culture?.trim() ||
        !object?.artistDisplayName?.trim() ||
        !object?.period?.trim() ||
        tentativas < tentativasMaximas
      );
      return object;
    };
    const object = await getRandonObject();
    const object2 = await getRandonObject();
    console.log(object);
    console.log(object2);

    if (object?.primaryImageSmall && object2?.primaryImageSmall) {
      console.log("setou um objeto");
      setObject(object);
      setObject2(object2);
      console.log("funcionou");

      setLoading(false);
    } else {
      console.log("Não foi possível encontrar um objeto com imagem");
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
