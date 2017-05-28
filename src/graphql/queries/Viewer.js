import { GraphQLInt, GraphQLString } from 'graphql';

import ViewerType from '../types/Viewer';

const ViewerQuery = {
  description: 'Viewer query',
  type: ViewerType,
  resolve: async (root, args, { rootValue }) => {
    const accessToken = rootValue.request.accessToken;

    return {
      accessToken,
    };
  }
};

export default ViewerQuery;
