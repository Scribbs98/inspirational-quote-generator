import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
    background: linear-gradient(to top, #a80077, #D38312, #56CCF2);
    background-size: 300% 300%;
    animation: gradient 10s ease infinite;
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
    height: 20vh;
    width: 20vh;
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
    height: 50%;
    width: 66%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 45%;
    box-shadow: inset 0 -3vh rgba(0, 0, 0, 0.15);
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
    height: 20%;
    width: 20%;
    position: absolute;
    top: 5%;
    left: 31%;
    border-radius: 50% 50% 0% 50%;
    background-color: #e6e6e6;
    opacity: 0.7;
    animation: flutter-1 0.5s infinite;
    @keyframes flutter-1 {
        50% {
            transform-origin: bottom right;
            rotate: 15deg;
        }
    }
`;

export const RightWing = styled.div`
    height: 20%;
    width: 20%;
    position: absolute;
    top: 5%;
    left: 50%;
    border-radius: 50% 50% 50% 0%;
    background-color: #e6e6e6;
    opacity: 0.7;
    animation: flutter-2 0.5s infinite;
    @keyframes flutter-2 {
        50% {
            transform-origin: bottom left;
            rotate: -15deg;
        }
    }
`;

export const BeeEye = styled.div`
    height: 3.5%;
    width: 3.5%;
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
    width: 40vh;
    position: absolute;
    bottom: 12.7vh;
    right: 0;
    animation: walk 60s infinite linear;
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
    height: 66%;
    width: 50%;
    position: absolute;
    top: 15%;
    left: 35%;
    z-index: 1;
    border-radius: 50%;
    background-color: #fffdd0;
    box-shadow:
        0 10vh 0 -7.2vh #fffdd0,
        0 -10vh 0 -7.2vh #fffdd0,
        10vh 0 0 -7.2vh #fffdd0,
        -10vh 0 0 -7.2vh #fffdd0,
        9.2vh 4vh 0 -7.2vh #fffdd0,
        9.2vh -4vh 0 -7.2vh #fffdd0,
        -9.2vh 4vh 0 -7.2vh #fffdd0,
        -9.2vh -4vh 0 -7.2vh #fffdd0,
        4vh 9.2vh 0 -7.2vh #fffdd0,
        4vh -9.2vh 0 -7.2vh #fffdd0,
        -4vh 9.2vh 0 -7.2vh #fffdd0,
        -4vh -9.2vh 0 -7.2vh #fffdd0,
        -7.2vh -7.2vh 0 -7.2vh #fffdd0,
        -7.2vh 7.2vh 0 -7.2vh #fffdd0,
        7.2vh -7.2vh 0 -7.2vh #fffdd0,
        7.2vh 7.2vh 0 -7.2vh #fffdd0;
    animation: body-shake 0.4s infinite linear;
    @keyframes body-shake {
        50% {
            transform: translateY(0.5vh);
        }
    }
`;

export const SheepLeg1 = styled.div`
    height: 30%;
    width: 5.3%;
    position: absolute;
    bottom: 0;
    left: 40%;
    border-radius: 40%;
    background-color: #002436;
    animation: run-1 1s infinite linear;
    @keyframes run-1 {
        65% {
            transform: translateY(0);
        }
        66% {
            transform: translateY(-5.5vh);
        }
    }
`;

export const SheepLeg2 = styled.div`
    height: 30%;
    width: 5.3%;
    position: absolute;
    bottom: 0;
    left: 47%;
    border-radius: 40%;
    background-color: #002436;
    animation: run-2 1s infinite linear;
    @keyframes run-2 {
        33% {
            transform: translate(-5vh, -3vh);
        }
        66% {
            transform: translate(-5vh, 0);
        }
    }
`;

export const SheepLeg3 = styled.div`
    height: 30%;
    width: 5.3%;
    position: absolute;
    bottom: 0;
    left: 68%;
    border-radius: 40%;
    background-color: #002436;
    animation: run-3 1s infinite linear;
    @keyframes run-3 {
        65% {
            transform: translateY(0);
        }
        66% {
            transform: translateY(-5.5vh);
        }
    }
`;

export const SheepLeg4 = styled.div`
    height: 30%;
    width: 5.3%;
    position: absolute;
    bottom: 0;
    left: 75%;
    border-radius: 40%;
    background-color: #002436;
    animation: run-4 1s infinite linear;
    @keyframes run-4 {
        33% {
            transform: translate(-5vh, -3vh);
        }
        66% {
            transform: translate(-5vh, 0);
        }
    }
`;

export const SheepFace = styled.div`
    height: 24%;
    width: 24%;
    position: absolute;
    top: 35%;
    left: 15%;
    border-radius: 45% 20% 20% 45%;
    background-color: #002436;
    animation: face-shake 0.5s infinite;
    @keyframes face-shake {
        50% {
            transform-origin: bottom right;
            rotate: -5deg;
        }
    }
`;

export const LeftEar = styled.div`
    height: 12.5%;
    width: 4%;
    position: absolute;
    top: 26%;
    left: 20%;
    border-radius: 40%;
    background-color: #002436;
    transform: rotate(-25deg);
    animation: left-ear-shake 0.5s infinite;
    @keyframes left-ear-shake {
        50% {
            transform-origin: top right;
            rotate: 10deg;
        }
    }
`;

export const RightEar = styled.div`
    height: 12.5%;
    width: 4%;
    position: absolute;
    top: 26%;
    left: 25%;
    border-radius: 40%;
    background-color: #002436;
    transform: rotate(25deg);
    animation: right-ear-shake 0.5s infinite;
    @keyframes right-ear-shake {
        50% {
            transform-origin: top left;
            rotate: -10deg;
        }
    }
`;
