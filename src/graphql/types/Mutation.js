import { GraphQLObjectType, GraphQLInt } from 'graphql';

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: () => ({
    count: {
      type: GraphQLInt,
      resolve: function() {
        return 0;
      }
    }
  })
});

export default MutationType;
