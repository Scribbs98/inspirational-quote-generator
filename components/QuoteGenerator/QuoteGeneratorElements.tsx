import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
    background: linear-gradient(to top, #0f9b0f, #56CCF2);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
    height: 100vh;
    width: 100vw;
    @keyframes gradient {
        0% {
            background-position: 50% 0%;
        }
        50% {
            background-position: 50% 100%;
        }
        100% {
            background-position: 50% 0%;
        }
    }
`;

export const BeeContainer = styled.div`
    height: 30vh;
    width: 30vh;
    position: absolute;
    top: 0;
    right: 0;
    animation: fly 20s ease-in-out infinite;
    @keyframes fly {
        0% {
            transform: translate(10vw, 5vh);
            opacity: 0;
        }
        9% {
            transform: translate(0vw, 0vh);
            opacity: 1;
        }
        18% {
            transform: translate(-10vw, 5vh);
            opacity: 1;
        }
        27% {
            transform: translate(-20vw, 0vh);
            opacity: 1;
        }
        36% {
            transform: translate(-30vw, 5vh);
            opacity: 1;
        }
        45% {
            transform: translate(-40vw, 0vh);
            opacity: 1;
        }
        54% {
            transform: translate(-50vw, 5vh);
            opacity: 1;
        }
        63% {
            transform: translate(-60vw, 0vh);
            opacity: 1;
        }
        72% {
            transform: translate(-70vw, 5vh);
            opacity: 1;
        }
        81% {
            transform: translate(-80vw, 0vh);
            opacity: 1;
        }
        90% {
            transform: translate(-90vw, 5vh);
            opacity: 1;
        }
        100% {
            transform: translate(-100vw, 0vh);
            opacity: 0;
        }
    }
`;

export const Bee = styled.div`
    height: 15vh;
    width: 20vh;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 45%;
    box-shadow: inset 0 -5vh rgba(0, 0, 0, 0.15);
    background: linear-gradient(
        to right,
        #f4c13d 30%,
        #0d323e 30%,
        #0d323e 45%,
        #f4c13d 45%,
        #f4c13d 55%,
        #0d323e 55%,
        #0d323e 70%,
        #f4c13d 70%,
        #f4c13d 80%,
        #0d323e 80%
    );
`;

export const LeftWing = styled.div`
    height: 6vh;
    width: 6vh;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 15%;
    left: 40%;
    border-radius: 50% 50% 0% 50%;
    background-color: #e6e6e6;
    opacity: 0.7;
`;

export const RightWing = styled.div`
    height: 6vh;
    width: 6vh;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 15%;
    left: 60%;
    border-radius: 50% 50% 50% 0%;
    background-color: #e6e6e6;
    opacity: 0.7;
`;

export const BeeEye = styled.div`
    height: 1vh;
    width: 1vh;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 45%;
    left: 25%;
    border-radius: 50%;
    background-color: #0d323e;
`;

export const Ground = styled.div`
    height: 10vh;
    width: 100vw;
    position: absolute;
    bottom: 0;
    background-color: #053905;
`;

export const GroundCircles = styled.div`
    height: 3vh;
    width: 200vw;
    position: absolute;
    bottom: 9.8vh;
    background-repeat: repeat no-repeat;
    background-size: 5.545vh 3.46vh;
    background-image: radial-gradient(
        circle at 2.7725vh 3.46vh,
        #053905 3.46vh,
        rgba(0, 0, 0, 0) 3.46vh
    );
    animation: slide 20s infinite linear;
    transform: translateX(-100vw);
    @keyframes slide {
        100% {
            transform: translateX(0);
        }
    }
`;

export const SheepContainer = styled.div`
    height: 30vh;
    width: 30vh;
    position: absolute;
    bottom: 12.9vh;
    right: 0;
    background-color: #f07c08; //remove when finished
    animation: walk 60s ease-in-out infinite;
    @keyframes walk {
        0% {
            transform: translateX(15vw);
        }
        100% {
            transform: translateX(-100vw);
        }
    }
  
`;

export const Sheep = styled.div`
    height: 20vh;
    width: 20vh;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background-color: #0c333f;
    box-shadow:
        0 10vh 0 -7vh #0c333f,
        0 -10vh 0 -7vh #0c333f;
`;
