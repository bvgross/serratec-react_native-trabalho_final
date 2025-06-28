// import Cadastro from "./src/screens/cadastro";
// import Login from "./src/screens/login";

// export default function App() {
//   return <Login />;
//   // return <Cadastro />;
// }

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from "./src/screens/login";
import cadastro from "./src/screens/cadastro"
import home from "./src/screens/home"
import { BottomTabs } from './src/routes/BottomTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="cadastro" component={cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}