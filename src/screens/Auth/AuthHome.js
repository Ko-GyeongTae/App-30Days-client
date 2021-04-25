import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import * as Font from "expo-font";
import { useEffect } from "react";
import InputBox from "../../components/InputBox";
import useInput from "../../hooks/useInput";
import { useLogIn } from "../../components/AuthContext";
import axios from "axios";

const baseUri = "http://10.0.2.2:5000"

export default () => {
    const nameInput = useInput("");
    const pwInput = useInput("");
    const logIn = useLogIn();

    const Login = async() => {
        const { value: name } = nameInput;
        const { value: password } = pwInput;
        console.log(name, password);
        await axios.post(`${baseUri}/auth/login`, {
            name: name,
            password: password
        })
        .then((response) => {
            const res_obj = JSON.stringify(response.data);
            const Obj = JSON.parse(res_obj);
            console.log(res_obj);
            const token = Obj["access_token"];
            logIn(token);
        })
        .catch((error) => {
            Alert.alert('회원정보가 없거나 잘못되었습니다.');
            console.log(error);
        });
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
                    autoCorrect={false}
                    />
                <InputBox
                    {...pwInput}
                    secureTextEntry={true}
                    placeholder="Password"
                    keyboardType="visible-password"
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