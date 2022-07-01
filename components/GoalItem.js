import React from 'react'
import { View, StyleSheet,Text, Pressable } from 'react-native'

 const GoalItem = ({goal, deleteGoalHandler}) => {
  const onDelete = ()=>{
    deleteGoalHandler(goal)
  }
  return (
    <Pressable onPress={onDelete}>

      <View style={styles.goalItem} >
            
      <Text style={styles.goalText}>{goal}</Text>
    </View>
    </Pressable>
  )
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    
  },
  goalText: {
    color: 'white'

  }
})

