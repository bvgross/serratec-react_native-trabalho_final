import { createContext, useEffect, useState } from 'react';
import { getMuseumObjectById, getMuseumObjectsByDepartmentId, listProps, objectProps } from '../services/museu';

interface GameProviderProps {
  children: React.ReactNode;
}

interface GameContextType {
  list: listProps,
  setMuseumList: (department: number) => Promise<void>,
  object: objectProps | undefined,
  setMuseumObject: () => Promise<void>;
}

export const GameContext = createContext<GameContextType>({
  list: { total: 0, objectIDs: [] },
  setMuseumList: async () => { },
  object: undefined,
  setMuseumObject: async () => { },
});

export const GameProvider = ({ children }: GameProviderProps) => {

  const [list, setlist] = useState<listProps>({ total: 0, objectIDs: [] });
  const [object, setObject] = useState<objectProps>();

  //baixar os ids das obas ao carregar a página
  const setMuseumList = async (department: number) => {
    try {
      const response = await getMuseumObjectsByDepartmentId(department);
      setlist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //baixar um objeto aleatório da lista
  const setMuseumObject = async () => {
    if (list.objectIDs.length === 0) return;
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
    } while (!object?.primaryImageSmall && tentativas < tentativasMaximas);

    if (object?.primaryImageSmall) {
      setObject(object);
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
        setMuseumObject
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
