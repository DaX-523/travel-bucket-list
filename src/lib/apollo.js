import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api-ap-south-1.hygraph.com/v2/clyov50is00er07w6mvkgz60s/master",
  });

export default apolloClient;
