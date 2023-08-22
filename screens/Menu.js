import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import useAuthStore from '../api/store';
import { EnteringButton, EnteringContainer, ExtraText, PageTitle, Subtitle } from '../components/styles';

const Menu = ({navigation}) => {
  const{nickname, userId} = useAuthStore();

  const handleCategoryPress = (category) => {

    navigation.navigate("Level", {category})

  };

 

  return (
    <EnteringContainer>
      <Subtitle>{nickname}님 오늘도 한바퀴 돌려볼까요</Subtitle>
      <EnteringButton
        style={styles.categoryButton}
        onPress={() => handleCategoryPress('nodejs')}
      >
        <ExtraText style={styles.categoryButtonText}>Node.js</ExtraText>
      </EnteringButton>
      <EnteringButton
        style={styles.categoryButton}
        onPress={() => handleCategoryPress('javascript')}
      >
        <ExtraText style={styles.categoryButtonText}>JavaScript</ExtraText>
      </EnteringButton>
      <EnteringButton
        style={styles.categoryButton}
        onPress={() => handleCategoryPress('personnel')}
      >
        <ExtraText>Personnel</ExtraText>
      </EnteringButton>
    </EnteringContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Menu;
