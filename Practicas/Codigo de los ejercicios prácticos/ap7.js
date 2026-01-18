import { StyleSheet, View, Text } from "react-native";
import ComponenteHijo from "./components/ComponenteHijo.js";
import { Component } from "react";
import { Button } from "react-native-paper";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensajePadre: "¡Hola desde el componente Padre!",
      mensajeHijo: undefined,
    };
  }

  borrarMensajeHijo = () => {
    this.setState({ mensajeHijo: undefined });
  };

  getMensajeHijo = ({ mensajeHijoComponente }) => {
    this.setState({ mensajeHijo: mensajeHijoComponente });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerDatos}>
          <Text style={styles.estiloh1}>Comunicación Padre-Hijo</Text>
          <ComponenteHijo
            mensajePadre={this.state.mensajePadre}
            devuelveMensajeHijo={this.getMensajeHijo}
          />
          {this.state.mensajeHijo !== undefined ? (
            <Text style={styles.mensajeHijoEstilo}>
              {this.state.mensajeHijo}
            </Text>
          ) : (
            <Text style={styles.mensajeHijoEstilo}></Text>
          )}
          <Button
            mode="contained"
            style={styles.boton}
            onPress={this.borrarMensajeHijo}
          >
            BORRAR MENSAJE
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
  },
  containerDatos: {
    width: "80%",
    backgroundColor: "lightblue",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    padding: 20,
  },
  estiloh1: {
    alignItems: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  mensajeHijoEstilo: {
    margin: 15,
    color: "darkblue",
  },
});
