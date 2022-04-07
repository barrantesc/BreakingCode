import React from 'react';
function About() {

    return (
        <section>
            {/* jumbotrom image of BC-banner */}
            <div className='about-container'>
                {/* about section */}
                <aside className='about'>
                    Welcome to Breaking Code! <br />
                    If you are either getting ready to do a technical web development interview for the first time, <br />
                    or even the 100th, then Breaking Code is the place to test your coding knowledge! <br />
                    To get started login and head over to the game dashboard!
                    <br />
                    <br />
                    The Goal is to match the correct square to the question given and for each correct question <br />
                    the user will receive points and at the end of the quiz see how they did out of array of questions. <br />
                    You will also be able to share your score! <br />
                    <br />
                    <br />
                    Future developments will allow users to test through several different quiz types as well as study <br />
                    with flashcards on a user dashboard depending on the desired interview topic.
                    Feel free to Contact us if you have any questions, request, or suggestions for future development!
                </aside>
            </div>
        </section>
    );
}

export default About;