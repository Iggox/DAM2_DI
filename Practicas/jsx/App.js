import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import { Component } from "react";
import TarjetaMarca from "./components/TarjetaMarca";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosAMostrar: [
        {
          nombre: "Peugeot",
          img: require("./assets/logos/peugeot.png"),
        },
        {
          nombre: "Opel",
          img: require("./assets/logos/opel.png"),
        },
        {
          nombre: "Renault",
          img: require("./assets/logos/renault.png"),
        },
        {
          nombre: "Seat",
          img: require("./assets/logos/seat.png"),
        },
        {
          nombre: "Fiat",
          img: require("./assets/logos/fiat.png"),
        },
        {
          nombre: "Volkswagen",
          img: require("./assets/logos/volkswagen.png"),
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Marcas de coches</Text>
        <FlatList
          data={this.state.datosAMostrar}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <TarjetaMarca datosAMostrar={item} />}
        />
        <Text style={styles.paragraph}>Prueba a hacer scroll</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    padding: 30,
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
