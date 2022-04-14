const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const morgan = require('morgan'); 
const path = require('path');

// do we need?
// require('dotenv').config();


const { typeDefs, resolvers } = require('./schemas');
const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();


const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('./routes/routes'));


//HTTP request logger
app.use(morgan('tiny'));

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//Routes
app.get('/api', (req, res) => {
  const data = {
  username: 'potato',
  age: 2
 };
 res.json(data);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});