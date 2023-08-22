import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './navigator/RootStack';
import useAuthStore from './api/store';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isActive } = useAuthStore();

  useEffect(() => {
    const fetchIsActive = async () => {
      const authStore = await useAuthStore.getState();
      console.log(authStore)
      setIsLoading(false);
    };

    fetchIsActive();
  }, [isActive]);

 

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <RootStack isActive={isActive} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
