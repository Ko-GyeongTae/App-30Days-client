import React from "react";
import styled from "styled-components";

const Component = styled.TouchableOpacity`
  flex: 1;
  width: 350px;
  height: 80px;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 10px;
  background-color: white;
  elevation: 6;
`;

const Header = styled.View`
  flex: 1;
  padding-top: 15px;
  padding-left: 10px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Name_Title = styled.Text`
  color: black;
  font-weight: bold;
`;

const Bottom = styled.View`
  align-items: flex-end;
  padding-bottom: 5px;
  padding-right: 5px; 
`;

const Day = styled.Text`
  color: black;
  font-weight: 100;
`;

export default (props) => {
  const date = new Date(props.date);
  return (
    <Component onPress={() => props.onPress()}>
      <Header>
        <Name_Title style={{ fontSize: 20 }}>{props.title}</Name_Title>
      </Header>
      <Bottom>
        <Day style={{ fontSize: 15 }}>{`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}일 ${date.getHours() > 12 ? `오후 ${date.getHours() - 12}` : `오전 ${date.getHours()}`}시 ${date.getMinutes()}분 ${date.getSeconds()}초`}</Day>
      </Bottom>
    </Component>
  );
};
