import React, {useEffect} from "react";
import { View, StyleSheet ,Dimensions,TouchableWithoutFeedback} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CardBack from "./cardBack";
import CardFront from "./cardFront"; // Make sure the import path is correct
import {  StyledContainer, Colors, InnerContainer, PageTitle, Subtitle, StyledButton, ButtonText, TextLink, TextLinkConetent } from "./../components/styles";

const { width, height } = Dimensions.get("window");
const CardItem = ({ question, answer, isFront }) => {
  
  const rotate = useSharedValue(0);

  const frontAnimatedStyles = useAnimatedStyle(() => {
      const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
      return {
          transform: [
              {
                  rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
              },
          ],
      };
  });

  const backAnimatedStyles = useAnimatedStyle(() => {
      const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
      return {
          transform: [
              {
                  rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
              },
          ],
      };
  });

  useEffect(() => {
      rotate.value = isFront ? 0 : 0;
  }, [isFront]);

  return (
    <View style={styles.cardContainer}>
   
      <Animated.View style={[styles.frontcard, frontAnimatedStyles]}>
        <CardFront rotate={rotate} question={question} />
      </Animated.View>
      <Animated.View style={[styles.backCard, backAnimatedStyles]}>
     
        <CardBack rotate={rotate} answer={answer} />
       
      </Animated.View>
    </View>
  )
};


const styles = StyleSheet.create({
  frontcard: {
    position: "absolute",
    backfaceVisibility: "hidden",
  },
  backCard: {
    backfaceVisibility: "hidden",
  },
  cardContainer: {
    width:width,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height:height,
    backgroundColor:"white"
  },
});

export default CardItem;
