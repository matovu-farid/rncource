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
          // placeholderTextColor='#120438'

        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={closeModel} color='#f31282' title="Cancel" />
          </View>
          <View style={styles.button}>
            <Button onPress={onAddGoal} color='#5e0acc' title="Add Goal" />
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
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: '#311b6b',
    paddingHorizontal: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: '#120438',
    borderRadius: 6,
    width: "100%",
    padding: 12,
    
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
