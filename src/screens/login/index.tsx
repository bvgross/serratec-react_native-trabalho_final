import { View } from "react-native";
import LoginForm from "../../components/loginForm/LoginForm";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../components/logo";


export const Login = () => {

  return (
    <>
      <LinearGradient
        colors={["#404040", "#666D73"]}
        start={{ x: 1, y: 0.6 }}
        end={{ x: 0.8, y: 0 }}
        style={styles.container}
      >
        <View style={styles.container}>
          <Logo />

          <LoginForm loginType={Login} />
        </View>
      </LinearGradient>
    </>
  );
};


