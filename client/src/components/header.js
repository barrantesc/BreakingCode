import React from "react";
// import Nav from "./nav";
// import Navbar from 'react-bulma-components/lib/components/navbar';
// import Auth from '../utils/auth';

function Header() {

    // const logout = event => {
    //     event.preventDefault();
    //     Auth.logout();
    // };

    // // destructure props
    // const {
    //     navLinks,
    //     currentDisplay,
    //     setCurrentDisplay
    // } = props;

    return (
    //     // <Header>
    //     //     <Navbar.Brand renderAs="a" href="#">
    //     <img className="logo"
    //     src="https://fontmeme.com/permalink/220410/ac11cb84f10a947099bf1c1c6ce07dcb.png"
    //     alt="BreakingCode-logo"
    // />
    //     //     </Navbar.Brand>
    //     //     {/* passing nav links and current display settings on to header as props */}
    //     //     <Nav>
    //     //         navLinks={navLinks}
    //     //         currentDisplay={currentDisplay}
    //     //         setCurrentDisplay={setCurrentDisplay}
    //     //     </Nav>
    //     // </Header>
        <header className="header">
            <img className="logo"
                src="https://fontmeme.com/permalink/220410/ac11cb84f10a947099bf1c1c6ce07dcb.png"
                alt="BreakingCode-logo"
            />
        </header>
    )
};

export default Header;