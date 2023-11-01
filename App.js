import React, { useRef, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './views/Login/Login';
import Cadastro_Perfil from './views/Home/Cadastro_Perfil';

import Oftalmologista_Home from './views/Oftalmologista/Oftalmologista_Home';
import Exames_Pendentes_Oftalmologista from './views/Oftalmologista/Exames_Pendentes_Oftalmologista';
import Laudo from './views/Oftalmologista/Laudo';
import Ver_Laudo from './views/Oftalmologista/Ver_Laudo';
import Laudos_Feitos from './views/Oftalmologista/Laudos_Feitos';


import Admin_Home from './views/Admin/Admin_Home';
import Cadastra_Local from './views/Admin/Cadastra_Local';
import Autoriza_Usuarios from './views/Admin/Autoriza_Usuarios';
import Verifica_Usuarios from './views/Admin/Verifica_Usuarios';
import Seleciona_Examinador_Da_Semana from './views/Admin/Seleciona_Examinador_Da_Semana';

import Examinador_Home from './views/Examinador/Examinador_Home';
import Exames_Pendentes from './views/Examinador/Exames_Pendentes';
import Exame from './views/Examinador/Exame';
import Atribuir_Coleta from './views/Examinador/Atribuir_Coleta';
import Exames_Atribuidos from './views/Examinador/Exames_Atribuidos';
import Coletas_Em_Andamento from './views/Examinador/Coletas_Em_Andamento';
import Coletas_Feitas from './views/Examinador/Coletas_Feitas';

import Requisitante_Home from './views/Requisitante/Requisitante_Home';
import Solicitacao_Exame from './views/Requisitante/Solicitacao_Exame';

import Ver_Laudos from './views/Ver_Laudos';

import { userGlobal } from './global';

import { DefaultTheme } from '@react-navigation/native';

const CircleAvatar = ({ text }) => {
  return (
    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{text}</Text>
    </View>
  );
};

export default function App() {
  const Stack = createStackNavigator();

  const navTheme = DefaultTheme;
  navTheme.colors.background = '#fff';
  navTheme.colors.card = '#6a79a8';
  navTheme.colors.text = '#fff';

  
  
  return (
    <NavigationContainer theme={navTheme}>
       <Stack.Navigator>
      {userGlobal.isLoggedIn == false && <Stack.Screen name='Login' component={Login} options={{ title: 'Televisão', headerTitleAlign: 'center'}}/>}
       <Stack.Screen name='Cadastro_Perfil' component={Cadastro_Perfil} options={{ title: 'Televisão' , headerTitleAlign: 'center' }}/>
       <Stack.Screen name='Admin_Home' component={Admin_Home} options={{ title: 'Televisão', headerTitleAlign: 'center' }}/>
       <Stack.Screen name='Cadastra_Local' component={Cadastra_Local} options={{ title: 'Televisão', headerTitleAlign: 'center' }}/>
       <Stack.Screen name='Autoriza_Usuarios' component={Autoriza_Usuarios} options={{ title: 'Televisão', headerTitleAlign: 'center' }}/>
       <Stack.Screen name='Verifica_Usuarios' component={Verifica_Usuarios} options={{ title: 'Televisão', headerTitleAlign: 'center' }}/>
       <Stack.Screen name='Seleciona_Examinador_Da_Semana' component={Seleciona_Examinador_Da_Semana} options={{ title: 'Televisão', headerTitleAlign: 'center' , headerTitleAlign: 'center' }}/>

       <Stack.Screen name='Requisitante_Home' component={Requisitante_Home} options={{ title: 'Televisão', headerTitleAlign: 'center' }}/>
       <Stack.Screen name='Solicitacao_Exame' component={Solicitacao_Exame} options={{ title: 'Televisão', headerTitleAlign: 'center' }}/>
       <Stack.Screen name='Ver_Laudos' component={Ver_Laudos} options={{ title: 'Televisão' }}/>

       <Stack.Screen name='Examinador_Home' component={Examinador_Home} options={{ title: 'Televisão', headerTitleAlign: 'center' }}/>
       <Stack.Screen name='Exames_Pendentes' component={Exames_Pendentes} options={{ title: 'Televisão', headerTitleAlign: 'center' }} />
       <Stack.Screen name='Oftalmologista_Home' component={Oftalmologista_Home} options={{ title: 'Televisão', headerTitleAlign: 'center' }}/>
       <Stack.Screen name='Exames_Pendentes_Oftalmologista' component={Exames_Pendentes_Oftalmologista} />
       <Stack.Screen name='Laudo' component={Laudo} options={{ title: 'Televisão', headerTitleAlign: 'center' }}/>
       <Stack.Screen name='Laudos_Feitos' component={Laudos_Feitos} options={{ title: 'Televisão', headerTitleAlign: 'center' }}/>
       <Stack.Screen name='Ver_Laudo' component={Ver_Laudo} options={{ title: 'Televisão', headerTitleAlign: 'center' }}/>

       <Stack.Screen name='Exame' component={Exame} />
       <Stack.Screen name='Atribuir_Coleta' component={Atribuir_Coleta} options={{ title: 'Televisão', headerTitleAlign: 'center' }} />
       <Stack.Screen name='Exames_Atribuidos' component={Exames_Atribuidos} options={{ title: 'Televisão', headerTitleAlign: 'center' }} />
       <Stack.Screen name='Coletas_Em_Andamento' component={Coletas_Em_Andamento} options={{ title: 'Televisão', headerTitleAlign: 'center' }} />
       <Stack.Screen name='Coletas_Feitas' component={Coletas_Feitas} options={{ title: 'Televisão', headerTitleAlign: 'center' }} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}