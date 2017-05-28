import { GraphQLObjectType, GraphQLInt } from 'graphql';

import ViewerQuery from '../queries/Viewer';
// import { nodeField } from '../nodeInterface';

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */


const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: () => ({
  	viewer: ViewerQuery
  	// viewer: {
	 		// count: {
	   //    type: GraphQLInt,
	   //    resolve: function() {
		  //       return 0;
	   //    }
	   //  }
  	// }
    // count: {
    //   type: GraphQLInt,
    //   resolve: function() {
    //     return 0;
    //   }
    // }
  }),
});

export default QueryType;
