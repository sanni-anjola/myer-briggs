import styled from "styled-components";

export const Wrapper = styled.div`
          background: #FF2E2E;      
          padding: 0 20px;
    `;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 10px 0;
  margin: 0 auto;
`;

export const Text = styled.div`
  color: #FFFFFF;
  font-weight: bold;
`

export  const  LogoImg = styled.img`
width: 200px;
  @media screen and (max-width: 500px){
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 500px){
    width: 80px;
  }`;
