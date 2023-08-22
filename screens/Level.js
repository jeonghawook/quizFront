import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  EnteringButton,
  EnteringContainer,
  ExtraText,
  Subtitle,
} from "../components/styles";

const Level = ({ navigation, route }) => {
  const { category } = route.params;
  console.log(category);

  const handleLevelPress = (level) => {
    // Navigate to the selected level screen

    // You can use React Navigation or any other navigation library for this
    navigation.navigate("Quiz", { category, level });
  };

  const handleCreateQuizPress = () => {
    navigation.navigate("CreateQuiz", {category});
  };

  return (
    <EnteringContainer>
      <EnteringButton onPress={()=>handleCreateQuizPress()}>
<ExtraText>flashCard 만들기</ExtraText>
      </EnteringButton>
      <Subtitle>레벨을 선택해주세요</Subtitle>
      <EnteringButton
        style={styles.levelButton}
        onPress={() => handleLevelPress("0")}
      >
        <ExtraText style={styles.levelButtonText}>Easy</ExtraText>
      </EnteringButton>
      <EnteringButton onPress={() => handleLevelPress("1")}>
        <ExtraText style={styles.levelButtonText}>Medium</ExtraText>
      </EnteringButton>
      <EnteringButton
        style={styles.levelButton}
        onPress={() => handleLevelPress("2")}
      >
        <ExtraText>Hard</ExtraText>
      </EnteringButton>
    </EnteringContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  levelButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Level;
