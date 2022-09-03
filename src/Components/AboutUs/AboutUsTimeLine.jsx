import React, { useState } from "react";
//Assets
import styled from "styled-components";
import Variables from "../../Styles/Variables";

function TimeLine() {
  const [timeLine, setTimeLine] = useState([1992]);
  const [lineRed, setLineRed] = useState();
  console.log(lineRed);
  const TimeLineText = () => {
    if (timeLine.length === 1) {
      setLineRed(10);
      return (
        <TimeLineTextContainer>
          <TimeLineTitle>1992</TimeLineTitle>
          <TimeLineDescription>
            La fabrica Del Montañes nació en el invierno de 1992, en Villa
            traful, provincia de Neuquén. En ese entonces Traful tenia 300
            habitantes! <br></br> El primer producto que hicimos, fueron los
            alfajores rellenos con MUCHO dulce de leche, que hasta el dia de
            hoy, sigue teniendo la misma cantidad!!
          </TimeLineDescription>
        </TimeLineTextContainer>
      );
    } else if (timeLine[timeLine.length - 1] === 2010) {
      setLineRed(28);
      return (
        <TimeLineTextContainer>
          <TimeLineTitle>2010</TimeLineTitle>
          <TimeLineDescription>
            La fabrica Del Montañes nació en el invierno de 1992, en Villa
            traful, provincia de Neuquén. En ese entonces Traful tenia 300
            habitantes! <br></br> El primer producto que hicimos, fueron los
            alfajores rellenos con MUCHO dulce de leche, que hasta el dia de
            hoy, sigue teniendo la misma cantidad!!
          </TimeLineDescription>
        </TimeLineTextContainer>
      );
    } else if (timeLine[timeLine.length - 1] === 2012) {
      setLineRed(44);
      return (
        <TimeLineTextContainer>
          <TimeLineTitle>2012</TimeLineTitle>
          <TimeLineDescription>
            La fabrica Del Montañes nació en el invierno de 1992, en Villa
            traful, provincia de Neuquén. En ese entonces Traful tenia 300
            habitantes! <br></br> El primer producto que hicimos, fueron los
            alfajores rellenos con MUCHO dulce de leche, que hasta el dia de
            hoy, sigue teniendo la misma cantidad!!
          </TimeLineDescription>
        </TimeLineTextContainer>
      );
    } else if (timeLine[timeLine.length - 1] === 2014) {
      setLineRed(60);
      return (
        <TimeLineTextContainer>
          <TimeLineTitle>2014</TimeLineTitle>
          <TimeLineDescription>
            La fabrica Del Montañes nació en el invierno de 1992, en Villa
            traful, provincia de Neuquén. En ese entonces Traful tenia 300
            habitantes! <br></br> El primer producto que hicimos, fueron los
            alfajores rellenos con MUCHO dulce de leche, que hasta el dia de
            hoy, sigue teniendo la misma cantidad!!
          </TimeLineDescription>
        </TimeLineTextContainer>
      );
    } else if (timeLine[timeLine.length - 1] === 2016) {
      setLineRed(78);
      return (
        <TimeLineTextContainer>
          <TimeLineTitle>2016</TimeLineTitle>
          <TimeLineDescription>
            La fabrica Del Montañes nació en el invierno de 1992, en Villa
            traful, provincia de Neuquén. En ese entonces Traful tenia 300
            habitantes! <br></br> El primer producto que hicimos, fueron los
            alfajores rellenos con MUCHO dulce de leche, que hasta el dia de
            hoy, sigue teniendo la misma cantidad!!
          </TimeLineDescription>
        </TimeLineTextContainer>
      );
    } else if (timeLine[timeLine.length - 1] === 2018) {
      setLineRed(100);
      return (
        <TimeLineTextContainer>
          <TimeLineTitle>2018</TimeLineTitle>
          <TimeLineDescription>
            La fabrica Del Montañes nació en el invierno de 1992, en Villa
            traful, provincia de Neuquén. En ese entonces Traful tenia 300
            habitantes! <br></br> El primer producto que hicimos, fueron los
            alfajores rellenos con MUCHO dulce de leche, que hasta el dia de
            hoy, sigue teniendo la misma cantidad!!
          </TimeLineDescription>
        </TimeLineTextContainer>
      );
    }
  };

  return (
    <StyledTimeLine>
      <TimeLineContainer>
        <TimeLIne>
          <CircleYearsContainer>
            <TimeLineUl>
              {timeLine.length === 1 ? (
                <TimeLineLi style={{ color: "black" }}>1992</TimeLineLi>
              ) : (
                <TimeLineLi>1992</TimeLineLi>
              )}
              <CircleRed
                onClick={() =>
                  setTimeLine(timeLine.filter((item) => item <= 1992))
                }
              ></CircleRed>
            </TimeLineUl>
            <TimeLineUl>
              {timeLine[timeLine.length - 1] === 2010 ? (
                <TimeLineLi style={{ color: "black" }}>2010</TimeLineLi>
              ) : (
                <TimeLineLi>2010</TimeLineLi>
              )}
              {timeLine.includes(2010) ? (
                <CircleRed
                  onClick={() =>
                    setTimeLine(timeLine.filter((item) => item <= 2010))
                  }
                ></CircleRed>
              ) : (
                <Circle
                  onClick={() => setTimeLine([...timeLine, 2010])}
                ></Circle>
              )}
            </TimeLineUl>
            <TimeLineUl>
              {timeLine[timeLine.length - 1] === 2012 ? (
                <TimeLineLi style={{ color: "black" }}>2012</TimeLineLi>
              ) : (
                <TimeLineLi>2012</TimeLineLi>
              )}
              {timeLine.includes(2012) ? (
                <CircleRed
                  onClick={() =>
                    setTimeLine(timeLine.filter((item) => item <= 2012))
                  }
                ></CircleRed>
              ) : (
                <Circle
                  onClick={() =>
                    timeLine.includes(2010) === false
                      ? setTimeLine([...timeLine, 2010, 2012])
                      : setTimeLine([...timeLine, 2012])
                  }
                ></Circle>
              )}
            </TimeLineUl>
            <TimeLineUl>
              {timeLine[timeLine.length - 1] === 2014 ? (
                <TimeLineLi style={{ color: "black" }}>2014</TimeLineLi>
              ) : (
                <TimeLineLi>2014</TimeLineLi>
              )}
              {timeLine.includes(2014) ? (
                <CircleRed
                  onClick={() =>
                    setTimeLine(timeLine.filter((item) => item <= 2014))
                  }
                ></CircleRed>
              ) : (
                <Circle
                  onClick={() =>
                    timeLine.includes(2012) === false
                      ? setTimeLine([...timeLine, 2010, 2012, 2014])
                      : setTimeLine([...timeLine, 2014])
                  }
                ></Circle>
              )}
            </TimeLineUl>
            <TimeLineUl>
              {timeLine[timeLine.length - 1] === 2016 ? (
                <TimeLineLi style={{ color: "black" }}>2016</TimeLineLi>
              ) : (
                <TimeLineLi>2016</TimeLineLi>
              )}
              {timeLine.includes(2016) ? (
                <CircleRed
                  onClick={() =>
                    setTimeLine(timeLine.filter((item) => item <= 2016))
                  }
                ></CircleRed>
              ) : (
                <Circle
                  onClick={() =>
                    timeLine.includes(2014) === false
                      ? setTimeLine([...timeLine, 2010, 2012, 2014, 2016])
                      : setTimeLine([...timeLine, 2016])
                  }
                ></Circle>
              )}
            </TimeLineUl>
            <TimeLineUl>
              {timeLine[timeLine.length - 1] === 2018 ? (
                <TimeLineLi style={{ color: "black" }}>2018</TimeLineLi>
              ) : (
                <TimeLineLi>2018</TimeLineLi>
              )}
              {timeLine.includes(2018) ? (
                <CircleRed
                  onClick={() =>
                    setTimeLine(timeLine.filter((item) => item <= 2018))
                  }
                ></CircleRed>
              ) : (
                <Circle
                  onClick={() =>
                    timeLine.includes(2016) === false
                      ? setTimeLine([...timeLine, 2010, 2012, 2014, 2016, 2018])
                      : setTimeLine([...timeLine, 2018])
                  }
                ></Circle>
              )}
            </TimeLineUl>
          </CircleYearsContainer>
          <LineContainer>
            <TimeLineSpan></TimeLineSpan>
            <TimeLineSpanRed // style={{ width: `${lineRed}%` }}></TimeLineSpanRed
            />
          </LineContainer>
        </TimeLIne>
        <TimeLineText />
      </TimeLineContainer>
    </StyledTimeLine>
  );
}

