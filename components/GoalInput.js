import React, { useState } from "react";
import { TextInput, View, Button,StyleSheet,Modal } from "react-native";

function GoalInput({ addGoalHandler, visible }) {
  const [text, setText] = useState("");
  const goalInputHandler = (text) => {
    setText(text);
  };
  const onAddGoal = ()=>{
    addGoalHandler(text)
    setText('')
  }
 
  

  return (
    <Modal visible={visible} animationType={"slide"}>

    <View style={styles.inputContainer}>
      <TextInput
        value={text}
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="Your course goal!"
      />

      <Button onPress={onAddGoal} title="Add Goal"/>
    </View>
    </Modal>

    
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
