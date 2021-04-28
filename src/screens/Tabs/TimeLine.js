import React from "react";
import styled from 'styled-components';
import DiaryBox from "../../components/DiaryBox";
import { Alert, ScrollView, Text } from 'react-native';
import PTRView from 'react-native-pull-to-refresh';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const baseUri = "http://10.0.2.2:5000";

const Title = styled.Text`
    font-size: 50px;
`;

const Header = styled.View`
    height: 15%
    background-color: #f5f5f5;
    
`;

const AllView = styled.View`
    flex: 1;
    background-color: #ffffff;
`;
export default () => {
    const [diaries, setDiaries] = useState([]);
    const [count, setCount] = useState(0);

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
        GetDiary();
    }, []);
    return (
        <AllView>
            <Header>
                <Title>TimeLine</Title>
            </Header>
            <PTRView
                style={{ weight: "85%", backgroundColor: "yellow" }}
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
                            onPress={() => null}
                            key={diary.postUid}
                            content={diary.content}
                            date={diary.date}
                            postUid={diary.postUid}
                            title={diary.title}
                        />
                    ))}
                </ScrollView>
            </PTRView>
        </AllView>
    );
}