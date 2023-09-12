import React ,{useState, useEffect} from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const REST_API_KEY = '800b8fe2427efbffbef3bc6fe96a5464';
const REDIRECT_URI = 'https://pocom.shop/users/kakao/callback';
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KakaoLogin = ({navigation}) => {

    const [tokensReceived, setTokensReceived] = useState(false);

  function KakaoLoginWebView (data) {
  
    setTokensReceived(true);
    navigation.navigate("Menu")
    
  }

  useEffect(() => {
    if (tokensReceived) {
      navigation.navigate("Menu");
    }
  }, [tokensReceived, navigation]);

  return (
    <View style={Styles.container}>      
      <WebView
        style={{ flex: 1 }}
        originWhitelist={['*']}
        scalesPageToFit={false}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={event => { KakaoLoginWebView(event.nativeEvent["url"]); }}
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