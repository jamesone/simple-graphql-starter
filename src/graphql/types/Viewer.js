import { GraphQLObjectType, GraphQLInt } from 'graphql';
 
const ViewerType = new GraphQLObjectType({
    name: 'ViewerType',
    fields: () => ({
        count: {
          type: GraphQLInt,
          resolve: function() {
            return 0;
          }
        }
    })
})

export default ViewerType;