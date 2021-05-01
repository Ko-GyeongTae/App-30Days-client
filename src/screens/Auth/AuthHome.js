import React from "react";
import { Alert, Text, TouchableOpacity, ImageBackground } from "react-native";
import styled from "styled-components";
import { useFonts } from "expo-font";
import InputBox from "../../components/InputBox";
import useInput from "../../hooks/useInput";
import { useLogIn } from "../../components/AuthContext";
import axios from "axios";

//const baseUri = "http://122.34.166.121:5000";
const baseUri = "http://10.0.2.2:5000";

export default ({ navigation }) => {
    const nameInput = useInput("");
    const pwInput = useInput("");
    const logIn = useLogIn();

    let [fontsLoaded] = useFonts({
        'DancingScript-VariableFont_wght': require('../../../assets/fonts/DancingScript-VariableFont_wght.ttf')
    });
    const Login = async () => {
        const { value: name } = nameInput;
        const { value: password } = pwInput;
        console.log(name, password);
        await axios
            .post(`${baseUri}/auth/login`, {
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

    if (!fontsLoaded) {
        return <Text>Loading</Text>;
    } else {
        return (
            <Container>
                <ImageBackground source={require("../../../assets/AuthHome.png")} style={{ width: "100%", height: "100%", alignItems: "center" }}>
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
                            placeholder="Password"
                            secureTextEntry={true}
                            keyboardType="visible-password"
                            autoCorrect={false}
                        />
                    </Input>
                    <TouchableOpacity style={{ marginTop: "10%" }} onPress={() => Login()}>
                        <Button>Login</Button>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: "5%" }} onPress={() => navigation.navigate("Signup")}>
                        <Button>Sign Up</Button>
                    </TouchableOpacity>
                </ImageBackground>
            </Container>
        );
    }
}
const Button = styled.Text`
    font-size: 20px;
    font-family: 'DancingScript-VariableFont_wght';
`;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #eceae6;
`;

const Title = styled.Text`
    font-size: 60px;
    text-align: center;
    margin-top: 20%;
    font-family: 'DancingScript-VariableFont_wght'
`;

const Input = styled.View`
    margin-top: 15%;
    width: 80%;
    height: 30%;
    background-color: #eae8e4;
    align-items: center;
`;