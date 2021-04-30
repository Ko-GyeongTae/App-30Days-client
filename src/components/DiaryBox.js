import React from "react";
import styled from "styled-components";

const Component = styled.TouchableOpacity`
  flex: 1;
  width: 93.6%;
  height: 80px;
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: 10px;
  background-color: white;
  elevation: 6;
`;

const Header = styled.View`
  flex: 1;
  padding-top: 15px;
  padding-left: 15px;
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
        <Day style={{ fontSize: 15 }}>{`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate() - 1 < 10 ? "0" + date.getDate() - 1 : date.getDate() - 1}일`}</Day>
      </Bottom>
    </Component>
  );
};
