import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Pressable } from 'react-native';
import styles from '../styles.js';

import { db } from '../../src/config/firebase.js';
import { addDoc, collection } from 'firebase/firestore';

class LocalInfo {
    constructor(nome_local, administrador) {
        this.nome_local = nome_local;
        this.administrador = administrador;
    }
}


async function addLocalInfo(localInfo) {
    await addDoc(collection(db, 'local'), {
        'nome_local': localInfo.nome_local,
        'administrador': localInfo.administrador
    });
    console.log(localInfo.administrador);

    return;
}

export default function Cadastra_Local({route, navigation}) {
    const { users } = route.params;
    const [nome_local, set_nome_local] = useState('');
    const [administrador] = useState('');

    const addInfo = async (localInfo) => {
        await addLocalInfo(localInfo);
    };

    const simpleAlert = () => {
        alert("Local cadastrado com sucesso!");
    }

    const uploadLocal = async (localInfo) => {
        addInfo(new LocalInfo(nome_local, administrador));
        simpleAlert();
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Novo Local</Text>
            <Text style={styles.field_name}>Nome do Local</Text>
            <TextInput 
                onChangeText={new_nome_local => set_nome_local(new_nome_local)}
                defaultValue={nome_local}
                style={styles.field}
                placeholder="Digite aqui o nome do local" />
            <Pressable
                onPress={() => uploadLocal(new LocalInfo(nome_local, users[0]['dados']['nome']))}
                style={styles.button}>
                <Text style={styles.text}>Cadastrar</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
}