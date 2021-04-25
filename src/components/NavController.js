import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
    const [token, setToken] = useState(false);
    const preLoad = async () => {
        try {
            const token = await AsyncStorage.getItem("jwt");
            console.log(token);
            setToken(token);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        preLoad();
    }, []);
    return (
        <View style={{ flex: 1 }}>
            {token ? <MainNavigation /> : <AuthNavigation />}
        </View>
    );
}