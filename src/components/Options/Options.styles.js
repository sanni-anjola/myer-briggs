import styled from "styled-components";

export const Wrapper = styled.div`
          //margin: fill;
          //align-content: center;
          //background: var(--darkGrey);      
          padding: 0 20px;
          border-inline-style: dashed;
          border-color: aqua;
          height: 200px;
          width: 200px;
          box-sizing: border-box;
    `;


export const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;



export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;


export  const  PersonalityImg = styled.img`
//width: 200px;
//  @media screen and (max-width: 500px){
//    width: 150px;
//  }
`;

export  const  Text = styled.div`
    //z-index: 100;
  //max-width: 700px;
  position: absolute;
  //bottom:   40px;
  //margin-right: 20px;
  //min-height: 100px;
  color:var(--semicolonRed) ;
  h1{
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px){
      font-size: var(--fontBig);
    }
  }
  p{
    font-size: var(--fontMed);
    color: var(--semicolonRed);
    @media screen and (max-width: 720px){
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 720px){
    max-width: 100%;
  }
`;

