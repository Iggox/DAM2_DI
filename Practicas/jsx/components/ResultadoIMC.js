import { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class ResultadoIMC extends Component {
  mostrarInfo = (datoIMC, datoClasificacion) => {
    if (datoIMC != "") {
      return (
        <View>
          <Text style={styles.resultado}>Resultado</Text>
          <Text
            style={
              datoIMC < 27
                ? styles.imcverde
                : datoIMC >= 40
                ? styles.imcrojo
                : styles.imcnaranja
            }
          >
            {datoClasificacion}
          </Text>
        </View>
      );
    } else {
      return <Text></Text>;
    }
  };

  constructor(props) {
    super(props);
  }
  render() {
    return this.mostrarInfo(this.props.imc, this.props.clasificacionIMC);
  }
}

const styles = StyleSheet.create({
  resultado: {
    marginLeft: 17,
  },
  imcverde: {
    marginLeft: 17,
    color: "green",
  },
  imcnaranja: {
    marginLeft: 17,
    color: "orange",
  },
  imcrojo: {
    marginLeft: 17,
    color: "red",
  },
});
