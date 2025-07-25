import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import AboutIcon from "../../assets/iconesNavigator/AboutIcon.png";
import GameIcon from "../../assets/iconesNavigator/GameIcon.png";
import leaderboardIcon from "../../assets/iconesNavigator/leaderboardIcon.png";
import ProfileIcon from "../../assets/iconesNavigator/ProfileIcon.png";
import RulesIcon from "../../assets/iconesNavigator/RulesIcon.png";
import About from "../../screens/about";
import { Home } from "../../screens/home";
import { Leaderboard } from "../../screens/leaderboard";
import { Profile } from "../../screens/profile";
import { RulesGame } from "../../screens/rulesGame";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export type BottomTabsParamList = {
  About: undefined;
  Profile: undefined;
  Rules: undefined;
  Home: undefined;
  Leaderboard: undefined;
};

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
        tabBarInactiveTintColor: "#aaa",
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Image resizeMode="contain" style={{ width: 30, tintColor: color }} source={GameIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Image resizeMode="contain" style={{ width: 30, tintColor: color }} source={leaderboardIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Image resizeMode="contain" style={{ width: 30, tintColor: color }} source={ProfileIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Rules"
        component={RulesGame}
        options={{
          tabBarIcon: ({ color }) => (
            <Image resizeMode="contain" style={{ width: 30, tintColor: color }} source={RulesIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color }) => (
            <Image resizeMode="contain" style={{ width: 30, tintColor: color }} source={AboutIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
