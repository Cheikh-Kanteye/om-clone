import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { GAP, HEIGHT, PADDING, WIDTH } from "../constants/mettrics";
import { Ionicons } from "@expo/vector-icons";
import { images } from "../assets";

interface DropdownProps {
  balance: number;
}

const Dropdown = ({ balance }: DropdownProps) => {
  const [toggle, setToggle] = useState(false);
  const [label, setLabel] = useState<"principal" | "salaire">("principal");
  const toggled = () => setToggle(!toggle);
  return (
    <View>
      <TouchableOpacity onPress={toggled} style={styles.labelContainer}>
        <Text style={styles.label}>solde {label}</Text>
        <Ionicons name="chevron-down" size={22} color={"#AF9686"} />
      </TouchableOpacity>
      {toggle && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.underline}
            onPress={() => {
              setLabel("principal");
              toggled();
            }}
          >
            <Text style={styles.label}>Principal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.underline}
            onPress={() => {
              setLabel("salaire");
              toggled();
            }}
          >
            <Text style={styles.label}>Salaire</Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.balance}>
        {balance} <Text style={styles.currency}>FCFA</Text>
      </Text>
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Dropdown balance={1148} />
      <TouchableOpacity style={styles.userProfileContainer}>
        <Image
          source={images.user}
          style={styles.userProfileImg}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: WIDTH,
    height: HEIGHT * 0.15,
    paddingHorizontal: PADDING,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP,
    width: 150,
    height: 30,
  },
  dropdown: {
    width: 150,
    padding: PADDING,
    gap: GAP,
    position: "absolute",
    backgroundColor: "#fff",
    zIndex: 10,
    top: 30,
  },
  label: {
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    color: "#AF9686",
    textTransform: "capitalize",
  },
  balance: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    color: "#FF6600",
  },
  currency: {
    fontSize: 20,
    fontFamily: "PoppinsRegular",
    color: "#FF6600",
  },
  userProfileContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#AF9686",
    borderRadius: 30,
    overflow: "hidden",
  },
  userProfileImg: {
    width: "100%",
    height: "100%",
  },
  underline: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#AF9686",
  },
});
