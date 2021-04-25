import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TimeLine from "../screens/Tabs/TimeLine";
import WriteDiary from "../screens/Tabs/WriteDiary";

const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthHome" headerMode= "none">
            <Stack.Screen name="AuthHome" component={AuthHome} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    </NavigationContainer>
)