import React from "react";
import { ImageBackground, Text } from "react-native";
import styled from "styled-components";
import DiaryBox from "../../components/DiaryBox";

const Header = styled.View`
  background-color: #ffffff;
  height: 13%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Body = styled.View`
  height: 87%;
  width: 100%;
  backgroundColor: #f5f5f5;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

const AllView = styled.View`
  flex: 1;
  height: 100%;
`;

export default ({ route }) => {
    const post = route.params;
    const date = new Date(post.date);
    return (
        <AllView>
            <ImageBackground source={require("../../../assets/coffee.png")} style={{ width: "100%", height: "100%", alignItems: "center" }}>
                <Header>
                    <Title>{post.title}</Title>
                    <Text>{`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate() - 1 < 10 ? "0" + date.getDate() - 1 : date.getDate() - 1}일`}</Text>
                </Header>
                <Body>
                    <Text>{post.content}</Text>
                </Body>
            </ImageBackground>
        </AllView>
    );
};
