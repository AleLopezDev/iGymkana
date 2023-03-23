import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, Linking } from 'react-native';
import { redirigir } from './funciones/rrss/redirigir';

export default function App() {
  const handleButtonPress = (screen) => {
   
    console.log(`Navegando a la pantalla: ${screen}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Monitores')}>
          <Image source={require('./assets/monitor.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Monitores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Actividades')}>
          <Image source={require('./assets/actividades.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Actividades</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Equipos')}>
          <Image source={require('./assets/equipos.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Equipos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Clasificación')}>
          <Image source={require('./assets/clasificacion.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Clasificación</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity >
        <Text style={{color: 'black', fontSize: 14, marginBottom: 20}}>¿Eres Monitor? Inicia Sesión</Text>
      </TouchableOpacity>

      <View style={styles.socialIconsContainer}>
          <TouchableOpacity onPress={() => redirigir('https://www.instagram.com/sanjosemalaga/')}>
            <Image source={require('./assets/rrss/instagram.png')} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => redirigir('https://fundacionloyola.com/sanjose/')}>
            <Image source={require('./assets/rrss/sitio-web.png')} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => redirigir('https://www.facebook.com/sanjosemalaga')}>
            <Image source={require('./assets/rrss/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // Cambia 'center' a 'flex-start'
    paddingTop: 20, // Añade un poco de espacio en la parte superior, ajusta según lo necesario
  },
  // ... los demás estilos ...
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 50,
    marginTop: 100, // Añade esto para ajustar el margen superior del logotipo
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#1E90FF',
    marginHorizontal: 20,
    alignItems: 'center',
    width: '35%',
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  buttonText: {
    color: '#1E90FF',
    fontSize: 18,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 30,
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
