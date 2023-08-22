import React, { useState } from "react";
import MyTextInput from "../components/textInput";
import {
  ButtonText,
  QuizCreateContainer,
  StyledButton,
  StyledContainer,
} from "../components/styles";
import instance from "../api/interceptor";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";


const CreateQuiz = ({ navigation, route }) => {
    const {category} = route.params;
    console.log(category)
  const [quizData, setQuizData] = useState({
    question: "",
    answer: "",
    level:0
  });


  const handleCreateQuiz = async () => {
    try {
  
      const response = await instance.post(`/quiz/${category}`, quizData);
      console.log(response);
      navigation.navigate("Level",{category});
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (field, value) => {
    setQuizData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <StyledContainer>
      <QuizCreateContainer>
        <View>
        <Picker
            selectedValue={quizData.level}
            onValueChange={(itemValue) => handleChange("level", itemValue)}
          >
            <Picker.Item label="Easy" value={0} />
            <Picker.Item label="Medium" value={1} />
            <Picker.Item label="Hard" value={2} />
          </Picker>

          <MyTextInput
            name="question"
            label="문제"
            placeholder="what is eventloop"
            onChangeText={(text) => handleChange("question", text)}
            value={quizData.question}
          />

          <MyTextInput
            name="answer"
            label="내용"
            placeholder="이벤트 루프란..."
            onChangeText={(text) => handleChange("answer", text)}
            value={quizData.answer}
          />
          <StyledButton onPress={handleCreateQuiz}>
            <ButtonText>Create Quiz</ButtonText>
          </StyledButton>
        </View>
      </QuizCreateContainer>
    </StyledContainer>
  );
};

export default CreateQuiz;
