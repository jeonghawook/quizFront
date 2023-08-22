import React from "react";
import { Pressable } from "react-native";
import { QuizContainer,BackText } from "./styles";
import {ResizeTextMode} from 'react-native-auto-size-text';

const CardBack = ({ rotate, answer }) => {
  return (
    <Pressable 
    onPress={()=>{
      rotate.value = rotate.value ? 0 : 1;
    }} >
      <QuizContainer>
        <BackText mode={ResizeTextMode.group}>{answer}</BackText>
      </QuizContainer>
    </Pressable>
  );
};


export default CardBack;
