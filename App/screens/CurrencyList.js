import React, { useContext } from "react";
import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, RowSeperator } from "../components/RowItems";
import currencies from "../data/currencies.json";
import { ConversionContext } from "../util/ConversionContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
});

export default ({ navigation, route = {} }) => {
  const insets = useSafeAreaInsets();
  const { baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency } =
    useContext(ConversionContext);
  const params = route.params || {};
  const { isBaseCurrency } = params;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          let selected = false;

          if (isBaseCurrency && item === baseCurrency) {
            selected = true;
          } else if (!isBaseCurrency && item === quoteCurrency) {
            selected = true;
          }

          return (
            <RowItem
              title={item}
              onPress={() => {
                if (isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeperator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </View>
  );
};
