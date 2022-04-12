import React from "react";
// import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Header() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className="header">
            <div>
                {/* <Link to="/"> */}
                    <img className="logo"
                        src="https://fontmeme.com/permalink/220410/ac11cb84f10a947099bf1c1c6ce07dcb.png"
                        alt="BreakingCode-logo"
                    />
                {/* </Link> */}
                {/* <nav>
                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/game">Game</Link>
                            <Link to="/scoreboard">Scoreboard</Link>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </nav> */}
            </div>
        </header>
    );
};

export default Header;
