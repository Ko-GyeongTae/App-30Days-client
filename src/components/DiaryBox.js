import React from 'react';
import styled from 'styled-components';

const Box = styled.View`
    width: 80px;
    height: 50px;
    background-color: grey;
`;

const Title = styled.Text`

`;
export default (props) => {

    return (
        <Box>
            <Title>Hello</Title>
        </Box>
    );
}