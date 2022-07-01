import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,

  Button
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import  GoalItem  from "./components/GoalItem";


export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalOpen,setIsModalOpen] = useState(false)
  const openModel = ()=>{
    setIsModalOpen(true)
  }
  const closeModel = ()=>{
    setIsModalOpen(false)
  }
  const deleteGoalHandler = (deletedKey)=>{
    setGoals(state=>state.filter(({key})=> key!==deletedKey))
  }
  const addGoalHandler = (text) => {
    setGoals((state) => [...state, { text, key: Math.random().toString() }]);
    closeModel()
  };
 
 
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
       <Button onPress={openModel} title="Add new Goal ..." color={'#5e0acc'}/>
      <GoalInput closeModel={closeModel} visible={isModalOpen}  addGoalHandler={addGoalHandler} />
       
      <View style={styles.goalsContainer}>

        <FlatList data={goals}
        renderItem={({item:{text:goal,key}})=>(
          <GoalItem deleteGoalHandler={deleteGoalHandler} goal={goal} id={key}/>
        )} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: '#1e085a'
  },


  goalsContainer: {
    flex: 5,
  },

});
