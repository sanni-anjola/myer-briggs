import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle `
  :root{
    --maxWidth:1280px;
    --white: #fff;
    --lightGrey: #eee  ;
    --medGrey:#353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --semicolonRed: #FF2E2E;
    --semicolonRed2: #960C0C;
    --semicolonRed3: #FFDDD9;
    --semicolonHotRed2:#FF5353;
    --semicolonHotRed3:#FF8686;
    --semicolonHotRed4:#FEBDBD;
    --semicolonOrange1:#FF7E1D;
    --semicolonOrange2:#FFA34E;
    --semicolonOrange3:#FFCEA1;
    --semicolonBrightGreen1:#00D689;
    --semicolonCrispGreen2:#0C8B99;
    --semicolonCrispGreen3:#80DEE9;
    --semicolonPaleYellow1:#1D636B;
    --semicolonAquaBlue1:#1B8AED;
    --semicolonAquaBlue2:#0C8B99;
    --semicolonAquaBlue3:#80DEE9;
    --semicolonAquaBlue4:#BEEDF2;
    --semicolonAquaBlue5:#EBFAFC;
    --semicolonGrey1:#1D636B;
    --semicolonGrey2:#475661;
    --semicolonGrey3:#97A9B6;
    --semicolonGrey4:#D0DCE4;
    --semicolonGrey5:#F8F8F8;
  }
  *{
    box-sizing:border-box;
    font-family: 'Abel', sans-serif;
  }

  body{
    margin: 0;
    padding: 0;
    
  
    h1{
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
    h3{
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0;
    }
    p{
      font-size: 1rem;
      color: var(--white);
    }


  }

`;