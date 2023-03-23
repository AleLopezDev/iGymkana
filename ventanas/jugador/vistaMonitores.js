import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const VistaMonitores = ({ route }) => {
  const { monitores, actividades } = route.params;

  const [search, setSearch] = useState('');

  const filteredMonitores = monitores.filter((monitor) => {
    const monitorInfo = `${monitor.nombre} ${monitor.actividad}`.toLowerCase();
    return monitorInfo.includes(search.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={(text) => setSearch(text)}
        value={search}
        placeholder="Buscar monitores..."
      />
      <FlatList
        data={filteredMonitores}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => console.log(`Mostrar detalles de ${item.nombre}`)}>
            <Image style={styles.monitorImage} source={{ uri: item.imagen }} />
            <View style={styles.cardInfo}>
              <Text style={styles.monitorName}>{item.nombre}</Text>
              <Text style={styles.monitorActivity}>{actividades[item.actividad]}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  monitorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardInfo: {
    marginLeft: 10,
  },
  monitorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  monitorActivity: {
    fontSize: 14,
    color: '#777',
  },
});

export default VistaMonitores;
