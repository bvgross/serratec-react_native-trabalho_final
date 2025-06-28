import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import CartIcon from '../../assets/iconesNavigator/CartIcon.png';
import ShopIcon from '../../assets/iconesNavigator/CartIcon.png';
import SkillIcon from '../../assets/iconesNavigator/CartIcon.png';
import { Login } from '../../screens/login';
import { Cadastro } from '../../screens/cadastro';
import { Home } from '../../screens/home';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export type BottomTabsParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
};

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000', paddingBottom: 2 },
        tabBarInactiveTintColor: '#aaa',
        tabBarActiveTintColor: '#fff'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              resizeMode='contain'
              style={{ width: 30, tintColor: color }}
              source={SkillIcon}
            />
          )
        }}
      />
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              resizeMode='contain'
              style={{ width: 30, tintColor: color }}
              source={ShopIcon}
            />
          )
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              resizeMode='contain'
              style={{ width: 30, tintColor: color }}
              source={CartIcon}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}
