import React from "react";
import { View } from "react-native";
import { StyledInputLabel, StyledQuestionInput, StyledTextInput } from "./../components/styles";

const MyTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      {label === "내용" ? <StyledQuestionInput {...props}/>
      :  <StyledTextInput {...props} />}
     
    </View>
  );
};

export default MyTextInput;


