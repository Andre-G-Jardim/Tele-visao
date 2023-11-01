import React, { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Pressable, Image } from 'react-native';
import loginStyle from  './LoginStyle.js';
import { db } from '../../src/config/firebase.js';
import { useAuth } from '../../src/context/AuthContext.js';
import { auth } from '../../src/config/firebase.js';
import { userGlobal } from '../../global.js';
import logo from '../../assets/logo.png';
import { collection, getDocs, updateDoc, doc,  query, where} from 'firebase/firestore';
import { createUserWithEmailAndPassword,
          onAuthStateChanged,
          signInWithEmailAndPassword,
          signOut,
} from "firebase/auth";

export default function Login({navigation}){
  const emailRef = useRef()
  const passwordRef = useRef()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [emailNotFound, setEmailNotFound] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const login = async () => {
    try{
      await signInWithEmailAndPassword(
        auth, 
        loginEmail, 
        loginPassword
      );
      getUser();
    } catch (error){
      if(error.code === "auth/user-not-found"){
        setEmailNotFound(true);
      }
      if(error.code === "auth/wrong-password"){
        setWrongPassword(true);
      }
      console.log(error.message);
    }
  }

  const getUser = async () => {
    try{
      let users = new Array();
      let userRef = collection(db, "usuario");
      let acceptedQuery = query(userRef, where("email", "==", loginEmail));
      let userSnapshot = await getDocs(acceptedQuery);
      userSnapshot.forEach(u => {
        users.push({'dados': u.data()});
      });

      userGlobal.email = users[0].dados["email"];
      userGlobal.perfil = users[0].dados["perfil"];
      userGlobal.examinador_da_semana = users[0].dados["examinador_da_semana"];
      userGlobal.name = users[0].dados["nome"];
      userGlobal.isLoggedIn = true;

      if(users[0].dados["perfil"] == "Examinador"){
        navigation.navigate('Examinador_Home', {
          users: users
      })
      } else if(users[0].dados["perfil"] == "Requisitante"){
        navigation.navigate('Requisitante_Home', {
          users: users
      })
      } else if(users[0].dados["perfil"] == "Oftalmologista"){
        navigation.navigate('Oftalmologista_Home', {
          users: users
      })
      } else if(users[0].dados["perfil"] == "Administrador"){
        navigation.navigate('Admin_Home', {
          users: users
      })
      }

    } catch (error){
      console.log(error.message);
    }
  }

  const signUp = async () => {
    navigation.navigate('Cadastro_Perfil')
  }

  const logout = async () => {
    await signOut(auth);
  }

  return(
      <View style={loginStyle.containerCentralize}>
        <View style={loginStyle.containerLogin}>
          <View style={loginStyle.divLogo}>
            <Image source={logo} style={loginStyle.logo} />
          </View>

          <Text style={loginStyle.titleLogin}>Login</Text>
          <Text style={loginStyle.textLogin}>E-mail</Text>
          <TextInput 
            style={[
              loginStyle.fieldLogin, 
              emailNotFound && {borderColor: 'red', borderWidth: 1}
            ]} 
            placeholder="Digite seu e-mail" 
            type="email" 
            ref={emailRef} 
            value={loginEmail}
            onChangeText={(value) => {setLoginEmail(value); setEmailNotFound(false);}}
            required
          />
          {emailNotFound && <Text style={{color: 'red'}}>Email não encontrado.</Text>}
          <View style={loginStyle.containerLeft}> 
            <Text style={loginStyle.textLogin}>Senha</Text>
          </View>
          <TextInput
            secureTextEntry={true}
            style={[
              loginStyle.fieldLogin,
              wrongPassword && {borderColor: 'red', borderWidth: 1}
            ]}
            placeholder="Digite sua senha"
            type="password"
            ref={passwordRef}
            value={loginPassword}
            onChangeText={(value) => {setLoginPassword(value); setWrongPassword(false);}}
            required
          />
          {wrongPassword && <Text style={{color: 'red'}}>Senha incorreta.</Text>}
          <Text style={loginStyle}>
            Não tem uma conta?{' '} 
            <Text style={loginStyle.link} onPress={signUp}>
              Cadastre-se
            </Text>
          </Text>
         
          <View style={loginStyle.containerCentralize}>
            <Pressable style={loginStyle.buttonLogin} type="submit" disabled={loading} onPress={login}>
              <Text style={loginStyle.titleButton}>Entrar</Text>
            </Pressable>
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
  );
}