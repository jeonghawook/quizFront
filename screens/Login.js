import { React, useEffect } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import axios from "axios";
import {
  StyledContainer,
  Colors,
  InnerContainer,
  PageTitle,
  Subtitle,
  StyledButton,
  ButtonText,
  TextLink,
  TextLinkConetent,
} from "./../components/styles";
import MyTextInput from "../components/textInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthStore from "../api/store";
import jwt_decode from "jwt-decode";
import { TouchableOpacity , Text} from "react-native";

const Login = ({ navigation }) => {
  const { login } = useAuthStore();

  const handleLogin = async (values) => {
    try {
      const response = await axios.post(
        "https://pocom.shop/users/login",
        values
      );

      await AsyncStorage.setItem("accessToken", response.data.accessToken);
      await AsyncStorage.setItem("refreshToken", response.data.refreshToken);

      const decodedToken = jwt_decode(response.data.accessToken);

      const { isActive, nickname, userId, rank } = decodedToken;

      await login(isActive, nickname, userId, rank);

      navigation.navigate("Menu");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSocialLogin = async () => {
    try {
      const response = await axios.get("https://pocom.shop/users/kakao");
      console.log(response);
      await AsyncStorage.setItem("accessToken", response.data.accessToken);
      await AsyncStorage.setItem("refreshToken", response.data.refreshToken);
      const decodedToken = jwt_decode(response.data.accessToken);

      const { isActive, nickname, userId, rank } = decodedToken;

      await login(isActive, nickname, userId, rank);
      navigation.navigate("Menu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>Flash-Card</PageTitle>
        <Subtitle>오늘도 화이팅</Subtitle>
        <Formik
          initialValues={{ userEmail: "", password: "" }}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <MyTextInput
                label="이메일 :"
                icon="mail"
                placeholder="user@example.com"
                keyboardType="email-address"
                onChangeText={handleChange("userEmail")}
                onBlur={handleBlur("uesrEmail")}
                value={values.userEmail}
                name="userEmail"
              />
              <MyTextInput
                label="비밀번호 :"
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
                name="password"
              />
              <StyledButton onPress={handleSubmit}>
                <ButtonText>로그인</ButtonText>
              </StyledButton>
              <StyledButton onPress={() => navigation.navigate("SignUp")}>
                <ButtonText>
                  <TextLink>
                    <TextLinkConetent>회원가입</TextLinkConetent>
                  </TextLink>
                </ButtonText>
              </StyledButton>
              {/* <StyledButton>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("KakaoLogin")
                  }
                >
                  <Text>카카오 화면으로</Text>
                </TouchableOpacity>
              </StyledButton> */}
            </View>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Login;
