import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TodoContext, TodoProps } from "@/context/TodoContext";
import { useContext, useState } from "react";

type Props ={
   item: TodoProps
   onDelete: (item: TodoProps) => void
}
  

export default function Card({item, onDelete}:Props){

    const {setTodoItem,setTodoList,todoItem,todoList, isChecked, setIsChecked} = useContext(TodoContext)
  

    function toggleChecked(){
        setIsChecked(prevState => !prevState)
        console.log(isChecked)
        console.log(todoList)
    }

    return(
        <View style={styles.card}>
            <View style={{ marginLeft:8}}>
                <Pressable onPress={() => toggleChecked()}>
                    <FontAwesome6 name={isChecked? 'circle' : 'circle-check'} size={24} color={isChecked ? '#4EA8DE' : '#8284FA'} />
                </Pressable>
            </View>
            <View style={{ flex:1, marginHorizontal:10, alignItems:"center"}}>
                <Text style={{color:'white'}}>{item.todoText}</Text>
            </View>
            <View style={{ marginRight:8}}>
                <Pressable onPress={ () => onDelete(item)}>
                    <Ionicons name="trash-outline" size={24} color="grey" />
                </Pressable>
            </View>
        </View>
    )
}