export default TimeLine;

const StyledTimeLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  height: 100%;
`;

const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media (${Variables.mobileL}) {
    flex-wrap: nowrap;
    width: 100%;
    flex-direction: row;
    display: flex;
    height: 100%;
    justify-content: space-between;
  }
`;

const TimeLIne = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (${Variables.tabletL}) {
  }
  @media (${Variables.mobileL}) {
    flex-wrap: wrap;
    width: 20%;
    align-content: space-between;
    position: relative;
  }
  @media (${Variables.mobileS}) {
    flex-wrap: wrap;
    width: 20%;
    align-content: space-between;
  }
`;

const CircleYearsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  text-align: center;
  @media (${Variables.mobileL}) {
    width: 100%;
    flex-direction: column;
  }
  @media (${Variables.mobileS}) {
    height: 100%;
  }
`;
const LineContainer = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: -25px;
  @media (${Variables.mobileL}) {
    height: 100%;
    justify-content: center;
    width: 30%;
    margin: 0;
    left: 5px;
    position: absolute;
  }
  @media (${Variables.mobileS}) {
    left: 7px;
  }
`;

const TimeLineSpan = styled.div`
  width: 100%;
  border-bottom: solid #c9c9c9 4px;
  height: 100%;
  @media (${Variables.tabletL}) {
  }
  @media (${Variables.mobileL}) {
    height: 100%;
    width: 1px;
    margin-top: 0;
    border-left: solid #c9c9c9 4px;
  }
  @media (${Variables.mobileS}) {
  }
