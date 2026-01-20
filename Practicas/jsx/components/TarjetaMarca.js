import { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default class TarjetaMarca extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let element = this.props.datosAMostrar;
    return (
      <View style={styles.container}>
        <View style={styles.rectangulo}>
          <ImageBackground
            source={
              typeof img === "string" ? { uri: element.img } : element.img
            }
            resizeMode="contain"
            style={styles.image}
          >
            <Text style={styles.text}>{element.nombre}</Text>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rectangulo: {
    marginTop: 15,
    width: "90%",
    height: 120,
    borderColor: "black",
    borderWidth: 4,
  },
  container: {
    alignItems: "center",
  },
  image: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
});
