import React from "react";
//CSS
import styled from "styled-components";

function TimeLine() {
  return (
    <StyledTimeLine>
      <TimeLineContainer>
        <TimeLIne>
            <h3>TIME LINE</h3>
        </TimeLIne> 
        <TimeLineText>
          <TimeLineTitle>
            <h3>TITLE </h3>
          </TimeLineTitle>
          <TimeLineDescription>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quos laborum labore odit similique, enim assumenda facere asperiores nisi, 
            dignissimos minus voluptas sapiente ipsum officiis aliquid. 
            Libero nisi vel perferendis distinctio.          
          </h3>
          </TimeLineDescription>
        </TimeLineText>
      </TimeLineContainer>
      </StyledTimeLine>
  );
}

export default TimeLine;

const StyledTimeLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TimeLIne = styled.div`

`;
  
const TimeLineText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
`;

const TimeLineTitle = styled.div`
  font-size: 35px;
  width: 50%;
  text-align: left;
`;

const TimeLineDescription = styled.div`
  font-size: 25px;
  color: #919191 ;
  width: 50%;
`;