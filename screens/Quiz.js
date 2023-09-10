import React, { useState, useEffect, useRef } from "react";
import { FlatList, View, Text, Dimensions } from "react-native";
import instance from "../api/interceptor";
import CardItem from "../components/cardItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthStore from "../api/store";
import { StyledContainer, PageTitle } from "../components/styles";

const { width } = Dimensions.get("window");

const Card = ({ navigation, route }) => {
  const { category, level } = route.params;
  const [questions, setQuestions] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const prevCardIndexRef = useRef(currentCardIndex);
  const { logout } = useAuthStore();

  useEffect(() => {
    getQuiz();
  }, []);

  const getQuiz = async () => {
    try {
      const response = await instance.get(`/quiz/${category}/${level}`);
      setQuestions(response.data);
    } catch (error) {
      console.log(error);
      await logout();
      navigation.navigate("Login");
    }
  };

  const renderCard = ({ item, index }) => {
    return (
      <CardItem
        question={item.question}
        answer={item.answer}
        isFront={index === currentCardIndex}
      />
    );
  };

  const handleMomentumScrollEnd = (event) => {
    const newIndex = Math.floor(
      Math.floor(event.nativeEvent.contentOffset.x) /
        Math.floor(event.nativeEvent.layoutMeasurement.width)
    );

    if (newIndex !== prevCardIndexRef.current) {
      console.log("Transition to card:", newIndex);
      setCurrentCardIndex(newIndex);
      prevCardIndexRef.current = newIndex;
    }
  };

  return (
    <>
      {questions.length === 0 ? (
        <StyledContainer>
          <PageTitle>no Cards</PageTitle>
        </StyledContainer>
      ) : (
        <FlatList
          data={questions}
          keyExtractor={(item) => item._id}
          horizontal
          pagingEnabled
          renderItem={renderCard}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleMomentumScrollEnd}
        />
      )}
    </>
  );
};

export default Card;
