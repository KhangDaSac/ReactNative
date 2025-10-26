import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function ShopsScreen() {
    const router = useRouter();

    const shops = [
        {
            id: "1",
            name: "Jewel Box Cafe",
            address: "1145 E 54 St",
            image: "https://i.imgur.com/UG5zKjD.jpeg",
        },
        {
            id: "2",
            name: "Kitanda Espresso",
            address: "1121 NE 45 St",
            image: "https://i.imgur.com/jdLMFfD.jpeg",
        },
    ];

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>
                Shops Near Me
            </Text>

            <FlatList
                data={shops}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#fff",
                            marginBottom: 12,
                            borderRadius: 8,
                            overflow: "hidden",
                            elevation: 2,
                        }}
                        onPress={() => router.push("/drinks")}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: "100%", height: 150 }}
                        />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                {item.name}
                            </Text>
                            <Text style={{ color: "#666" }}>{item.address}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
