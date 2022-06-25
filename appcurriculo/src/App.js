import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/img017.jpg';
import Card from './components/card'



const App = () => {

  function handleRedeSocial(rede_social){
 switch (rede_social) {
  case 'linkedin':
  Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/fabio-luiz-teixeira-navarro-539457a3/')
    
    break;
    case 'github':
  Alert.alert('Meu github','https://github.com/Fabio-1984')
    
    break;

    case 'facebook':
  Alert.alert('Meu facebook','')
    
    break;
 
  
 }
  }

  return (
    <>

      <View style={style.page}>
        <View style={style.container_cabecalho}>

          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Fabio Navarro</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
              <TouchableOpacity onPress={() => handleRedeSocial('github') }>
            <Icon name='github' size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook') }>
            <Icon name='facebook' size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin') }>
            <Icon name='linkedin' size={30} />
            </TouchableOpacity>
          </View>
        </View>

       <Card titulo='Formação Academica'>
           <Text style={style.card_content_text}>Universidade Cruzeiro do Sul</Text>
          <Text style={style.card_content_text}>Senac</Text>
          <Text style={style.card_content_text}>Dio</Text>

       </Card>
       <Card titulo='Experiência profissional'>
          <Text style={style.card_content_text}>Stefanini</Text>
          <Text style={style.card_content_text}>Automação 2000</Text>
          <Text style={style.card_content_text}>Disys</Text>

       </Card>
        
        </View>
      
    </>

  )
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    color: 'black'

  },


  container_cabecalho: {

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50



  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },

  funcao: {
    color: '#939393',
    marginBotton: 10
  },

  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20

  },

  card_content_text:{
    color: '#939393',
    marginBottom: 10
},

  

})



export default App;
