import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from "./src/screens/login";
import { Cadastro } from "./src/screens/cadastro";
import { BottomTabs } from './src/routes/BottomTabs';
import { GameProvider } from './src/context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={BottomTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}
