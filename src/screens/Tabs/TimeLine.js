import React from "react";
import styled from 'styled-components';
import { DiaryBox } from "../../components/DiaryBox";
import { Alert, ScrollView } from 'react-native';
import PTRView from 'react-native-pull-to-refresh';
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUri = "http://10.0.2.2:5000";

const Title = styled.Text`
    font-size: 50px;
`;

const Header = styled.View`
    height: 20%
    background-color: #f5f5f5;
    
`;

const AllView = styled.View`
    flex: 1;
    background-color: #ffffff;
`;
export default () => {
    const [diaries, setDiaries] = useState(null);
    const [count, setCount] = useState(null);
    const GetDiary = async () => {
        const token = await AsyncStorage.getItem("jwt");

        const config = {
            headers: { Authorization: "Bearer " + token },
        };

        await axios
            .get(`${baseUri}/diary/list`)
            .then(function (response) {
                console.log(response.data);
                setDiaries(response.data.diarylist);
                setCount(response.data.totalCount);
                console.log(diaries, count);
            })
            .catch(function (error) {
                console.log(error);
                Alert.alert("데이터를 불러올수 없습니다.");
            });
    }
    return (
        <AllView>
            <Header>
                <Title>TimeLine</Title>
            </Header>
            <PTRView
                style={{ flex: 5, backgroundColor: "white" }}
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
                </ScrollView>
            </PTRView>
        </AllView>
    );
}