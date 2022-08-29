import React, {useState} from "react";
//CSS
import styled from "styled-components";


function TimeLine() {
  const [timeLine, setTimeLine] = useState([1992]);
  const [lineRed, setLineRed] = useState();
  console.log(lineRed);
  const TimeLineText = () => {
    if(timeLine.length === 1){
      setLineRed(10);
      return(
        <TimeLineTextContainer>
        <TimeLineTitle>1992</TimeLineTitle>
        <TimeLineDescription>La fabrica Del Montañes nació en el invierno de 1992, en Villa traful, provincia de Neuquén. 
          En ese entonces Traful tenia 300 habitantes! <br></br> El primer producto que hicimos, fueron los alfajores rellenos con MUCHO dulce de leche, que hasta el dia de hoy, sigue teniendo la misma cantidad!!</TimeLineDescription>
        </TimeLineTextContainer>
      );
      }
    else if( timeLine[timeLine.length - 1] === 2010){
      setLineRed(28);
      return(
        <TimeLineTextContainer>
        <TimeLineTitle>2010</TimeLineTitle>
        <TimeLineDescription>La fabrica Del Montañes nació en el invierno de 1992, en Villa traful, provincia de Neuquén. 
          En ese entonces Traful tenia 300 habitantes! <br></br> El primer producto que hicimos, fueron los alfajores rellenos con MUCHO dulce de leche, que hasta el dia de hoy, sigue teniendo la misma cantidad!!</TimeLineDescription>
        </TimeLineTextContainer>
      );
      }
    else if( timeLine[timeLine.length - 1] === 2012){
      setLineRed(44);
    return(
      <TimeLineTextContainer>
      <TimeLineTitle>2012</TimeLineTitle>
      <TimeLineDescription>La fabrica Del Montañes nació en el invierno de 1992, en Villa traful, provincia de Neuquén. 
      En ese entonces Traful tenia 300 habitantes! <br></br> El primer producto que hicimos, fueron los alfajores rellenos con MUCHO dulce de leche, que hasta el dia de hoy, sigue teniendo la misma cantidad!!</TimeLineDescription>
      </TimeLineTextContainer>
    );
    }
    else if(timeLine[timeLine.length - 1] === 2014){
      setLineRed(60);
      return(
        <TimeLineTextContainer>
        <TimeLineTitle>2014</TimeLineTitle>
        <TimeLineDescription>La fabrica Del Montañes nació en el invierno de 1992, en Villa traful, provincia de Neuquén. 
        En ese entonces Traful tenia 300 habitantes! <br></br> El primer producto que hicimos, fueron los alfajores rellenos con MUCHO dulce de leche, que hasta el dia de hoy, sigue teniendo la misma cantidad!!</TimeLineDescription>
        </TimeLineTextContainer>
    );
    }
    else if( timeLine[timeLine.length - 1] === 2016){
      setLineRed(78);
      return(
        <TimeLineTextContainer>
        <TimeLineTitle>2016</TimeLineTitle>
        <TimeLineDescription>La fabrica Del Montañes nació en el invierno de 1992, en Villa traful, provincia de Neuquén. 
        En ese entonces Traful tenia 300 habitantes! <br></br> El primer producto que hicimos, fueron los alfajores rellenos con MUCHO dulce de leche, que hasta el dia de hoy, sigue teniendo la misma cantidad!!</TimeLineDescription>
        </TimeLineTextContainer>
    );
    }
    else if( timeLine[timeLine.length - 1] === 2018){
      setLineRed(100);
      return(
        <TimeLineTextContainer>
        <TimeLineTitle>2018</TimeLineTitle>
        <TimeLineDescription>La fabrica Del Montañes nació en el invierno de 1992, en Villa traful, provincia de Neuquén. 
        En ese entonces Traful tenia 300 habitantes! <br></br> El primer producto que hicimos, fueron los alfajores rellenos con MUCHO dulce de leche, que hasta el dia de hoy, sigue teniendo la misma cantidad!!</TimeLineDescription>
        </TimeLineTextContainer>
    );
    }
  };

  return (
    <StyledTimeLine>
      <TimeLineContainer>
        <TimeLIne>
            <TimeLineUl>
              {timeLine.length === 1 ? 
              <TimeLineLi style={{color:"black"}}>1992
              </TimeLineLi> :
               <TimeLineLi>1992
               </TimeLineLi> 
              }
                <CircleRed onClick={() => setTimeLine(timeLine.filter((item) => item <= 1992 ) )} ></CircleRed> 
            </TimeLineUl>
            <TimeLineUl>
            {timeLine[timeLine.length - 1] === 2010? 
              <TimeLineLi style={{color:"black"}}>2010
              </TimeLineLi> :
               <TimeLineLi>2010
               </TimeLineLi> 
              }
              {timeLine.includes(2010) ? 
                <CircleRed onClick={() => setTimeLine(timeLine.filter((item) => item <= 2010 ) )}></CircleRed> : 
                <Circle onClick={() => setTimeLine([...timeLine, 2010])}></Circle>
              }
                </TimeLineUl>
            <TimeLineUl>
            {timeLine[timeLine.length - 1] === 2012 ? 
              <TimeLineLi style={{color:"black"}}>2012
              </TimeLineLi> :
               <TimeLineLi>2012
               </TimeLineLi> 
              }
              {timeLine.includes(2012) ? 
                <CircleRed onClick={() => setTimeLine(timeLine.filter((item) => item <= 2012 ) )}></CircleRed> : 
                <Circle onClick={() => timeLine.includes(2010) === false ?setTimeLine([...timeLine, 2010, 2012]) : setTimeLine([...timeLine, 2012])}></Circle>
              }
            </TimeLineUl>
            <TimeLineUl>
            {timeLine[timeLine.length - 1] === 2014? 
              <TimeLineLi style={{color:"black"}}>2014
              </TimeLineLi> :
               <TimeLineLi>2014
               </TimeLineLi> 
              }
              {timeLine.includes(2014) ? 
                <CircleRed onClick={() => setTimeLine(timeLine.filter((item) => item <= 2014 ) )}></CircleRed> : 
                <Circle onClick={() => timeLine.includes(2012) === false ?setTimeLine([...timeLine, 2010, 2012, 2014]) : setTimeLine([...timeLine, 2014])}></Circle>
              }
            </TimeLineUl>
            <TimeLineUl>
            {timeLine[timeLine.length - 1] === 2016 ? 
              <TimeLineLi style={{color:"black"}}>2016
              </TimeLineLi> :
               <TimeLineLi>2016
               </TimeLineLi> 
              }
              {timeLine.includes(2016) ? 
                <CircleRed onClick={() => setTimeLine(timeLine.filter((item) => item <= 2016 ) )}></CircleRed> : 
                <Circle onClick={() => timeLine.includes(2014) === false ?setTimeLine([...timeLine, 2010, 2012, 2014, 2016]) : setTimeLine([...timeLine, 2016])}></Circle>
              }
            </TimeLineUl>
            <TimeLineUl>
            {timeLine[timeLine.length - 1] === 2018 ? 
              <TimeLineLi style={{color:"black"}}>2018
              </TimeLineLi> :
               <TimeLineLi>2018
               </TimeLineLi> 
              }
              {timeLine.includes(2018) ? 
                <CircleRed onClick={() => setTimeLine(timeLine.filter((item) => item <= 2018) )}></CircleRed> : 
                <Circle onClick={() => timeLine.includes(2016) === false ?setTimeLine([...timeLine, 2010, 2012, 2014, 2016, 2018]) : setTimeLine([...timeLine, 2018])}></Circle>
              }
            </TimeLineUl>
        </TimeLIne> 
      <TimeLineSpan></TimeLineSpan>
      <TimeLineSpanRed //</TimeLineContainer>style={{"width": `${lineRed}%`}} 
      ></TimeLineSpanRed>
        <TimeLineText/>
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
  width: 90%;
  height:80%;
  @media (max-width: 500px){
    flex-wrap: nowrap;
    width:90%;
    flex-direction: row;
    display:flex;
  }
  `;

const TimeLIne = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
@media (max-width: 500px){
    flex-wrap: wrap;
    width: 20%;
  }
`;


const TimeLineSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: solid #c9c9c9 4px;
  @media (max-width: 500px){
    width: 1px;
    display:flex;
    height: 100%;
    border-left: solid  #c9c9c9 4px ;
    margin-left: -33px;
  }
`;

const TimeLineSpanRed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2px;
  border-bottom: solid #e22525 4px;
  margin-top: -5px;
  transition: 1s;
  width: 0px;
  @media (max-width: 500px){
    flex-wrap: wrap;
    height: 70%;
    border-left: solid #e22525 4px;
    margin-left: -5px;
  }
`;

const TimeLineUl = styled.ul`
  display: flex;
  bottom: 20px;
  list-style:none;
  flex-direction: column;
  `;

const TimeLineLi = styled.li`
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 10px;
  color: #858585;
  font-weight: 20;
`;

const Circle = styled.button`
    width: 25px;
    height: 25px;
    border: solid 2px #c9c9c9;
    border-radius: 20px;
    background-color: none;
    margin-bottom: -33px;
    background-color:  white;
    z-index: 30;
`;


const CircleRed = styled.button`
    width: 25px;
    height: 25px;
    border: solid 4px #e22525 ;
    border-radius: 20px;
    margin-bottom: -33px;
    z-index: 30;
    transition: 0.5s ease; 
`;

const TimeLineTextContainer = styled.div`
   display:flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   height: 70%;
   @media (max-width: 500px){
    flex-wrap: nowrap;
    width: 80%;
  }
   `;

const TimeLineTitle = styled.h2`
  font-size: 30px;
  display: flex;
  justify-content: center;
  width: 60%;
`;
const TimeLineDescription = styled.p`
  font-size: 25px;
  display:flex;
  justify-content: center;
  width: 70%;
`;