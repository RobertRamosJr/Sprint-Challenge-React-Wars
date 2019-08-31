import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 2rem;
    padding: 2px 4px;
    width: 25%;
    margin: 2px 5px;
    justify-content: center;
`

const StyledH1 = styled.h1`
    background: darkblue;
    color: white;
    border-radius: 2rem;
`

const StyledH2 = styled.h2`
    text-decoration: underline;
`

const StyledP = styled.p`
    margin: 0 auto;
    padding: 2px 0px;
`

const Card = (prop) => {
    return (
        <StyledDiv >
            <StyledH1>Hi, My name is :</StyledH1>
            <StyledH2>{prop.person.name}</StyledH2>
            <StyledP>I am this tall : {prop.person.height}cm</StyledP>
            <StyledP>I weigh this much : {prop.person.mass}kg</StyledP>  
        </StyledDiv>
    )
}

export default Card;