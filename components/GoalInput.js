import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal ,Image} from "react-native";

function GoalInput({ addGoalHandler, visible, closeModel }) {
  const [text, setText] = useState("");
  const goalInputHandler = (text) => {
    setText(text);
  };
  const onAddGoal = () => {
    addGoalHandler(text);
    setText("");
  };

  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>

        <Image  style={styles.image} source={require('../assets/goal.png')}></Image>
        </View>
        <TextInput
          value={text}
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your course goal!"
          placeholderTextColor='#fff'

        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={onAddGoal} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={closeModel} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    alignItems: 'center'
  },
  image: {
    width: 115,
    height: 100,
    margin: 20
    // padding: 40,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
    color: '#fff',
    
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    margin: 8,
  },
});

export default GoalInput;
