import React, {useState} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {Card} from "react-native-elements";

export default function App() {
  const[game, setGame] = useState();

  const[votes, setVotes] = useState(false);

  // This function increases the votes for Persona 5
  function increasePersonaVote(value)
  {
    setGame("persona");
    setVotes(true);
  }

  // This function increases the votes for Yakuza: Like a Dragon
  function increaseYakuzaVote(value)
  {
    setGame("yakuza");
    setVotes(true);
  }

  // This function increases the votes for Final Fantasy VII: REmake
  function increaseFinalVote(value)
  {
    setGame("final");
    setVotes(true);
  }

  return (
    <View style={styles.container}>
    { votes ? (
      <View style={styles.container}>
        <Text>You voted for {game}!</Text>
      </View>
    ) : (
        <View>
        <Text style={styles.headerText}>Vote for your favorite video game!</Text>
        <Card>
          <Button title="Persona 5" onPress={(value) => (increasePersonaVote('persona'))}/>
        </Card>
        <Card.Divider/>
        <Card>
          <Button title="Yakuza: Like a Dragon" onPress={(value) => (increaseYakuzaVote('yakuza'))}/>
        </Card>
        <Card.Divider/>
        <Card>
          <Button title="Final Fantasy VII: Remake" onPress={(value) => (increaseFinalVote('final'))}/>
        </Card>
        </View>
    )
    }
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
