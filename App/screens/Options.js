import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import { RowItem, RowSeperator } from "../components/RowItems";

const openUrl = (url) => {
  Linking.openURL(url).catch(() => {
    Alert.alert("Oops! Something went wrong.", "Please try again later.");
  });
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView>
        <RowItem
          title="Themes"
          onPress={() =>
            openUrl(
              "https://www.backmarket.com/en-us/p/samsung-galaxy-a52-5g-128-gb-awesome-black-att/5bbaed12-0d2f-4b9d-a625-195e345617af#l=10"
            )
          }
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeperator />

        <RowItem
          title="React Native Basics"
          onPress={() =>
            openUrl(
              "https://www.backmarket.com/en-us/p/samsung-galaxy-a52-5g-128-gb-awesome-black-att/5bbaed12-0d2f-4b9d-a625-195e345617af#l=10"
            )
          }
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeperator />

        <RowItem
          title="React Native by Example"
          onPress={() => alert("todo!")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
