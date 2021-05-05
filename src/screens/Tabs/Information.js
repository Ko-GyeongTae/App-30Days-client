import React from 'react';
import styled from 'styled-components';

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

export default () => {
    return (
        <Container>
            <TextBox>

            </TextBox>
        </Container>
    );
}