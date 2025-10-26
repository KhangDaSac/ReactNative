import { View, Text, Button, Image } from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { initDB } from "../database/database";

export default function WelcomeScreen() {
    const router = useRouter();

    useEffect(() => {
        initDB();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
                Welcome to Cafe world
            </Text>
            <Image
                source={{ uri: "https://i.imgur.com/0y8Ftya.jpg" }}
                style={{ width: 200, height: 120, borderRadius: 8 }}
            />
            <Button title="GET STARTED" onPress={() => router.push("/shops")} />
        </View>
    );
}
