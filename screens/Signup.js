import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import axios from "axios";
import { StyledContainer, Colors, InnerContainer, PageTitle, Subtitle, StyledButton, ButtonText } from "./../components/styles";
import MyTextInput from "../components/textInput";

const SignUp = ({ navigation }) => {
  const handleSignUp = async (values) => {
    try {
      const response = await axios.post("https://pocom.shop/users/signup", values);
      console.log(response)
      if (response.data.statusCode === 201) navigation.navigate("Login");
      
      console.log(response.data.statusCode);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <StyledContainer>
      <InnerContainer>
      <PageTitle>Flash-Card</PageTitle>
      <Subtitle>오늘도 화이팅</Subtitle>
      <Formik
        initialValues={{ nickname: "", userName: "", userEmail: "", password: "" }}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <MyTextInput
              name="nickname"
              label="닉네임 :"
              placeholder="닉네임"
              onChangeText={handleChange("nickname")}
              onBlur={handleBlur("nickname")}
              value={values.nickname}
            />

            <MyTextInput
              name="userName"
              label="이름 :"
              placeholder="이름"
              onChangeText={handleChange("userName")}
              onBlur={handleBlur("userName")}
              value={values.userName}
            />

            <MyTextInput
              name="userEmail"
              label="이메일 :"
              placeholder="user@example.com"
              onChangeText={handleChange("userEmail")}
              onBlur={handleBlur("userEmail")}
              value={values.userEmail}
            />

            <MyTextInput
              name="password"
              label="비밀번호 :"
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />

            <StyledButton onPress={handleSubmit}>
              <ButtonText>회원가입</ButtonText>
            </StyledButton>
          </View>
        )}
      </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default SignUp;
