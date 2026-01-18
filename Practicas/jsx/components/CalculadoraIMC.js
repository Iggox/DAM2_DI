import { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import ResultadoIMC from "./ResultadoIMC";

export default class CalculadoraIMC extends Component {
  calcularIMC = (pesoDato, alturaDato) => {
    let pesoIntroducidoInt = parseInt(pesoDato);
    let alturaIntroducidaFloat = parseFloat(alturaDato);
    alturaIntroducidaFloat = Math.pow(alturaIntroducidaFloat, 2);
    let resultado = pesoIntroducidoInt / alturaIntroducidaFloat;
    resultado = Math.round(resultado * 100) / 100;
    this.setState({ imc: resultado });
    this.establecerClasificacionIMC(resultado);
  };

  establecerClasificacionIMC = (resultadoIMC) => {
    if (resultadoIMC < 18.5) {
      this.setState({ clasificacionIMC: "Peso insuficiente" });
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
      this.setState({ clasificacionIMC: "Normopeso" });
    } else if (resultadoIMC >= 25 && resultadoIMC < 27) {
      this.setState({ clasificacionIMC: "Sobrepeso grado I" });
    } else if (resultadoIMC >= 27 && resultadoIMC < 30) {
      this.setState({ clasificacionIMC: "Sobre peso grado II (preobesidad)" });
    } else if (resultadoIMC >= 30 && resultadoIMC < 35) {
      this.setState({ clasificacionIMC: "Obesidad tipo I" });
    } else if (resultadoIMC >= 35 && resultadoIMC < 40) {
      this.setState({ clasificacionIMC: "Obesidad tipo II" });
    } else if (resultadoIMC >= 40 && resultadoIMC <= 50) {
      this.setState({ clasificacionIMC: "Obesidad tipo III (mórbida)" });
    } else if (resultadoIMC > 50) {
      this.setState({ clasificacionIMC: "Obesidad tipo IV (extrema)" });
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      peso: "",
      altura: "",
      imc: "",
      clasificacionIMC: "",
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.estiloh2}>PESO</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(newText) => this.setState({ peso: newText })}
          placeholder="Ejemplo: 80"
          placeholderTextColor="gray"
          underlineColor="gray"
          defaultValue={this.state.peso}
          keyboardType="numeric"
        ></TextInput>
        <Text style={styles.estiloh2}>ALTURA</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(newText) => this.setState({ altura: newText })}
          placeholder="Ejemplo: 1.75"
          placeholderTextColor="gray"
          underlineColor="gray"
          defaultValue={this.state.altura}
          keyboardType="numeric"
        ></TextInput>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button
            mode="outlined"
            style={styles.botonCalcular}
            onPress={this.calcularIMC.bind(
              this,
              this.state.peso,
              this.state.altura
            )}
          >
            Calcular IMC
          </Button>
        </View>
        <ResultadoIMC
          imc={this.state.imc}
          clasificacionIMC={this.state.clasificacionIMC}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  estiloh2: {
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
    marginLeft: 15,
    marginTop: 10,
  },
  textInput: {
    height: 30,
    width: "95%",
    borderRadius: 5,
    backgroundColor: "transparent",
    fontSize: 18,
    color: "red",
    borderWidth: 5,
    borderBlockColor: "white",
    borderRightColor: "white",
    borderLeftColor: "white",
    paddingHorizontal: 5,
    paddingVertical: 7,
    marginLeft: 10,
  },
  botonCalcular: {
    width: "95%",
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "blue",
    marginBottom: 15,
  },
});
