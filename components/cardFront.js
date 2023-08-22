import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import {
  QuizContainer,
  FrontText
} from "./../components/styles";

const CardFront = ({ rotate, question }) => {
  return (
    <Pressable
      onPress={() => {
        rotate.value = rotate.value ? 0 : 1;
      }}
    >
      <QuizContainer>
        <FrontText >{question}</FrontText>
      </QuizContainer>
    </Pressable>

  );
};



export default CardFront;
