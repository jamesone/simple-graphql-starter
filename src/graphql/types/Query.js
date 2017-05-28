import { GraphQLObjectType, GraphQLInt } from 'graphql';
import ViewerQuery from '../queries/Viewer';

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: () => ({
  	viewer: ViewerQuery
  }),
});

export default QueryType;
