import { StyleSheet, View, Text } from "react-native";
import CalculadoraIMC from "./components/CalculadoraIMC";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imc: "",
      clasificacionIMC: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora IMC</Text>
        <View style={styles.containerDatos}>
          <Text style={styles.estiloh1}>Datos</Text>
          <CalculadoraIMC></CalculadoraIMC>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginTop: 35,
    color: "red",
  },
  containerDatos: {
    width: "95%",
    height: "50%",
    backgroundColor: "white",
    flexDirection: "column",
    marginTop: 20,
  },
  estiloh1: {
    alignItems: "center",
    fontSize: 35,
    color: "red",
    marginBottom: 5,
    marginLeft: 20,
    marginTop: 15,
  },
});
