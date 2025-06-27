// import Cadastro from "./src/screens/cadastro";
// import Login from "./src/screens/login";

// export default function App() {
//   return <Login />;
//   // return <Cadastro />;
// }

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from "./src/screens/login";
import cadastro from "./src/screens/cadastro"
import home from "./src/screens/home"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="cadastro" component={cadastro} />
        <Stack.Screen name="home" component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}