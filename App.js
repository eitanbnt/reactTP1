import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d'altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [remove, setListe] = useState(sampleGoals);


  const addGoalHandler = () => {
    sampleGoals.push(inputValue);
    //Alert.alert(`Nouvel objectif ajouté : ${inputValue}`);
    setInputValue("");
  };
  const Remove = (id) => {
    updateListe = sampleGoals.splice(id, 1);
    setListe(updateListe);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.red, styles.bold]}>
          Voici votre programme de la journée :
        </Text>

        {sampleGoals.map((item, id) => (
          <View key={id}>
            <Text>{item}</Text>
            <Button title="X" onPress={() => Remove(id)}/>
          </View>
        ))}
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.input}
          placeholder="saisir votre reponse"
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />

        <Button title="Add" onPress={addGoalHandler} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  red: {
    color: "red",
  },
  bold: {
    fontWeight: "bold",
  },
  input: {
    color: "purple",
    borderColor: "purple",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  Button: {
    flexDirection: "row",
  },
});