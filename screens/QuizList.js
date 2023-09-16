import React, { useEffect, useState } from "react"
import useAuthStore from "../api/store";
import instance from "../api/interceptor";
import { PageTitle, StyledContainer } from "../components/styles";
import { View,Text,ScrollView,StyleSheet, Button } from "react-native";

const QuizList = ({navigation, route})=>{
    const {category, level} = route.params;
    const { logout } = useAuthStore();
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(()=>{
        getQuizList()
    },[])

    const getQuizList = async () =>{
        try {
            const response = await instance.get(`/quiz/list/${category}/${level}`)
            setList(response.data)
            setIsLoading(false)
        } catch (error) {
            await logout();
            navigation.navigate("Login")
        }
    }
    const handleDelete = async(_Id)=>{
        try {
            const response = await instance.delete(`/quiz/${category}/${level}/${_Id}`)
            console.log(response)
        } catch (error) {
            
        }
      

    }

    if (isLoading) {
        return (
          <StyledContainer>
            <PageTitle>Loading...</PageTitle>
          </StyledContainer>
        );
      }

      return (
        <ScrollView contentContainerStyle={styles.container}>
        {list.map((item, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.question}>{item.question}</Text>
            <Button style={styles.deleteButton} title="삭제" onPress={() => handleDelete(item._id)} />
          </View>
        ))}
      </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
      },
      box: {
        backgroundColor: "purple",
        padding: 20,
        marginBottom: 10,
        borderRadius: 8,
        width: 300,
      
     
      },
      question: {
        fontSize: 18,
        fontWeight: "bold",
        color:"white",
        textAlign:"left"
      },
     deleteButton: {
        backgroundColor:"black",
        width:500,
        
      },
    });
    
    export default QuizList;
