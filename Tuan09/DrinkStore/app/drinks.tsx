import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { addOrder } from "../database/database";
import type { Drink } from "../types/types";

export default function DrinksScreen() {
    const [drinks, setDrinks] = useState<Drink[]>([]);

    useEffect(() => {
        fetch("https://6832d1ffc3f2222a8cb3b10c.mockapi.io/drinks")
            .then((res) => res.json())
            .then(setDrinks)
            .catch(console.error);
    }, []);

    const handleAdd = (item: Drink) => {
        addOrder({ drinkId: item.id, name: item.name, price: item.price, quantity: 1 });
        alert("Added to order!");
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>
                Drinks
            </Text>

            <FlatList
                data={drinks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            borderBottomWidth: 1,
                            borderColor: "#eee",
                            paddingVertical: 10,
                        }}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 60, height: 60, borderRadius: 8 }}
                        />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                {item.name}
                            </Text>
                            <Text style={{ color: "#666" }}>${item.price}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => handleAdd(item)}
                            style={{
                                backgroundColor: "#22c55e",
                                padding: 8,
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ color: "#fff" }}>+</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
