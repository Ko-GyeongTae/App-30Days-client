import React from "react";
import styled from 'styled-components';
import DiaryBox from "../../components/DiaryBox";
import { Alert, ImageBackground, ScrollView, Text, TouchableOpacity } from 'react-native';
import PTRView from 'react-native-pull-to-refresh';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

//const baseUri = "http://122.34.166.121:5000";
const baseUri = "http://10.0.2.2:5000";

const Title = styled.Text`
    padding-top: 30px;
    padding-left: 15px;
    font-size: 20px;
    font-weight: 400;
`;

const Header = styled.View`
    height: 10%
    background-color: #f5f5f5;
    justify-content: center;
`;

const AllView = styled.View`
    flex: 1;
    background-color: #ffffff;
`;
export default ({ navigation }) => {
    const [diaries, setDiaries] = useState([]);
    const [count, setCount] = useState(0);
    const [cookie, setCookie] = useState("");

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
            })
            .catch(function (error) {
                console.log(error);
                Alert.alert("데이터를 불러올수 없습니다.");
            });
    }

    useEffect(() => {
        getUser();
        GetDiary();
    }, [count]);
    return (
        <AllView>
            <Header>
                <Title>{`${cookie.name}'s Diary`}</Title>
                <TouchableOpacity onPress={() => navigation.navigate("WriteDiary")}>
                    <Text>Write</Text>
                </TouchableOpacity>
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