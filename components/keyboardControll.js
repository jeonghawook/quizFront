import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { KeyboardAvoidingViewCustom } from "./styles";

const KeyboardController = ({ children }) => {
  return (
    <KeyboardAvoidingViewCustom  >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View>
          {children}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingViewCustom>
  );
};



export default KeyboardController;
