import React from 'react';
import styled, { keyframes } from 'styled-components';

function TextAnimation() {
    const arr = "Catherine Nguyen".split("");
    return (
        <Wrapper>
            {arr.map((item, index) => (
                <span key={index}>{item}</span>
            ))}

        </Wrapper>
    );
}

const animation = keyframes`
 0% { opacity: 0; transform: translateY(-200px); filter: blur(10px);}
 100% { opacity: 1; transform: translateY(0); filter: blur(0px);}
`

const Wrapper = styled.span`
display: inline-block;
span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 5s;
    animation-fill-mode: forwards;
}
span:nth-child(1) {
    animation-delay: 0.00s;
}
span:nth-child(2) {
    animation-delay: 0.06s;
}
span:nth-child(3) {
    animation-delay: 0.12s;
}
span:nth-child(4) {
    animation-delay: 0.18s;
}
span:nth-child(5) {
    animation-delay: 0.24s;
}
span:nth-child(6) {
    animation-delay: 0.30s;
}
span:nth-child(7) {
    animation-delay: 0.36s;
}
span:nth-child(8) {
    animation-delay: 0.42s;
}
span:nth-child(9) {
    animation-delay: 0.48s;
}
span:nth-child(10) {
    animation-delay: 0.54s;
    margin:8px;
}
span:nth-child(11) {
    animation-delay: 1.0s;
}
span:nth-child(12) {
    animation-delay: 1.06s;
}
span:nth-child(13) {
    animation-delay: 1.12s;
}
span:nth-child(14) {
    animation-delay: 1.18s;
}
span:nth-child(15) {
    animation-delay: 1.24s;
}
span:nth-child(16) {
    animation-delay: 1.30s;
}

`

export default TextAnimation;