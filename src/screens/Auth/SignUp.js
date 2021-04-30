import axios from "axios";
import React from "react";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
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

export default ({navigation}) => {
    const nameInput = useInput("");
    const pwInput = useInput("");
    const confirmPw = useInput("");
    const [passwordflag, setPasswordflag] = useState();

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

    const signUp = async() => {
        const { value: name } = nameInput;
        const { value: password } = pwInput;
        
        await confirmPassword();
        if(passwordflag === true){
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