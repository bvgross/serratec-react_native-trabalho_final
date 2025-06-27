import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (campo: string, value: string) => {
  try {
    await AsyncStorage.setItem(campo, value);
  } catch (e) {
    // saving error
  }
};
export const getData = async (campo: string) => {
  try {
    const value = await AsyncStorage.getItem(campo);
    return value;
    if (value !== null) {
    }
  } catch (e) {}
};
