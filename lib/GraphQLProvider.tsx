import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
    uri: 'https://api.8base.com/ckhs2glbd00on07l0bg8pgbgw',
    cache: new InMemoryCache()
});

const GraphQLProvider = ({ children }: any) => (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
)

export default GraphQLProvider
