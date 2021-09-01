import React from 'react';
import styled, { keyframes } from 'styled-components';

function ImageAnimation() {
    return (
        <Wrapper>
            <Prof />
        </Wrapper>
    );
}

const animation = keyframes`
 0% { opacity: 0; transform: translateX(-300px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
 100% { opacity: 1; transform: translateX(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
`
const Prof = styled.div`
border-radius: 50%;
height:25rem;
width: 25rem;
margin: 10px;
background-image: url(Assets/Prof.jpg);
background-size: 500px auto;
background-repeat: no-repeat;
animation-name: ${animation};
animation-duration: 5s;
animation-fill-mode: forwards;
`

const Wrapper = styled.div`
float: left;
display: inline-block;
`

export default ImageAnimation;