import { GraphQLObjectType, GraphQLString } from 'graphql';

const ViewerType = new GraphQLObjectType({
  name: 'ViewerType',
  description: 'A viewer object',
  fields: () => ({
    random: {
      description: 'Get current activity or default [0] one',
      type: GraphQLString,
      resolve: async (root, args, { rootValue }) => {
        return "LOL"
      }
    }
  })
});

export default ViewerType;
