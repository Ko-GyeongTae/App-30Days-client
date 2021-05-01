import axios from "axios";
import { useFonts } from "expo-font";
import React from "react";
import { useState } from "react";
import { Alert, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styled from 'styled-components';
import InputBox from "../../components/InputBox";
import useInput from "../../hooks/useInput";

//const baseUri = "http://122.34.166.121:5000";
const baseUri = "http://10.0.2.2:5000";

export default ({ navigation }) => {
    const nameInput = useInput("");
    const pwInput = useInput("");
    const confirmPw = useInput("");
    const [passwordflag, setPasswordflag] = useState();

    let [fontsLoaded] = useFonts({
        'DancingScript-VariableFont_wght': require('../../../assets/fonts/DancingScript-VariableFont_wght.ttf')
    });

    const confirmPassword = () => {
        const { value: password } = pwInput;
        const { value: confirm } = confirmPw;
        if (password !== confirm) {
            Alert.alert("비밀번호를 확인해주세요");
        } else {
            if (password !== "") {
                setPasswordflag(true);
            } else {
                Alert.alert("비밀번호를 입력해주세요");
            }
        }
    };

    const signUp = async () => {
        const { value: name } = nameInput;
        const { value: password } = pwInput;

        await confirmPassword();
        if (passwordflag === true) {
            await axios.post(`${baseUri}/auth/signup`, {
                name: name,
                password: password
            })
                .then(response => {
                    navigation.navigate("AuthHome");
                    Alert.alert("회원가입에 성공했습니다.");
                })
                .catch(error => console.log(error));
        } else {
            Alert.alert("회원가입을 할 수 없습니다.")
        }
    }

    return (
        <Component>
            <ImageBackground source={require("../../../assets/AuthHome.png")} style={{ width: "100%", height: "100%", alignItems: "center" }}>
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
                            placeholder="Password"
                            secureTextEntry={true}
                            keyboardType="visible-password"
                            autoCorrect={false}
                        />
                        <InputBox
                            {...confirmPw}
                            placeholder="Confirm"
                            secureTextEntry={true}
                            keyboardType="visible-password"
                            autoCorrect={false}
                        />
                        <TouchableOpacity style={{ marginTop: "10%" }} onPress={() => signUp()}>
                            <Button style={{fontFamily: 'DancingScript-VariableFont_wght'}}>Join!</Button>
                        </TouchableOpacity>
                    </Input>
                </Body>
            </ImageBackground>
        </Component>
    );
}

const Component = styled.View`
    flex: 1;
`;

const Header = styled.View`
    height: 20%;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
`;

const Body = styled.View`
    height : 80%;
    width: 100%;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 60px;
    font-family: 'DancingScript-VariableFont_wght';
`;

const Input = styled.View`
    margin-top: 15%;
    width: 80%;
    height: 50%;
    background-color: #eceae6;
    align-items: center;
`;

const Button = styled.Text`
    font-size: 20px;
    font-weight: 100;
`;