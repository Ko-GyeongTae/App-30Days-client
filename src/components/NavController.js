import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";
import { useIsLoggedIn } from "./AuthContext";

export default () => {
    const isLoggedIn = useIsLoggedIn();
    console.log(isLoggedIn)
    return (
        <View style={{ flex: 1 }}>
            {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
        </View>
    );
}