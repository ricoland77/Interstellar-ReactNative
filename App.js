import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        }}
      >
        <View style={styles.container}>
          <View style={styles.backgroudLogo}>
            <Image style={styles.logo} source={require("./assets/IMDB.png")} />
          </View>

          {/* première partie Titre / Img / Pitch... */}
          <View style={{ marginBottom: 20, backgroundColor: "#212121" }}>
            <Text style={styles.title}>Interstellar</Text>
            <View style={styles.infos}>
              <Text style={styles.textInfo}>2014</Text>
              <Text style={styles.textInfo}>PG-13</Text>
              <Text style={styles.textInfo}>2h 49min</Text>
              <Text style={styles.textInfo}>Adventure, Drama, Sci-Fi</Text>
            </View>

            <View style={styles.pitch}>
              <View>
                <Image
                  style={styles.filmImg}
                  source={require("./assets/film.jpg")}
                />
              </View>

              <View>
                <Text style={styles.textPitch}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival
                </Text>
                <TouchableOpacity style={styles.watchList}>
                  <Text style={styles.textWatchList}>+ ADD TO WATCHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.notes}>
              <View style={styles.oneNote}>
                <Ionicons
                  style={{ fontSize: 20 }}
                  name="star"
                  size={24}
                  color="yellow"
                />
                <Text style={styles.score}>8.6/10</Text>
                <Text style={styles.number}>1.1M</Text>
              </View>
              <View style={styles.oneNote}>
                <Ionicons
                  style={{ fontSize: 20 }}
                  name="star-outline"
                  size={24}
                  color="white"
                />
                <Text style={styles.score}>RATE THIS</Text>
                <Text style={styles.number}>1.1M</Text>
              </View>
              <View style={styles.oneNote}>
                <MaterialIcons
                  style={{ fontSize: 20 }}
                  name="score"
                  size={24}
                  color="green"
                />
                <Text style={styles.score}>Metascore</Text>
                <Text style={styles.number}>46 critics reviews</Text>
              </View>
            </View>
          </View>

          {/* seconde partie Titre / carrousel */}
          <View style={{ backgroundColor: "#212121" }}>
            <View style={styles.titleTow}>
              <Text style={styles.topBilled}>Top billed Cast</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>SEE ALL</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal={true}>
              <View>
                <View style={styles.carousel}>
                  <View>
                    <Image
                      style={styles.imgCar}
                      source={require("./assets/matthew.jpg")}
                    />
                    <View style={styles.carouselText}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.textCar}
                      >
                        Matthew McConaughey
                      </Text>
                      <Text style={styles.textCarTow}>Cooper</Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      style={styles.imgCar}
                      source={require("./assets/anne.jpg")}
                    />
                    <View style={styles.carouselText}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.textCar}
                      >
                        Anne Hathaway
                      </Text>
                      <Text style={styles.textCarTow}>Brand</Text>
                    </View>
                  </View>

                  <View>
                    <Image
                      style={styles.imgCar}
                      source={require("./assets/jessica.jpg")}
                    />
                    <View style={styles.carouselText}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.textCar}
                      >
                        Jessica Chastain
                      </Text>
                      <Text style={styles.textCarTow}>Murph</Text>
                    </View>
                  </View>

                  <View>
                    <Image
                      style={styles.imgCar}
                      source={require("./assets/mackenzie.jpg")}
                    />
                    <View style={styles.carouselText}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.textCar}
                      >
                        Foy Mackenzie
                      </Text>
                      <Text style={styles.textCarTow}>Cooper</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
            <Text style={styles.director}>Director</Text>
            <Text style={styles.nameDirector}>Christopher Nolan</Text>
            <Text style={styles.writers}>Writers</Text>
            <Text style={styles.nameWritters}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
