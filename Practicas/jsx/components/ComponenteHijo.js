import { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

export default class ResultadoIMC extends Component {
  responderAlPadre = () => {
    this.props.devuelveMensajeHijo({
      mensajeHijoComponente: this.state.mensajeHijo,
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      mensajeHijo: "¡Hola desde el componente Hijo!",
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.imcverde}>{this.props.mensajePadre}</Text>
        <Button
          mode="contained"
          style={styles.boton}
          onPress={this.responderAlPadre}
        >
          RESPONDER AL PADRE
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boton: {
    marginTop: 15,
  },
});
