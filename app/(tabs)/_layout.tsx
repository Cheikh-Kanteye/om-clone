import { Tabs } from "expo-router";
import { Image, ImageSourcePropType } from "react-native";
import { images } from "../../assets";

const TabBarIcon = ({
  color,
  source,
}: {
  color: string;
  source: ImageSourcePropType;
}) => (
  <Image
    source={source}
    style={{ tintColor: color, width: 24, height: 24 }}
    resizeMode="contain"
  />
);

export const unstable_settings = {
  initialRouteName: "home",
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF6600",
        tabBarInactiveTintColor: "#AF9686",
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "ACCUEIL",
          tabBarIcon: (props) => (
            <TabBarIcon color={props.color} source={images.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          tabBarLabel: "PAIMENT",
          tabBarIcon: (props) => (
            <TabBarIcon color={props.color} source={images.wallet} />
          ),
        }}
      />
      <Tabs.Screen
        name="bank"
        options={{
          tabBarLabel: "BANK",
          tabBarIcon: (props) => (
            <TabBarIcon color={props.color} source={images.bank} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "PARAMETRE",
          tabBarIcon: (props) => (
            <TabBarIcon color={props.color} source={images.setting} />
          ),
        }}
      />
    </Tabs>
  );
}
