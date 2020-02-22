import React from "react";
import styled from "styled-components";

function Spinner() {
  const Spinner = styled.div`
    color: official;
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 80px;
    z-index: 2000;

    div {
      transform-origin: 40px 40px;
      animation: lds-spinner 0.5s linear infinite;
    }
    div:after {
      content: " ";
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      border-radius: 20%;
      background: red;
    }
    div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1s;
    }
    div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -0.5s;
    }
    div:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.45s;
    }
    div:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.4s;
    }
    div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.35s;
    }
    div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.3s;
    }
    div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.25s;
    }
    div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.2s;
    }
    div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.15s;
    }
    div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.1s;
    }
    div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.05s;
    }
    div:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
    @keyframes lds-spinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `;
  return (
    <Spinner>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Spinner>
  );
}

export default Spinner;