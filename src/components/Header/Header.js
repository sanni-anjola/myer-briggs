import React from "react";

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {Wrapper, Content} from "./Header.styles";
import {ReactComponent as SemLogo} from "../../images/semfulllogo.svg";

const Header = ()=>(
    <Wrapper>
        <Content>
            <SemLogo width="220px"/>
            {/*<LogoImg src ={RMDBLogo} alt = 'our-logo' />*/}
            {/*<TMDBLogoImg src = {TMDBLogo} alt = 'tmbd-logo' />*/}
        </Content>
    </Wrapper>
);

export default Header;
