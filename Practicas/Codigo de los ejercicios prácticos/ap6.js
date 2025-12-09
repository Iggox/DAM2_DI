import { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-paper";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

const calcularLetra = (numDocumento) => {
  if (numDocumento.length <= 7) {
    //4. Si borramos algún número del NIF, la letra ha de desaparecer.

    return <Text style={styles.mostrarLetraContainerDefault}>Letra</Text>;
  } else {
    //5. Solo cuando tengamos 8 números en el campo de texto, se calculará la letra del NIF. Antes no.

    let numDocumentoInteger = parseInt(numDocumento);
    let resultado = numDocumentoInteger % 23;

    return (
      <Text style={styles.mostrarLetraContainer}>{letras[resultado]}</Text> //2. El campo de texto donde se mostrará la letra no será editable por el usuario.
    );
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroNIE_DNI: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.estiloh1}>Calculador Letra NIF</Text>
        <Text style={{ marginBottom: 25, color: "gray" }}>
          App para calcular la letra del NIF:
        </Text>
        <View style={styles.contenidoApp}>
          <TextInput
            style={styles.textInput}
            onChangeText={(newText) =>
              this.setState({ numeroNIE_DNI: newText })
            }
            placeholder="NIF"
            placeholderTextColor="red"
            underlineColor="red"
            activeUnderlineColor="red"
            textColor="red"
            defaultValue={this.state.numeroNIE_DNI}
            maxLength={8} //1. Solo se podrán poner en el campo de texto 8 caracteres como máximo
            keyboardType="numeric" //3. Cuando escribamos el NIF, el teclado virtual que nos aparecerá sólo mostrará números.
          ></TextInput>
          {calcularLetra(this.state.numeroNIE_DNI)}
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
    marginTop: 200,
  },
  estiloh1: {
    fontSize: 25,
    color: "green",
    marginBottom: 40,
  },
  contenidoApp: {
    width: 250,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 30,
    width: 105,
    borderRadius: 5,
    backgroundColor: "transparent",
    fontSize: 20,
    borderWidth: 5,
    borderBlockColor: "white",
    borderRightColor: "white",
    borderLeftColor: "white",
    paddingHorizontal: 0,
  },
  mostrarLetraContainer: {
    width: 50,
    height: 30,
    fontSize: 20,
    justifyContent: "center",
    textAlignVertical: "center",
    color: "green",
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  mostrarLetraContainerDefault: {
    width: 50,
    height: 30,
    fontSize: 20,
    justifyContent: "center",
    textAlignVertical: "center",
    color: "blue",
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
});
