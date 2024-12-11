import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

type Props = {
  label?: string;

  // position
  position: "left" | "right";

  // methods
  onPress?: () => void;
  onLongPress?: () => void;
};

export default function FAB({ label, onLongPress, onPress, position }: Props) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={({ pressed }) => [
          styles.floatingButton,
          position === "right" ? styles.positionRight : styles.positionLeft,
          pressed ? { opacity: 0.7 } : { opacity: 1 },
        ]}
      >
        <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: -320,

    backgroundColor: "#65558F",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },
  positionRight: {
    right: -180,
  },
  positionLeft: {
    left: -180,
  },
});
