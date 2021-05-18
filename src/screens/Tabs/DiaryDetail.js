import React from "react";
import { ImageBackground, Text } from "react-native";
import styled from "styled-components";

const Header = styled.View`
  background-color: #ffffff;
  height: 13%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.View`
    width: 340px;
    height: 500px;
    margin-top: 30px;
    border-radius: 10px;
    elevation: 10;
    background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

const AllView = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: #f1f1f1;
`;

export default ({ route }) => {
  const post = route.params;
  const date = new Date(post.date);
  return (
    <AllView>
      <Header>
        <Title>{post.title}</Title>
        <Text>{`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate() - 1 < 10 ? "0" + date.getDate() - 1 : date.getDate()}일`}</Text>
      </Header>
      <TextBox>
        <Text style={{padding: 10}}>{post.content}</Text>
      </TextBox>
    </AllView>
  );
};
