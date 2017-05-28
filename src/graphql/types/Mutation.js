import { GraphQLObjectType, GraphQLInt } from 'graphql';

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: () => ({
    count: {
      type: GraphQLInt,
      resolve: () => {
        return 1;
      }
    }
  })
});

export default MutationType;
