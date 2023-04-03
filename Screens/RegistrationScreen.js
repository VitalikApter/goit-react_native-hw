import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

import styles from "./AuthStyles";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({navigation}) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);


  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;

      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    }
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bcgImage}
          source={require("../assets/Back.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.formWrapper}>
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? 20 : 144,
                  width: dimensions,
                }}
              >
                <Text style={styles.title}>Реєстрація</Text>
                <View>
                  <TextInput
                    textAlign="center"
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.login}
                    placeholder="Логін"
                    style={styles.input}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, login: value }))
                    }
                  />
                </View>
                <View>
                  <TextInput
                    textAlign="center"
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.email}
                    placeholder="Адреса електронної пошти"
                    style={styles.input}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View>
                  <TextInput
                    textAlign="center"
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.password}
                    placeholder="Пароль"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <Text style={styles.inputShowPasword}>Показати</Text>
                </View>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.7}
                  onPress={handleSubmit}
                >
                  <Text style={styles.btnText}>Зареєструватись</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singInText}>
                  <Text style={styles.singInText} onPress={() => navigation.navigate("Login")}>Вже є акаунт? Увійт>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
