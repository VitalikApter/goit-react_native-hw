import React, {  useState } from "react";

import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  Dimensions,
} from "react-native";

import styles from "./AuthStyles";

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Back.jpg")}
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.formWrapper}>
            <View style={{ marginHorizontal: 16 }}>
              <Text style={styles.title}>Регистрация</Text>
            </View>

            <View style={{...styles.form, marginBottom:isShowKeyboard ? 20 : 144}}>
              <View>
                <TextInput style={styles.input} textAlign={"center"} onFocus={() => setIsShowKeyboard(true)}/>
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput style={styles.input} textAlign={"center"} onFocus={() => setIsShowKeyboard(true)} />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput 
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <Text
                    style={styles.inputShowPasword}
                    
                  >
                    Показать
                  </Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                <Text style={styles.btnText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.singInText}>
              <Text style={styles.singInText}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};
