import apolloClient from "@/lib/apollo";
import { gql } from "@apollo/client";

const fetchData = async () => {
  const client = apolloClient();
  try {
    const { data } = await client.query({
      query: gql`
        query {
          destinations {
            id
            name
            location {
              latitude
              longitude
            }
          }
        }
      `,
    });
    return {
      destinations: data.destinations,
    };
  } catch (error) {
    console.log(error);
    return {
      destinations: [],
    };
  }
};

export default fetchData;
