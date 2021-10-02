import styled from "styled-components";

export const Wrapper = styled.div`
    
`;

export const Content = styled.div``;

export const OurButton = styled.button`
    border: none;
    font-family: inherit;
    font-size: inherit;
    background: none;
    background: var(--semicolonRed);
    color: #fff;
    box-shadow: 0 6px var(--semicolonRed2);
    cursor: pointer;
    padding: 25px 80px;
    display: inline-block;
    margin: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    border-radius: 40px;
  

  &:hover {
    box-shadow: 0 4px var(--semicolonRed);
    top: 2px;
  }

  &:active {
    box-shadow: 0 0 var(--semicolonRed);
    top: 6px;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  /* Pseudo elements for icons */

  &:before {
    font-family: icomoon serif;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }

`;