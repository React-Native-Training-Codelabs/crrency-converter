import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { format } from "date-fns";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ConversionInput } from "../components/ConversionInput";
import colors from "../constants/colors";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  inputContainer: {
    marginBottom: 30,
  },
});

export default ({ navigation }) => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.8345;
  const date = new Date();
  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
          <View style={styles.logContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />

            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.textHeader}>Curency Converter</Text>

          <View styles={styles.inputContainer}>
            <ConversionInput
              text={baseCurrency}
              value="123"
              onButtonPress={() =>
                navigation.push("CurrencyList", {
                  title: "Base Currency",
                  activeCurrency: baseCurrency,
                })
              }
              onChangeText={(text) => console.log("text", text)}
              keyboardType="numeric"
            />
            <ConversionInput
              text={quoteCurrency}
              value="123"
              onButtonPress={() =>
                navigation.push("CurrencyList", {
                  title: "Quote Currency",
                  activeCurrency: quoteCurrency,
                })
              }
              onChangeText={(text) => console.log("text", text)}
              keyboardType="numeric"
              editable={false}
            />
          </View>

          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              date,
              "MMMM do, yyyy"
            )}.`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => alert("todo!")} />

          <KeyboardSpacer
            onToggle={(isVisible) => setScrollEnabled(isVisible)}
          />
        </View>
      </ScrollView>
    </View>
  );
};
