import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
>>>>>>> b9ae580b4d23062c1e95b4a7defdddab0727f9a0
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
<<<<<<< HEAD
import { setContext } from '@apollo/client/link/context';
=======
// import { setContext } from '@apollo/client/link/context';
>>>>>>> b9ae580b4d23062c1e95b4a7defdddab0727f9a0

import Header from './components/header';
import About from '../src/pages/about';
import Game from '../src/pages/game';
// import Scoreboard from '../src/pages/scoreboard';
import Footer from './components/footer';
import Login from '../src/pages/login';
import Signup from '../src/pages/signup';

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route  path="/" element={<About />} />
            <Route  path="/game" element={<Game />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

<<<<<<< HEAD
export default App;
=======
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
//               <Route exact path="/contact" component={Contact} />
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
>>>>>>> b9ae580b4d23062c1e95b4a7defdddab0727f9a0
