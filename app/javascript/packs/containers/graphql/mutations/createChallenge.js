import { gql } from 'apollo-boost'

export const CREATE_CHALLENGE = gql`
  mutation CreateChallenge($name: String!, $description: String!, $language: String!) {
    createChallenge(name: $name, description: $description, language: $language) {
      challenge {
        id
        name
        description
        language
      }
    }
  }
`;
