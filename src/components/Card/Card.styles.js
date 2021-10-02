import styled from "styled-components";


export const OurCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
`

export const OurCard = styled.div`
  text-align: center;
  
  background: var(--semicolonAquaBlue5);
  width: 24em;
  border-radius: 0.6em;
  margin: 1em;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;
  
  & h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3em;
    margin-bottom: 0.2em;
    line-height: 1.2;
    color: #222
  }

  & h3 {
    font-weight: 400;
    color: #555;
    width: 30em;
  }
  

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  & img {
    width: 100%;
    object-fit: cover;
  }

  & hr {
    height: 1px;
    width: 80%;
    margin: 10px auto 0;
    color: var(--semicolonGrey4);
  }
  & h2 {
    color: #222;
    margin-top: -0.2em;
    line-height: 1.4;
    font-size: 1.3em;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    transition: all ease-in 100ms;
  }

  & p {
    color: #777;
  }

  & h5 {
    color: #bbb;
    font-weight: 700;
    font-size: 0.7em;
    letter-spacing: 0.04em;
    margin: 1.4em 0 0 0;
    text-transform: uppercase;
  }

  .card-body {
    padding: 1.2em;
  }
`