import * as path from 'path'

import {stringArg, idArg} from 'nexus'
import {prismaObjectType, makePrismaSchema} from 'nexus-prisma'
import {GraphQLServer} from 'graphql-yoga'

import {prisma} from './generated/prisma-client'
import datamodelInfo from './generated/nexus-prisma'

const Query = prismaObjectType({
  name: 'Query',
  definition: t => t.prismaFields(['*']),
});

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['*'])
  },
});

const schema = makePrismaSchema({
  types: [Query, Mutation],

  prisma: {
    client: prisma,
    datamodelInfo,
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
});

const server = new GraphQLServer({
  schema,
  context: {prisma},
})
server.start({
  endpoint: '/graphql',
  subscriptions: '/graphql',
  playground: '/graphiql',
}, () => console.log('Server is running on http://localhost:4000'));
