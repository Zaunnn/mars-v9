import styled from "styled-components";

export const HomeContainer = styled.div`
  color: #fff;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    background: #0241b1;
  }
`;

export const HomeWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const HomeBg = styled.svg`
  height: 100vh;
  width: 100vw;
  fill: #0271b1;
  position: absolute;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const HomeRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: relative;
  height: 100vh;
  @media screen and (max-width: 1000px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  max-width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    margin-top: 10vh;
    max-height: 35vh;
  }
`;
export const Column2 = styled.div`
  grid-area: col2;
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    height: 55vh;
  }
`;
export const Column2Wrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: start;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    background: pink;
    display: grid;
  }
`;

export const Column1Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (max-width: 1000px) {
    height: 40vh;
    width: 90%;
  }
`;

export const ButtonWrapper = styled.div`
  left: 15%;
  width: 70%;
  margin-top: 40px;
  display: grid;
  justify-content: center;
  /* background: black; */
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const Button2Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    position: relative;
    bottom: 0;
    align-items: flex-start;
  }
`;

export const Heading = styled.h1`
  font-size: 75px;
  width: 100%;
  /* height: 45%; */
  display: flex;
  align-items: flex-end;
  margin-left: 50px;
  margin-bottom: 0;
  margin-top: 0;
  /* background: black; */
  @media screen and (max-width: 1300px) {
    font-size: 60px;
    margin-left: 40px;
    height: auto;
  }
  @media screen and (max-width: 1150px) {
    font-size: 50px;
    margin-left: 30px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 110px;
    margin: 10px 10px 50px 0;
    text-align: center;
  }
`;
export const Paragraph = styled.p`
  font-size: 30px;
  width: 65%;
  margin-left: 40px;
  display: flex;
  align-items: flex-start;
  text-align: center;
  @media screen and (max-width: 1150px) {
    font-size: 20px;
    margin-left: 30px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    font-size: 40px;
    margin: 0;
  }
`;

export const Svg = styled.img`
  width: 100%;
  background: black;
  @media screen and (max-width: 1000px) {
    height: 80%;
    position: relative;
    top: 0;
  }
`;
