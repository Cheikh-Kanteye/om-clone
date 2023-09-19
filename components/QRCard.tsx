import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { HEIGHT, PADDING, WIDTH } from "../constants/mettrics";
import QRCode from "react-native-qrcode-svg";

const Rings = ({ style }: { style: ViewStyle }) => {
  return (
    <View style={[styles.ring1, style]}>
      <View style={styles.ring2}>
        <View style={styles.ring3}>
          <View style={styles.ring4} />
        </View>
      </View>
    </View>
  );
};

const QRCard = () => {
  return (
    <LinearGradient
      colors={["#FF6600", "#FF934A"]}
      style={styles.cardContainer}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Rings style={styles.absoluteRing1} />
      <Rings style={styles.absoluteRing2} />
      <View style={styles.qrContainer}>
        <QRCode value="orange.sn" size={160} />
      </View>
    </LinearGradient>
  );
};

export default QRCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: WIDTH - PADDING * 2,
    height: HEIGHT * 0.28,
    alignSelf: "center",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  absoluteRing1: {
    position: "absolute",
    top: -90,
    left: -90,
  },
  absoluteRing2: {
    position: "absolute",
    bottom: -90,
    right: -90,
  },
  ring1: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 6,
    borderColor: "#AA4604",
  },
  ring2: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 6,
    borderColor: "#23AE00",
  },
  ring3: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 6,
    borderColor: "#A6B212",
  },
  ring4: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 6,
    borderColor: "#FCE676",
  },
  qrContainer: {
    width: 176,
    height: 176,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
