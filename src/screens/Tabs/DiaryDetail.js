import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import DiaryBox from "../../components/DiaryBox";

const baseUri = "http://10.0.2.2:5000";

const View = styled.View`
  background-color: red;
`;

const AllView = styled.View`
  flex: 1;
  height: 100%;
`;

const Comment = styled.TextInput`
  background-color: #d9d9d9;
  width: 90%;
  height: 100%;
  padding-left: 8px;
  position: absolute;
  left: 0;
`;

const Submit = styled.TouchableOpacity`
  background-color: #d9d9d9;
  height: 100%;
  width: 10%;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 0;
`;

export default ({ route, navigation }) => {
  const post = route.params;
  console.log(post);
  return (
    <AllView>
      <View
        style={{
          height: "13%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
          <Text>Header</Text>
      </View>
      <View style={{ height: "87%", width: "100%", backgroundColor: "green" }}>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 180,
            alignItems: "center",
          }}
        >
          <DiaryBox
            key={post.postUid}
            onPress={() => null}
            content={post.content}
            date={post.date}
            name={post.name}
            postUid={post.postUid}
            title={post.title}
            errfunc={() => navigation.pop()}
          />
        </View>
      </View>
    </AllView>
  );
};
