import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import useInput from "../../hooks/useInput";
import useContentInput from "../../hooks/useContentInput";
import axios from "axios";
import { Alert, Keyboard } from "react-native";
import { BaseUri } from "../../../env";
import { useLogOut } from "../../components/AuthContext";

const baseUri = BaseUri();

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const HeaderBox = styled.View`
  width: 100%;
  height: 18.3%;
`;

const CenterBox = styled.View`
  align-items: center;
  width: 100%;
  height: 56%;
`;

const CenterInnerBox = styled.View`
  align-items: center;
  width: 93.4%;
  height: 100%;
  background-color: #ebeeef;
`;

const BottomBox = styled.View`
  width: 100%;
  height: 9.3%;
`;

const ButtonBox = styled.View`
  width: 100%;
  height: 16.4%;
  align-items: center;
`;

const TouchButton = styled.TouchableOpacity`
  width: 100%;
  height: 35%;
  align-items: center;
`;

const View = styled.View`
  background-color: white;
  justify-content: center;
  width: 92%;
  height: 9%;
  margin-top: 4%;
`;

const _View = styled.View`
  background-color: white;
  width: 92%;
  height: 100%;
  margin-top: 4%;
  alignItems: flex-start;
  justifyContent: flex-start;
`;

const Text = styled.Text`
  color: black;
`;

export default ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const titleInput = useInput("");
  const textInput = useContentInput("");
  const logOut = useLogOut();

  const UploadPost = async () => {
    setLoading(true);
    const { value: title } = titleInput;
    const { value: text } = textInput;

    if(title !== "" && text !== ""){
      await axios
        .post(
          `${baseUri}/diary/write`,
          {
            title: title,
            content: text,
          }
        )
        .then(response => {
          Alert.alert("게시글 작성에 성공하였습니다.");
        })
        .catch(error => {
          if(error.response.status === '401'){
            Alert.alert(
              "게시물등록에 실패했습니다.",
              "로그인 후 다시 시도해주세요",
              [
                {
                  text: "OK",
                  onPress: () => logOut(),
                },
              ]
            )
          } else {
            Alert.alert("게시물등록에 실패했습니다.");
          }
        })
        .finally(() => {
          titleInput.onChangeText("");
          textInput.onChangeText("");
          setLoading(false);
          navigation.navigate("TimeLine");
          Keyboard.dismiss();
        });
    } else {
      setLoading(false);
      Keyboard.dismiss();
      Alert.alert("내용을 확인해주세요.");
    }
    
  };
  return (
    <Container>
      <HeaderBox>
      </HeaderBox>

      <CenterBox>
        <CenterInnerBox>
          <View>
            <TextInput
              {...titleInput}
              fontSize={16}
              placeholder="  제목을 입력해주세요"
              autoCorrect={false}
              returnKeyType="next"
            />
          </View>
          <_View>
            <TextInput
              {...textInput}
              fontSize={16}
              placeholder="  내용을 입력해주세요"
              style={{ flexShrink: 1, width:"100%", height:"70%", textAlign:"left", textAlignVertical:"top"}}
              multiline={true}
              returnKeyType="next"
            />
          </_View>
        </CenterInnerBox>
      </CenterBox>
      <BottomBox>

      </BottomBox>
      <ButtonBox>
        <TouchButton onPress={UploadPost}>
          {loading ? <Text>Loading</Text> : <Text>Write</Text>}
        </TouchButton>
      </ButtonBox>
    </Container>
  );
};