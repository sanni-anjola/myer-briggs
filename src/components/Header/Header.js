import React from "react";

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {Wrapper, Content, Text} from "./Header.styles";
import {ReactComponent as SemLogo} from "../../images/semfulllogo-white.svg";

const Header = ()=>(
    <Wrapper>
        <Content>
            <SemLogo width="220px"/>
            {/*<LogoImg src ={RMDBLogo} alt = 'our-logo' />*/}
            {/*<TMDBLogoImg src = {TMDBLogo} alt = 'tmbd-logo' />*/}
            <Text>MYER-BRIGGS PERSONALITY TEST</Text>
        </Content>
    </Wrapper>
);

export default Header;
