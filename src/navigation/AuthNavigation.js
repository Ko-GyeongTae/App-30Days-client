import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthHome from "../screens/Auth/AuthHome";
import Signup from "../screens/Auth/SignUp";
import { useEffect } from "react";

const Stack = createStackNavigator();

export default () => {
    useEffect(() => {
        console.log("AuthNavigator");
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AuthHome" headerMode="none">
                <Stack.Screen name="AuthHome" component={AuthHome} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}