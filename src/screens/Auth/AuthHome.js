import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import * as Font from "expo-font";
import { useEffect } from "react";

export default () => {
    useEffect(() => {
        Font.loadAsync({'DancingScript-VariableFont_wght': require('../../../assets/fonts/DancingScript-VariableFont_wght.ttf'),});
    }, []);
    return (
        <Container>
            <Title>Daily Diary</Title>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 70px;
    text-align: center;
    font-family: 'DancingScript-VariableFont_wght'
`;
