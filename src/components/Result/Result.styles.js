import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--darkGrey);
  width: 90%;
  margin: 0 auto;
  
  
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
`

export const Personality = styled.div`
  width: 20%;
  text-align: center;
`

export const BreakDown = styled.div`
  width: 70%;
  padding: 10px;
  border: 2px solid var(--semicolonGrey3);
  align-items: flex-start;
`

export const Type = styled.div`
  display: flex;
  justify-content: space-around;
`

export const PercentDisplay = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  align-items: center;
  
  
  //&:first-child, &:last-child {
  //  width: 5%;
  //}
  
`