import React ,{useState, useEffect} from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native";
import useAuthStore from "../api/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const REST_API_KEY = '8ffafcf35ddb5077a2c8b940e4b01da1';
const REDIRECT_URI = 'https://pocom.shop/users/kakao/callback';
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KakaoLogin = () => {
const navigation = useNavigation();
const { login } = useAuthStore();

  async function KakaoLoginWebView (data) {
  
    // await AsyncStorage.setItem("accessToken", response.data.accessToken);
    // await AsyncStorage.setItem("refreshToken", response.data.refreshToken);
    // const decodedToken = jwt_decode(response.data.accessToken);

    // const { isActive, nickname, userId, rank } = decodedToken;

    // await login(isActive, nickname, userId, rank);
    navigation.navigate("Menu");

    
  }

  return (
    <View style={{ flex: 1 }}>
    <WebView
      style={{ flex: 1 }}
      source={{
        uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
      }}
      injectedJavaScript={INJECTED_JAVASCRIPT}
      javaScriptEnabled
      onMessage={event => {
       navigation.navigate("Menu")
       
      }}
    />
  </View>
  )
}

export default KakaoLogin;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },    
});