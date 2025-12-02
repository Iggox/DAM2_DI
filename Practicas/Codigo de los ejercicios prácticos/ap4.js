import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";

const nombre = (miNombre, apellido) => {
  return (
    <Text>
      Hola {miNombre} {apellido}
    </Text>
  );
};

const datos = (textoLabel) => {
  return (
    <View style={estilo === "florida" ? styles.florida : styles.upv}>
      <TextInput
        label={textoLabel}
        placeholder="Primer text input"
        placeholderTextColor={estilo === "florida" ? "white" : "orange"}
        left={<TextInput.Icon icon="eye" />}
      ></TextInput>
      <TextInput
        label="Segunda linea"
        placeholder="Segundo text input"
        placeholderTextColor={estilo === "florida" ? "white" : "orange"}
        left={<TextInput.Icon icon="eye" />}
      ></TextInput>
    </View>
  );
};

const botonInformes = () => {
  return (
    <Button
      icon="format-list-bulleted"
      mode="contained"
      style={{ borderRadius: 5 }}
    >
      INFORMES
    </Button>
  );
};

const estilo = "florida";
const isAdmin = false;

const modulos2Dam = [
  { nombre: "DIN", profesor: "Manel", horas: 120 },
  { nombre: "ADA", profesor: "Juanmi", horas: 120 },
  { nombre: "PMDM", profesor: "Fran", horas: 100 },
  { nombre: "PSP", profesor: "Fran", horas: 60 },
  { nombre: "SGE", profesor: "Belén", horas: 100 },
  { nombre: "Inglés", profesor: "Caterina", horas: 40 },
  { nombre: "EIE", profesor: "Manuel", horas: 60 },
];

const mostrarDatos = () => {
  return modulos2Dam.map((value, index) => (
    <View
      style={index % 2 === 0 ? styles.par : styles.impar}
      key={index.toString()}
    >
      <Text>{index + 1}</Text>
      <Text>{value.nombre}</Text>
      <Text>{value.profesor}</Text>
      <Text>{value.horas} horas</Text>
    </View>
  ));
};

class App extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        {nombre("Ignacio", "Gonzalez")}
        {datos("Introduce tus datos")}
        {isAdmin === true && botonInformes()}
        <ScrollView>{mostrarDatos()}</ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  upv: {
    backgroundColor: "purple",
    fontSize: 10,
    fontWeight: "600",
    padding: 4,
    paddingLeft: 12,
    textAlign: "left",
    color: "grey",
  },
  florida: {
    backgroundColor: "red",
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
  par: {
    backgroundColor: "#F48FB1",
  },
  impar: {
    backgroundColor: "#F8BBD0",
  },
});
export default App;
