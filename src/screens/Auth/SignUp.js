import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from 'styled-components';
import InputBox from "../../components/InputBox";
import useInput from "../../hooks/useInput";

const baseUri = "http://10.0.2.2:5000";

const Component = styled.View`
    flex: 1;
`;

const Header = styled.View`
    height: 15%;
    width: 100%;
    background-color: red;
`;

const Body = styled.View`
    height : 85%;
    width: 100%;
    background-color: yellow;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 30px;
`;

const Input = styled.View`
    margin-top: 15%;
    width: 80%;
    height: 100%;
    background-color: #f5f5f5;
    align-items: center;
`;

const Button = styled.Text`
    font-size: 15px;
    font-weight: 100;
`;

export default () => {
    const nameInput = useInput("");
    const pwInput = useInput("");
    const confirmPw = useInput("");

    const signUp = async() => {
        const { value: name } = nameInput;
        const { value: password } = pwInput;
        const { value: confirm } = confirmPw;
        
        console.log(name, password, confirm);
    }

    return (
        <Component>
            <Header>
                <Title>Sign up</Title>
            </Header>
            <Body>
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
                    <InputBox
                        {...confirmPw}
                        secureTextEntry={true}
                        placeholder="Password"
                        keyboardType="visible-password"
                        autoCorrect={false}
                    />
                    <TouchableOpacity style={{marginTop: "10%"}} onPress={() => signUp()}>
                        <Button>회원가입</Button>
                    </TouchableOpacity>
                </Input>
            </Body>
        </Component>
    );
}