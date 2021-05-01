import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import TimeLine from "../screens/Tabs/TimeLine";
import WriteDiary from "../screens/Tabs/WriteDiary";
import DiaryDetail from "../screens/Tabs/DiaryDetail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Stack.Navigator initialRouteName="TimeLine" headerMode="none">
            <Stack.Screen name="TimeLine" component={TimeLine} />
            <Stack.Screen name="DiaryDetail" component={DiaryDetail} />
        </Stack.Navigator>
    );
}

export default () => (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#000000", //터치시 글자색
                inactiveTintColor: "#707070", //비터치시 글자색
                style: {
                    backgroundColor: "#f5f5f5", //기본 배경색
                },
                labelPosition: "below-icon",
                keyboardHidesTabBar: true
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeTabs}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={focused ? "#000000" : "#707070"}
                            size={30}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Write"
                component={WriteDiary}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="pencil"
                            color={focused ? "#000000" : "#707070"}
                            size={30}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
)