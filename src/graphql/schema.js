import { GraphQLSchema } from 'graphql';

import QueryType from './types/Query';
import MutationType from './types/Mutation';

const Schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});

export default Schema;
