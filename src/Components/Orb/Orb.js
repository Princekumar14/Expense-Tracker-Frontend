import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

const Orb = () => {

    const { width, height } = useWindowSize();


    const moveOrb = keyframes`
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(${width / 1.2}px, ${height / 2}px);
        }
        100% {
            transform: translate(0, 0);
        }
    `;

    const Orbstyled = styled.div`
        width: 80vh;
        height: 80vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(400px);
        animation: ${moveOrb} 15s alternate linear infinite;
    `;
    return (
        <Orbstyled></Orbstyled>
    );
}

export default Orb;
