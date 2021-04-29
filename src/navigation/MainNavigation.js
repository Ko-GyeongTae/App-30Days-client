import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TimeLine from "../screens/Tabs/TimeLine";
import WriteDiary from "../screens/Tabs/WriteDiary";
import DiaryDetail from "../screens/Tabs/DiaryDetail";

const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="TimeLine" headerMode= "none">
            <Stack.Screen name="TimeLine" component={TimeLine} />
            <Stack.Screen name="WriteDiary" component={WriteDiary} />
            <Stack.Screen name="DiaryDetail" component={DiaryDetail} />
        </Stack.Navigator>
    </NavigationContainer>
)