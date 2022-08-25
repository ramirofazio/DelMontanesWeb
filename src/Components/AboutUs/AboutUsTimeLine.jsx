import React, {useState} from "react";
//CSS
import styled from "styled-components";


function TimeLine() {
  const [timeLine, setTimeLine] = useState([2008]);
  const [lineRed, setLineRed] = useState();
  console.log(lineRed);
  const TimeLineText = () => {
    if(timeLine.length === 1){
      setLineRed(10);
      return(
        <TimeLineTextContainer>
        <TimeLineTitle>2008</TimeLineTitle>
        <TimeLineDescription>Hola soy 2008</TimeLineDescription>
        </TimeLineTextContainer>
      );
      }
    else if( timeLine[timeLine.length - 1] === 2010){
      setLineRed(28);
      return(
        <TimeLineTextContainer>
        <TimeLineTitle>2010</TimeLineTitle>
        <TimeLineDescription>Hola soy 2010</TimeLineDescription>
        </TimeLineTextContainer>
      );
      }
    else if( timeLine[timeLine.length - 1] === 2012){
      setLineRed(44);
    return(
      <TimeLineTextContainer>
      <TimeLineTitle>2012</TimeLineTitle>
      <TimeLineDescription>Hola soy 2012</TimeLineDescription>
      </TimeLineTextContainer>
    );
    }
    else if(timeLine[timeLine.length - 1] === 2014){
      setLineRed(60);
      return(
        <TimeLineTextContainer>
        <TimeLineTitle>2014</TimeLineTitle>
        <TimeLineDescription>Hola soy 2014</TimeLineDescription>
        </TimeLineTextContainer>
    );
    }
    else if( timeLine[timeLine.length - 1] === 2016){
      setLineRed(78);
      return(
        <TimeLineTextContainer>
        <TimeLineTitle>2016</TimeLineTitle>
        <TimeLineDescription>Hola soy 2016</TimeLineDescription>
        </TimeLineTextContainer>
    );
    }
    else if( timeLine[timeLine.length - 1] === 2018){
      setLineRed(100);
      return(
        <TimeLineTextContainer>
        <TimeLineTitle>2018</TimeLineTitle>
        <TimeLineDescription>Hola soy 2018</TimeLineDescription>
        </TimeLineTextContainer>
    );
    }
  };

  return (
    <StyledTimeLine>
      <TimeLineContainer>
        <TimeLIne>
            <TimeLineUl>
              <TimeLineLi>2008
              </TimeLineLi> 
                <Circle2 onClick={() => setTimeLine(timeLine.filter((item) => item <= 2008 ) )} ></Circle2> 
            </TimeLineUl>
            <TimeLineUl>
              <TimeLineLi>2010</TimeLineLi>
              {timeLine.includes(2010) ? 
                <Circle2 onClick={() => setTimeLine(timeLine.filter((item) => item <= 2010 ) )}></Circle2> : 
                <Circle onClick={() => setTimeLine([...timeLine, 2010])}></Circle>
              }
                </TimeLineUl>
            <TimeLineUl>
              <TimeLineLi>2012</TimeLineLi>
              {timeLine.includes(2012) ? 
                <Circle2 onClick={() => setTimeLine(timeLine.filter((item) => item <= 2012 ) )}></Circle2> : 
                <Circle onClick={() => timeLine.includes(2010) === false ?setTimeLine([...timeLine, 2010, 2012]) : setTimeLine([...timeLine, 2012])}></Circle>
              }
            </TimeLineUl>
            <TimeLineUl>
              <TimeLineLi>2014</TimeLineLi>
              {timeLine.includes(2014) ? 
                <Circle2 onClick={() => setTimeLine(timeLine.filter((item) => item <= 2014 ) )}></Circle2> : 
                <Circle onClick={() => timeLine.includes(2012) === false ?setTimeLine([...timeLine, 2010, 2012, 2014]) : setTimeLine([...timeLine, 2014])}></Circle>
              }
            </TimeLineUl>
            <TimeLineUl>
              <TimeLineLi>2016</TimeLineLi>
              {timeLine.includes(2016) ? 
                <Circle2 onClick={() => setTimeLine(timeLine.filter((item) => item <= 2016 ) )}></Circle2> : 
                <Circle onClick={() => timeLine.includes(2014) === false ?setTimeLine([...timeLine, 2010, 2012, 2014, 2016]) : setTimeLine([...timeLine, 2016])}></Circle>
              }
            </TimeLineUl>
            <TimeLineUl>
              <TimeLineLi>2018</TimeLineLi>
              {timeLine.includes(2018) ? 
                <Circle2 onClick={() => setTimeLine(timeLine.filter((item) => item <= 2018) )}></Circle2> : 
                <Circle onClick={() => timeLine.includes(2016) === false ?setTimeLine([...timeLine, 2010, 2012, 2014, 2016, 2018]) : setTimeLine([...timeLine, 2018])}></Circle>
              }
            </TimeLineUl>
        </TimeLIne> 
      <TimeLineSpan></TimeLineSpan>
      <TimeLineSpanRed style={{"width": `${lineRed}%`}}></TimeLineSpanRed>
        <TimeLineText/>
      </TimeLineContainer>
      </StyledTimeLine>
  );
}

export default TimeLine;

const StyledTimeLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 90%;
  `;

const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  `;

const TimeLIne = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`;


const TimeLineSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2px;
  border-bottom: solid #c9c9c9 4px;
`;

const TimeLineSpanRed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2px;
  border-bottom: solid #e22525 4px;
  margin-top: -5px;
  width: 0px;
`;

const TimeLineUl = styled.ul`
  display: flex;
  bottom: 20px;
  list-style:none;
  flex-direction: column;
  `;

const TimeLineLi = styled.li`
  flex-direction: column;
`;

const Circle = styled.button`
    width: 20px;
    height: 20px;
    border: solid 2px black;
    border-radius: 20px;
    background-color: none;
    margin-bottom: -30px;
    background-color:  white;
    z-index: 30;
`;


const Circle2 = styled.button`
    width: 20px;
    height: 20px;
    border: solid 2px red;
    border-radius: 20px;
    background-color: none;
    margin-bottom: -30px;
    background-color:  #e72d2d;
    z-index: 30;
`;

const TimeLineTextContainer = styled.div`
   display:flex;
   flex-direction: column;
   height: 60%;
   width: 70%;
   justify-content: center;
   align-items: center;
   `;

const TimeLineTitle = styled.h2`
  text-align: left;
  font-size: 35px;
`;
const TimeLineDescription = styled.p`
  font-size: 30px;
  text-align: left;
`;