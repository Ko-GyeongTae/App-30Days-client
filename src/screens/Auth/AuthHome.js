import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import * as Font from "expo-font";
import { useEffect } from "react";
import InputBox from "../../components/InputBox";
import useInput from "../../hooks/useInput";

export default () => {
    const nameInput = useInput("");
    const pwInput = useInput("");

    const Login = async() => {
        const { value: name } = nameInput;
        const { value: password } = pwInput;

        console.log(name, password);
    }

    useEffect(() => {
        Font.loadAsync({'DancingScript-VariableFont_wght': require('../../../assets/fonts/DancingScript-VariableFont_wght.ttf'),});
    }, []);
    return (
        <Container>
            <Title>Daily Diary</Title>
            <Input>
                <InputBox
                    {...nameInput}
                    placeholder="Name"
                    keyboardType="default"
                    autoCapitalize={false}
                    autoCorrect={false}
                    />
                <InputBox
                    {...pwInput}
                    secureTextEntry={true}
                    placeholder="Password"
                    keyboardType="visible-password"
                    autoCapitalize={false}
                    autoCorrect={false}
                    />
            </Input>
            <TouchableOpacity style={{margin: "10%"}} onPress={() => Login()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`;

const Title = styled.Text`
    font-size: 70px;
    text-align: center;
    font-family: 'DancingScript-VariableFont_wght'
`;

const Input = styled.View`
    margin-top: 15%;
    width: 80%;
    height: 30%;
    background-color: #f5f5f5;
    align-items: center;
`;