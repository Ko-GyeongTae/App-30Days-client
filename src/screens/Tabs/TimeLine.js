import React from "react";
import styled from 'styled-components';
import DiaryBox from "../../components/DiaryBox";
import { Alert, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from "react-native-vector-icons";
import PTRView from 'react-native-pull-to-refresh';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useLogIn, useLogOut } from "../../components/AuthContext";
import { BaseUri } from "../../../env";

const baseUri = BaseUri();

const Title = styled.Text`
    padding-top: 30px;
    padding-left: 15px;
    font-size: 20px;
    font-weight: 400;
`;

const TitleView = styled.View`
    width: 70%;
    height: 100%;
    justify-content: center;
`;

const ButtonView = styled.View`
    flex-direction: row;
    width: 30%;
    height: 100%;
    justify-content: center;
    padding-top: 6%;
    align-items: center;
`;

const Header = styled.View`
    flex-direction: row;
    height: 12%
    background-color: #f5f5f5;
    justify-content: flex-end;
`;

const AllView = styled.View`
flex: 1;
background-color: #ffffff;
`;
export default ({ navigation }) => {
    const [diaries, setDiaries] = useState([]);
    const [count, setCount] = useState(0);
    const [cookie, setCookie] = useState("");
    const logOut = useLogOut();

    //test code
    const logIn = useLogIn();
    const refreshToken = async() => {
        await axios
            .post(`${baseUri}/auth/login`, {
                name: 'taegyeong3',
                password: 'hello'
            })
            .then(response => {
                const res_obj = JSON.stringify(response.data);
                const Obj = JSON.parse(res_obj);
                console.log(res_obj);
                const token = Obj["access_token"];
                logIn(token);
            });
    }
    
    const getUser = async () => {
        await axios
            .get(`${baseUri}/auth/myprofile`)
            .then(response => {
                setCookie(response.data.myProfile)
            })
            .catch(error => console.log(error));
    }

    const GetDiary = async () => {
        await axios
            .get(`${baseUri}/diary/list`)
            .then(function (response) {
                console.log(response.data.diarylist);
                setDiaries(response.data.diarylist);
                setCount(response.data.totalCount);
                console.log(count);
            })
            .catch(function (error) {
                console.log(error);
                if(error.response.status === 404){
                    Alert.alert(
                      "게시물을 가져오는데 실패했습니다.",
                      "문제가 계속된다면 로그인 후 다시 시도해주세요",
                      [
                        {
                          text: "OK",
                          onPress: () => logOut(),
                        },
                        {
                          text: "Cancel",
                          onPress: () => null
                        }
                      ]
                    )
                  } else {
                    console.log(error);
                  }
            });
    }

    const askLogOut = async () => {
        Alert.alert(
            "로그아웃 하시겠습니까?",
            "",
            [
                {
                    text: "네",
                    onPress: () => LogOut(),
                },
                {
                    text: "아니오",
                    onPress: () => null,
                }
            ],
            { cancelable: false }
        );
    };

    const LogOut = async () => {
        await axios
            .get(`${baseUri}/auth/logout`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
                Alert.alert("오류가 발생했습니다.");
            });
        logOut();
        Alert.alert("로그아웃 되었습니다");
    }

    useEffect(() => {
        getUser();
        GetDiary();
    }, [count]);
    return (
        <AllView>
            <Header>
                <TitleView>
                    <Title>{`${cookie.name}'s Diary`}</Title>
                </TitleView>
                <ButtonView>
                    <TouchableOpacity onPress={() => refreshToken()}>
                        <Text>{null}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => askLogOut()}>
                        <MaterialCommunityIcons
                            name="logout"
                            color="#707070"
                            size={40}
                        />
                    </TouchableOpacity>
                </ButtonView>
            </Header>
            <ImageBackground source={require("../../../assets/coffee.png")} style={{ width: "100%", height: "100%", alignItems: "center" }}>
                <PTRView
                    style={{ weight: "90%", paddingTop: "3%" }}
                    onRefresh={() => {
                        GetDiary();
                    }}
                    pullHeight={100}
                >
                    <ScrollView
                        contentContainerStyle={{
                            width: "100%",
                            height: "87%",
                            alignItems: "center",
                        }}
                    >
                        {count === 0 && <Text>게시물이 없습니다.</Text>}
                        {diaries?.map((diary) => (
                            <DiaryBox
                                onPress={() => navigation.navigate("DiaryDetail", diary)}
                                key={diary.postUid}
                                content={diary.content}
                                date={diary.date}
                                postUid={diary.postUid}
                                title={diary.title}
                            />
                        ))}
                    </ScrollView>
                </PTRView>
            </ImageBackground>
        </AllView>
    );
}