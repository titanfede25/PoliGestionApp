import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";



export default function PantallaInicial(){
    const route = useRoute()
    const post = route.params?.post
    return (
        <View>
            <Text>{post}</Text>
        </View>
    );
    
}