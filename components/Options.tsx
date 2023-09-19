import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { GAP, MARGIN, PADDING, WIDTH } from "../constants/mettrics";
import { images } from "../assets";
interface TabProps {
  label: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}

const Tab = ({ label, icon, onPress }: TabProps) => {
  return (
    <TouchableOpacity style={styles.tab}>
      <Image
        source={icon}
        style={{ width: 24, height: 24, tintColor: "#FF6600" }}
        resizeMode="contain"
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const Options = () => {
  return (
    <View style={{ width: WIDTH, height: 80 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: PADDING, gap: GAP }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={150}
        scrollEventThrottle={16}
        decelerationRate={"fast"}
      >
        <Tab label="Transfert" icon={images.send} onPress={() => {}} />
        <Tab label="Paiment" icon={images.creditCard} onPress={() => {}} />
        <Tab label="Credit/Pass" icon={images.signal} onPress={() => {}} />
      </ScrollView>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  tab: {
    width: 150,
    height: 50,
    gap: GAP,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FF6600",
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    color: "#FF6600",
  },
});
