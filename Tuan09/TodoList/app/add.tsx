import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { addTask } from "../database/database";

export default function AddScreen() {
    const { name } = useLocalSearchParams<{ name: string }>();
    const [job, setJob] = useState("");
    const router = useRouter();

    const handleFinish = async () => {
        if (!job.trim()) return;
        await addTask(job.trim());
        router.back();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: "https://i.pravatar.cc/100" }} style={styles.avatar} />
                <View>
                    <Text style={styles.greet}>Hi {name || "User"}</Text>
                    <Text style={styles.sub}>Add a new job below</Text>
                </View>
            </View>

            <Text style={styles.title}>ADD YOUR JOB</Text>

            <TextInput
                placeholder="Input your job"
                style={styles.input}
                value={job}
                onChangeText={setJob}
            />

            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                <Text style={styles.buttonText}>FINISH →</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", padding: 20 },
    header: { flexDirection: "row", alignItems: "center", marginBottom: 40 },
    avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
    greet: { fontSize: 18, fontWeight: "bold" },
    sub: { color: "#888" },
    title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
    input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10 },
    button: {
        backgroundColor: "#00BFFF",
        marginTop: 20,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: { color: "#fff", fontWeight: "600" },
});
