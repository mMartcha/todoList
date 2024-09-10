import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext, useState } from "react";
import Card from "../components/Card";
import uuid from 'react-native-uuid';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TodoContext, TodoProps } from "@/context/TodoContext";

export default function App(){


    const {setTodoItem,setTodoList,todoItem,todoList} = useContext(TodoContext)
    const insets = useSafeAreaInsets();

    function addPeople(){
        setTodoList([...todoList, {id: uuid.v4().toString(), todoText: todoItem, isChecked: false}]);
        setTodoItem('')
        console.log(todoList)
    }

    function handleRemove(itemToDelete: TodoProps){
        setTodoList(prevState => prevState.filter(todo => todo.id !== itemToDelete.id))
    }

    return(
        <View style={{flex:1, paddingTop: insets.top, backgroundColor:'black'}}>
            <View>
                <Text style={{color:'white', alignSelf:'center', marginBottom:24, fontSize:40, fontWeight:'bold'}}>todo</Text>
            </View>

            <View style={styles.upView}>
                <TextInput
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor='white'
                cursorColor='white'
                style={styles.input}
                value={todoItem}
                onChangeText={setTodoItem}
                
                
                />
                <View style={styles.addBtn}> 
                    <Pressable onPress={() => addPeople()}>
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                    </Pressable>
                </View>
            </View>

            <View style={{backgroundColor:'grey', height:1, marginHorizontal:16, top:20}}/>

            <View style={styles.cardView}>
                <FlatList
                data={todoList}
                renderItem={({item}) => (
                    <Card
                    item={item}
                    onDelete={handleRemove}
                    key={item.id}
                    
                    />
                )}
                ListEmptyComponent={() =>(
                    <View style={{alignItems:'center'}}>
                        <FontAwesome name="list-alt" size={76} color="grey" />
                        <Text style={{color:'grey', fontWeight:'bold', fontSize:16}}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={{color:'grey', fontSize:16}}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
                />
                
            </View>
        </View>
    )
}