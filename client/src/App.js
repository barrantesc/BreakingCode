import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import Header from './components/header';
import About from '../src/pages/about';
// import Game from '../src/pages/game';
// import Scoreboard from '../src/pages/scoreboard';
import Footer from './components/footer';
// import Login from './components/login';
// import Signup from './components/signup';


function App() {
  return (
    <>
      <Header />
      <switch>
        <About></About>
        {/* <Game></Game> */}
      </switch>

      <Footer />

    </>
  );
}

export default App;


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

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-flex-start min-100-vh">
//           <Header />
//           <div className="container">
//             <Switch>
//               <Route exact path="/" component={About} />
//               <Route exact path="/login" component={Login} />
//               <Route exact path="/signup" component={Signup} />
//               <Route exact path="/game" component={Game} />
//               <Route exact path="/scoreboard" component={Scoreboard} />
//             </Switch>
//           </div>
//           <Footer />
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;