import React from "react";
import styled from "styled-components";

const Component = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  width: 93.6%;
  height: 180px;
  margin-top: 2%;
  margin-bottom: 3%;
  border-radius: 10px;
  background-color: white;
  elevation: 6;
`;

const Header = styled.View`
  flex: 1;
  padding-top: 15px;
  justify-content: flex-start;
  align-items: center;
`;

const Bottom = styled.View`
  flex: 2;
  padding-left: 5.7%;
  padding-top: 15px;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Name_Title = styled.Text`
  color: #204051;
  font-weight: bold;
`;

const Date_Text = styled.Text`
  color: black;
`;

const Day = styled.Text`
  color: black;
  font-weight: bold;
`;

export default (props) => {
  const date = new Date(props.date);

  return (
    <Component onPress={() => props.onPress()}>
      <Header>
        <Name_Title style={{ fontSize: 20 }}>{props.title}</Name_Title>
        <Date_Text
          style={{ fontSize: 15 }}
        >{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</Date_Text>
        <Day style={{ fontSize: 20 }}>{`${
          date.getDate() - 1 < 10 ? "0" + date.getDate() - 1 : date.getDate() - 1
        }일`}</Day>
      </Header>
      <Bottom>
        <Name_Title style={{ fontSize: 20 }}>{props.title}</Name_Title>
        <Date_Text>{props.content}</Date_Text>
      </Bottom>
    </Component>
  );
};
