import React from 'react'
import { View, StyleSheet,Text, Pressable } from 'react-native'

 const GoalItem = ({goal, deleteGoalHandler, id}) => {
  const onDelete = ()=>{
    deleteGoalHandler(id)
  }
  return (
    
    <View style={styles.goalItem} >
        <Pressable style={({pressed})=>pressed && styles.pressedItem} onPress={onDelete}>
            
      <Text style={styles.goalText}>{goal}</Text>
      </Pressable>
    </View>
  )
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    
  },
  pressedItem: {
   
    backgroundColor: '#77ccee',
    borderRadius: 6,

  },
  goalText: {
    padding: 8,
    color: 'white'

  }
})

