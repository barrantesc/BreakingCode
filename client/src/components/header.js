import React from "react";
import Nav from "./nav";
import Navbar from 'react-bulma-components/lib/components/navbar';
import Auth from '../utils/auth';

function Header(props) {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
      
    // destructure props
    const {
        navLinks,
        currentDisplay,
        setCurrentDisplay
    } = props;

    return (
        <Header>
            <Navbar.Brand renderAs="a" href="#">
                <img
                    src="https://fontmeme.com/permalink/220407/329474fd1e71c06bb50b0ede5426ce55.png"
                    alt="BreakingCode-logo"
                    width="112"
                    height="28"
                />
            </Navbar.Brand>
            {/* passing nav links and current display settings on to header as props */}
            <Nav>
                navLinks={navLinks}
                currentDisplay={currentDisplay}
                setCurrentDisplay={setCurrentDisplay}
            </Nav>
        </Header>
    )
};

export default Header;