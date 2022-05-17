import styled from "styled-components"
import { render } from "@testing-library/react"

export const Title = styled.h1`
    color: black;
    position: fixed;
    top: 0;
    left: 0;
    right: 2000;
    padding-left: 40px;
    font-family: 'Inter', sans-serif
    font-style: bold;
    font-size: 55px;
    font-weight: 900;
    padding-bottom: 10px;
    line-height: 30px;
  `
    render(
        <>
        <Title>TOP SPOT.</Title>
        </>
    );