import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { GAP, PADDING } from "../constants/mettrics";
import transactions, { Transaction } from "../constants/dummyData";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerLabel}>Recent Operations</Text>
      <TouchableOpacity style={styles.datePicker}>
        <Text style={styles.date}>21.07.2022</Text>
        <Ionicons name="chevron-down" size={20} color={"#AF9686"} />
      </TouchableOpacity>
    </View>
  );
};

const TransactionHistory = () => {
  const [transactionsList, setTransactionList] = useState<Transaction[]>([]);
  useEffect(() => {
    setTransactionList(transactions);
  });
  return (
    <View style={styles.container}>
      <Header />
      <View>
        {transactionsList.map((transaction, index) => {
          const { recipient, date, amount, transactionType } = transaction;
          const decreaseBalance = transactionType !== "Réception d'argent";
          const balanceColor = decreaseBalance ? "#F11406" : "#008000";
          return (
            <View style={styles.transactionCard} key={index}>
              <View
                style={[
                  styles.recipientprofile,
                  { backgroundColor: recipient.color },
                ]}
              >
                {recipient.profilePhoto != null ? (
                  <Image source={{ uri: recipient.profilePhoto }} />
                ) : (
                  <Text>{recipient.profilePhotoText}</Text>
                )}
              </View>
              <View style={{ flex: 1, paddingLeft: GAP }}>
                <Text style={styles.recipientName}>{recipient.name}</Text>
                <Text style={styles.transactionDate}>
                  {transactionType} effectue le {date}
                </Text>
              </View>
              <Text style={{ color: balanceColor }}>
                {decreaseBalance ? "-" : "+"}
                {amount} FCFA
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLabel: {
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    color: "#AF9686",
  },
  datePicker: {
    padding: PADDING / 2,
    gap: GAP,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#AF9686",
    borderRadius: 8,
  },
  date: {
    fontSize: 16,
    color: "#AF9686",
    fontFamily: "PoppinsRegular",
  },
  transactionCard: {
    flexDirection: "row",
    paddingVertical: GAP,
  },
  recipientName: {
    fontSize: 14,
    fontFamily: "PoppinsMedium",
  },
  transactionDate: {
    fontSize: 10,
    fontFamily: "PoppinsRegular",
    color: "#AF9686",
  },
  recipientprofile: {
    width: 45,
    height: 45,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
  },
});
