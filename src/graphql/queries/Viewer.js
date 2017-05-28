import { GraphQLInt, GraphQLString } from 'graphql';

import ViewerType from '../types/Viewer';

const ViewerQuery = {
  description: 'Viewer query',
  type: ViewerType,
  resolve: async (root, args) => {

    return {};
  }
};

export default ViewerQuery;
