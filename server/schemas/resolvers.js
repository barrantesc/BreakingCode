const { Cards } = require('../models');

const resolvers = {
    Query: {
      cards: async () => {
        return await Cards.find({}).populate('Card').populate({
          path: 'Card',
          populate: 'Card'
        });
      }
    }
};

module.exports = resolvers;