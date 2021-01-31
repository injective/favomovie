import * as React from 'react';
import {StyledHeader, NavbarRight} from './Header.styles';

const Header = () => {
    return (
        <StyledHeader  className='uk-child-width-expand' uk-grid>

            <div className='uk-navbar-left uk-width-1-2'>
                <a className='uk-link-muted' href='/'><span uk-icon='icon: tv; ratio: 2'></span><span>Favomovie</span></a>
            </div>

            <NavbarRight className='uk-navbar-right uk-width-1-2'>
                <ul className='uk-navbar-nav'>
                    <li className='uk-active'><a href='#'>Search</a></li>
                    <li><a href='#'>Favourite</a></li>
                    <li><a href='#'>My profile</a></li>
                </ul>
            </NavbarRight>
        </StyledHeader>
    );
};

export default Header;
