import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function IndexScreen() {
    const [name, setName] = useState("");
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MANAGE YOUR TASK</Text>

            <TextInput
                placeholder="Enter your name"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push({ pathname: "/home", params: { name } })}
            >
                <Text style={styles.buttonText}>GET STARTED →</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
    title: { fontSize: 22, fontWeight: "bold", color: "#7A42F4", marginBottom: 30 },
    input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, width: "80%", padding: 10 },
    button: {
        marginTop: 20,
        backgroundColor: "#00BFFF",
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: { color: "#fff", fontWeight: "600" },
});
