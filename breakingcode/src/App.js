import React, {useState} from 'react';
import Header from './components/Header';
import Pages from './components/Pages';
import Footer from './components/Footer';
// import login from './components/loginForm';
// import signup from './components/signupForm';


function App() {
  // arr of nav links
  const [navLinks] = useState([
    "About", 
    "Game",
    "Scoreboard",
    "Contact", 
  ]);

   // set current display based on nav link selection
   const [currentDisplay, setCurrentDisplay] = useState(navLinks[0]);
   const [contactSelected, setContactSelected] = useState(false);
   return (
     <div>
         {/* passing nav links and current display settings on to header as props */}
         <Header
           navLinks={navLinks}
           currentDisplay={currentDisplay}
           setCurrentDisplay={setCurrentDisplay}
           contactSelected={contactSelected}
           setContactSelected={setContactSelected}
         ></Header>
 
         {/* passing current display settings on to main section as props */}
         <Pages
           currentDisplay={currentDisplay}
         ></Pages>
 
         <Footer></Footer>
     </div>
   );
 }
 
 export default App;