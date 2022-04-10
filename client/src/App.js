import React from 'react';
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import Header from './components/header';
// import About from '../src/pages/about';
// import Contact from './components/contact';
import Game from '../src/pages/game';
// import Scoreboard from '../src/pages/scoreboard';
import Footer from './components/footer';
// import login from './components/loginForm';
// import signup from './components/signupForm';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (

    // <ApolloProvider client={client}>
    <>
      <Header />

      <Game></Game>
      {/* <Router> */}
      {/* <div className="flex-column justify-flex-start min-100-vh"> */}
      {/* <div className="container"> */}
      {/* <Routes> */}
      {/* pages */}
      {/* <Route exact path="/game" component={Game} /> */}
      {/* </Routes> */}
      {/* </div> */}
      <Footer />
      {/* </div> */}
      {/* </Router> */}
      {/* // </ApolloProvider> */}
    </>
  );
}

export default App;