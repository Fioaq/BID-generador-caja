import React from 'react'
import styled from 'styled-components';

const Box = styled.div`
    background-color: ${props => props.inputColor || 'red'};
    width: 40px;
    height: 40px;
    margin: 5px;
`;
const Container = styled.div`
    display: flex;
`;

const ShowBox = props => {
    const {colorArr} = props
        return (
        <Container>{colorArr.map((item, idx) =>
                <Box inputColor={item} key={idx} />)}
        </Container>
    )
}

export default ShowBox