import { StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

const BtnLogOut = () => {
  return (
    <TouchableOpacity>
      <Feather name="log-out" size={24} style={styles.BtnLogOut} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BtnLogOut: {
    color: "#BDBDBD",
    marginRight: 10,
  },
});

export default BtnLogOut;
