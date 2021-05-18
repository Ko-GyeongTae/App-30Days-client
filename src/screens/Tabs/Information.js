import { useFonts } from 'expo-font';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

export default () => {
    let [fontsLoaded] = useFonts({
        'DancingScript-VariableFont_wght': require('../../../assets/fonts/DancingScript-VariableFont_wght.ttf')
    });
    if(!fontsLoaded){
        return <Text>Loading</Text>
    }
    return (
        <Container>
            <TextBox>
                <HeaderArea>
                    <Header>Information</Header>
                </HeaderArea>
                <PostArea>
                    <Post>
                        <ImageBox source={require('../../../assets/Nest.png')} />
                        <Text style={{fontSize: 20}}>Server</Text>
                        <Text>Nestjs</Text>
                    </Post>
                    <Post>
                        <ImageBox source={require('../../../assets/RN.png')} />
                        <Text style={{fontSize: 20}}>Client</Text>
                        <Text>React Native</Text>
                    </Post>
                </PostArea>
                <PostArea>
                    <Post>
                        <ImageBox source={require('../../../assets/SQL.png')} />
                        <Text style={{fontSize: 20}}>Database</Text>
                        <Text>MySQL</Text>
                    </Post>
                    <Post>
                        <ImageBox source={require('../../../assets/OS.png')} />
                        <Text style={{fontSize: 20}}>OS</Text>
                        <Text>Ubuntu Server</Text>
                    </Post>
                </PostArea>
            </TextBox>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
`;

const TextBox = styled.View`
    width: 340px;
    height: 670px;
    margin-top: 30px;
    border-radius: 20px;
    elevation: 6;
    background-color: #ffffff;
`;

const HeaderArea = styled.View`
    width: 100%;
    height: 18.3%;
    align-items: center;
    justify-content: center;
`;

const ImageBox = styled.Image`
    width: 120px;
    height: 120px;
`;

const Post = styled.View`
    width: 150px;
    height: 190px;
    padding-top: 15px;
    alignItems: center;
`;

const PostArea = styled.View`
    flex-direction: row;
    width: 100%;
    height: 200px;
    justifyContent: center;
`;

const Header = styled.Text`
    font-size: 60px;
    text-align:center;
    font-family: 'DancingScript-VariableFont_wght'
`;