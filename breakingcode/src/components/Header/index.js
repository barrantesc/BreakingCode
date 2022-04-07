import React from "react";
import Navbar from 'react-bulma-components/lib/components/navbar';

function Header() {

    // destructure props
    // const {
    //     navLinks,
    //     currentDisplay,
    //     setCurrentDisplay
    // } = props;

    return (
        <Section>
            <Navbar>
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <img
                            src="https://fontmeme.com/permalink/220407/329474fd1e71c06bb50b0ede5426ce55.png"
                            alt="BreakingCode-logo"
                            width="112"
                            height="28"
                        />
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container>
                        <Navbar.Item dropdown hoverable href="#">
                            <Navbar.Link>First</Navbar.Link>
                            <Navbar.Dropdown>
                                <Navbar.Item href="#">Subitem 1</Navbar.Item>
                                <Navbar.Item href="#">Subitem 2</Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                        <Navbar.Item href="#">Second</Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        <Navbar.Item href="#">At the end</Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </Section>
    )
};

export default Header;