
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import * as Icon from "react-icons/ai"
import { MaterialIcons } from '@expo/vector-icons';

export default function Card({item,deleteFunction}) {

  return (
    <View style={styles.card}>
      <View style={styles.header}>
      <Text >{item.text}</Text>
      </View>
      
      <View style={styles.body}>
      <TouchableOpacity style={styles.button} >
      <MaterialIcons name="edit" size={24} color="black" />

      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>{deleteFunction(item.key)}}>
      <MaterialIcons name="delete" size={24} color="black" />

      </TouchableOpacity>
      
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
      height:60,
      width:350,
      backgroundColor:'#babdd1',
      top:30,
      borderRadius:5,
      flexDirection:"row"
    
    },
    header:{
      display:'flex',
      width:"70%",
      height:"100%",
      alignItems:'center',
      justifyContent:'center',
     
    },
    body:{
  display:'flex',
  flexDirection:'row',
  alignItems:"center",
  gap:2,
  height:"100%",
  width:"30%",
  justifyContent:'center',
  
    },
    button:{
      display:'flex',
      flexDirection:'column',
      alignItems:"center",
      height:"100%",
      width:"50%",
      justifyContent:'center'
    }
   
  });
  