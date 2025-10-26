import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Task, getTasks, deleteTask, initDB } from "../database/database";

export default function HomeScreen() {
    const { name } = useLocalSearchParams<{ name: string }>();
    const router = useRouter();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        (async () => {
            await initDB();
            const data = await getTasks();
            setTasks(data);
        })();
    }, []);

    const removeTask = async (id: number) => {
        await deleteTask(id);
        const updated = await getTasks();
        setTasks(updated);
    };

    const filtered = tasks.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: "https://i.pravatar.cc/100" }} style={styles.avatar} />
                <View>
                    <Text style={styles.greet}>Hi {name || "User"}</Text>
                    <Text style={styles.sub}>Have a great day ahead</Text>
                </View>
            </View>

            <TextInput
                placeholder="Search"
                value={search}
                onChangeText={setSearch}
                style={styles.search}
            />

            <FlatList
                data={filtered}
                keyExtractor={(item) => item.id!.toString()}
                renderItem={({ item }) => (
                    <View style={styles.task}>
                        <Text style={styles.taskText}>✔ {item.name}</Text>
                        <TouchableOpacity onPress={() => removeTask(item.id!)}>
                            <Text style={styles.delete}>🗑️</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <TouchableOpacity
                style={styles.addBtn}
                onPress={() => router.push({ pathname: "/add", params: { name } })}
            >
                <Text style={{ fontSize: 30, color: "#fff" }}>＋</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", padding: 20 },
    header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
    avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
    greet: { fontSize: 18, fontWeight: "bold" },
    sub: { color: "#888" },
    search: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 10 },
    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f4f4f4",
        padding: 12,
        marginVertical: 5,
        borderRadius: 8,
    },
    taskText: { fontSize: 16 },
    delete: { fontSize: 18 },
    addBtn: {
        position: "absolute",
        right: 20,
        bottom: 30,
        backgroundColor: "#00BFFF",
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
});
