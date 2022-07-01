import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";
import GoalInput from "./components/GoalInput";
import  GoalItem  from "./components/GoalItem";


export default function App() {
  const [goals, setGoals] = useState([]);
  const deleteGoalHandler = (goal)=>{
    setGoals(state=>state.filter(({text})=> text!==goal))
  }
  const addGoalHandler = (text) => {
    setGoals((state) => [...state, { text, key: Math.random().toString() }]);
    console.log(goals);
  };
 
 
  return (
    <View style={styles.appContainer}>
      <GoalInput  addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>

        <FlatList data={goals}
        renderItem={({item:{text:goal}})=>(
          <GoalItem deleteGoalHandler={deleteGoalHandler} goal={goal}/>
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "flex-start",
  },


  goalsContainer: {
    flex: 5,
  },

});
