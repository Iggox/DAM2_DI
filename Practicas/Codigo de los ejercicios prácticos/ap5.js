import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Button } from "react-native-paper";
const screenWidth = Dimensions.get("window").width;
const images = [
  "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop",
  "https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop",
];

const mostrarFotos = () => {
  return images.map((value, index) => (
    <Image
      key={index.toString()}
      style={styles.imagen}
      source={{ uri: value }}
    ></Image>
  ));
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profile_pic_section}>
            <Image
              style={styles.profile_pic}
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbGV6YSUyMHBhaXNhamV8ZW58MHx8MHx8fDA%3D",
              }}
            ></Image>
          </View>
          <View style={styles.account_info}>
            <View style={styles.account_info_stats}>
              <View style={styles.account_info_stats_sec1}>
                <Text style={{ fontWeight: "bold" }}>Posts</Text>
                <Text style={{ fontSize: 17 }}>20</Text>
              </View>
              <View style={styles.account_info_stats_sec2}>
                <Text style={{ fontWeight: "bold" }}>Followers</Text>
                <Text>110304</Text>
              </View>
              <View style={styles.account_info_stats_sec3}>
                <Text style={{ fontWeight: "bold" }}>Following</Text>
                <Text>1103</Text>
              </View>
            </View>
            <View style={styles.account_info_edit}>
              <Button mode="elevated" style={styles.editButton} disabled={true}>
                Edit Profile
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.body}>{mostrarFotos()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  header: {
    flex: 0.15,
    flexDirection: "row",
    height: 40,
    margin: 1,
  },

  profile_pic_section: {
    flex: 0.35,
    justifyContent: "center",
    alignItems: "center",
  },

  profile_pic: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },

  account_info: {
    flex: 0.65,
    flexDirection: "column",
  },

  account_info_stats: {
    flexDirection: "row",
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  account_info_edit: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  editButton: {
    borderRadius: 0,
    width: 200,
  },

  body: {
    flex: 0.5,
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imagen: {
    width: 88,
    height: 88,
    marginTop: 2,
    marginBottom: 1,
    marginLeft: 2,
    marginRight: 2,
  },
});
