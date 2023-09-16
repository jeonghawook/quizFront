import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Login";
import SignUp from "../screens/Signup";
import { Colors } from "../components/styles"; 
import Menu from "../screens/Menu";
import Level from "../screens/Level";
import Quiz from "../screens/Quiz";
import CreateQuiz from "../screens/CreateQuiz";
import KakaoLogin from "../screens/KakaoLogin";
import QuizList from "../screens/QuizList";

const Stack = createNativeStackNavigator();

const RootStack = ({isActive}) => {
  console.log(isActive)

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerStyle:{
        backgroundColor:'transparent'
      },
    headerTintColor:Colors.tertiary,
    headerTransparent:true,
    headerTitle:'',
    
    }}
    initialRouteName={isActive?"Menu":"Login"}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Level" component={Level} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="CreateQuiz" component={CreateQuiz}/>
        <Stack.Screen name="KakaoLogin" component={KakaoLogin}/>
        <Stack.Screen name="QuizList" component={QuizList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
