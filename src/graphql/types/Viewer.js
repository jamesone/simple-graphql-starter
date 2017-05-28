import { GraphQLObjectType, GraphQLInt } from 'graphql';

const ViewerType = new GraphQLObjectType({
  name: 'ViewerType',
  fields: () => ({
    count: {
      type: GraphQLInt,
      resolve: () => {
        return 1;
      }
    }
  })
})

export default ViewerType;