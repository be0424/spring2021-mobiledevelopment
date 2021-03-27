import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PricingCard } from 'react-native-elements';
import { Card, Button } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Ben Wilcox</Card.Title>
        <Text>Tacos</Text>
        <Card.Divider/>
        <Text>Sushi</Text>
        <Button title = "Submit"/>
      </Card>
    </View>
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
