const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: {
      type: GraphQLString,
    },
  },
});
