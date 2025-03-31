import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MenuBtn = () => {
  const navigation = useNavigation();
  const menu = [
    {
      id: 1,
      logo: require("../../storages/menu/logo1.png"),
      text: "Đời sống",
    },
    {
      id: 2,
      logo: require("../../storages/menu/logo2.png"),
      text: "Sức khỏe",
    },
    {
      id: 3,
      logo: require("../../storages/menu/logo3.png"),
      text: "Thiên tai",
    },
    {
      id: 4,
      logo: require("../../storages/menu/logo4.png"),
      text: "Giáo dục",
    },
    {
      id: 5,
      logo: require("../../storages/menu/logo6.png"),
      text: "Dịch bệnh",
    },
    {
      id: 6,
      logo: require("../../storages/menu/logo7.png"),
      text: "Công nghệ",
    },
    {
      id: 7,
      logo: require("../../storages/menu/logo8.png"),
      text: "Quần áo",
    },
    {
      id: 8,
      logo: require("../../storages/menu/logo9.png"),
      text: "Phụ nữ",
    },
    {
      id: 9,
      logo: require("../../storages/menu/logo10.png"),
      text: "Vô gia cư",
    },
    {
      id: 10,
      logo: require("../../storages/menu/logo11.png"),
      text: "Người già",
    },
    {
      id: 11,
      logo: require("../../storages/menu/logo12.png"),
      text: "Dân tộc thiểu số",
    },
    {
      id: 12,
      logo: require("../../storages/menu/logo13.png"),
      text: "Trẻ em",
    },
    {
      id: 13,
      logo: require("../../storages/menu/logo14.png"),
      text: "Khuyết tật",
    },
  ];
  return (
    <FlatList
      scrollEnabled={false}
      numColumns="5"
      data={menu}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("OldMan")}
            style={{
              width: 62,
              height: 86,
              alignItems: "center",
              marginRight: 15,
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: 54,
                height: 54,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Image source={item.logo} />
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: "white",
                marginTop: 5,

                textAlign: "center",
              }}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default MenuBtn;

const styles = StyleSheet.create({});
