import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";

function GoalInput({ addGoalHandler, visible }) {
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
        <TextInput
          value={text}
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={onAddGoal} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={onAddGoal} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 24,
    padding: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
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
