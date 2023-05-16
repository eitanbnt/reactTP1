import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Modal, Alert } from "react-native";
import Button from "./Button";
//import Modale from "./Modale";

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
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const addGoalHandler = () => {
    sampleGoals.push(inputValue);
    //Alert.alert(`Nouvel objectif ajouté : ${inputValue}`);
    setInputValue("");
    closeModal();
  };
  const Remove = (id) => {
    updateListe = sampleGoals.splice(id, 1);
    setListe(updateListe);
  };

  const Change = (id, item) => {
    updateListe = sampleGoals.map(Return(id, item, sampleGoals));
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
            <Button label="X" onPress={() => Remove(id)} />
            <Button label="Modifier" onPress={() => Change(id, item)} />
          </View>
        ))}
      </View>

      <Button label="Ajouter une tâche" onPress={openModal} />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="saisir votre reponse"
              onChangeText={(text) => setInputValue(text)}
              value={inputValue}
            />

            <Button label="Add" onPress={addGoalHandler} />
            <Button label="Fermer" onPress={closeModal} />
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />

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
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    flexDirection: "row",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 50,
    textShadowColor: 'red',
    height:150,
  },

});