`;

const TimeLineSpanRed = styled.div`
  width: 0%;
  height: 100%;
  border-bottom: solid #d42222 4px;
  @media (${Variables.tabletL}) {
  }
  @media (${Variables.mobileL}) {
    width: 1px;
    display: flex;
    height: 20%;
  }
  @media (${Variables.mobileS}) {
    height: 20%;
    width: 1px;
  }
`;

const TimeLineUl = styled.ul`
  display: flex;
  bottom: 20px;
  list-style: none;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0;
  align-items: center;
  justify-content: center;
  @media (${Variables.mobileL}) {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }
  @media (${Variables.mobileL}) {
    height: 100%;
  }
  @media (${Variables.mobileS}) {
    margin: 0;
    height: 20%;
    padding: 0;
  }
`;

const TimeLineLi = styled.li`
  flex-direction: column;
  font-size: 20px;
  color: #858585;
  font-weight: 20;
  height: 50%;
  @media (${Variables.mobileL}) {
    margin-left: 3px;
    height: 100%;
    text-align: center;
  }
  @media (${Variables.mobileS}) {
    font-size: 15px;
  }
`;

const Circle = styled.button`
  width: 25px;
  height: 25px;
  border: solid 4px #c9c9c9;
  border-radius: 20px;
  background-color: none;
  background-color: white;
  z-index: 30;
  @media (${Variables.tabletL}) {
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
  @media (${Variables.mobileS}) {
    width: 20px;
    height: 20px;
    border: solid 3px #c9c9c9;
  }
`;

const CircleRed = styled.button`
  width: 25px;
  height: 25px;
  border: solid 4px #e22525;
  border-radius: 20px;
  z-index: 30;
  transition: 0.5s ease;
  @media (${Variables.tabletL}) {
    width: 20px;
    height: 20px;
    margin-bottom: 0px;
    border-radius: 10px;
  }
  @media (${Variables.mobileS}) {
    width: 20px;
    height: 20px;
    border: solid 3px #e22525;
  }
`;

const TimeLineTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  justify-content: flex-end;
  @media (${Variables.tabletL}) {
    height: 100%;
  }
  @media (${Variables.mobileL}) {
    flex-wrap: nowrap;
    width: 80%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const TimeLineTitle = styled.h2`
  margin: 10px;
  display: flex;
  justify-content: center;
  width: 60%;
  padding: 0px;
  height: 10%;
  font-size: 30px;
  font-family: "Nunito", sans-serif;
  font-weight: normal;
  line-height: 1.3;
  @media (${Variables.tabletL}) {
    font-size: 25px;
  }
  @media (${Variables.mobileS}) {
    font-size: 20px;
    padding: 0;
    margin: 0;
  }
`;
const TimeLineDescription = styled.p`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
  padding: 0px;
  width: 70%;
  height: 70%;
  font-weight: inherit;
  font-size: 20px;
  text-align: center;
  @media (${Variables.tabletL}) {
    font-size: 20px;
  }
  @media (${Variables.mobileL}) {
    width: 70%;
  }
  @media (${Variables.mobileS}) {
    font-size: 15px;
    width: 70%;
  }
`;
