import { gql } from 'apollo-boost';

export const GET_CHALLENGES = gql`
  {
    challenges {
      id
      name
      description
      language
    }
  }
`;